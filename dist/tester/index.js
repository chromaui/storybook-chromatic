import denodeify from 'denodeify';
import { confirm } from 'node-ask';
import setupDebug from 'debug';
import kill from 'tree-kill';
import envCi from 'env-ci';
import { v4 as uuid } from 'uuid';
import { parse, format } from 'url';
import minimatch from 'minimatch';

import getRuntimeSpecs from './runtimes';
import getStorybookInfo from './storybook';
import startApp, { checkResponse } from './start-app';
import openTunnel from '../lib/tunnel';
import { checkPackageJson, addScriptToPackageJson } from './package-json';
import GraphQLClient from '../../../../lib/util/GraphQLClient';
import { getBaselineCommits, getCommit, getBranch } from './git';
import { version as packageVersion } from '../../package.json';
import { CHROMATIC_INDEX_URL, CHROMATIC_TUNNEL_URL } from '../assets/environment';
import sendDebugToLoggly from './sendDebugToLoggly';
import uploadToS3 from './upload-to-s3';

const BUILD_POLL_INTERVAL = 1000;
// We send up all environment variables provided by these complicated systems.
// We don't want to send up *all* environment vars as they could include sensitive information
// about the user's build environment
const ENVIRONMENT_WHITELIST = [/^GERRIT/, /^TRAVIS/];

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
    }
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

function log(msg, { noPrefix = false, level = 'log' } = {}) {
  if (!process.env.DISABLE_LOGGING) {
    if (noPrefix) {
      // eslint-disable-next-line no-console
      console[level](msg);
    } else {
      // eslint-disable-next-line no-console
      console[level](`Chromatic Tester: ${msg}`);
    }
  }
}

function pluralize(n, noun, noNumber) {
  let pluralizedNoun = n === 1 ? noun : `${noun}s`;

  if (pluralizedNoun.endsWith('ys')) {
    pluralizedNoun = pluralizedNoun.replace(/ys$/, 'ies');
  }

  return noNumber ? pluralizedNoun : `${n} ${pluralizedNoun}`;
}

let lastInProgressCount;
async function waitForBuild(client, variables) {
  const {
    app: { build },
  } = await client.runQuery(TesterBuildQuery, variables);
  debug(`build:${JSON.stringify(build)}`);
  const { status, inProgressCount, snapshotCount, changeCount, errorCount } = build;
  if (status === 'BUILD_IN_PROGRESS') {
    if (inProgressCount !== lastInProgressCount) {
      lastInProgressCount = inProgressCount;
      log(
        `${inProgressCount}/${pluralize(snapshotCount, 'snapshot')} remain to test. ` +
          `(${pluralize(changeCount, 'change')}, ${pluralize(errorCount, 'error')})`
      );
    }

    await new Promise(resolve => setTimeout(resolve, BUILD_POLL_INTERVAL));
    return waitForBuild(client, variables);
  }
  return build;
}

