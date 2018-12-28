module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/promise");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/toConsumableArray");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Note this file differs from our usual convention because it is packaged
var _process$env = process.env,
    _process$env$CHROMATI = _process$env.CHROMATIC_SERVER_PORT,
    CHROMATIC_SERVER_PORT = _process$env$CHROMATI === undefined ? 3004 : _process$env$CHROMATI,
    _process$env$CHROMATI2 = _process$env.CHROMATIC_INDEX_URL,
    CHROMATIC_INDEX_URL = _process$env$CHROMATI2 === undefined ? 'https://index.chromaticqa.com' : _process$env$CHROMATI2,
    _process$env$CHROMATI3 = _process$env.CHROMATIC_TUNNEL_URL,
    CHROMATIC_TUNNEL_URL = _process$env$CHROMATI3 === undefined ? 'https://tunnel.chromaticqa.com' : _process$env$CHROMATI3,
    _process$env$CHROMATI4 = _process$env.CHROMATIC_CREATE_TUNNEL,
    CHROMATIC_CREATE_TUNNEL = _process$env$CHROMATI4 === undefined ? 'true' : _process$env$CHROMATI4,
    CHROMATIC_APP_CODE = _process$env.CHROMATIC_APP_CODE,
    _process$env$LOGGLY_C = _process$env.LOGGLY_CUSTOMER_TOKEN,
    LOGGLY_CUSTOMER_TOKEN = _process$env$LOGGLY_C === undefined ? 'b5e26204-cdc5-4c78-a9cc-c69eb7fabad3' : _process$env$LOGGLY_C;
exports.CHROMATIC_SERVER_PORT = CHROMATIC_SERVER_PORT;
exports.CHROMATIC_INDEX_URL = CHROMATIC_INDEX_URL;
exports.CHROMATIC_TUNNEL_URL = CHROMATIC_TUNNEL_URL;
exports.CHROMATIC_CREATE_TUNNEL = CHROMATIC_CREATE_TUNNEL;
exports.CHROMATIC_APP_CODE = CHROMATIC_APP_CODE;
exports.LOGGLY_CUSTOMER_TOKEN = LOGGLY_CUSTOMER_TOKEN;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("denodeify");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(0);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(9);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _apolloFetch = __webpack_require__(33);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GraphQLClient = function () {
  function GraphQLClient(_ref) {
    var uri = _ref.uri,
        jwtToken = _ref.jwtToken,
        headers = _ref.headers;
    (0, _classCallCheck3.default)(this, GraphQLClient);

    this.apolloFetch = (0, _apolloFetch.createApolloFetch)({ uri: uri });
    this.headers = headers;

    if (jwtToken) {
      this.setJwtToken(jwtToken);
    }
  }

  (0, _createClass3.default)(GraphQLClient, [{
    key: 'setJwtToken',
    value: function setJwtToken(jwtToken) {
      var _this = this;

      this.apolloFetch.use(function (_ref2, next) {
        var options = _ref2.options;

        if (jwtToken) {
          // eslint-disable-next-line no-param-reassign
          options.headers = (0, _extends3.default)({}, options.headers, _this.headers, {
            authorization: 'bearer ' + jwtToken
          });
        }

        next();
      });
    }
  }, {
    key: 'runQuery',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(query, variables) {
        var _ref4, data, errors;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.apolloFetch({ query: query, variables: variables });

              case 2:
                _ref4 = _context.sent;
                data = _ref4.data;
                errors = _ref4.errors;

                if (!errors) {
                  _context.next = 7;
                  break;
                }

                throw errors;

              case 7:
                return _context.abrupt('return', data);

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function runQuery(_x, _x2) {
        return _ref3.apply(this, arguments);
      }

      return runQuery;
    }()

    // Convenience static method

  }], [{
    key: 'runQuery',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(options, query, variables) {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt('return', new GraphQLClient(options).runQuery(query, variables));

              case 1:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function runQuery(_x3, _x4, _x5) {
        return _ref5.apply(this, arguments);
      }

      return runQuery;
    }()
  }]);
  return GraphQLClient;
}();

exports.default = GraphQLClient;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(0);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _localtunnel = __webpack_require__(32);

var _localtunnel2 = _interopRequireDefault(_localtunnel);

var _debug = __webpack_require__(2);

var _debug2 = _interopRequireDefault(_debug);

var _denodeify = __webpack_require__(8);

var _denodeify2 = _interopRequireDefault(_denodeify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = (0, _debug2.default)('storybook-chromatic:tester:tunnel');

exports.default = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
    var tunnelUrl = _ref.tunnelUrl,
        port = _ref.port;
    var tunnel;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (port) {
              _context.next = 2;
              break;
            }

            throw new Error('Need to pass a port into `openTunnel`');

          case 2:
            _context.next = 4;
            return (0, _denodeify2.default)(_localtunnel2.default)(port, {
              local_host: 'localhost',
              host: tunnelUrl
            });

          case 4:
            tunnel = _context.sent;


            // The ones that are commented out are debugged already by our localtunnel fork
            tunnel.on('url', function (url) {
              return debug('Got tunnel url: %s', url);
            });
            // tunnel.on('error', error => debug(`Got tunnel error: %O`, error));
            tunnel.on('request', function (request) {
              return debug('Got request: %O', request);
            });
            // tunnel.tunnel_cluster.on('open', socket => debug(`Got tunnel cluster open`));
            // tunnel.tunnel_cluster.on('request', request => debug(`Got tunnel cluster request: %O`, request));
            tunnel.tunnel_cluster.on('error', function (error) {
              return debug('Got tunnel cluster error: %O', error);
            });
            // tunnel.tunnel_cluster.on('dead', () => debug(`Got tunnel cluster dead`));

            return _context.abrupt('return', tunnel);

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function openTunnel(_x) {
    return _ref2.apply(this, arguments);
  }

  return openTunnel;
}();

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBaselineCommits = exports.getBranch = exports.getCommit = exports.FETCH_N_INITIAL_BUILD_COMMITS = undefined;

var _toConsumableArray2 = __webpack_require__(5);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _slicedToArray2 = __webpack_require__(11);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(0);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var execGitCommand = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(command) {
    var _error$message, message;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            return _context.abrupt('return', (0, _child_process.execSync)(command + ' 2>&1').toString().trim());

          case 4:
            _context.prev = 4;
            _context.t0 = _context['catch'](0);
            _error$message = _context.t0.message, message = _error$message === undefined ? '' : _error$message;

            if (!message.match('Not a git repository')) {
              _context.next = 9;
              break;
            }

            throw new Error('Unable to execute git command \'' + command + '\'.\n\nChromatic only works in git projects.\nContact us at support@hichroma.com if you need to use Chromatic outside of one.\n');

          case 9:
            if (!message.match('does not have any commits yet')) {
              _context.next = 11;
              break;
            }

            throw new Error('Unable to execute git command \'' + command + '\'.\n\nChromatic requires that you have created a commit before it can be run.\n');

          case 11:
            throw _context.t0;

          case 12:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 4]]);
  }));

  return function execGitCommand(_x) {
    return _ref.apply(this, arguments);
  };
}();

// NOTE: At some point we should check that the commit has been pushed to the
// remote and the branch matches with origin/REF, but for now we are naive about
// adhoc builds.

// We could cache this, but it's probably pretty quick
var getCommit = exports.getCommit = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
    var _split, _split2, commit, committedAtSeconds, committerEmail, committerName;

    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return execGitCommand('git log -n 1 --format="%H,%ct,%ce,%cn"');

          case 2:
            _split = _context2.sent.split(',');
            _split2 = (0, _slicedToArray3.default)(_split, 4);
            commit = _split2[0];
            committedAtSeconds = _split2[1];
            committerEmail = _split2[2];
            committerName = _split2[3];
            return _context2.abrupt('return', { commit: commit, committedAt: committedAtSeconds * 1000, committerEmail: committerEmail, committerName: committerName });

          case 9:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getCommit() {
    return _ref2.apply(this, arguments);
  };
}();

var getBranch = exports.getBranch = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt('return', execGitCommand('git rev-parse --abbrev-ref HEAD'));

          case 1:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function getBranch() {
    return _ref3.apply(this, arguments);
  };
}();

