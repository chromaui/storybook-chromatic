#!/usr/bin/env node
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.executeTest = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var executeTest = exports.executeTest = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(argv) {
    var exitCode;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _tester2.default)(parseArgv(argv));

          case 3:
            exitCode = _context.sent;

            process.exit(exitCode);
            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context['catch'](0);

            // eslint-disable-next-line no-console
            console.error(_context.t0);
            // Not sure what exit code to use but this can mean error.
            process.exit(255);

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 7]]);
  }));

  return function executeTest(_x) {
    return _ref.apply(this, arguments);
  };
}();

// Normal usage, outside of test


exports.findOption = findOption;
exports.parseArgv = parseArgv;

var _commander = require('commander');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _jsonfile = require('jsonfile');

var _url = require('url');

var _tester = require('../tester');

var _tester2 = _interopRequireDefault(_tester);

var _environment = require('../assets/environment');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Ensure NODE_ENV is set
process.env.NODE_ENV = process.env.NODE_ENV || 'test';

// This is not exactly clever but it works most of the time
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
  var commander = new _commander.Command().option('-a, --app-code [code]', 'the code for your app, get from chromaticqa.com').option('-s, --script-name [name]', 'The npm script that starts your storybook [storybook]').option('-e, --exec [command]', 'Alternatively, a full command to run to start your storybook.').option('-S, --do-not-start', "Don't attempt to start; use if your storybook is already running").option('-p, --storybook-port [port]', 'What port is your Storybook running on (auto detected from -s, if set)?').option('-u, --storybook-url [url]', 'Storybook is already running at url (implies -S)').option('--ci', 'This build is running on CI, non-interactively (alternatively, pass CI=true)').option('--auto-accept-changes', 'Accept any (non-error) changes or new stories for this build').option('--exit-zero-on-changes', "Use a 0 exit code if changes are detected (i.e. don't stop the build)").option('--no-interactive', 'Do not prompt for package.json changes').option('--only [component:story]', 'Only run a single story (for debugging purposes)').option('--debug', 'Output more debugging information')

  // We keep this for back compat it does nothing (ie. it is the default)
  .option('--storybook-addon', '(deprecated) use the storybook addon').parse(argv);

  var commanderOptions = {
    config: commander.config,
    appCode: commander.appCode || _environment.CHROMATIC_APP_CODE,
    scriptName: commander.scriptName,
    commandName: commander.exec,
    noStart: !!commander.doNotStart,
    port: commander.storybookPort,
    url: commander.storybookUrl,
    only: commander.only,
    fromCI: !!commander.ci,
    autoAcceptChanges: !!commander.autoAcceptChanges,
    exitZeroOnChanges: !!commander.exitZeroOnChanges,
    interactive: !!commander.interactive,
    verbose: !!commander.debug,
    createTunnel: !commander.storybookUrl && _environment.CHROMATIC_CREATE_TUNNEL !== 'false',
    originalArgv: argv
  };

  var packageJson = (0, _jsonfile.readFileSync)(_path2.default.resolve('./package.json'));
  var commandName = commanderOptions.commandName;
  var port = commanderOptions.port,
      url = commanderOptions.url,
      noStart = commanderOptions.noStart,
      scriptName = commanderOptions.scriptName;


  if (scriptName && commandName) {
    throw new Error('Cannot use both --scriptName and --commandName');
  }

  if (url) {
    if (scriptName || commandName) {
      throw new Error('Cannot use ' + (scriptName ? '--scriptName' : '--exec') + ' with --storybook-url, it implies --do-not-start');
    }
    noStart = true;
  } else {
    if (commandName) {
      if (!port) {
        throw new Error('You must pass a port with the --storybook-port option when using --exec.');
      }
    } else {
      scriptName = scriptName || 'storybook';
      var storybookScript = packageJson.scripts && packageJson.scripts[scriptName];

      if (!storybookScript) {
        throw new Error('Chromatic Tester: Didn\'t find a script called \'' + scriptName + '\' in your `package.json`.\n' + 'Make sure you set the `--script-name` option to the value of the npm script that starts your storybook');
      }

      port = port || findOption(storybookScript, '-p', '--port');
      if (!port) {
        throw new Error('Didn\'t detect a port in your \'' + scriptName + '\' script. You must pass a port with the --storybook-port option.');
      }

      // eslint-disable-next-line no-console
      console.log('Chromatic Tester: Detected \'' + scriptName + '\' script, running with inferred options:\n    --script-name=' + scriptName + ' --storybook-port=' + port + '\n  Override any of the above if they were inferred incorrectly.\n  ');
    }

    url = 'http://localhost:' + port;
  }

  var parsedUrl = new _url.URL(url);
  var suffix = 'iframe.html';
  if (!parsedUrl.pathname.endsWith(suffix)) {
    if (!parsedUrl.pathname.endsWith('/')) {
      parsedUrl.pathname += '/';
    }
    parsedUrl.pathname += suffix;
  }

  return (0, _extends3.default)({}, commanderOptions, { noStart: noStart, url: parsedUrl.toString(), scriptName: scriptName });
}

if (require.main === module) {
  executeTest(process.argv);
}
//# sourceMappingURL=chromatic-test.js.map