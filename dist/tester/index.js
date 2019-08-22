import denodeify from 'denodeify';
import { confirm } from 'node-ask';
import setupDebug from 'debug';
import kill from 'tree-kill';
import envCi from 'env-ci';
import { v4 as uuid } from 'uuid';
import { parse, format } from 'url';
import minimatch from 'minimatch';
import { dirSync } from 'tmp';
import { gte } from 'semver';

import getRuntimeSpecs from './runtimes';
import getStorybookInfo from './storybook';
import startApp, { checkResponse } from './start-app';
import openTunnel from '../lib/tunnel';
import { checkPackageJson, addScriptToPackageJson } from './package-json';
import GraphQLClient from '../../../../lib/util/GraphQLClient';
import { getBaselineCommits, getCommit, getBranch } from './git';
import { name as packageName, version as packageVersion } from '../../package.json';
import { CHROMATIC_INDEX_URL, CHROMATIC_TUNNEL_URL } from '../assets/environment';
import sendDebugToLoggly from './sendDebugToLoggly';
import uploadToS3 from './upload-to-s3';
import makeLog from './log';

const BUILD_POLL_INTERVAL = 1000;
// We send up all environment variables provided by these complicated systems.
// We don't want to send up *all* environment vars as they could include sensitive information
// about the user's build environment
const ENVIRONMENT_WHITELIST = [/^GERRIT/, /^TRAVIS/];

const STORYBOOK_CLI_FLAGS_BY_VERSION = {
  '--ci': '4.0.0',
  '--loglevel': '5.1.0',
};

const names =
  packageName === 'storybook-chromatic'
    ? {
        product: 'Chromatic',
        packageName: 'storybook-chromatic',
        script: 'chromatic',
        command: 'chromatic test',
        envVar: 'CHROMATIC_APP_CODE',
        url: 'https://www.chromaticqa.com',
      }
    : {
        product: 'Chroma',
        packageName: 'storybook-chroma',
        script: 'chroma',
        command: 'chroma publish',
        envVar: 'CHROMA_APP_CODE',
        url: 'https://www.chromaui.com',
      };

const log = makeLog(names.product);

const TesterCreateAppTokenMutation = `
  mutation TesterCreateAppTokenMutation($appCode: String!) {
    createAppToken(code: $appCode)
  }
`;

const TesterCreateBuildMutation = `
  mutation TesterCreateBuildMutation($input: CreateBuildInput!, $isolatorUrl: String!) {
    createBuild(input: $input, isolatorUrl: $isolatorUrl) {
      id
      number
      specCount
      snapshotCount
      componentCount
      webUrl
      app {
        account {
          features { 
            diffs
          }
        }
      }
    }
  }
`;

const TesterSkipBuildMutation = `
  mutation TesterSkipBuildMutation($appId: ObjID, $commit: String!) {
    skipBuild(appId: $appId, commit: $commit)
  }
`;

const TesterBuildQuery = `
  query TesterBuildQuery($buildNumber: Int!) {
    app {
      build(number: $buildNumber) {
        id
        status
        autoAcceptChanges
        inProgressCount: snapshotCount(statuses: [SNAPSHOT_IN_PROGRESS])
        snapshotCount
        changeCount
        errorCount: snapshotCount(statuses: [SNAPSHOT_CAPTURE_ERROR])
      }
    }
  }
`;

const debug = setupDebug('storybook-chromatic:tester');

function pluralize(n, noun, noNumber) {
  let pluralizedNoun = n === 1 ? noun : `${noun}s`;

  if (pluralizedNoun.endsWith('ys')) {
    pluralizedNoun = pluralizedNoun.replace(/ys$/, 'ies');
  }

  return noNumber ? pluralizedNoun : `${n} ${pluralizedNoun}`;
}

let lastInProgressCount;
async function waitForBuild(client, variables, { diffs }) {
  const {
    app: { build },
  } = await client.runQuery(TesterBuildQuery, variables);

  debug(`build:${JSON.stringify(build)}`);
  const { status, inProgressCount, snapshotCount, changeCount, errorCount } = build;
  if (status === 'BUILD_IN_PROGRESS') {
    if (inProgressCount !== lastInProgressCount) {
      lastInProgressCount = inProgressCount;
      log(
        diffs
          ? `${inProgressCount}/${pluralize(snapshotCount, 'snapshot')} remain to test. ` +
              `(${pluralize(changeCount, 'change')}, ${pluralize(errorCount, 'error')})`
          : `${inProgressCount}/${pluralize(snapshotCount, 'story')} remain to publish. `
      );
    }
    await new Promise(resolve => setTimeout(resolve, BUILD_POLL_INTERVAL));
    return waitForBuild(client, variables, { diffs });
  }

  return build;
}