// Check if a commit exists in the repository


var commitExists = function () {
  var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(commit) {
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return execGitCommand('git cat-file -e "' + commit + '^{commit}"');

          case 3:
            return _context4.abrupt('return', true);

          case 6:
            _context4.prev = 6;
            _context4.t0 = _context4['catch'](0);
            return _context4.abrupt('return', false);

          case 9:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this, [[0, 6]]);
  }));

  return function commitExists(_x2) {
    return _ref4.apply(this, arguments);
  };
}();

// git rev-list in a basic form gives us a list of commits reaching back to
// `firstCommittedAtSeconds` (i.e. when the first build of this app happened)
// in reverse chronological order.
//
// A simplified version of what we are doing here is just finding the first
// commit in that list that has a build. We only want to send `limit` to
// the server in this pass (although we may already know some commits that do
// or do not have builds from earlier passes). So we just pick the first `limit`
// commits from the command, filtering out `commitsWith[out]Builds`.
//
// However, it's not quite that simple -- because of branching. However,
// passing commits after `--not` in to `git rev-list` *occludes* all the ancestors
// of those commits. This is exactly what we need once we find one or more commits
// that do have builds: a list of the ancestors of HEAD that are not accestors of
// `commitsWithBuilds`.
//
var nextCommits = function () {
  var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(limit, _ref5) {
    var firstCommittedAtSeconds = _ref5.firstCommittedAtSeconds,
        commitsWithBuilds = _ref5.commitsWithBuilds,
        commitsWithoutBuilds = _ref5.commitsWithoutBuilds;
    var command, commits;
    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            // We want the next limit commits that aren't "covered" by `commitsWithBuilds`
            // This will print out all commits in `commitsWithoutBuilds` (except if they are covered),
            // so we ask enough that we'll definitely get `limit` unknown commits
            command = 'git rev-list HEAD       ' + (firstCommittedAtSeconds ? '--since ' + firstCommittedAtSeconds : '') + '       -n ' + (limit + commitsWithoutBuilds.length) + ' --not ' + commitsForCLI(commitsWithBuilds);

            debug('running ' + command);
            _context5.next = 4;
            return execGitCommand(command);

          case 4:
            _context5.t0 = function (c) {
              return !!c;
            };

            commits = _context5.sent.split('\n').filter(_context5.t0);

            debug('command output: ' + commits);

            return _context5.abrupt('return', commits
            // No sense in checking commits we already know about
            .filter(function (c) {
              return !commitsWithBuilds.includes(c);
            }).filter(function (c) {
              return !commitsWithoutBuilds.includes(c);
            }).slice(0, limit));

          case 8:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function nextCommits(_x3, _x4) {
    return _ref6.apply(this, arguments);
  };
}();

// Which of the listed commits are "maximally descendent":
// ie c in commits such that there are no descendents of c in commits.


var maximallyDescendentCommits = function () {
  var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(commits) {
    var parentCommits, command, maxCommits;
    return _regenerator2.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            if (!(commits.length === 0)) {
              _context6.next = 2;
              break;
            }

            return _context6.abrupt('return', commits);

          case 2:

            // <commit>^@ expands to all parents of commit
            parentCommits = commits.map(function (c) {
              return '"' + c + '^@"';
            });
            // List the tree from <commits> not including the tree from <parentCommits>
            // This just filters any commits that are ancestors of other commits

            command = 'git rev-list ' + commitsForCLI(commits) + ' --not ' + commitsForCLI(parentCommits);

            debug('running ' + command);
            _context6.next = 7;
            return execGitCommand(command);

          case 7:
            _context6.t0 = function (c) {
              return !!c;
            };

            maxCommits = _context6.sent.split('\n').filter(_context6.t0);

            debug('command output: ' + maxCommits);

            return _context6.abrupt('return', maxCommits);

          case 11:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function maximallyDescendentCommits(_x5) {
    return _ref7.apply(this, arguments);
  };
}();

// Exponentially iterate `limit` up to infinity to find a "covering" set of commits with builds


var step = function () {
  var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(client, limit, _ref8) {
    var firstCommittedAtSeconds = _ref8.firstCommittedAtSeconds,
        commitsWithBuilds = _ref8.commitsWithBuilds,
        commitsWithoutBuilds = _ref8.commitsWithoutBuilds;

    var candidateCommits, _ref10, newCommitsWithBuilds, newCommitsWithoutBuilds;

    return _regenerator2.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            debug('step: checking ' + limit + ' up to ' + firstCommittedAtSeconds);
            debug('step: commitsWithBuilds: ' + commitsWithBuilds);
            debug('step: commitsWithoutBuilds: ' + commitsWithoutBuilds);

            _context7.next = 5;
            return nextCommits(limit, {
              firstCommittedAtSeconds: firstCommittedAtSeconds,
              commitsWithBuilds: commitsWithBuilds,
              commitsWithoutBuilds: commitsWithoutBuilds
            });

          case 5:
            candidateCommits = _context7.sent;


            debug('step: candidateCommits: ' + candidateCommits);

            // No more commits uncovered commitsWithBuilds!

            if (!(candidateCommits.length === 0)) {
              _context7.next = 10;
              break;
            }

            debug('step: no candidateCommits; we are done');
            return _context7.abrupt('return', commitsWithBuilds);

          case 10:
            _context7.next = 12;
            return client.runQuery(TesterHasBuildsWithCommitsQuery, {
              commits: candidateCommits
            });

          case 12:
            _ref10 = _context7.sent;
            newCommitsWithBuilds = _ref10.app.hasBuildsWithCommits;

            debug('step: newCommitsWithBuilds: ' + newCommitsWithBuilds);

            newCommitsWithoutBuilds = candidateCommits.filter(function (commit) {
              return !newCommitsWithBuilds.find(function (c) {
                return c === commit;
              });
            });
            return _context7.abrupt('return', step(client, limit * 2, {
              firstCommittedAtSeconds: firstCommittedAtSeconds,
              commitsWithBuilds: [].concat((0, _toConsumableArray3.default)(commitsWithBuilds), (0, _toConsumableArray3.default)(newCommitsWithBuilds)),
              commitsWithoutBuilds: [].concat((0, _toConsumableArray3.default)(commitsWithoutBuilds), (0, _toConsumableArray3.default)(newCommitsWithoutBuilds))
            }));

          case 17:
          case 'end':
            return _context7.stop();
        }
      }
    }, _callee7, this);
  }));

  return function step(_x6, _x7, _x8) {
    return _ref9.apply(this, arguments);
  };
}();

// eslint-disable-next-line import/prefer-default-export


