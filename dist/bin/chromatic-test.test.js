"use strict";

var _chromaticTest = require("./chromatic-test");

var origConsole;
beforeAll(function () {
  origConsole = global.console;
  global.console = {
    log: jest.fn()
  };
});
afterAll(function () {
  global.console = origConsole;
});
jest.mock('../assets/environment', function () {
  return {
    CHROMATIC_CREATE_TUNNEL: true,
    CHROMATIC_APP_CODE: 'env-code'
  };
});
jest.mock('jsonfile', function () {
  return {
    readFileSync: function readFileSync() {
      return {
        scripts: {
          storybook: 'start-storybook -p 1337',
          otherStorybook: 'start-storybook -p 7070',
          notStorybook: 'lint',
          'build-storybook': 'build-storybook',
          otherBuildStorybook: 'build-storybook'
        }
      };
    }
  };
});
process.env.CHROMATIC_APP_CODE = 'test';
it('sets reasonable defaults', function () {
  expect((0, _chromaticTest.parseArgv)(['node', 'chromatic-test', '--app-code', 'cli-code'])).toMatchObject({
    appCode: 'cli-code',
    buildScriptName: 'build-storybook',
    noStart: true,
    fromCI: false,
    autoAcceptChanges: undefined,
    exitZeroOnChanges: undefined,
    interactive: true,
    verbose: false,
    createTunnel: true,
    originalArgv: ['node', 'chromatic-test', '--app-code', 'cli-code']
  });
});
it('picks up app-code from environment', function () {
  expect((0, _chromaticTest.parseArgv)(['node', 'chromatic-test'])).toMatchObject({
    appCode: 'env-code'
  });
});
it('allows you to override defaults for boolean options', function () {
  expect((0, _chromaticTest.parseArgv)(['node', 'chromatic-test', '--ci', '--do-not-start', '--auto-accept-changes', '--exit-zero-on-changes', '--debug', '--no-interactive'])).toMatchObject({
    noStart: true,
    fromCI: true,
    autoAcceptChanges: true,
    exitZeroOnChanges: true,
    verbose: true,
    interactive: false,
    createTunnel: true
  });
});
it('picks up default start script', function () {
  expect((0, _chromaticTest.parseArgv)(['node', 'chromatic-test', '-s'])).toMatchObject({
    scriptName: 'storybook',
    url: 'http://localhost:1337/iframe.html',
    noStart: false
  });
});
it('allows you to specify alternate build script', function () {
  expect((0, _chromaticTest.parseArgv)(['node', 'chromatic-test', '--build-script-name', 'otherBuildStorybook'])).toMatchObject({
    buildScriptName: 'otherBuildStorybook'
  });
});
it('allows you to specify alternate script, still picks up port', function () {
  expect((0, _chromaticTest.parseArgv)(['node', 'chromatic-test', '--script-name', 'otherStorybook'])).toMatchObject({
    scriptName: 'otherStorybook',
    url: 'http://localhost:7070/iframe.html',
    noStart: false
  });
});
it('allows you to specify alternate script, that does not start storybook, if you set port', function () {
  expect((0, _chromaticTest.parseArgv)(['node', 'chromatic-test', '--script-name', 'notStorybook', '--storybook-port', '6060'])).toMatchObject({
    scriptName: 'notStorybook',
    url: 'http://localhost:6060/iframe.html'
  });
});
it('throws if you try to specify a script name that is not a storybook, if you do NOT set port', function () {
  expect(function () {
    return (0, _chromaticTest.parseArgv)(['node', 'chromatic-test', '--script-name', 'notStorybook']);
  }).toThrow(/must pass a port/);
});
it('allows you to specify alternate command if you set port', function () {
  expect((0, _chromaticTest.parseArgv)(['node', 'chromatic-test', '--exec', 'storybook-command', '--storybook-port', '6060'])).toMatchObject({
    exec: 'storybook-command',
    url: 'http://localhost:6060/iframe.html'
  });
});
it('throws if you try to specify a command name, if you do NOT set port', function () {
  expect(function () {
    return (0, _chromaticTest.parseArgv)(['node', 'chromatic-test', '--exec', 'storybook-command']);
  }).toThrow(/must pass a port/);
});
it('throws if you try to pass a script or command name and a url', function () {
  expect(function () {
    return (0, _chromaticTest.parseArgv)(['node', 'chromatic-test', '--exec', 'storybook-command', '--storybook-url', 'http://foo.bar']);
  }).toThrow(/Can only use one of --exec, --storybook-url/);
  expect(function () {
    return (0, _chromaticTest.parseArgv)(['node', 'chromatic-test', '--script-name', 'storybook', '--storybook-url', 'http://foo.bar']);
  }).toThrow(/Can only use one of --script-name, --storybook-url/);
});
it('throws if you try to pass a script or command name and a build script', function () {
  expect(function () {
    return (0, _chromaticTest.parseArgv)(['node', 'chromatic-test', '--exec', 'storybook-command', '-b']);
  }).toThrow(/Can only use one of --build-script-name, --exec/);
  expect(function () {
    return (0, _chromaticTest.parseArgv)(['node', 'chromatic-test', '--script-name', 'storybook', '-b']);
  }).toThrow(/Can only use one of --build-script-name, --script-name/);
});
it('throws if you try to pass a script or command name and a directory', function () {
  expect(function () {
    return (0, _chromaticTest.parseArgv)(['node', 'chromatic-test', '--exec', 'storybook-command', '--storybook-build-dir', '/tmp/dir']);
  }).toThrow(/Can only use one of --exec, --storybook-build-dir/);
  expect(function () {
    return (0, _chromaticTest.parseArgv)(['node', 'chromatic-test', '--script-name', 'storybook', '--storybook-build-dir', '/tmp/dir']);
  }).toThrow(/Can only use one of --script-name, --storybook-build-dir/);
});
it('throws if you try to pass a build script and a directory', function () {
  expect(function () {
    return (0, _chromaticTest.parseArgv)(['node', 'chromatic-test', '-b', '--storybook-build-dir', '/tmp/dir']);
  }).toThrow(/Can only use one of --build-script-name, --storybook-build-dir/);
});
it('allows you to set a URL without path', function () {
  expect((0, _chromaticTest.parseArgv)(['node', 'chromatic-test', '--storybook-url', 'https://google.com'])).toMatchObject({
    noStart: true,
    url: 'https://google.com/iframe.html',
    createTunnel: false
  });
});
it('allows you to set a URL with a path', function () {
  expect((0, _chromaticTest.parseArgv)(['node', 'chromatic-test', '--storybook-url', 'https://google.com/foo'])).toMatchObject({
    noStart: true,
    url: 'https://google.com/foo/iframe.html',
    createTunnel: false
  });
});
it('allows you to set a URL with iframe.html already set', function () {
  expect((0, _chromaticTest.parseArgv)(['node', 'chromatic-test', '--storybook-url', 'https://google.com/iframe.html?param=foo'])).toMatchObject({
    noStart: true,
    url: 'https://google.com/iframe.html?param=foo',
    createTunnel: false
  });
});
describe('findOption', function () {
  it('handles short names', function () {
    var port = (0, _chromaticTest.findOption)('start-storybook -p 9001', '-p', '--port');
    expect(port).toBe('9001');
  });
  it('handles long names', function () {
    var port = (0, _chromaticTest.findOption)('start-storybook --port 9001', '-p', '--port');
    expect(port).toBe('9001');
  });
  it('handles equals', function () {
    var port = (0, _chromaticTest.findOption)('start-storybook --port=9001', '-p', '--port');
    expect(port).toBe('9001');
  });
  it('handles double space', function () {
    var port = (0, _chromaticTest.findOption)('start-storybook --port  9001', '-p', '--port');
    expect(port).toBe('9001');
  });
  it('handles complex scripts', function () {
    var port = (0, _chromaticTest.findOption)("node verify-node-version.js && concurrently --raw --kill-others 'yarn relay --watch' 'start-storybook -s ./public -p 9001'", '-p', '--port');
    expect(port).toBe('9001');
  });
});
//# sourceMappingURL=chromatic-test.test.js.map