async function getCommitAndBranch({ inputFromCI }) {
  // eslint-disable-next-line prefer-const
  let { commit, committedAt, committerEmail, committerName } = await getCommit();
  let branch = await getBranch();

  const {
    TRAVIS_EVENT_TYPE,
    TRAVIS_PULL_REQUEST_SLUG,
    TRAVIS_REPO_SLUG,
    TRAVIS_PULL_REQUEST_SHA,
    TRAVIS_PULL_REQUEST_BRANCH,
  } = process.env;
  const isTravisPrBuild = TRAVIS_EVENT_TYPE === 'pull_request';
  if (isTravisPrBuild && TRAVIS_PULL_REQUEST_SLUG === TRAVIS_REPO_SLUG) {
    log(
      `WARNING: Running Chromatic on a Travis PR build from an internal branch.

It is recommended to run Chromatic on the push builds from Travis where possible.
We advise turning on push builds and disabling Chromatic for internal PR builds.
Read more: https://docs.chromaticqa.com/setup_ci#travis
`,
      { noPrefix: true, level: 'warn' }
    );
  }

  // Travis PR builds are weird, we want to ensure we mark build against the commit that was
  // merged from, rather than the resulting "psuedo" merge commit that doesn't stick around in the
  // history of the project (so approvals will get lost). We also have to ensure we use the right branch.
  if (isTravisPrBuild) {
    commit = TRAVIS_PULL_REQUEST_SHA;
    branch = TRAVIS_PULL_REQUEST_BRANCH;

    if (!commit || !branch) {
      throw new Error(`\`TRAVIS_EVENT_TYPE\` environment variable set to 'pull_request', 
but \`TRAVIS_PULL_REQUEST_SHA\` and \`TRAVIS_PULL_REQUEST_BRANCH\` are not both set.

Read more here: https://docs.chromaticqa.com/setup_ci#travis`);
    }
  }

  // On certain CI systems, a branch is not checked out
  // (instead a detached head is used for the commit).
  if (branch === 'HEAD' || !branch) {
    ({ branch } = envCi());

    if (branch === 'HEAD' || !branch) {
      // $HEAD is for netlify: https://www.netlify.com/docs/continuous-deployment/
      // $GERRIT_BRANCH is for Gerrit/Jenkins: https://wiki.jenkins.io/display/JENKINS/Gerrit+Trigger
      // $CI_BRANCH is a general setting that lots of systems use
      branch =
        process.env.HEAD || process.env.GERRIT_BRANCH || process.env.CI_BRANCH || branch || 'HEAD';
    }
  }

  // REPOSITORY_URL is for netlify: https://www.netlify.com/docs/continuous-deployment/
  const fromCI = inputFromCI || !!process.env.CI || !!process.env.REPOSITORY_URL;

  debug(
    `git info: ${JSON.stringify({
      commit,
      committedAt,
      committerEmail,
      committerName,
      branch,
      isTravisPrBuild,
      fromCI,
    })}`
  );

  return { commit, committedAt, committerEmail, committerName, branch, isTravisPrBuild, fromCI };
}