var getBaselineCommits = exports.getBaselineCommits = function () {
  var _ref11 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(client) {
    var _ref12 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref12$ignoreLastBuil = _ref12.ignoreLastBuildOnBranch,
        ignoreLastBuildOnBranch = _ref12$ignoreLastBuil === undefined ? false : _ref12$ignoreLastBuil;

    var branch, _ref13, committedAt, _ref14, _ref14$app, firstBuild, lastBuild, initialCommitsWithBuilds, extraBaselineCommits, commitsWithBuilds;

    return _regenerator2.default.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return getBranch();

          case 2:
            branch = _context8.sent;
            _context8.next = 5;
            return getCommit();

          case 5:
            _ref13 = _context8.sent;
            committedAt = _ref13.committedAt;
            _context8.next = 9;
            return client.runQuery(TesterFirstCommittedAtQuery, {
              branch: branch
            });

          case 9:
            _ref14 = _context8.sent;
            _ref14$app = _ref14.app;
            firstBuild = _ref14$app.firstBuild;
            lastBuild = _ref14$app.lastBuild;

            debug('App firstBuild: ' + firstBuild + ', lastBuild: ' + lastBuild);

            if (firstBuild) {
              _context8.next = 17;
              break;
            }

            debug('App has no builds, returning []');
            return _context8.abrupt('return', []);

          case 17:
            initialCommitsWithBuilds = [];
            extraBaselineCommits = [];

            // Don't do any special branching logic for builds on `HEAD`, this is fairly meaningless
            // (CI systems that have been pushed tags can not set a branch)

            if (!(branch !== 'HEAD' && !ignoreLastBuildOnBranch && lastBuild && lastBuild.committedAt <= committedAt)) {
              _context8.next = 28;
              break;
            }

            _context8.next = 22;
            return commitExists(lastBuild.commit);

          case 22:
            if (!_context8.sent) {
              _context8.next = 26;
              break;
            }

            initialCommitsWithBuilds.push(lastBuild.commit);
            _context8.next = 28;
            break;

          case 26:
            debug('Last build commit not in index, blindly appending to baselines');
            extraBaselineCommits.push(lastBuild.commit);

          case 28:
            _context8.next = 30;
            return step(client, FETCH_N_INITIAL_BUILD_COMMITS, {
              firstCommittedAtSeconds: firstBuild.committedAt && firstBuild.committedAt / 1000,
              commitsWithBuilds: initialCommitsWithBuilds,
              commitsWithoutBuilds: []
            });

          case 30:
            commitsWithBuilds = _context8.sent;


            debug('Final commitsWithBuilds: ' + commitsWithBuilds);

            // For any pair A,B of builds, there is no point in using B if it is an ancestor of A.
            _context8.t0 = [];
            _context8.t1 = extraBaselineCommits;
            _context8.t2 = _toConsumableArray3.default;
            _context8.next = 37;
            return maximallyDescendentCommits(commitsWithBuilds);

          case 37:
            _context8.t3 = _context8.sent;
            _context8.t4 = (0, _context8.t2)(_context8.t3);
            return _context8.abrupt('return', _context8.t0.concat.call(_context8.t0, _context8.t1, _context8.t4));

          case 40:
          case 'end':
            return _context8.stop();
        }
      }
    }, _callee8, this);
  }));

  return function getBaselineCommits(_x10) {
    return _ref11.apply(this, arguments);
  };
}();

var _child_process = __webpack_require__(12);

var _debug = __webpack_require__(2);

var _debug2 = _interopRequireDefault(_debug);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = (0, _debug2.default)('storybook-chromatic:tester:git');

var FETCH_N_INITIAL_BUILD_COMMITS = exports.FETCH_N_INITIAL_BUILD_COMMITS = 20;

var TesterFirstCommittedAtQuery = '\n  query TesterFirstCommittedAtQuery($branch: String!) {\n    app {\n      firstBuild(sortByCommittedAt: true) {\n        committedAt\n      }\n      lastBuild(branch: $branch, sortByCommittedAt: true) {\n        commit\n        committedAt\n      }\n    }\n  }\n';

var TesterHasBuildsWithCommitsQuery = '\n  query TesterHasBuildsWithCommitsQuery($commits: [String!]!) {\n    app {\n      hasBuildsWithCommits(commits: $commits)\n    }\n  }\n';

function commitsForCLI(commits) {
  return commits.map(function (c) {
    return c.trim();
  }).join(' ');
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _values = __webpack_require__(35);

var _values2 = _interopRequireDefault(_values);

exports.checkPackageJson = checkPackageJson;
exports.addScriptToPackageJson = addScriptToPackageJson;

var _path = __webpack_require__(6);

var _path2 = _interopRequireDefault(_path);

var _jsonfile = __webpack_require__(38);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function checkPackageJson() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$appDir = _ref.appDir,
      appDir = _ref$appDir === undefined ? process.cwd() : _ref$appDir;

  var packageJson = (0, _jsonfile.readFileSync)(_path2.default.resolve(appDir, './package.json'));

  return (0, _values2.default)(packageJson.scripts || {}).find(function (script) {
    return script.match('chromatic test');
  });
}