export default async function runTest({
  appCode,
  scriptName,
  commandName,
  noStart = false,
  url,
  dirname,
  only,
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
  });

  const { TRAVIS_EVENT_TYPE, TRAVIS_PULL_REQUEST_SLUG, TRAVIS_REPO_SLUG } = process.env;
  if (TRAVIS_EVENT_TYPE === 'pull_request' && TRAVIS_PULL_REQUEST_SLUG === TRAVIS_REPO_SLUG) {
    log(
      `WARNING: Running Chromatic on a Travis PR build from an internal branch.

It is recommended to run Chromatic on the push builds from Travis where possible.
We advise turning on push builds and disabling Chromatic for internal PR builds.
Read more: http://docs.chromaticqa.com/setup_ci#travis
`,
      { noPrefix: true, level: 'warn' }
    );
  }

  if (!appCode) {
    throw new Error(
      'You must provide an app code  -- visit https://www.chromaticqa.com to get your code.' +
        `\nPass your app code with the \`CHROMATIC_APP_CODE\` environment variable or the \`--app-code\` flag.`
    );
  }

  if (!(scriptName || commandName || noStart)) {
    throw new Error('Either scriptName, commandName or noStart is required');
  }

  try {
    const { createAppToken: jwtToken } = await client.runQuery(TesterCreateAppTokenMutation, {
      appCode,
    });
    client.setJwtToken(jwtToken);
  } catch (errors) {
    if (errors[0] && errors[0].message && errors[0].message.match('No app with code')) {
      throw new Error(
        `Incorrect app code '${appCode}' -- visit https://www.chromaticqa.com to get your code`
      );
    }
    throw errors;
  }

  // eslint-disable-next-line prefer-const
  let { commit, committedAt, committerEmail, committerName } = await getCommit();
  let branch = await getBranch();
  const isTravisPrBuild = process.env.TRAVIS_EVENT_TYPE === 'pull_request';

  // Travis PR builds are weird, we want to ensure we mark build against the commit that was
  // merged from, rather than the resulting "psuedo" merge commit that doesn't stick around in the
  // history of the project (so approvals will get lost). We also have to ensure we use the right branch.
  if (isTravisPrBuild) {
    commit = process.env.TRAVIS_PULL_REQUEST_SHA;
    branch = process.env.TRAVIS_PULL_REQUEST_BRANCH;

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

  debug(`git info: ${JSON.stringify({ commit, committedAt, branch })}`);

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
    ignoreLastBuildOnBranch: doIgnoreLastBuildOnBranch,
  });
  debug(`Found baselineCommits: ${baselineCommits}`);

  let child;
  let tunnel;
  let fromCI;
  let exitCode = 5;
  try {
    let isolatorUrl;
    let cachedUrl;
    if (dirname) {
      log(`Uploading your built storybook...`);
      isolatorUrl = await uploadToS3({ client, dirname });
      debug(`uploading to s3, got ${isolatorUrl}`);
      log(`Uploaded your build, verifying`);
    } else {
      if (!noStart) {
        log(`Starting storybook`);
        child = await startApp({ scriptName, commandName, url });
        log(`Started storybook at ${url}`);
      } else if (url) {
        if (!(await checkResponse(url))) {
          throw new Error(`No server responding at ${url} -- make sure you've started it.`);
        }
        log(`Detected storybook at ${url}`);
      }

      const { port, pathname, query, hash } = parse(url, true);
      isolatorUrl = url;
      if (createTunnel) {
        log(`Opening tunnel to Chromatic capture servers`);
        tunnel = await openTunnel({ tunnelUrl, port });
        debug(`Opened tunnel to ${tunnel.url}`);

        // ** Are we using a v1 or v2 tunnel? **
        // If the tunnel returns a cachedUrl, we are using a v2 tunnel and need to use
        // the slightly esoteric URL format for the isolatorUrl.
        // If not, they are the same:
        const cachedUrlObject = parse(tunnel.cachedUrl || tunnel.url);
        cachedUrlObject.pathname = pathname;
        cachedUrlObject.query = query;
        cachedUrlObject.hash = hash;
        cachedUrl = cachedUrlObject.format();

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

          isolatorUrl = isolatorUrlObject.format();
        } else {
          // See comment about v1/v2 tunnel above
          isolatorUrl = cachedUrl;
        }
      }

      debug(`Connecting to ${isolatorUrl} (cachedUrl ${cachedUrl})`);
      log(
        `Uploading and verifying build (this may take a few minutes depending on your connection)`
      );
    }

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
    const runtimeSpecs = (await getRuntimeSpecs(isolatorUrl, { verbose }))
      .map(listStory)
      .filter(predicate);

    if (runtimeSpecs.length === 0) {
      throw new Error('Cannot run a build with no stories. Please add some stories!');
    }

    log(`Found ${pluralize(runtimeSpecs.length, 'story')}`);

    // REPOSITORY_URL is for netlify: https://www.netlify.com/docs/continuous-deployment/
    fromCI = inputFromCI || !!process.env.CI || !!process.env.REPOSITORY_URL;
    const { storybookVersion, viewLayer } = getStorybookInfo();

    debug(`Detected build fromCI:${fromCI}`);
    debug(
      `Detected package version:${packageVersion}, storybook version:${storybookVersion}, view layer: ${viewLayer}`
    );

    const filteredEnvironment = {};
    Object.keys(process.env).forEach(key => {
      if (ENVIRONMENT_WHITELIST.find(regex => key.match(regex))) {
        filteredEnvironment[key] = process.env[key];
      }
    });
    const environment = JSON.stringify(filteredEnvironment);
    debug(`Got environment %s`, environment);

    const {
      createBuild: { number, snapshotCount, specCount, componentCount, webUrl },
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
    } = await waitForBuild(client, {
      buildNumber: number,
    });

    switch (status) {
      case 'BUILD_PASSED':
        log(`Build ${number} passed! ${onlineHint}.`);
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
  Read more: http://docs.chromaticqa.com/test`);
        }
        break;
      case 'BUILD_FAILED':
        log(`Build ${number} has ${pluralize(errorCount, 'error')}. ${onlineHint}.`);
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
    if (tunnel) {
      tunnel.close();
    }
    if (child) {
      await denodeify(kill)(child.pid, 'SIGHUP');
    }
  }

  if (!checkPackageJson() && originalArgv && !fromCI && interactive) {
    const scriptCommand = `CHROMATIC_APP_CODE=${appCode} chromatic test ${originalArgv
      .slice(2)
      .join(' ')}`
      .replace(/--app-code[= ]\S+/, '')
      .trim();

    const confirmed = await confirm(
      "\nYou have not added Chromatic's test script to your `package.json`. Would you like me to do it for you?"
    );
    if (confirmed) {
      addScriptToPackageJson('chromatic', scriptCommand);
      log(
        `
Added script \`chromatic\`. You can now run it here or in CI with \`npm run chromatic\` (or \`yarn chromatic\`)

NOTE: I wrote your app code to the \`CHROMATIC_APP_CODE\` environment variable. The app code cannot be used to read snapshot data, it can only be used to create new builds. If you would still prefer not to check it into source control, you can remove it from \`package.json\` and set it via an environment variable instead.`,
        { noPrefix: true }
      );
    } else {
      log(
        `
No problem. You can add it later with:
{
  "scripts": {
    "chromatic": "${scriptCommand}"
  }
}`,
        { noPrefix: true }
      );
    }
  }

  return exitCode;
}