async function prepareAppOrBuild({
  client,
  dirname,
  noStart,
  buildScriptName,
  scriptName,
  commandName,
  https,
  url,
  createTunnel,
  tunnelUrl,
  storybookVersion,
}) {
  if (dirname || buildScriptName) {
    let buildDirName = dirname;
    if (buildScriptName) {
      log(`Building your Storybook`);
      ({ name: buildDirName } = dirSync({ unsafeCleanup: true, prefix: `${names.script}-` }));
      debug(`Building Storybook to ${buildDirName}`);

      const child = await startApp({
        scriptName: buildScriptName,
        // Make storybook build as quiet as possible
        args: [
          '--',
          '-o',
          buildDirName,
          ...(storybookVersion &&
          gte(storybookVersion, STORYBOOK_CLI_FLAGS_BY_VERSION['--loglevel'])
            ? ['--loglevel', 'error']
            : []),
        ],
        inheritStdio: true,
      });

      // Wait for the process to exit
      await new Promise((res, rej) => {
        child.on('error', rej);
        child.on('close', code => {
          if (code > 0) {
            rej(new Error(`${buildScriptName} script exited with code ${code}`));
          }
          res();
        });
      });
    }

    log(`Uploading your built Storybook...`);
    const isolatorUrl = await uploadToS3({ client, dirname: buildDirName });
    debug(`uploading to s3, got ${isolatorUrl}`);
    log(`Uploaded your build, verifying`);

    return { isolatorUrl };
  }

  let cleanup;
  if (!noStart) {
    log(`Starting Storybook`);
    const child = await startApp({
      scriptName,
      commandName,
      url,
      args: scriptName &&
        storybookVersion &&
        gte(storybookVersion, STORYBOOK_CLI_FLAGS_BY_VERSION['--ci']) && ['--', '--ci'],
    });
    cleanup = child && (async () => denodeify(kill)(child.pid, 'SIGHUP'));
    log(`Started Storybook at ${url}`);
  } else if (url) {
    if (!(await checkResponse(url))) {
      throw new Error(`No server responding at ${url} -- make sure you've started it.`);
    }
    log(`Detected Storybook at ${url}`);
  }

  const { port, pathname, query, hash } = parse(url, true);
  if (!createTunnel) {
    return {
      cleanup,
      isolatorUrl: url,
    };
  }

  log(`Opening tunnel to Chromatic capture servers`);
  let tunnel;
  let cleanupTunnel;
  try {
    tunnel = await openTunnel({ tunnelUrl, port, https });
    cleanupTunnel = async () => {
      if (cleanup) {
        await cleanup();
      }
      await tunnel.close();
    };
    debug(`Opened tunnel to ${tunnel.url}`);
  } catch (err) {
    debug('Got error %O', err);
    if (cleanup) {
      cleanup();
    }
    throw err;
  }

  // ** Are we using a v1 or v2 tunnel? **
  // If the tunnel returns a cachedUrl, we are using a v2 tunnel and need to use
  // the slightly esoteric URL format for the isolatorUrl.
  // If not, they are the same:
  const cachedUrlObject = parse(tunnel.cachedUrl || tunnel.url);
  cachedUrlObject.pathname = pathname;
  cachedUrlObject.query = query;
  cachedUrlObject.hash = hash;
  const cachedUrl = cachedUrlObject.format();

  if (tunnel.cachedUrl) {
    const isolatorUrlObject = parse(tunnel.url, true);
    isolatorUrlObject.query = {
      ...isolatorUrlObject.query,
      // This will encode the pathname and query into a single query parameter
      path: format({ pathname, query }),
    };
    isolatorUrlObject.hash = hash;

    // For some reason we need to unset this to change the params
    isolatorUrlObject.search = null;

    return {
      cleanup: cleanupTunnel,
      isolatorUrl: isolatorUrlObject.format(),
      cachedUrl,
    };
  }

  // See comment about v1/v2 tunnel above
  return {
    cleanup: cleanupTunnel,
    isolatorUrl: cachedUrl,
  };
}

async function getStories({ only, list, isolatorUrl, verbose }) {
  let predicate = () => true;
  if (only) {
    const match = only.match(/(.*):([^:]*)/);
    if (!match) {
      throw new Error(`--only argument must provided in the form "componentName:storyName"`);
    }
    log(`Running only story '${match[2]}' of component '${match[1]}'`);

    predicate = ({ name, component: { name: componentName } }) =>
      minimatch(name, match[2]) && minimatch(componentName, match[1]);
  }

  let listStory = story => story;
  if (list) {
    log('Listing available stories:');
    listStory = story => {
      const {
        name,
        component: { name: componentName },
      } = story;
      log(`${componentName}:${name}`);
      return story;
    };
  }
  const runtimeSpecs = (await getRuntimeSpecs(isolatorUrl, { verbose, names }))
    .map(listStory)
    .filter(predicate);

  if (runtimeSpecs.length === 0) {
    throw new Error('Cannot run a build with no stories. Please add some stories!');
  }

  log(`Found ${pluralize(runtimeSpecs.length, 'story')}`);

  return runtimeSpecs;
}