function addScriptToPackageJson(scriptName, scriptCommand) {
  var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref2$appDir = _ref2.appDir,
      appDir = _ref2$appDir === undefined ? process.cwd() : _ref2$appDir;

  var filename = _path2.default.resolve(appDir, './package.json');
  var packageJson = (0, _jsonfile.readFileSync)(filename);

  if (packageJson[scriptName]) {
    throw new Error('Script named \'' + scriptName + '\' already exists in package.json');
  }

  if (!packageJson.scripts) {
    packageJson.scripts = {};
  }
  packageJson.scripts[scriptName] = scriptCommand;
  (0, _jsonfile.writeFileSync)(filename, packageJson, { spaces: 2 });
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(3);

var _promise2 = _interopRequireDefault(_promise);

var _keys = __webpack_require__(34);

var _keys2 = _interopRequireDefault(_keys);

var _asyncToGenerator2 = __webpack_require__(0);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(9);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(10);

var _createClass3 = _interopRequireDefault(_createClass2);

var _jsdom = __webpack_require__(37);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Add canvas mock based on this comment: https://github.com/jsdom/jsdom/issues/1782#issuecomment-337656878
function mockCanvas(window) {
  window.HTMLCanvasElement.prototype.getContext = function () {
    return {
      fillRect: function fillRect() {
        return {};
      },
      clearRect: function clearRect() {
        return {};
      },
      getImageData: function getImageData(x, y, w, h) {
        return { data: new Array(w * h * 4) };
      },
      putImageData: function putImageData() {
        return {};
      },
      createImageData: function createImageData() {
        return [];
      },
      setTransform: function setTransform() {
        return {};
      },
      drawImage: function drawImage() {
        return {};
      },
      save: function save() {
        return {};
      },
      fillText: function fillText() {
        return {};
      },
      restore: function restore() {
        return {};
      },
      beginPath: function beginPath() {
        return {};
      },
      moveTo: function moveTo() {
        return {};
      },
      lineTo: function lineTo() {
        return {};
      },
      closePath: function closePath() {
        return {};
      },
      stroke: function stroke() {
        return {};
      },
      translate: function translate() {
        return {};
      },
      scale: function scale() {
        return {};
      },
      rotate: function rotate() {
        return {};
      },
      arc: function arc() {
        return {};
      },
      fill: function fill() {
        return {};
      },
      measureText: function measureText() {
        return { width: 0 };
      },
      transform: function transform() {
        return {};
      },
      rect: function rect() {
        return {};
      },
      clip: function clip() {
        return {};
      }
    };
  };

  window.HTMLCanvasElement.prototype.toDataURL = function () {
    return '';
  };
} /* eslint-disable no-console, class-methods-use-this, no-param-reassign */


function addShimsToJSDOM(dom) {
  Object.defineProperty(dom.window, 'matchMedia', {
    value: function value() {
      return {
        matches: true,
        addListener: function addListener() {},
        removeListener: function removeListener() {}
      };
    },
    writable: true
  });

  var LocalStorageMock = function () {
    function LocalStorageMock() {
      (0, _classCallCheck3.default)(this, LocalStorageMock);

      this.store = {};
    }

    (0, _createClass3.default)(LocalStorageMock, [{
      key: 'getItem',
      value: function getItem(key) {
        return this.store[key];
      }
    }, {
      key: 'removeItem',
      value: function removeItem(key) {
        delete this.store[key];
      }
    }, {
      key: 'setItem',
      value: function setItem(key, value) {
        this.store[key] = value.toString();
      }
    }, {
      key: 'clear',
      value: function clear() {
        this.store = {};
      }
    }]);
    return LocalStorageMock;
  }();

  Object.defineProperty(dom.window, 'localStorage', {
    value: new LocalStorageMock(),
    writable: true
  });

  var WorkerMock = function () {
    function WorkerMock() {
      (0, _classCallCheck3.default)(this, WorkerMock);
    }

    (0, _createClass3.default)(WorkerMock, [{
      key: 'addEventListener',
      value: function addEventListener() {}
    }, {
      key: 'removeEventLister',
      value: function removeEventLister() {}
    }, {
      key: 'postMessage',
      value: function postMessage() {}
    }, {
      key: 'terminate',
      value: function terminate() {}
    }]);
    return WorkerMock;
  }();

  Object.defineProperty(dom.window, 'Worker', {
    value: WorkerMock,
    writable: true
  });

  Object.defineProperty(dom.window, 'crypto', {
    value: {
      getRandomValues: function getRandomValues() {
        return 0;
      }
    },
    writable: true
  });

  Object.defineProperty(dom.window.navigator, 'mimeTypes', {
    value: function value() {
      return [];
    },
    writable: true
  });

  mockCanvas(dom.window);
}

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(url) {
    var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref2$verbose = _ref2.verbose,
        verbose = _ref2$verbose === undefined ? false : _ref2$verbose;

    var logs, virtualConsole, dom;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            logs = [];
            virtualConsole = new _jsdom.VirtualConsole();

            (0, _keys2.default)(console).forEach(function (logType) {
              virtualConsole.on(logType, function (log) {
                return logs.push({ logType: logType, log: log });
              });
            });
            virtualConsole.on('jsdomError', function (log) {
              return logs.push({ logType: 'error', log: log });
            });

            if (verbose) {
              virtualConsole.sendTo(console);
            }

            _context.next = 7;
            return _jsdom.JSDOM.fromURL(url, {
              userAgent: 'Chromatic',
              // We need to execute the scripts on the page
              runScripts: 'dangerously',
              // We need to load scripts that are loaded via script tags
              resources: 'usable',
              // Send console.logs -> /dev/null (so to speak)
              virtualConsole: virtualConsole,
              // Add a requestAnimationFrame polyfill, react@16 warns about it
              pretendToBeVisual: true
            });

          case 7:
            dom = _context.sent;


            // NOTE: this line runs immediately after the HTML for the page has been loaded
            // it's not possible that any external script tags have been executed.
            // It is possible that they have a <script> tag that need these shims, but
            // I highly doubt it. If we run into this we can always use JSDOM's old API
            // to inject our own scripts at 'create' time
            addShimsToJSDOM(dom);

            return _context.abrupt('return', new _promise2.default(function (resolve, reject) {
              return dom.window.document.addEventListener('DOMContentLoaded', function () {
                try {
                  var separator = '=========================';

                  if (!dom.window.__chromaticRuntimeSpecs__ && !dom.window.__STORYBOOK_CLIENT_API__) {
                    console.error('Didn\'t find \'window.__chromaticRuntimeSpecs__\' at ' + url + '.\n' + 'Have you installed the Chromatic widget or addon correctly?\n');

                    if (!verbose && logs.length) {
                      console.error('Your app\'s output:\n' + separator + '\n');
                      logs.forEach(function (_ref3) {
                        var logType = _ref3.logType,
                            log = _ref3.log;
                        return console[logType](log);
                      });
                      console.error('\n' + separator + '\n');
                    }
                    throw new Error('Didn\'t find \'window.__chromaticRuntimeSpecs__\' at ' + url + '.');
                  }

                  // If their app logged something to console.error, it's probably, but
                  // not definitely an issue. See https://github.com/hichroma/chromatic/issues/757
                  if (logs.find(function (log) {
                    return log.logType === 'error';
                  })) {
                    console.error('\nYour app logged the following to the error console:\n' + separator);
                    logs.filter(function (log) {
                      return log.logType === 'error';
                    }).forEach(function (_ref4) {
                      var logType = _ref4.logType,
                          log = _ref4.log;
                      return console[logType](log);
                    });
                    console.error('\n' + separator + '\nThis may lead to some stories not working right or getting detected by Chromatic' + '\nWe suggest you fix the errors, but we will continue anyway..\n');
                  }

                  if (!dom.window.__chromaticRuntimeSpecs__) {
                    throw new Error('Didn\'t find Chromatic addon in your storybook.\n        \nDid you add it with `import \'storybook-chromatic\'` in your `.storybook/config.js`?\n\nRead more: http://docs.chromaticqa.com');
                  }

                  var specs = dom.window.__chromaticRuntimeSpecs__();
                  dom.window.close();
                  resolve(specs);
                } catch (err) {
                  dom.window.close();
                  reject(err);
                }
              });
            }));

          case 10:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function getRuntimeSpecs(_x2) {
    return _ref.apply(this, arguments);
  }

  return getRuntimeSpecs;
}();

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sendDebugToLoggly;

var _debug = __webpack_require__(2);

var _debug2 = _interopRequireDefault(_debug);

var _nodeLogglyBulk = __webpack_require__(39);

var _nodeLogglyBulk2 = _interopRequireDefault(_nodeLogglyBulk);

var _util = __webpack_require__(41);

var _stripColor = __webpack_require__(40);

var _stripColor2 = _interopRequireDefault(_stripColor);

var _environment = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sendDebugToLoggly(_ref) {
  var sessionId = _ref.sessionId;

  if (process.env.DISABLE_LOGGING) {
    return;
  }

  var client = _nodeLogglyBulk2.default.createClient({
    token: _environment.LOGGLY_CUSTOMER_TOKEN,
    subdomain: 'hichroma',
    tags: ['storybook-chromatic'],
    json: true
  });

  // Is the user debugging already? If so they will get what we want to debug :shrug:
  var isDebugging = !!process.env.DEBUG;

  _debug2.default.enable('*,-babel');

  _debug2.default.log = function () {
    var msg = _util.format.apply(undefined, arguments);
    client.log({ sessionId: sessionId, msg: (0, _stripColor2.default)(msg) });

    if (isDebugging) {
      process.stderr.write(msg + '\n');
    }
  };
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkResponse = undefined;

var _toConsumableArray2 = __webpack_require__(5);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

var _promise = __webpack_require__(3);

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(0);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var checkResponse = exports.checkResponse = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(url) {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _isomorphicFetch2.default)(url);

          case 3:
            return _context.abrupt('return', true);

          case 6:
            _context.prev = 6;
            _context.t0 = _context['catch'](0);
            return _context.abrupt('return', false);

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 6]]);
  }));

  return function checkResponse(_x) {
    return _ref.apply(this, arguments);
  };
}();

