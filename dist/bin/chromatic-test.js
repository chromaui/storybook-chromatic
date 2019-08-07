#!/usr/bin/env node

/* eslint-disable no-console */
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolveHomeDir = resolveHomeDir;
exports.findOption = findOption;
exports.parseArgv = parseArgv;
exports.executeTest = executeTest;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _commander = require("commander");

var _path = _interopRequireDefault(require("path"));

var _jsonfile = require("jsonfile");

var _url = require("url");

var _uuid = require("uuid");

var _paramCase = _interopRequireDefault(require("param-case"));

var _tester = _interopRequireDefault(require("../tester"));

var _environment = require("../assets/environment");

// Ensure NODE_ENV is set
process.env.NODE_ENV = process.env.NODE_ENV || 'test';

function resolveHomeDir(filepath) {
  return filepath && filepath.startsWith('~') ? _path.default.join(process.env.HOME, filepath.slice(1)) : filepath;
} // This is not exactly clever but it works most of the time


function findOption(storybookScript, shortName, longName) {
  var parts = storybookScript.split(/[\s='"]+/);
  var index = parts.indexOf(longName);

  if (index === -1) {
    index = parts.indexOf(shortName);
  }

  if (index === -1) {
    return null;
  }

  return parts[index + 1];
}

function parseArgv(argv) {
  var commander = new _commander.Command().option('-a, --app-code <code>', 'the code for your app, get from chromaticqa.com').option('-b, --build-script-name [name]', 'The npm script that builds your Storybook [build-storybook]').option('-d, --storybook-build-dir <dirname>', "Provide a directory with your built storybook; use if you've already built your storybook").option('-s, --script-name [name]', 'The npm script that starts your Storybook [storybook]').option('-e, --exec <command>', 'Alternatively, a full command to run to start your storybook.').option('-S, --do-not-start', "Don't attempt to start or build; use if your Storybook is already running").option('--storybook-https', 'Use if Storybook is running on https (auto detected from -s, if set)?').option('--storybook-cert <path>', 'Use if Storybook is running on https (auto detected from -s, if set)?').option('--storybook-key <path>', 'Use if Storybook is running on https (auto detected from -s, if set)?').option('--storybook-ca <ca>', 'Use if Storybook is running on https (auto detected from -s, if set)?').option('-p, --storybook-port <port>', 'What port is your Storybook running on (auto detected from -s, if set)?').option('-u, --storybook-url <url>', 'Storybook is already running at (external) url (implies -S)').option('--ci', 'This build is running on CI, non-interactively (alternatively, pass CI=true)').option('--auto-accept-changes [branch]', 'Accept any (non-error) changes or new stories for this build [only for <branch> if specified]').option('--exit-zero-on-changes [branch]', "Use a 0 exit code if changes are detected (i.e. don't stop the build) [only for <branch> if specified]").option('--ignore-last-build-on-branch [branch]', 'Do not use the last build on this branch as a baseline if it is no longer in history (i.e. branch was rebased) [only for <branch> if specified]').option('--preserve-missing', 'Treat missing stories as unchanged (as opposed to deleted) when comparing to the baseline').option('--no-interactive', 'Do not prompt for package.json changes').option('--only <component:story>', 'Only run a single story or a glob-style subset of stories (for debugging purposes)').option('--skip', 'Skip chromatic tests (mark as passing)').option('--list', 'List available stories (for debugging purposes)').option('--debug', 'Output more debugging information') // We keep this for back compat it does nothing (ie. it is the default)
  .option('--storybook-addon', '(deprecated) use the Storybook addon').parse(argv);
  var commanderOptions = {
    config: commander.config,
    appCode: commander.appCode || _environment.CHROMATIC_APP_CODE || _environment.CHROMA_APP_CODE,
    buildScriptName: commander.buildScriptName,
    scriptName: commander.scriptName,
    exec: commander.exec,
    noStart: !!commander.doNotStart,
    https: commander.storybookHttps,
    cert: commander.storybookCert,
    key: commander.storybookKey,
    ca: commander.storybookCa,
    port: commander.storybookPort,
    storybookUrl: commander.storybookUrl,
    storybookBuildDir: commander.storybookBuildDir,
    skip: commander.skip,
    only: commander.only,
    list: commander.list,
    fromCI: !!commander.ci,
    autoAcceptChanges: commander.autoAcceptChanges,
    exitZeroOnChanges: commander.exitZeroOnChanges,
    ignoreLastBuildOnBranch: commander.ignoreLastBuildOnBranch,
    preserveMissingSpecs: commander.preserveMissing,
    interactive: !!commander.interactive,
    verbose: !!commander.debug,
    createTunnel: !commander.storybookUrl && _environment.CHROMATIC_CREATE_TUNNEL !== 'false',
    originalArgv: argv
  };
  var packageJson = (0, _jsonfile.readFileSync)(_path.default.resolve('./package.json'));
  var storybookBuildDir = commanderOptions.storybookBuildDir,
      exec = commanderOptions.exec;
  var port = commanderOptions.port,
      storybookUrl = commanderOptions.storybookUrl,
      noStart = commanderOptions.noStart,
      scriptName = commanderOptions.scriptName,
      buildScriptName = commanderOptions.buildScriptName;
  var https = commanderOptions.https && {
    cert: commanderOptions.cert,
    key: commanderOptions.key,
    ca: commanderOptions.ca
  }; // We can only have one of these arguments

  var singularCommands = ['buildScriptName', 'scriptName', 'exec', 'storybookUrl', 'storybookBuildDir'].filter(function (name) {
    return !!commanderOptions[name];
  });

  if (singularCommands.length > 1) {
    throw new Error("Can only use one of ".concat(singularCommands.map(function (n) {
      return "--".concat((0, _paramCase.default)(n));
    }).join(', '), "."));
  } // No need to start or build Storybook if we're going to fetch from a URL


  if (storybookUrl) noStart = true; // Build Storybook instead of starting it

  if (!scriptName && !exec && !noStart && !storybookUrl && !port) {
    if (storybookBuildDir) {
      return (0, _objectSpread2.default)({}, commanderOptions, {
        noStart: true
      });
    }

    buildScriptName = typeof buildScriptName === 'string' ? buildScriptName : 'build-storybook';

    if (packageJson.scripts && packageJson.scripts[buildScriptName]) {
      return (0, _objectSpread2.default)({}, commanderOptions, {
        noStart: true,
        buildScriptName: buildScriptName
      });
    }

    throw new Error("Didn't find a script called '".concat(buildScriptName, "' in your `package.json`.\n") + 'Make sure you set the `--build-script-name` option to the value of the npm script that builds your Storybook.');
  } // Start Storybook on localhost and generate the URL to it


  if (!storybookUrl) {
    if (exec && !port) {
      throw new Error("You must pass a port with the --storybook-port option when using --exec.");
    }

    if (!exec && (!port || !noStart)) {
      // If you don't provide a port or we need to start the command, let's look up the script for it
      scriptName = typeof scriptName === 'string' ? scriptName : 'storybook';
      var storybookScript = packageJson.scripts && packageJson.scripts[scriptName];

      if (!storybookScript) {
        throw new Error("Didn't find a script called '".concat(scriptName, "' in your `package.json`.\n") + 'Make sure you set the `--script-name` option to the value of the npm script that starts your Storybook.');
      }

      https = https || findOption(storybookScript, '--https') && {
        cert: resolveHomeDir(findOption(storybookScript, '--ssl-cert')),
        key: resolveHomeDir(findOption(storybookScript, '--ssl-key')),
        ca: resolveHomeDir(findOption(storybookScript, '--ssl-ca'))
      };
      port = port || findOption(storybookScript, '-p', '--port');

      if (!port) {
        throw new Error("Didn't detect a port in your '".concat(scriptName, "' script. You must pass a port with the --storybook-port option."));
      }

      console.log("Detected '".concat(scriptName, "' script, running with inferred options:\n    --script-name=").concat(scriptName, " --storybook-port=").concat(port, "\n  Override any of the above if they were inferred incorrectly.\n  "));
    }

    storybookUrl = "".concat(https ? 'https' : 'http', "://localhost:").concat(port);
  }

  var parsedUrl = (0, _url.parse)(storybookUrl);
  var suffix = 'iframe.html';

  if (!parsedUrl.pathname.endsWith(suffix)) {
    if (!parsedUrl.pathname.endsWith('/')) {
      parsedUrl.pathname += '/';
    }

    parsedUrl.pathname += suffix;
  }

  return (0, _objectSpread2.default)({}, commanderOptions, {
    noStart: noStart,
    https: https,
    url: parsedUrl.format(),
    scriptName: scriptName
  });
}

function executeTest(_x) {
  return _executeTest.apply(this, arguments);
} // Normal usage, outside of test


function _executeTest() {
  _executeTest = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(argv) {
    var sessionId, exitCode;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            sessionId = (0, _uuid.v4)();
            _context.prev = 1;
            _context.next = 4;
            return (0, _tester.default)((0, _objectSpread2.default)({}, parseArgv(argv), {
              sessionId: sessionId
            }));

          case 4:
            exitCode = _context.sent;
            process.exit(exitCode);
            _context.next = 14;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            // eslint-disable-next-line no-console
            console.error("**Chromatic build failed. Please note the session id: '".concat(sessionId, "' and contact support@hichroma.com -or- open a support ticket at https://chromaticqa.com**\n"));

            if (_context.t0.length) {
              // This is a GraphQL Error, our server is reasonable
              // eslint-disable-next-line no-console
              _context.t0.map(function (e) {
                return console.error(e.message);
              });
            } else {
              // eslint-disable-next-line no-console
              console.error(_context.t0);
            } // eslint-disable-next-line no-console


            console.log(); // Not sure what exit code to use but this can mean error.

            process.exit(255);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[1, 8]]);
  }));
  return _executeTest.apply(this, arguments);
}

if (require.main === module) {
  executeTest(process.argv);
}
//# sourceMappingURL=chromatic-test.js.map