async function getEnvironment() {
  const filteredEnvironment = {};
  Object.keys(process.env).forEach(key => {
    if (ENVIRONMENT_WHITELIST.find(regex => key.match(regex))) {
      filteredEnvironment[key] = process.env[key];
    }
  });
  const environment = JSON.stringify(filteredEnvironment);
  debug(`Got environment %s`, environment);
  return environment;
}

export default async function runTest({
  appCode,
  buildScriptName,
  scriptName,
  exec: commandName,
  noStart = false,
  https,
  url,
  storybookBuildDir: dirname,
  only,
  skip,
  list,
  fromCI: inputFromCI = false,
  autoAcceptChanges = false,
  exitZeroOnChanges = false,
  ignoreLastBuildOnBranch = false,
  preserveMissingSpecs = false,
  verbose = false,
  interactive = true,
  indexUrl = CHROMATIC_INDEX_URL,
  tunnelUrl = CHROMATIC_TUNNEL_URL,
  createTunnel = true,
  originalArgv = false,
  sessionId = uuid(),
}) {
  sendDebugToLoggly({ sessionId });

  debug(`Creating build with session id: ${sessionId}`);
  debug(
    `Connecting to index:${indexUrl} and ${
      createTunnel ? `using tunnel:${tunnelUrl}` : 'not creating a tunnel'
    }`
  );

  const client = new GraphQLClient({
    uri: `${indexUrl}/graphql`,
    headers: { 'x-chromatic-session-id': sessionId },
    retries: 3,
  });

  if (!appCode) {
    throw new Error(
      `You must provide an app code.

If you don't have a project yet login to ${names.url} and create a new project.
Or find your code on the manage page of an existing project.

Pass your app code with the \`${names.envVar}\` environment variable or the \`--app-code\` flag.`
    );
  }

  try {
    const { createAppToken: jwtToken } = await client.runQuery(TesterCreateAppTokenMutation, {
      appCode,
    });
    client.headers = { ...client.headers, Authorization: `Bearer ${jwtToken}` };
  } catch (errors) {
    if (errors[0] && errors[0].message && errors[0].message.match('No app with code')) {
      throw new Error(`Incorrect app code '${appCode}'.
      
If you don't have a project yet login to ${names.url} and create a new project.
Or find your code on the manage page of an existing project.`);
    }
    throw errors;
  }

  const {
    commit,
    committedAt,
    committerEmail,
    committerName,
    branch,
    isTravisPrBuild,
    fromCI,
  } = await getCommitAndBranch({ inputFromCI });

  if (skip) {
    if (await client.runQuery(TesterSkipBuildMutation, { commit })) {
      log(`Build skipped for commit ${commit}.`);
      return 0;
    }
    throw new Error('Failed to skip build.');
  }

  if (!(buildScriptName || scriptName || commandName || noStart)) {
    throw new Error('Either buildScriptName, scriptName, commandName or noStart is required');
  }

  // These three options can be branch specific
  const doAutoAcceptChanges =
    typeof autoAcceptChanges === 'string' ? autoAcceptChanges === branch : autoAcceptChanges;
  const doExitZeroOnChanges =
    typeof exitZeroOnChanges === 'string' ? exitZeroOnChanges === branch : exitZeroOnChanges;
  const doIgnoreLastBuildOnBranch =
    typeof ignoreLastBuildOnBranch === 'string'
      ? ignoreLastBuildOnBranch === branch
      : ignoreLastBuildOnBranch;

  const baselineCommits = await getBaselineCommits(client, {
    branch,
    ignoreLastBuildOnBranch: doIgnoreLastBuildOnBranch,
  });
  debug(`Found baselineCommits: ${baselineCommits}`);

  const { storybookVersion, viewLayer, addons } = getStorybookInfo();
  debug(
    `Detected package version: ${packageVersion}, storybook version: ${storybookVersion}, view layer: ${viewLayer}, addons: ${
      addons.length ? addons.map(addon => addon.name).join(', ') : 'none'
    }`
  );

  let exitCode = 5;
  const { cleanup, isolatorUrl, cachedUrl } = await prepareAppOrBuild({
    storybookVersion,
    client,
    dirname,
    noStart,
    buildScriptName,
    scriptName,
    commandName,
    https,
    url,
    createTunnel,
    tunnelUrl,
  });
  debug(`Connecting to ${isolatorUrl} (cachedUrl ${cachedUrl})`);
  log(`Uploading and verifying build (this may take a few minutes depending on your connection)`);

  try {
    const runtimeSpecs = await getStories({
      only,
      list,
      isolatorUrl,
      verbose,
    });

    const environment = await getEnvironment();

    const {
      createBuild: {
        number,
        snapshotCount,
        specCount,
        componentCount,
        webUrl,
        app: {
          account: {
            features: { diffs },
          },
        },
      },
    } = await client.runQuery(TesterCreateBuildMutation, {
      input: {
        cachedUrl,
        autoAcceptChanges: doAutoAcceptChanges,
        preserveMissingSpecs,
        branch,
        commit,
        committedAt,
        baselineCommits,
        runtimeSpecs,
        fromCI,
        isTravisPrBuild,
        packageVersion,
        storybookVersion,
        viewLayer,
        addons,
        committerEmail,
        committerName,
        environment,
      },
      isolatorUrl,
    });

    const onlineHint = `View it online at ${webUrl}`;
    log(
      `Started Build ${number} ` +
        `(${pluralize(componentCount, 'component')}, ${pluralize(specCount, 'story')}, ${pluralize(
          snapshotCount,
          'snapshot'
        )}).

${onlineHint}.`
    );

    const {
      status,
      autoAcceptChanges: buildAutoAcceptChanges, // if it is the first build, this may have been set
      changeCount,
      errorCount,
    } = await waitForBuild(client, { buildNumber: number }, { diffs });

    switch (status) {
      case 'BUILD_PASSED':
        log(
          diffs
            ? `Build ${number} passed! ${onlineHint}.`
            : `Build ${number} published! ${onlineHint}.`
        );
        exitCode = 0;
        break;
      // They may have sneakily looked at the build while we were waiting
      case 'BUILD_ACCEPTED':
      case 'BUILD_PENDING':
      case 'BUILD_DENIED':
        log(`Build ${number} has ${pluralize(changeCount, 'change')}. ${onlineHint}.`);
        exitCode = doExitZeroOnChanges || buildAutoAcceptChanges ? 0 : 1;
        if (exitCode !== 0) {
          log(`Pass --exit-zero-on-changes if you want this command to exit successfully in this case.
  Alternatively, pass --auto-accept-changes if you want changed builds to pass on this branch.
  Read more: https://docs.chromaticqa.com/test`);
        }
        break;
      case 'BUILD_FAILED':
        log(
          diffs
            ? `Build ${number} has ${pluralize(errorCount, 'error')}. ${onlineHint}.`
            : `Build ${number} was published but we found errors. ${onlineHint}.`
        );
        exitCode = 2;
        break;
      case 'BUILD_TIMED_OUT':
      case 'BUILD_ERROR':
        log(`Build ${number} has failed to run. Our apologies. Please try again.`);
        exitCode = 3;
        break;
      default:
        throw new Error(`Unexpected build status: ${status}`);
    }
  } catch (e) {
    if (
      e.length &&
      e[0] &&
      e[0].message &&
      e[0].message.match(/Cannot run a build with no specs./)
    ) {
      log(e[0].message);
      exitCode = 255;
    } else {
      debug('Got error %O', e);
      throw e;
    }
  } finally {
    if (cleanup) {
      await cleanup();
    }
  }

  if (!checkPackageJson({ command: names.command }) && originalArgv && !fromCI && interactive) {
    const scriptCommand = `${names.envVar}=${appCode} ${names.command} ${originalArgv
      .slice(2)
      .join(' ')}`
      .replace(/--app-code[= ]\S+/, '')
      .trim();

    const confirmed = await confirm(
      `\nYou have not added the \`${
        names.script
      }\` script to your \`package.json\`. Would you like me to do it for you?`
    );
    if (confirmed) {
      addScriptToPackageJson(names.script, scriptCommand);
      log(
        `
Added script \`${names.script}\`. You can now run it here or in CI with \`npm run ${
          names.script
        }\` (or \`yarn ${names.script}\`)

NOTE: I wrote your app code to the \`${
          names.envVar
        }\` environment variable. The app code cannot be used to read story data, it can only be used to create new builds. If you would still prefer not to check it into source control, you can remove it from \`package.json\` and set it via an environment variable instead.`,
        { noPrefix: true }
      );
    } else {
      log(
        `
No problem. You can add it later with:
{
  "scripts": {
    "${names.script}": "${scriptCommand}"
  }
}`,
        { noPrefix: true }
      );
    }
  }

  return exitCode;
}