var waitForResponse = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(child, url) {
    var timeoutAt;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            timeoutAt = Date.now() + TIMEOUT;
            return _context3.abrupt('return', new _promise2.default(function (resolve, reject) {
              var check = function () {
                var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
                  return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          if (!(Date.now() > timeoutAt)) {
                            _context2.next = 4;
                            break;
                          }

                          resolved = true;
                          reject(new Error('No server responding at ' + url + ' within ' + TIMEOUT / 1000 + ' seconds.'));
                          return _context2.abrupt('return');

                        case 4:
                          _context2.next = 6;
                          return checkResponse(url);

                        case 6:
                          if (!_context2.sent) {
                            _context2.next = 10;
                            break;
                          }

                          resolved = true;
                          resolve();
                          return _context2.abrupt('return');

                        case 10:
                          setTimeout(check, CHECK_EVERY);

                        case 11:
                        case 'end':
                          return _context2.stop();
                      }
                    }
                  }, _callee2, this);
                }));

                return function check() {
                  return _ref3.apply(this, arguments);
                };
              }();

              var resolved = false;

              check();

              if (child) {
                var output = '';
                child.stderr.on('data', function (e) {
                  output += e.toString();
                });
                child.stdout.on('data', function (o) {
                  output += o.toString();
                });

                child.on('close', function () {
                  if (!resolved) {
                    reject(new Error('Script failed to start: ' + output + '\n'));
                  }
                });
              }
            }));

          case 2:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function waitForResponse(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

var _child_process = __webpack_require__(12);

var _isomorphicFetch = __webpack_require__(13);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _path = __webpack_require__(6);

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CHECK_EVERY = 1000;
var TIMEOUT = 5 * 60 * 1000;

exports.default = function () {
  var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(_ref4) {
    var scriptName = _ref4.scriptName,
        commandName = _ref4.commandName,
        url = _ref4.url;
    var env, child, npmPath, npmPathIsJs, execPath;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            env = (0, _extends3.default)({}, process.env, {
              NODE_ENV: 'development',
              BROWSER: 'none'
            });
            child = void 0;

            if (!scriptName) {
              _context4.next = 13;
              break;
            }

            _context4.next = 5;
            return checkResponse(url);

          case 5:
            if (!_context4.sent) {
              _context4.next = 7;
              break;
            }

            throw new Error('Detected process already running at ' + url + '\nIf you are sure this is your server, pass `--do-not-start` to skip this step.');

          case 7:

            // This technique lifted from https://github.com/mysticatea/npm-run-all/blob/52eaf86242ba408dedd015f53ca7ca368f25a026/lib/run-task.js#L156-L174
            npmPath = process.env.npm_execpath;
            npmPathIsJs = typeof npmPath === 'string' && /\.m?js/.test(_path2.default.extname(npmPath));
            execPath = npmPathIsJs ? process.execPath : npmPath || 'npm';

            // Run either:
            //   npm/yarn run scriptName (depending on npm_execpath)
            //   node path/to/npm.js run scriptName (if npm run via node)

            child = (0, _child_process.spawn)(execPath, [].concat((0, _toConsumableArray3.default)(npmPathIsJs ? [npmPath] : []), ['run', scriptName]), {
              env: env
            });
            _context4.next = 16;
            break;

          case 13:
            if (commandName) {
              _context4.next = 15;
              break;
            }

            throw new Error('You must pass commandName or scriptName');

          case 15:
            child = (0, _child_process.spawn)(commandName, { env: env, shell: true });

          case 16:
            _context4.next = 18;
            return waitForResponse(child, url);

          case 18:
            return _context4.abrupt('return', child);

          case 19:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  function startApp(_x4) {
    return _ref5.apply(this, arguments);
  }

  return startApp;
}();

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = __webpack_require__(11);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

exports.default = getStorybookInfo;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Figure out the storybook version and view layer

var viewLayers = ['react', 'angular', 'vue', 'polymer', 'mithril', 'marko', 'html', 'svelte', 'riot', 'ember'];

// This hack is simply to stop webpack from trying to do something with this require
// This code is bundled by webpack but runs in node
// eslint-disable-next-line no-eval
var require2 = eval('require');

function getStorybookInfo() {
  // Allow setting storybook version via CHROMATIC_STORYBOOK_VERSION='react@4.0-alpha.8' for unusual
  // cases (such as our permacache examples)
  var CHROMATIC_STORYBOOK_VERSION = process.env.CHROMATIC_STORYBOOK_VERSION;

  if (CHROMATIC_STORYBOOK_VERSION) {
    var _CHROMATIC_STORYBOOK_ = CHROMATIC_STORYBOOK_VERSION.split('@'),
        _CHROMATIC_STORYBOOK_2 = (0, _slicedToArray3.default)(_CHROMATIC_STORYBOOK_, 2),
        viewLayer = _CHROMATIC_STORYBOOK_2[0],
        storybookVersion = _CHROMATIC_STORYBOOK_2[1];

    if (!viewLayer || !storybookVersion) {
      throw new Error('CHROMATIC_STORYBOOK_VERSION misspecified -- use "viewLayer@version"');
    }
    return { viewLayer: viewLayer, storybookVersion: storybookVersion };
  }

  while (viewLayers.length > 0) {
    var _viewLayer = viewLayers.shift();
    try {
      var _require = require2('@storybook/' + _viewLayer + '/package.json'),
          _storybookVersion = _require.version;

      return { viewLayer: _viewLayer, storybookVersion: _storybookVersion };
    } catch (err) {
      // This is OK
    }
  }

  throw new Error('Couldn\'t discover storybook version. Try upgrading the storybook-chromatic package?');
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(3);

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(0);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _toConsumableArray2 = __webpack_require__(5);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _debug = __webpack_require__(2);

var _debug2 = _interopRequireDefault(_debug);

var _fs = __webpack_require__(36);

var _isomorphicFetch = __webpack_require__(13);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _path = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = (0, _debug2.default)('storybook-chromatic:tester:upload');

var TesterGetUploadUrlsMutation = '\n  mutation TesterGetUploadUrlsMutation($paths: [String!]!) {\n    getUploadUrls(paths: $paths) {\n      domain\n      urls {\n        path\n        url\n        contentType\n      }\n    }\n  }\n';

// Get all paths in rootDir, starting at dirname.
// We don't want the paths to include rootDir -- so if rootDir = storybook-static,
// paths will be like iframe.html rather than storybook-static/iframe.html
function getPathsInDir(rootDir) {
  var dirname = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.';

  return (0, _fs.readdirSync)((0, _path.join)(rootDir, dirname)).map(function (p) {
    return (0, _path.join)(dirname, p);
  }).map(function (pathname) {
    return (0, _fs.statSync)((0, _path.join)(rootDir, pathname)).isDirectory() ? getPathsInDir(rootDir, pathname) : [pathname];
  }).reduce(function (a, b) {
    return [].concat((0, _toConsumableArray3.default)(a), (0, _toConsumableArray3.default)(b));
  }, []); // flatten
}

exports.default = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(_ref) {
    var _this = this;

    var client = _ref.client,
        dirname = _ref.dirname;

    var paths, _ref3, _ref3$getUploadUrls, domain, urls, uploads;

    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            debug('uploading \'' + dirname + '\' to s3');

            paths = getPathsInDir(dirname);
            _context2.next = 4;
            return client.runQuery(TesterGetUploadUrlsMutation, {
              paths: paths
            });

          case 4:
            _ref3 = _context2.sent;
            _ref3$getUploadUrls = _ref3.getUploadUrls;
            domain = _ref3$getUploadUrls.domain;
            urls = _ref3$getUploadUrls.urls;
            uploads = [];

            urls.forEach(function (_ref4) {
              var path = _ref4.path,
                  url = _ref4.url,
                  contentType = _ref4.contentType;

              var pathWithDirname = (0, _path.join)(dirname, path);
              debug('uploading \'' + pathWithDirname + '\' to \'' + url + '\' with content type \'' + contentType + '\'');

              uploads.push((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var res;
                return _regenerator2.default.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return (0, _isomorphicFetch2.default)(url, {
                          method: 'PUT',
                          body: (0, _fs.createReadStream)(pathWithDirname),
                          headers: {
                            'content-type': contentType,
                            'content-length': (0, _fs.statSync)(pathWithDirname).size
                          }
                        });

                      case 2:
                        res = _context.sent;

                        if (res.ok) {
                          _context.next = 6;
                          break;
                        }

                        debug('Uploading \'' + path + '\' failed: %O', res);
                        throw new Error('Failed to upload ' + path);

                      case 6:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee, _this);
              }))());
            });

            _context2.next = 12;
            return _promise2.default.all(uploads);

          case 12:
            return _context2.abrupt('return', domain + '/iframe.html');

          case 13:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  function uploadToS3(_x2) {
    return _ref2.apply(this, arguments);
  }

  return uploadToS3;
}();

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = {"name":"storybook-chromatic","version":"1.2.3","description":"Visual Testing for Storybook","browser":"./dist/assets/storybook-addon.js","main":"./dist/assets/null-server.js","scripts":{"prebuild":"rm -rf ./dist","build:bin":"../../node_modules/.bin/babel -s -d ./dist ./src -D --only 'assets,bin'","build:webpack":"../../node_modules/.bin/webpack","build":"../../node_modules/.bin/npm-run-all --serial -l build:**","prepare":"npm run build","dev":"../../node_modules/.bin/npm-run-all --parallel -l 'build:** -- --watch'"},"bin":{"chromatic":"./dist/bin/chromatic.js"},"dependencies":{"@chromaui/localtunnel":"1.9.1-chromatic.3","apollo-fetch":"^0.6.0","babel-runtime":"^6.26.0","commander":"^2.9.0","debug":"^3.0.1","denodeify":"^1.2.1","env-ci":"^2.1.0","isomorphic-fetch":"^2.2.1","jsdom":"^11.5.1","jsonfile":"^4.0.0","minimatch":"^3.0.4","node-ask":"^1.0.1","node-loggly-bulk":"^2.2.4","strip-color":"^0.1.0","tree-kill":"^1.1.0","uuid":"^3.3.2"},"peerDependencies":{"@storybook/addons":"3.* || 4.*","@storybook/core":"3.* || 4.*"},"devDependencies":{"babel-cli":"^6.26.0","npm-run-all":"^4.0.2","prettier-eslint":"^7.1.0","tmp":"^0.0.33","webpack":"^3.10.0","webpack-cli":"^3.1.1","webpack-node-externals":"^1.6.0"}}

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("env-ci");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("minimatch");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("node-ask");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("tree-kill");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(4);

var _extends3 = _interopRequireDefault(_extends2);

var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(3);

var _promise2 = _interopRequireDefault(_promise);

var _stringify = __webpack_require__(24);

var _stringify2 = _interopRequireDefault(_stringify);

var _asyncToGenerator2 = __webpack_require__(0);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var waitForBuild = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(client, variables) {
    var _ref3, build, status, inProgressCount, snapshotCount, changeCount, errorCount;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return client.runQuery(TesterBuildQuery, variables);

          case 2:
            _ref3 = _context.sent;
            build = _ref3.app.build;

            debug('build:' + (0, _stringify2.default)(build));
            status = build.status, inProgressCount = build.inProgressCount, snapshotCount = build.snapshotCount, changeCount = build.changeCount, errorCount = build.errorCount;

            if (!(status === 'BUILD_IN_PROGRESS')) {
              _context.next = 11;
              break;
            }

            if (inProgressCount !== lastInProgressCount) {
              lastInProgressCount = inProgressCount;
              log(inProgressCount + '/' + pluralize(snapshotCount, 'snapshot') + ' remain to test. ' + ('(' + pluralize(changeCount, 'change') + ', ' + pluralize(errorCount, 'error') + ')'));
            }

            _context.next = 10;
            return new _promise2.default(function (resolve) {
              return setTimeout(resolve, BUILD_POLL_INTERVAL);
            });

          case 10:
            return _context.abrupt('return', waitForBuild(client, variables));

          case 11:
            return _context.abrupt('return', build);

          case 12:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function waitForBuild(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

var _denodeify = __webpack_require__(8);

var _denodeify2 = _interopRequireDefault(_denodeify);

var _nodeAsk = __webpack_require__(27);

var _debug = __webpack_require__(2);

var _debug2 = _interopRequireDefault(_debug);

var _treeKill = __webpack_require__(28);

var _treeKill2 = _interopRequireDefault(_treeKill);

var _envCi = __webpack_require__(25);

var _envCi2 = _interopRequireDefault(_envCi);

var _uuid = __webpack_require__(30);

var _url = __webpack_require__(29);

var _minimatch = __webpack_require__(26);

var _minimatch2 = _interopRequireDefault(_minimatch);

var _runtimes = __webpack_require__(18);

var _runtimes2 = _interopRequireDefault(_runtimes);

var _storybook = __webpack_require__(21);

var _storybook2 = _interopRequireDefault(_storybook);

var _startApp = __webpack_require__(20);

var _startApp2 = _interopRequireDefault(_startApp);

var _tunnel = __webpack_require__(15);

var _tunnel2 = _interopRequireDefault(_tunnel);

var _packageJson = __webpack_require__(17);

var _GraphQLClient = __webpack_require__(14);

var _GraphQLClient2 = _interopRequireDefault(_GraphQLClient);

var _git = __webpack_require__(16);

var _package = __webpack_require__(23);

var _environment = __webpack_require__(7);

var _sendDebugToLoggly = __webpack_require__(19);

var _sendDebugToLoggly2 = _interopRequireDefault(_sendDebugToLoggly);

var _uploadToS = __webpack_require__(22);

var _uploadToS2 = _interopRequireDefault(_uploadToS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BUILD_POLL_INTERVAL = 1000;

var TesterCreateAppTokenMutation = '\n  mutation TesterCreateAppTokenMutation($appCode: String!) {\n    createAppToken(code: $appCode)\n  }\n';

var TesterCreateBuildMutation = '\n  mutation TesterCreateBuildMutation($input: CreateBuildInput!, $isolatorUrl: String!) {\n    createBuild(input: $input, isolatorUrl: $isolatorUrl) {\n      id\n      number\n      specCount\n      snapshotCount\n      componentCount\n      webUrl\n    }\n  }\n';

var TesterBuildQuery = '\n  query TesterBuildQuery($buildNumber: Int!) {\n    app {\n      build(number: $buildNumber) {\n        id\n        status\n        autoAcceptChanges\n        inProgressCount: snapshotCount(statuses: [SNAPSHOT_IN_PROGRESS])\n        snapshotCount\n        changeCount\n        errorCount: snapshotCount(statuses: [SNAPSHOT_CAPTURE_ERROR])\n      }\n    }\n  }\n';

var debug = (0, _debug2.default)('storybook-chromatic:tester');

function log(msg) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$noPrefix = _ref.noPrefix,
      noPrefix = _ref$noPrefix === undefined ? false : _ref$noPrefix,
      _ref$level = _ref.level,
      level = _ref$level === undefined ? 'log' : _ref$level;

  if (!process.env.DISABLE_LOGGING) {
    if (noPrefix) {
      // eslint-disable-next-line no-console
      console[level](msg);
    } else {
      // eslint-disable-next-line no-console
      console[level]('Chromatic Tester: ' + msg);
    }
  }
}

function pluralize(n, noun, noNumber) {
  var pluralizedNoun = n === 1 ? noun : noun + 's';

  if (pluralizedNoun.endsWith('ys')) {
    pluralizedNoun = pluralizedNoun.replace(/ys$/, 'ies');
  }

  return noNumber ? pluralizedNoun : n + ' ' + pluralizedNoun;
}

var lastInProgressCount = void 0;

exports.default = function () {
  var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(_ref4) {
    var appCode = _ref4.appCode,
        scriptName = _ref4.scriptName,
        commandName = _ref4.commandName,
        _ref4$noStart = _ref4.noStart,
        noStart = _ref4$noStart === undefined ? false : _ref4$noStart,
        url = _ref4.url,
        dirname = _ref4.dirname,
        only = _ref4.only,
        _ref4$fromCI = _ref4.fromCI,
        inputFromCI = _ref4$fromCI === undefined ? false : _ref4$fromCI,
        _ref4$autoAcceptChang = _ref4.autoAcceptChanges,
        autoAcceptChanges = _ref4$autoAcceptChang === undefined ? false : _ref4$autoAcceptChang,
        _ref4$exitZeroOnChang = _ref4.exitZeroOnChanges,
        exitZeroOnChanges = _ref4$exitZeroOnChang === undefined ? false : _ref4$exitZeroOnChang,
        _ref4$ignoreLastBuild = _ref4.ignoreLastBuildOnBranch,
        ignoreLastBuildOnBranch = _ref4$ignoreLastBuild === undefined ? false : _ref4$ignoreLastBuild,
        _ref4$verbose = _ref4.verbose,
        verbose = _ref4$verbose === undefined ? false : _ref4$verbose,
        _ref4$interactive = _ref4.interactive,
        interactive = _ref4$interactive === undefined ? true : _ref4$interactive,
        _ref4$indexUrl = _ref4.indexUrl,
        indexUrl = _ref4$indexUrl === undefined ? _environment.CHROMATIC_INDEX_URL : _ref4$indexUrl,
        _ref4$tunnelUrl = _ref4.tunnelUrl,
        tunnelUrl = _ref4$tunnelUrl === undefined ? _environment.CHROMATIC_TUNNEL_URL : _ref4$tunnelUrl,
        _ref4$createTunnel = _ref4.createTunnel,
        createTunnel = _ref4$createTunnel === undefined ? true : _ref4$createTunnel,
        _ref4$originalArgv = _ref4.originalArgv,
        originalArgv = _ref4$originalArgv === undefined ? false : _ref4$originalArgv,
        _ref4$sessionId = _ref4.sessionId,
        sessionId = _ref4$sessionId === undefined ? (0, _uuid.v4)() : _ref4$sessionId;

    var client, _process$env, TRAVIS_EVENT_TYPE, TRAVIS_PULL_REQUEST_SLUG, TRAVIS_REPO_SLUG, _ref6, jwtToken, _ref7, commit, committedAt, committerEmail, committerName, branch, isTravisPrBuild, doAutoAcceptChanges, doExitZeroOnChanges, doIgnoreLastBuildOnBranch, baselineCommits, child, tunnel, fromCI, exitCode, isolatorUrl, cachedUrl, _parse, port, pathname, query, hash, cachedUrlObject, isolatorUrlObject, predicate, match, runtimeSpecs, _getStorybookInfo, storybookVersion, viewLayer, _ref9, _ref9$createBuild, number, snapshotCount, specCount, componentCount, webUrl, onlineHint, _ref10, status, buildAutoAcceptChanges, changeCount, errorCount, scriptCommand, confirmed;

    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            (0, _sendDebugToLoggly2.default)({ sessionId: sessionId });

            debug('Creating build with session id: ' + sessionId);
            debug('Connecting to index:' + indexUrl + ' and ' + (createTunnel ? 'using tunnel:' + tunnelUrl : 'not creating a tunnel'));

            client = new _GraphQLClient2.default({
              uri: indexUrl + '/graphql',
              headers: { 'x-chromatic-session-id': sessionId }
            });
            _process$env = process.env, TRAVIS_EVENT_TYPE = _process$env.TRAVIS_EVENT_TYPE, TRAVIS_PULL_REQUEST_SLUG = _process$env.TRAVIS_PULL_REQUEST_SLUG, TRAVIS_REPO_SLUG = _process$env.TRAVIS_REPO_SLUG;

            if (TRAVIS_EVENT_TYPE === 'pull_request' && TRAVIS_PULL_REQUEST_SLUG === TRAVIS_REPO_SLUG) {
              log('WARNING: Running Chromatic on a Travis PR build from an internal branch.\n\nIt is recommended to run Chromatic on the push builds from Travis where possible.\nWe advise turning on push builds and disabling Chromatic for internal PR builds.\nRead more: http://docs.chromaticqa.com/setup_ci#travis\n', { noPrefix: true, level: 'warn' });
            }

            if (appCode) {
              _context2.next = 8;
              break;
            }

            throw new Error('You must provide an app code  -- visit https://www.chromaticqa.com to get your code.' + '\nPass your app code with the `CHROMATIC_APP_CODE` environment variable or the `--app-code` flag.');

          case 8:
            if (scriptName || commandName || noStart) {
              _context2.next = 10;
              break;
            }

            throw new Error('Either scriptName, commandName or noStart is required');

          case 10:
            _context2.prev = 10;
            _context2.next = 13;
            return client.runQuery(TesterCreateAppTokenMutation, {
              appCode: appCode
            });

          case 13:
            _ref6 = _context2.sent;
            jwtToken = _ref6.createAppToken;

            client.setJwtToken(jwtToken);
            _context2.next = 23;
            break;

          case 18:
            _context2.prev = 18;
            _context2.t0 = _context2['catch'](10);

            if (!(_context2.t0[0] && _context2.t0[0].message && _context2.t0[0].message.match('No app with code'))) {
              _context2.next = 22;
              break;
            }

            throw new Error('Incorrect app code \'' + appCode + '\' -- visit https://www.chromaticqa.com to get your code');

          case 22:
            throw _context2.t0;

          case 23:
            _context2.next = 25;
            return (0, _git.getCommit)();

          case 25:
            _ref7 = _context2.sent;
            commit = _ref7.commit;
            committedAt = _ref7.committedAt;
            committerEmail = _ref7.committerEmail;
            committerName = _ref7.committerName;
            _context2.next = 32;
            return (0, _git.getBranch)();

          case 32:
            branch = _context2.sent;
            isTravisPrBuild = process.env.TRAVIS_EVENT_TYPE === 'pull_request';

            // Travis PR builds are weird, we want to ensure we mark build against the commit that was
            // merged from, rather than the resulting "psuedo" merge commit that doesn't stick around in the
            // history of the project (so approvals will get lost). We also have to ensure we use the right branch.

            if (!isTravisPrBuild) {
              _context2.next = 39;
              break;
            }

            commit = process.env.TRAVIS_PULL_REQUEST_SHA;
            branch = process.env.TRAVIS_PULL_REQUEST_BRANCH;

            if (!(!commit || !branch)) {
              _context2.next = 39;
              break;
            }

            throw new Error('`TRAVIS_EVENT_TYPE` environment variable set to \'pull_request\', \nbut `TRAVIS_PULL_REQUEST_SHA` and `TRAVIS_PULL_REQUEST_BRANCH` are not both set.\n\nRead more here: https://docs.chromaticqa.com/setup_ci#travis');

          case 39:

            // On certain CI systems, a branch is not checked out
            // (instead a detached head is used for the commit).
            if (branch === 'HEAD' || !branch) {
              branch = (0, _envCi2.default)().branch;

              if (branch === 'HEAD' || !branch) {
                // $HEAD is for netlify: https://www.netlify.com/docs/continuous-deployment/
                // $GERRIT_BRANCH is for Gerrit/Jenkins: https://wiki.jenkins.io/display/JENKINS/Gerrit+Trigger
                // $CI_BRANCH is a general setting that lots of systems use
                branch = process.env.HEAD || process.env.GERRIT_BRANCH || process.env.CI_BRANCH || branch || 'HEAD';
              }
            }

            debug('git info: ' + (0, _stringify2.default)({ commit: commit, committedAt: committedAt, branch: branch }));

            // These three options can be branch specific
            doAutoAcceptChanges = typeof autoAcceptChanges === 'string' ? autoAcceptChanges === branch : autoAcceptChanges;
            doExitZeroOnChanges = typeof exitZeroOnChanges === 'string' ? exitZeroOnChanges === branch : exitZeroOnChanges;
            doIgnoreLastBuildOnBranch = typeof ignoreLastBuildOnBranch === 'string' ? ignoreLastBuildOnBranch === branch : ignoreLastBuildOnBranch;
            _context2.next = 46;
            return (0, _git.getBaselineCommits)(client, {
              ignoreLastBuildOnBranch: doIgnoreLastBuildOnBranch
            });

          case 46:
            baselineCommits = _context2.sent;

            debug('Found baselineCommits: ' + baselineCommits);

            child = void 0;
            tunnel = void 0;
            fromCI = void 0;
            exitCode = 5;
            _context2.prev = 52;
            isolatorUrl = void 0;
            cachedUrl = void 0;

            if (!dirname) {
              _context2.next = 64;
              break;
            }

            log('Uploading your built storybook...');
            _context2.next = 59;
            return (0, _uploadToS2.default)({ client: client, dirname: dirname });

          case 59:
            isolatorUrl = _context2.sent;

            debug('uploading to s3, got ' + isolatorUrl);
            log('Uploaded your build, verifying');
            _context2.next = 94;
            break;

          case 64:
            if (noStart) {
              _context2.next = 72;
              break;
            }

            log('Starting storybook');
            _context2.next = 68;
            return (0, _startApp2.default)({ scriptName: scriptName, commandName: commandName, url: url });

          case 68:
            child = _context2.sent;

            log('Started storybook at ' + url);
            _context2.next = 78;
            break;

          case 72:
            if (!url) {
              _context2.next = 78;
              break;
            }

            _context2.next = 75;
            return (0, _startApp.checkResponse)(url);

          case 75:
            if (_context2.sent) {
              _context2.next = 77;
              break;
            }

            throw new Error('No server responding at ' + url + ' -- make sure you\'ve started it.');

          case 77:
            log('Detected storybook at ' + url);

          case 78:
            _parse = (0, _url.parse)(url, true), port = _parse.port, pathname = _parse.pathname, query = _parse.query, hash = _parse.hash;

            isolatorUrl = url;

            if (!createTunnel) {
              _context2.next = 92;
              break;
            }

            log('Opening tunnel to Chromatic capture servers');
            _context2.next = 84;
            return (0, _tunnel2.default)({ tunnelUrl: tunnelUrl, port: port });

          case 84:
            tunnel = _context2.sent;

            debug('Opened tunnel to ' + tunnel.url);

            // ** Are we using a v1 or v2 tunnel? **
            // If the tunnel returns a cachedUrl, we are using a v2 tunnel and need to use
            // the slightly esoteric URL format for the isolatorUrl.
            // If not, they are the same:
            cachedUrlObject = (0, _url.parse)(tunnel.cachedUrl || tunnel.url);

            cachedUrlObject.pathname = pathname;
            cachedUrlObject.query = query;
            cachedUrlObject.hash = hash;
            cachedUrl = cachedUrlObject.format();

            if (tunnel.cachedUrl) {
              isolatorUrlObject = (0, _url.parse)(tunnel.url, true);

              isolatorUrlObject.query = (0, _extends3.default)({}, isolatorUrlObject.query, {
                // This will encode the pathname and query into a single query parameter
                path: (0, _url.format)({ pathname: pathname, query: query })
              });
              isolatorUrlObject.hash = hash;

              // For some reason we need to unset this to change the params
              isolatorUrlObject.search = null;

              isolatorUrl = isolatorUrlObject.format();
            } else {
              // See comment about v1/v2 tunnel above
              isolatorUrl = cachedUrl;
            }

          case 92:

            debug('Connecting to ' + isolatorUrl + ' (cachedUrl ' + cachedUrl + ')');
            log('Uploading and verifying build (this may take a few minutes depending on your connection)');

          case 94:
            predicate = function predicate() {
              return true;
            };

            if (!only) {
              _context2.next = 101;
              break;
            }

            match = only.match(/(.*):([^:]*)/);

            if (match) {
              _context2.next = 99;
              break;
            }

            throw new Error('--only argument must provided in the form "componentName:storyName"');

          case 99:
            log('Running only story \'' + match[2] + '\' of component \'' + match[1] + '\'');

            predicate = function predicate(_ref8) {
              var name = _ref8.name,
                  componentName = _ref8.componentName,
                  otherComponentName = _ref8.component.name;
              return (0, _minimatch2.default)(name, match[2]) && (0, _minimatch2.default)(componentName || otherComponentName, match[1]);
            };

          case 101:
            _context2.next = 103;
            return (0, _runtimes2.default)(isolatorUrl, { verbose: verbose });

          case 103:
            _context2.t1 = predicate;
            runtimeSpecs = _context2.sent.filter(_context2.t1);

            if (!(runtimeSpecs.length === 0)) {
              _context2.next = 107;
              break;
            }

            throw new Error('Cannot run a build with no stories. Please add some stories!');

          case 107:

            log('Found ' + pluralize(runtimeSpecs.length, 'story'));

            // REPOSITORY_URL is for netlify: https://www.netlify.com/docs/continuous-deployment/
            fromCI = inputFromCI || !!process.env.CI || !!process.env.REPOSITORY_URL;
            _getStorybookInfo = (0, _storybook2.default)(), storybookVersion = _getStorybookInfo.storybookVersion, viewLayer = _getStorybookInfo.viewLayer;


            debug('Detected build fromCI:' + fromCI);
            debug('Detected package version:' + _package.version + ', storybook version:' + storybookVersion + ', view layer: ' + viewLayer);

            _context2.next = 114;
            return client.runQuery(TesterCreateBuildMutation, {
              input: {
                cachedUrl: cachedUrl,
                autoAcceptChanges: doAutoAcceptChanges,
                branch: branch,
                commit: commit,
                committedAt: committedAt,
                baselineCommits: baselineCommits,
                runtimeSpecs: runtimeSpecs,
                fromCI: fromCI,
                isTravisPrBuild: isTravisPrBuild,
                packageVersion: _package.version,
                storybookVersion: storybookVersion,
                viewLayer: viewLayer,
                committerEmail: committerEmail,
                committerName: committerName
              },
              isolatorUrl: isolatorUrl
            });

          case 114:
            _ref9 = _context2.sent;
            _ref9$createBuild = _ref9.createBuild;
            number = _ref9$createBuild.number;
            snapshotCount = _ref9$createBuild.snapshotCount;
            specCount = _ref9$createBuild.specCount;
            componentCount = _ref9$createBuild.componentCount;
            webUrl = _ref9$createBuild.webUrl;
            onlineHint = 'View it online at ' + webUrl;

            log('Started Build ' + number + ' ' + ('(' + pluralize(componentCount, 'component') + ', ' + pluralize(specCount, 'story') + ', ' + pluralize(snapshotCount, 'snapshot') + ').\n\n' + onlineHint + '.'));

            _context2.next = 125;
            return waitForBuild(client, {
              buildNumber: number
            });

          case 125:
            _ref10 = _context2.sent;
            status = _ref10.status;
            buildAutoAcceptChanges = _ref10.autoAcceptChanges;
            changeCount = _ref10.changeCount;
            errorCount = _ref10.errorCount;
            _context2.t2 = status;
            _context2.next = _context2.t2 === 'BUILD_PASSED' ? 133 : _context2.t2 === 'BUILD_ACCEPTED' ? 136 : _context2.t2 === 'BUILD_PENDING' ? 136 : _context2.t2 === 'BUILD_DENIED' ? 136 : _context2.t2 === 'BUILD_FAILED' ? 140 : _context2.t2 === 'BUILD_TIMED_OUT' ? 143 : _context2.t2 === 'BUILD_ERROR' ? 143 : 146;
            break;

          case 133:
            log('Build ' + number + ' passed! ' + onlineHint + '.');
            exitCode = 0;
            return _context2.abrupt('break', 147);

          case 136:
            log('Build ' + number + ' has ' + pluralize(changeCount, 'change') + '. ' + onlineHint + '.');
            exitCode = doExitZeroOnChanges || buildAutoAcceptChanges ? 0 : 1;
            if (exitCode !== 0) {
              log('Pass --exit-zero-on-changes if you want this command to exit successfully in this case.\n  Alternatively, pass --auto-accept-changes if you want changed builds to pass on this branch.\n  Read more: http://docs.chromaticqa.com/test');
            }
            return _context2.abrupt('break', 147);

          case 140:
            log('Build ' + number + ' has ' + pluralize(errorCount, 'error') + '. ' + onlineHint + '.');
            exitCode = 2;
            return _context2.abrupt('break', 147);

          case 143:
            log('Build ' + number + ' has failed to run. Our apologies. Please try again.');
            exitCode = 3;
            return _context2.abrupt('break', 147);

          case 146:
            throw new Error('Unexpected build status: ' + status);

          case 147:
            _context2.next = 158;
            break;

          case 149:
            _context2.prev = 149;
            _context2.t3 = _context2['catch'](52);

            if (!(_context2.t3.length && _context2.t3[0] && _context2.t3[0].message && _context2.t3[0].message.match(/Cannot run a build with no specs./))) {
              _context2.next = 156;
              break;
            }

            log(_context2.t3[0].message);
            exitCode = 255;
            _context2.next = 158;
            break;

          case 156:
            debug('Got error %O', _context2.t3);
            throw _context2.t3;

          case 158:
            _context2.prev = 158;

            if (tunnel) {
              tunnel.close();
            }

            if (!child) {
              _context2.next = 163;
              break;
            }

            _context2.next = 163;
            return (0, _denodeify2.default)(_treeKill2.default)(child.pid, 'SIGHUP');

          case 163:
            return _context2.finish(158);

          case 164:
            if (!(!(0, _packageJson.checkPackageJson)() && originalArgv && !fromCI && interactive)) {
              _context2.next = 170;
              break;
            }

            scriptCommand = ('CHROMATIC_APP_CODE=' + appCode + ' chromatic test ' + originalArgv.slice(2).join(' ')).replace(/--app-code[= ]\S+/, '').trim();
            _context2.next = 168;
            return (0, _nodeAsk.confirm)("\nYou have not added Chromatic's test script to your `package.json`. Would you like me to do it for you?");

          case 168:
            confirmed = _context2.sent;

            if (confirmed) {
              (0, _packageJson.addScriptToPackageJson)('chromatic', scriptCommand);
              log('\nAdded script `chromatic`. You can now run it here or in CI with `npm run chromatic` (or `yarn chromatic`)\n\nNOTE: I wrote your app code to the `CHROMATIC_APP_CODE` environment variable. The app code cannot be used to read snapshot data, it can only be used to create new builds. If you would still prefer not to check it into source control, you can remove it from `package.json` and set it via an environment variable instead.', { noPrefix: true });
            } else {
              log('\nNo problem. You can add it later with:\n{\n  "scripts": {\n    "chromatic": "' + scriptCommand + '"\n  }\n}', { noPrefix: true });
            }

          case 170:
            return _context2.abrupt('return', exitCode);

          case 171:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this, [[10, 18], [52, 149, 158, 164]]);
  }));

  function runTest(_x4) {
    return _ref5.apply(this, arguments);
  }

  return runTest;
}();

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("@chromaui/localtunnel");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("apollo-fetch");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/keys");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/values");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("jsdom");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("jsonfile");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("node-loggly-bulk");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("strip-color");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ })
/******/ ]);
//# sourceMappingURL=tester.js.map