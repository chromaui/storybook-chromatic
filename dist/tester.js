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
/******/ 	return __webpack_require__(__webpack_require__.s = 112);
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

module.exports = require("babel-runtime/core-js/promise");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/toConsumableArray");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(0);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _apolloFetch = __webpack_require__(113);

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
/* 12 */
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
    CHROMATIC_APP_CODE = _process$env.CHROMATIC_APP_CODE;
exports.CHROMATIC_SERVER_PORT = CHROMATIC_SERVER_PORT;
exports.CHROMATIC_INDEX_URL = CHROMATIC_INDEX_URL;
exports.CHROMATIC_TUNNEL_URL = CHROMATIC_TUNNEL_URL;
exports.CHROMATIC_CREATE_TUNNEL = CHROMATIC_CREATE_TUNNEL;
exports.CHROMATIC_APP_CODE = CHROMATIC_APP_CODE;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(0);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _localtunnel = __webpack_require__(120);

var _localtunnel2 = _interopRequireDefault(_localtunnel);

var _util = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
    var tunnelUrl = _ref.tunnelUrl,
        port = _ref.port;
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
            return _context.abrupt('return', (0, _util.promisify)(_localtunnel2.default)(port, {
              local_host: 'localhost',
              host: tunnelUrl
            }));

          case 3:
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBaselineCommits = exports.getBranch = exports.getCommit = exports.FETCH_N_INITIAL_BUILD_COMMITS = undefined;

var _toConsumableArray2 = __webpack_require__(8);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _slicedToArray2 = __webpack_require__(116);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(0);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var execGitCommand = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(command) {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            return _context.abrupt('return', (0, _child_process.execSync)(command).toString().trim());

          case 4:
            _context.prev = 4;
            _context.t0 = _context['catch'](0);

            if (_context.t0.message && _context.t0.message.match('Not a git repository')) {
              // eslint-disable-next-line no-console
              console.error('Unable to execute git command \'' + command + '\'.\n');
              // eslint-disable-next-line no-console
              console.error('Chromatic only works in git projects.\n' + 'Contact us at support@hichroma.com if you need to use Chromatic outside of one.\n\n');
            }
            throw _context.t0;

          case 8:
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
            return execGitCommand('git cat-file -e ' + commit + '^{commit}');

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
              return c + '^@';
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
    var branch, _ref12, committedAt, _ref13, _ref13$app, firstBuild, lastBuild, initialCommitsWithBuilds, extraBaselineCommits, commitsWithBuilds;

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
            _ref12 = _context8.sent;
            committedAt = _ref12.committedAt;
            _context8.next = 9;
            return client.runQuery(TesterFirstCommittedAtQuery, {
              branch: branch
            });

          case 9:
            _ref13 = _context8.sent;
            _ref13$app = _ref13.app;
            firstBuild = _ref13$app.firstBuild;
            lastBuild = _ref13$app.lastBuild;

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

            if (!(branch !== 'HEAD' && lastBuild && lastBuild.committedAt <= committedAt)) {
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

  return function getBaselineCommits(_x9) {
    return _ref11.apply(this, arguments);
  };
}();

var _child_process = __webpack_require__(9);

var _debug = __webpack_require__(3);

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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _values = __webpack_require__(115);

var _values2 = _interopRequireDefault(_values);

exports.checkPackageJson = checkPackageJson;
exports.addScriptToPackageJson = addScriptToPackageJson;

var _path = __webpack_require__(10);

var _path2 = _interopRequireDefault(_path);

var _jsonfile = __webpack_require__(119);

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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(2);

var _promise2 = _interopRequireDefault(_promise);

var _keys = __webpack_require__(114);

var _keys2 = _interopRequireDefault(_keys);

var _asyncToGenerator2 = __webpack_require__(0);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _jsdom = __webpack_require__(118);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addShimsToJSDOM(dom) {
  Object.defineProperty(dom.window, 'matchMedia', {
    value: function value() {
      return {
        matches: true,
        addListener: function addListener() {},
        removeListener: function removeListener() {}
      };
    }
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
    value: new LocalStorageMock()
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

  Object.defineProperty(dom.window, 'Worker', WorkerMock);

  Object.defineProperty(dom.window, 'crypto', {
    value: {
      getRandomValues: function getRandomValues() {
        return 0;
      }
    }
  });

  Object.defineProperty(dom.window.navigator, 'mimeTypes', {
    value: function value() {
      return [];
    }
  });
} /* eslint-disable no-console, class-methods-use-this */

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
                  reject(new Error('Didn\'t find \'window.__chromaticRuntimeSpecs__\' at ' + url + '.'));
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkResponse = undefined;

var _toConsumableArray2 = __webpack_require__(8);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _promise = __webpack_require__(2);

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

var _child_process = __webpack_require__(9);

var _isomorphicFetch = __webpack_require__(117);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _path = __webpack_require__(10);

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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getStorybookInfo;
// Figure out the storybook version and view layer

var viewLayers = ['react', 'angular', 'vue', 'polymer', 'mithril', 'marko', 'html'];

function getStorybookInfo() {
  while (viewLayers.length > 0) {
    var viewLayer = viewLayers.shift();
    try {
      // eslint-disable-next-line global-require, import/no-dynamic-require
      var _require = __webpack_require__(25)("./" + viewLayer + '/package.json'),
          storybookVersion = _require.version;

      return { viewLayer: viewLayer, storybookVersion: storybookVersion };
    } catch (err) {
      // This is OK
    }
  }

  throw new Error('Couldn\'t discover storybook version. Try upgrading the storybook-chromatic package?');
}

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = {"name":"storybook-chromatic","version":"0.10.0-beta.5","description":"Visual Testing for Storybook","browser":"./dist/assets/storybook-addon.js","main":"./dist/assets/null-server.js","scripts":{"prebuild":"rm -rf ./dist","build:bin":"../../node_modules/.bin/babel -s -d ./dist ./src -D --only 'assets,bin'","build:webpack":"../../node_modules/.bin/webpack","build":"../../node_modules/.bin/npm-run-all --serial -l build:**","prepare":"npm run build","dev":"../../node_modules/.bin/npm-run-all --parallel -l 'build:** -- --watch'"},"bin":{"chromatic":"./dist/bin/chromatic.js"},"dependencies":{"apollo-fetch":"^0.6.0","babel-runtime":"^6.26.0","commander":"^2.9.0","debug":"^3.0.1","env-ci":"^2.1.0","isomorphic-fetch":"^2.2.1","jsdom":"^11.5.1","jsonfile":"^4.0.0","localtunnel":"^1.8.3","node-ask":"^1.0.1","tree-kill":"^1.1.0"},"peerDependencies":{"@storybook/addons":"3.* || 4.*","@storybook/core":"3.* || 4.*"},"devDependencies":{"babel-cli":"^6.26.0","npm-run-all":"^4.0.2","prettier-eslint":"^7.1.0","tmp":"^0.0.33","webpack":"^3.10.0","webpack-node-externals":"^1.6.0"}}

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("env-ci");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("node-ask");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("tree-kill");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./addon-actions/node_modules/prop-types/package.json": 26,
	"./addon-actions/node_modules/uuid/package.json": 27,
	"./addon-actions/package.json": 28,
	"./addon-storyshots/node_modules/json-parse-better-errors/package.json": 29,
	"./addon-storyshots/node_modules/load-json-file/package.json": 30,
	"./addon-storyshots/node_modules/parse-json/package.json": 31,
	"./addon-storyshots/node_modules/pify/package.json": 32,
	"./addon-storyshots/node_modules/read-pkg-up/package.json": 33,
	"./addon-storyshots/node_modules/read-pkg/package.json": 34,
	"./addon-storyshots/package.json": 35,
	"./addons/package.json": 36,
	"./channel-postmessage/package.json": 37,
	"./channels/package.json": 38,
	"./client-logger/package.json": 39,
	"./components/node_modules/emotion-theming/package.json": 40,
	"./components/node_modules/hoist-non-react-statics/package.json": 41,
	"./components/node_modules/prop-types/package.json": 42,
	"./components/package.json": 43,
	"./core-events/package.json": 44,
	"./core/node_modules/accepts/package.json": 45,
	"./core/node_modules/ansi-styles/package.json": 46,
	"./core/node_modules/chalk/package.json": 47,
	"./core/node_modules/depd/package.json": 48,
	"./core/node_modules/encodeurl/package.json": 49,
	"./core/node_modules/events/package.json": 50,
	"./core/node_modules/express/node_modules/qs/package.json": 51,
	"./core/node_modules/express/package.json": 52,
	"./core/node_modules/finalhandler/package.json": 53,
	"./core/node_modules/has-flag/package.json": 54,
	"./core/node_modules/ipaddr.js/package.json": 55,
	"./core/node_modules/json5/package.json": 56,
	"./core/node_modules/mime-db/package.json": 57,
	"./core/node_modules/mime-types/package.json": 58,
	"./core/node_modules/mime/package.json": 59,
	"./core/node_modules/prop-types/package.json": 60,
	"./core/node_modules/proxy-addr/package.json": 61,
	"./core/node_modules/qs/package.json": 62,
	"./core/node_modules/send/package.json": 63,
	"./core/node_modules/serve-static/package.json": 64,
	"./core/node_modules/supports-color/package.json": 65,
	"./core/node_modules/type-is/package.json": 66,
	"./core/package.json": 67,
	"./mantra-core/node_modules/@storybook/react-komposer/package.json": 68,
	"./mantra-core/package.json": 69,
	"./node-logger/package.json": 70,
	"./podda/package.json": 71,
	"./react-dev-utils/node_modules/ansi-regex/package.json": 72,
	"./react-dev-utils/node_modules/ansi-styles/package.json": 73,
	"./react-dev-utils/node_modules/browserslist/package.json": 74,
	"./react-dev-utils/node_modules/chalk/package.json": 75,
	"./react-dev-utils/node_modules/cross-spawn/package.json": 76,
	"./react-dev-utils/node_modules/electron-to-chromium/package.json": 77,
	"./react-dev-utils/node_modules/external-editor/package.json": 78,
	"./react-dev-utils/node_modules/filesize/package.json": 79,
	"./react-dev-utils/node_modules/globby/package.json": 80,
	"./react-dev-utils/node_modules/has-flag/package.json": 81,
	"./react-dev-utils/node_modules/ignore/package.json": 82,
	"./react-dev-utils/node_modules/inquirer/node_modules/ansi-styles/package.json": 83,
	"./react-dev-utils/node_modules/inquirer/node_modules/chalk/package.json": 84,
	"./react-dev-utils/node_modules/inquirer/node_modules/has-flag/package.json": 85,
	"./react-dev-utils/node_modules/inquirer/node_modules/supports-color/package.json": 86,
	"./react-dev-utils/node_modules/inquirer/package.json": 87,
	"./react-dev-utils/node_modules/pify/package.json": 88,
	"./react-dev-utils/node_modules/rxjs/package.json": 89,
	"./react-dev-utils/node_modules/semver/package.json": 90,
	"./react-dev-utils/node_modules/strip-ansi/package.json": 91,
	"./react-dev-utils/node_modules/supports-color/package.json": 92,
	"./react-dev-utils/node_modules/symbol-observable/package.json": 93,
	"./react-dev-utils/package.json": 94,
	"./react-komposer/package.json": 95,
	"./react-simple-di/package.json": 96,
	"./react-stubber/package.json": 97,
	"./react/node_modules/babel-preset-env/package.json": 98,
	"./react/node_modules/browserslist/package.json": 99,
	"./react/node_modules/common-tags/package.json": 100,
	"./react/node_modules/core-js/package.json": 101,
	"./react/node_modules/electron-to-chromium/package.json": 102,
	"./react/node_modules/prop-types/package.json": 103,
	"./react/package.json": 104,
	"./ui/example/package.json": 105,
	"./ui/node_modules/events/package.json": 106,
	"./ui/node_modules/prop-types/package.json": 107,
	"./ui/node_modules/qs/package.json": 108,
	"./ui/node_modules/react-modal/node_modules/prop-types/package.json": 109,
	"./ui/node_modules/react-modal/package.json": 110,
	"./ui/package.json": 111
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 25;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = {"name":"prop-types","version":"15.6.1","description":"Runtime type checking for React props and similar objects.","main":"index.js","license":"MIT","files":["LICENSE","README.md","checkPropTypes.js","factory.js","factoryWithThrowingShims.js","factoryWithTypeCheckers.js","index.js","prop-types.js","prop-types.min.js","lib"],"repository":"facebook/prop-types","keywords":["react"],"bugs":{"url":"https://github.com/facebook/prop-types/issues"},"homepage":"https://facebook.github.io/react/","dependencies":{"fbjs":"^0.8.16","loose-envify":"^1.3.1","object-assign":"^4.1.1"},"scripts":{"test":"jest","umd":"NODE_ENV=development browserify index.js -t envify --standalone PropTypes -o prop-types.js","umd-min":"NODE_ENV=production browserify index.js -t envify -t uglifyify --standalone PropTypes  -p bundle-collapser/plugin -o | uglifyjs --compress unused,dead_code -o prop-types.min.js","build":"yarn umd && yarn umd-min","prepublish":"yarn build"},"devDependencies":{"babel-jest":"^19.0.0","babel-preset-react":"^6.24.1","browserify":"^14.3.0","bundle-collapser":"^1.2.1","envify":"^4.0.0","jest":"^19.0.2","react":"^15.5.1","uglifyify":"^3.0.4","uglifyjs":"^2.4.10"},"browserify":{"transform":["loose-envify"]}}

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = {"name":"uuid","version":"3.2.1","description":"RFC4122 (v1, v4, and v5) UUIDs","keywords":["uuid","guid","rfc4122"],"license":"MIT","bin":{"uuid":"./bin/uuid"},"devDependencies":{"eslint":"4.5.0","mocha":"3.1.2","runmd":"1.0.1","standard-version":"4.2.0"},"scripts":{"test":"mocha test/test.js","md":"runmd --watch --output=README.md README_js.md","release":"standard-version","prepare":"runmd --output=README.md README_js.md"},"browser":{"./lib/rng.js":"./lib/rng-browser.js","./lib/sha1.js":"./lib/sha1-browser.js","./lib/md5.js":"./lib/md5-browser.js"},"repository":{"type":"git","url":"https://github.com/kelektiv/node-uuid.git"},"dependencies":{}}

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = {"name":"@storybook/addon-actions","version":"4.0.0-alpha.8","description":"Action Logger addon for storybook","keywords":["storybook"],"homepage":"https://github.com/storybooks/storybook/tree/master/addons/actions","bugs":{"url":"https://github.com/storybooks/storybook/issues"},"repository":{"type":"git","url":"https://github.com/storybooks/storybook.git"},"license":"MIT","main":"dist/index.js","jsnext:main":"src/index.js","scripts":{"prepare":"node ../../scripts/prepare.js"},"dependencies":{"@storybook/addons":"4.0.0-alpha.8","@storybook/components":"4.0.0-alpha.8","@storybook/core-events":"4.0.0-alpha.8","babel-runtime":"^6.26.0","deep-equal":"^1.0.1","emotion":"^9.1.3","global":"^4.3.2","lodash.isequal":"^4.5.0","make-error":"^1.3.4","prop-types":"^15.6.1","react-emotion":"^9.1.3","react-inspector":"^2.3.0","uuid":"^3.2.1"},"peerDependencies":{"react":"*"}}

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = {"name":"json-parse-better-errors","version":"1.0.1","description":"JSON.parse with context information on error","main":"index.js","files":["*.js"],"scripts":{"prerelease":"npm t","postrelease":"npm publish && git push --follow-tags","pretest":"standard","release":"standard-version -s","test":"tap -J --coverage test/*.js","update-coc":"weallbehave -o . && git add CODE_OF_CONDUCT.md && git commit -m 'docs(coc): updated CODE_OF_CONDUCT.md'","update-contrib":"weallcontribute -o . && git add CONTRIBUTING.md && git commit -m 'docs(contributing): updated CONTRIBUTING.md'"},"repository":"https://github.com/zkat/json-parse-better-errors","keywords":["JSON","parser"],"author":{"name":"Kat Marchán","email":"kzm@sykosomatic.org","twitter":"maybekatz"},"license":"MIT","devDependencies":{"nyc":"^10.3.2","standard":"^9.0.2","standard-version":"^4.1.0","tap":"^10.3.3","weallbehave":"^1.2.0","weallcontribute":"^1.0.8"},"config":{"nyc":{"exclude":["node_modules/**","test/**"]}}}

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = {"name":"load-json-file","version":"4.0.0","description":"Read and parse a JSON file","license":"MIT","repository":"sindresorhus/load-json-file","author":{"name":"Sindre Sorhus","email":"sindresorhus@gmail.com","url":"sindresorhus.com"},"engines":{"node":">=4"},"scripts":{"test":"xo && ava"},"files":["index.js"],"keywords":["read","json","parse","file","fs","graceful","load"],"dependencies":{"graceful-fs":"^4.1.2","parse-json":"^4.0.0","pify":"^3.0.0","strip-bom":"^3.0.0"},"devDependencies":{"ava":"*","xo":"*"},"xo":{"esnext":true}}

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = {"name":"parse-json","version":"4.0.0","description":"Parse JSON with more helpful errors","license":"MIT","repository":"sindresorhus/parse-json","author":{"name":"Sindre Sorhus","email":"sindresorhus@gmail.com","url":"sindresorhus.com"},"engines":{"node":">=4"},"scripts":{"test":"xo && nyc ava"},"files":["index.js","vendor"],"keywords":["parse","json","graceful","error","message","humanize","friendly","helpful","string","str"],"dependencies":{"error-ex":"^1.3.1","json-parse-better-errors":"^1.0.1"},"devDependencies":{"ava":"*","nyc":"^11.2.1","xo":"*"}}

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = {"name":"pify","version":"3.0.0","description":"Promisify a callback-style function","license":"MIT","repository":"sindresorhus/pify","author":{"name":"Sindre Sorhus","email":"sindresorhus@gmail.com","url":"sindresorhus.com"},"engines":{"node":">=4"},"scripts":{"test":"xo && ava && npm run optimization-test","optimization-test":"node --allow-natives-syntax optimization-test.js"},"files":["index.js"],"keywords":["promise","promises","promisify","all","denodify","denodeify","callback","cb","node","then","thenify","convert","transform","wrap","wrapper","bind","to","async","await","es2015","bluebird"],"devDependencies":{"ava":"*","pinkie-promise":"^2.0.0","v8-natives":"^1.0.0","xo":"*"}}

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = {"name":"read-pkg-up","version":"3.0.0","description":"Read the closest package.json file","license":"MIT","repository":"sindresorhus/read-pkg-up","author":{"name":"Sindre Sorhus","email":"sindresorhus@gmail.com","url":"sindresorhus.com"},"engines":{"node":">=4"},"scripts":{"test":"xo && ava"},"files":["index.js"],"keywords":["json","read","parse","file","fs","graceful","load","pkg","package","find","up","find-up","findup","look-up","look","search","match","resolve","parent","parents","folder","directory","dir","walk","walking","path"],"dependencies":{"find-up":"^2.0.0","read-pkg":"^3.0.0"},"devDependencies":{"ava":"*","xo":"*"}}

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = {"name":"read-pkg","version":"3.0.0","description":"Read a package.json file","license":"MIT","repository":"sindresorhus/read-pkg","author":{"name":"Sindre Sorhus","email":"sindresorhus@gmail.com","url":"sindresorhus.com"},"engines":{"node":">=4"},"scripts":{"test":"xo && ava"},"files":["index.js"],"keywords":["json","read","parse","file","fs","graceful","load","pkg","package","normalize"],"dependencies":{"load-json-file":"^4.0.0","normalize-package-data":"^2.3.2","path-type":"^3.0.0"},"devDependencies":{"ava":"*","xo":"*"}}

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = {"name":"@storybook/addon-storyshots","version":"4.0.0-alpha.8","description":"StoryShots is a Jest Snapshot Testing Addon for Storybook.","repository":{"type":"git","url":"https://github.com/storybooks/storybook.git"},"license":"MIT","main":"dist/index.js","jsnext:main":"src/index.js","scripts":{"build-storybook":"build-storybook","example":"jest storyshot.test","prepare":"node ../../scripts/prepare.js","storybook":"start-storybook -p 6006"},"dependencies":{"@storybook/addons":"4.0.0-alpha.8","@storybook/core":"4.0.0-alpha.8","@storybook/node-logger":"4.0.0-alpha.8","babel-runtime":"^6.26.0","glob":"^7.1.2","global":"^4.3.2","jest-image-snapshot":"^2.4.1","jest-specific-snapshot":"^0.5.0","puppeteer":"^1.4.0","read-pkg-up":"^3.0.0"},"devDependencies":{"@storybook/addon-actions":"4.0.0-alpha.8","@storybook/addon-links":"4.0.0-alpha.8","@storybook/addons":"4.0.0-alpha.8","@storybook/react":"4.0.0-alpha.8","enzyme-to-json":"^3.3.4","react":"^16.3.2"},"peerDependencies":{"babel-core":"^6.26.0 || ^7.0.0-0"}}

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = {"name":"@storybook/addons","version":"4.0.0-alpha.8","description":"Storybook addons store","keywords":["storybook"],"homepage":"https://github.com/storybooks/storybook/tree/master/packages/addons","bugs":{"url":"https://github.com/storybooks/storybook/issues"},"repository":{"type":"git","url":"https://github.com/storybooks/storybook.git"},"license":"MIT","main":"dist/index.js","jsnext:main":"src/index.js","scripts":{"prepare":"node ../../scripts/prepare.js"},"dependencies":{"@storybook/channels":"4.0.0-alpha.8","global":"^4.3.2","util-deprecate":"^1.0.2"}}

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = {"name":"@storybook/channel-postmessage","version":"4.0.0-alpha.8","description":"","license":"MIT","main":"dist/index.js","jsnext:main":"src/index.js","scripts":{"prepare":"node ../../scripts/prepare.js"},"dependencies":{"@storybook/channels":"4.0.0-alpha.8","global":"^4.3.2","json-stringify-safe":"^5.0.1"}}

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = {"name":"@storybook/channels","version":"4.0.0-alpha.8","description":"","license":"MIT","main":"dist/index.js","jsnext:main":"src/index.js","scripts":{"prepare":"node ../../scripts/prepare.js"}}

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = {"name":"@storybook/client-logger","version":"4.0.0-alpha.8","description":"","license":"MIT","main":"dist/index.js","jsnext:main":"src/index.js","scripts":{"prepare":"node ../../scripts/prepare.js"}}

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = {"name":"emotion-theming","version":"9.1.2","description":"A CSS-in-JS theming solution, inspired by styled-components","main":"dist/index.cjs.js","module":"dist/index.es.js","types":"types/index.d.ts","files":["src","dist","types"],"scripts":{"build":"npm-run-all clean rollup","test:typescript":"dtslint types","clean":"rimraf dist","rollup":"rollup -c ../../rollup.config.js","watch":"rollup -c ../../rollup.config.js --watch"},"repository":"https://github.com/emotion-js/emotion/tree/master/packages/emotion-theming","keywords":["react","theme","theming","emotion","cssinjs","css-in-js"],"author":"styled-components team","contributors":["Evan Scott <probablyup@gmail.com> (https://github.com/probablyup)"],"license":"MIT","bugs":{"url":"https://github.com/emotion-js/emotion/issues"},"homepage":"https://emotion.sh","devDependencies":{"@types/react":"16.0.16","cross-env":"^5.0.1","dtslint":"^0.2.0","prop-types":"^15.5.8","rimraf":"^2.6.1","rollup":"^0.51.3"},"dependencies":{"hoist-non-react-statics":"^2.3.1"},"peerDependencies":{"prop-types":">= 15","react":">= 15"}}

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = {"name":"hoist-non-react-statics","version":"2.3.1","description":"Copies non-react specific statics from a child component to a parent component","main":"index.js","types":"index.d.ts","repository":{"type":"git","url":"git://github.com/mridgway/hoist-non-react-statics.git"},"scripts":{"cover":"node node_modules/istanbul/lib/cli.js cover --dir artifacts -- ./node_modules/mocha/bin/_mocha tests/unit/ --recursive --compilers js:babel/register --reporter spec","lint":"eslint ./index.js","test":"mocha tests/unit/ --recursive --compilers js:babel-register --reporter spec"},"author":"Michael Ridgway <mcridgway@gmail.com>","license":"BSD-3-Clause","devDependencies":{"babel":"^6.23.0","babel-cli":"^6.24.1","babel-plugin-transform-class-properties":"^6.24.1","babel-plugin-transform-react-jsx-source":"^6.22.0","babel-preset-es2015":"^6.24.1","babel-preset-es2016":"^6.24.1","babel-preset-react":"^6.24.1","babel-register":"^6.24.1","chai":"^4.0.1","coveralls":"^2.11.1","create-react-class":"^15.5.3","eslint":"^3.8.0","istanbul":"^0.4.5","mocha":"^3.4.2","pre-commit":"^1.0.7","react":"^15.0.0"},"keywords":["react"]}

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = {"name":"prop-types","version":"15.6.1","description":"Runtime type checking for React props and similar objects.","main":"index.js","license":"MIT","files":["LICENSE","README.md","checkPropTypes.js","factory.js","factoryWithThrowingShims.js","factoryWithTypeCheckers.js","index.js","prop-types.js","prop-types.min.js","lib"],"repository":"facebook/prop-types","keywords":["react"],"bugs":{"url":"https://github.com/facebook/prop-types/issues"},"homepage":"https://facebook.github.io/react/","dependencies":{"fbjs":"^0.8.16","loose-envify":"^1.3.1","object-assign":"^4.1.1"},"scripts":{"test":"jest","umd":"NODE_ENV=development browserify index.js -t envify --standalone PropTypes -o prop-types.js","umd-min":"NODE_ENV=production browserify index.js -t envify -t uglifyify --standalone PropTypes  -p bundle-collapser/plugin -o | uglifyjs --compress unused,dead_code -o prop-types.min.js","build":"yarn umd && yarn umd-min","prepublish":"yarn build"},"devDependencies":{"babel-jest":"^19.0.0","babel-preset-react":"^6.24.1","browserify":"^14.3.0","bundle-collapser":"^1.2.1","envify":"^4.0.0","jest":"^19.0.2","react":"^15.5.1","uglifyify":"^3.0.4","uglifyjs":"^2.4.10"},"browserify":{"transform":["loose-envify"]}}

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = {"name":"@storybook/components","version":"4.0.0-alpha.8","description":"Core Storybook Components","repository":{"type":"git","url":"https://github.com/storybooks/storybook.git"},"license":"MIT","main":"dist/index.js","jsnext:main":"src/index.js","scripts":{"build-storybook":"build-storybook","prepare":"node ../../scripts/prepare.js","storybook":"start-storybook -p 6006"},"dependencies":{"emotion":"^9.1.3","emotion-theming":"^9.1.2","global":"^4.3.2","lodash.pick":"^4.4.0","lodash.throttle":"^4.1.1","prop-types":"^15.6.1","react-emotion":"^9.1.3","react-split-pane":"^0.1.77"},"devDependencies":{"@storybook/addon-actions":"4.0.0-alpha.8","@storybook/addon-knobs":"4.0.0-alpha.8","@storybook/react":"4.0.0-alpha.8"},"peerDependencies":{"react":"*","react-dom":"*"}}

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = {"name":"@storybook/core-events","version":"4.0.0-alpha.8","description":"Event names used in storybook core","license":"MIT","main":"index.js"}

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = {"name":"accepts","description":"Higher-level content negotiation","version":"1.3.5","contributors":["Douglas Christopher Wilson <doug@somethingdoug.com>","Jonathan Ong <me@jongleberry.com> (http://jongleberry.com)"],"license":"MIT","repository":"jshttp/accepts","dependencies":{"mime-types":"~2.1.18","negotiator":"0.6.1"},"devDependencies":{"eslint":"4.18.1","eslint-config-standard":"11.0.0","eslint-plugin-import":"2.9.0","eslint-plugin-markdown":"1.0.0-beta.6","eslint-plugin-node":"6.0.1","eslint-plugin-promise":"3.6.0","eslint-plugin-standard":"3.0.1","istanbul":"0.4.5","mocha":"~1.21.5"},"files":["LICENSE","HISTORY.md","index.js"],"engines":{"node":">= 0.6"},"scripts":{"lint":"eslint --plugin markdown --ext js,md .","test":"mocha --reporter spec --check-leaks --bail test/","test-cov":"istanbul cover node_modules/mocha/bin/_mocha -- --reporter dot --check-leaks test/","test-travis":"istanbul cover node_modules/mocha/bin/_mocha --report lcovonly -- --reporter spec --check-leaks test/"},"keywords":["content","negotiation","accept","accepts"]}

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = {"name":"ansi-styles","version":"3.2.1","description":"ANSI escape codes for styling strings in the terminal","license":"MIT","repository":"chalk/ansi-styles","author":{"name":"Sindre Sorhus","email":"sindresorhus@gmail.com","url":"sindresorhus.com"},"engines":{"node":">=4"},"scripts":{"test":"xo && ava","screenshot":"svg-term --command='node screenshot' --out=screenshot.svg --padding=3 --width=55 --height=3 --at=1000 --no-cursor"},"files":["index.js"],"keywords":["ansi","styles","color","colour","colors","terminal","console","cli","string","tty","escape","formatting","rgb","256","shell","xterm","log","logging","command-line","text"],"dependencies":{"color-convert":"^1.9.0"},"devDependencies":{"ava":"*","babel-polyfill":"^6.23.0","svg-term-cli":"^2.1.1","xo":"*"},"ava":{"require":"babel-polyfill"}}

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = {"name":"chalk","version":"2.4.1","description":"Terminal string styling done right","license":"MIT","repository":"chalk/chalk","engines":{"node":">=4"},"scripts":{"test":"xo && tsc --project types && flow --max-warnings=0 && nyc ava","bench":"matcha benchmark.js","coveralls":"nyc report --reporter=text-lcov | coveralls"},"files":["index.js","templates.js","types/index.d.ts","index.js.flow"],"keywords":["color","colour","colors","terminal","console","cli","string","str","ansi","style","styles","tty","formatting","rgb","256","shell","xterm","log","logging","command-line","text"],"dependencies":{"ansi-styles":"^3.2.1","escape-string-regexp":"^1.0.5","supports-color":"^5.3.0"},"devDependencies":{"ava":"*","coveralls":"^3.0.0","execa":"^0.9.0","flow-bin":"^0.68.0","import-fresh":"^2.0.0","matcha":"^0.7.0","nyc":"^11.0.2","resolve-from":"^4.0.0","typescript":"^2.5.3","xo":"*"},"types":"types/index.d.ts","xo":{"envs":["node","mocha"],"ignores":["test/_flow.js"]}}

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = {"name":"depd","description":"Deprecate all the things","version":"1.1.2","author":"Douglas Christopher Wilson <doug@somethingdoug.com>","license":"MIT","keywords":["deprecate","deprecated"],"repository":"dougwilson/nodejs-depd","browser":"lib/browser/index.js","devDependencies":{"benchmark":"2.1.4","beautify-benchmark":"0.2.4","eslint":"3.19.0","eslint-config-standard":"7.1.0","eslint-plugin-markdown":"1.0.0-beta.7","eslint-plugin-promise":"3.6.0","eslint-plugin-standard":"3.0.1","istanbul":"0.4.5","mocha":"~1.21.5"},"files":["lib/","History.md","LICENSE","index.js","Readme.md"],"engines":{"node":">= 0.6"},"scripts":{"bench":"node benchmark/index.js","lint":"eslint --plugin markdown --ext js,md .","test":"mocha --reporter spec --bail test/","test-ci":"istanbul cover node_modules/mocha/bin/_mocha --report lcovonly -- --reporter spec --no-exit test/","test-cov":"istanbul cover node_modules/mocha/bin/_mocha -- --reporter dot test/"}}

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = {"name":"encodeurl","description":"Encode a URL to a percent-encoded form, excluding already-encoded sequences","version":"1.0.2","contributors":["Douglas Christopher Wilson <doug@somethingdoug.com>"],"license":"MIT","keywords":["encode","encodeurl","url"],"repository":"pillarjs/encodeurl","devDependencies":{"eslint":"3.19.0","eslint-config-standard":"10.2.1","eslint-plugin-import":"2.8.0","eslint-plugin-node":"5.2.1","eslint-plugin-promise":"3.6.0","eslint-plugin-standard":"3.0.1","istanbul":"0.4.5","mocha":"2.5.3"},"files":["LICENSE","HISTORY.md","README.md","index.js"],"engines":{"node":">= 0.8"},"scripts":{"lint":"eslint .","test":"mocha --reporter spec --bail --check-leaks test/","test-cov":"istanbul cover node_modules/mocha/bin/_mocha -- --reporter dot --check-leaks test/","test-travis":"istanbul cover node_modules/mocha/bin/_mocha --report lcovonly -- --reporter spec --check-leaks test/"}}

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = {"name":"events","id":"events","version":"2.0.0","description":"Node's event emitter for all engines.","keywords":["events","eventEmitter","eventDispatcher","listeners"],"author":"Irakli Gozalishvili <rfobic@gmail.com> (http://jeditoolkit.com)","repository":{"type":"git","url":"git://github.com/Gozala/events.git","web":"https://github.com/Gozala/events"},"bugs":{"url":"http://github.com/Gozala/events/issues/"},"main":"./events.js","engines":{"node":">=0.4.x"},"devDependencies":{"isarray":"^2.0.2","mocha":"^3.5.3","object-keys":"^1.0.11","zuul":"^3.11.1"},"scripts":{"test":"mocha --ui qunit -- tests/index.js && zuul -- tests/index.js"},"license":"MIT"}

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = {"name":"qs","description":"A querystring parser that supports nesting and arrays, with a depth limit","homepage":"https://github.com/ljharb/qs","version":"6.5.1","repository":{"type":"git","url":"https://github.com/ljharb/qs.git"},"main":"lib/index.js","contributors":[{"name":"Jordan Harband","email":"ljharb@gmail.com","url":"http://ljharb.codes"}],"keywords":["querystring","qs"],"engines":{"node":">=0.6"},"dependencies":{},"devDependencies":{"@ljharb/eslint-config":"^12.2.1","browserify":"^14.4.0","covert":"^1.1.0","editorconfig-tools":"^0.1.1","eslint":"^4.6.1","evalmd":"^0.0.17","iconv-lite":"^0.4.18","mkdirp":"^0.5.1","qs-iconv":"^1.0.4","safe-publish-latest":"^1.1.1","tape":"^4.8.0"},"scripts":{"prepublish":"safe-publish-latest && npm run dist","pretest":"npm run --silent readme && npm run --silent lint","test":"npm run --silent coverage","tests-only":"node test","readme":"evalmd README.md","prelint":"editorconfig-tools check * lib/* test/*","lint":"eslint lib/*.js test/*.js","coverage":"covert test","dist":"mkdirp dist && browserify --standalone Qs lib/index.js > dist/qs.js"},"license":"BSD-3-Clause"}

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = {"name":"express","description":"Fast, unopinionated, minimalist web framework","version":"4.16.3","author":"TJ Holowaychuk <tj@vision-media.ca>","contributors":["Aaron Heckmann <aaron.heckmann+github@gmail.com>","Ciaran Jessup <ciaranj@gmail.com>","Douglas Christopher Wilson <doug@somethingdoug.com>","Guillermo Rauch <rauchg@gmail.com>","Jonathan Ong <me@jongleberry.com>","Roman Shtylman <shtylman+expressjs@gmail.com>","Young Jae Sim <hanul@hanul.me>"],"license":"MIT","repository":"expressjs/express","homepage":"http://expressjs.com/","keywords":["express","framework","sinatra","web","rest","restful","router","app","api"],"dependencies":{"accepts":"~1.3.5","array-flatten":"1.1.1","body-parser":"1.18.2","content-disposition":"0.5.2","content-type":"~1.0.4","cookie":"0.3.1","cookie-signature":"1.0.6","debug":"2.6.9","depd":"~1.1.2","encodeurl":"~1.0.2","escape-html":"~1.0.3","etag":"~1.8.1","finalhandler":"1.1.1","fresh":"0.5.2","merge-descriptors":"1.0.1","methods":"~1.1.2","on-finished":"~2.3.0","parseurl":"~1.3.2","path-to-regexp":"0.1.7","proxy-addr":"~2.0.3","qs":"6.5.1","range-parser":"~1.2.0","safe-buffer":"5.1.1","send":"0.16.2","serve-static":"1.13.2","setprototypeof":"1.1.0","statuses":"~1.4.0","type-is":"~1.6.16","utils-merge":"1.0.1","vary":"~1.1.2"},"devDependencies":{"after":"0.8.2","cookie-parser":"~1.4.3","cookie-session":"1.3.2","ejs":"2.5.7","eslint":"2.13.1","express-session":"1.15.6","hbs":"4.0.1","istanbul":"0.4.5","marked":"0.3.17","method-override":"2.3.10","mocha":"3.5.3","morgan":"1.9.0","multiparty":"4.1.3","pbkdf2-password":"1.2.1","should":"13.2.1","supertest":"1.2.0","connect-redis":"~2.4.1","vhost":"~3.0.2"},"engines":{"node":">= 0.10.0"},"files":["LICENSE","History.md","Readme.md","index.js","lib/"],"scripts":{"lint":"eslint .","test":"mocha --require test/support/env --reporter spec --bail --check-leaks --no-exit test/ test/acceptance/","test-ci":"istanbul cover node_modules/mocha/bin/_mocha --report lcovonly -- --require test/support/env --reporter spec --check-leaks --no-exit test/ test/acceptance/","test-cov":"istanbul cover node_modules/mocha/bin/_mocha -- --require test/support/env --reporter dot --check-leaks --no-exit test/ test/acceptance/","test-tap":"mocha --require test/support/env --reporter tap --check-leaks --no-exit test/ test/acceptance/"}}

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = {"name":"finalhandler","description":"Node.js final http responder","version":"1.1.1","author":"Douglas Christopher Wilson <doug@somethingdoug.com>","license":"MIT","repository":"pillarjs/finalhandler","dependencies":{"debug":"2.6.9","encodeurl":"~1.0.2","escape-html":"~1.0.3","on-finished":"~2.3.0","parseurl":"~1.3.2","statuses":"~1.4.0","unpipe":"~1.0.0"},"devDependencies":{"eslint":"4.18.1","eslint-config-standard":"11.0.0","eslint-plugin-import":"2.9.0","eslint-plugin-markdown":"1.0.0-beta.6","eslint-plugin-node":"6.0.1","eslint-plugin-promise":"3.6.0","eslint-plugin-standard":"3.0.1","istanbul":"0.4.5","mocha":"2.5.3","readable-stream":"2.3.4","safe-buffer":"5.1.1","supertest":"1.1.0"},"files":["LICENSE","HISTORY.md","index.js"],"engines":{"node":">= 0.8"},"scripts":{"lint":"eslint --plugin markdown --ext js,md .","test":"mocha --reporter spec --bail --check-leaks test/","test-ci":"istanbul cover node_modules/mocha/bin/_mocha --report lcovonly -- --reporter spec --check-leaks test/","test-cov":"istanbul cover node_modules/mocha/bin/_mocha -- --reporter dot --check-leaks test/"}}

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = {"name":"has-flag","version":"3.0.0","description":"Check if argv has a specific flag","license":"MIT","repository":"sindresorhus/has-flag","author":{"name":"Sindre Sorhus","email":"sindresorhus@gmail.com","url":"sindresorhus.com"},"engines":{"node":">=4"},"scripts":{"test":"xo && ava"},"files":["index.js"],"keywords":["has","check","detect","contains","find","flag","cli","command-line","argv","process","arg","args","argument","arguments","getopt","minimist","optimist"],"devDependencies":{"ava":"*","xo":"*"}}

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = {"name":"ipaddr.js","description":"A library for manipulating IPv4 and IPv6 addresses in JavaScript.","version":"1.6.0","author":"whitequark <whitequark@whitequark.org>","directories":{"lib":"./lib"},"dependencies":{},"devDependencies":{"coffee-script":"~1.12.6","uglify-js":"~3.0.19","nodeunit":">=0.8.2 <0.8.7"},"scripts":{"test":"cake build test"},"keywords":["ip","ipv4","ipv6"],"repository":"git://github.com/whitequark/ipaddr.js","main":"./lib/ipaddr.js","engines":{"node":">= 0.10"},"license":"MIT","types":"./lib/ipaddr.js.d.ts"}

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = {"name":"json5","version":"1.0.1","description":"JSON for humans.","main":"lib/index.js","bin":"lib/cli.js","browser":"dist/index.js","files":["lib/","dist/"],"scripts":{"build":"babel-node build/build.js && babel src -d lib && rollup -c","coverage":"nyc report --reporter=text-lcov | coveralls","lint":"eslint --fix build src","prepublishOnly":"npm run lint && npm test && npm run production","pretest":"cross-env NODE_ENV=test npm run build","preversion":"npm run lint && npm test && npm run production","production":"cross-env NODE_ENV=production npm run build","test":"nyc --reporter=html --reporter=text mocha"},"repository":{"type":"git","url":"git+https://github.com/json5/json5.git"},"keywords":["json","json5","es5","es2015","ecmascript"],"author":"Aseem Kishore <aseem.kishore@gmail.com>","contributors":["Max Nanasy <max.nanasy@gmail.com>","Andrew Eisenberg <andrew@eisenberg.as>","Jordan Tucker <jordanbtucker@gmail.com>"],"license":"MIT","bugs":{"url":"https://github.com/json5/json5/issues"},"homepage":"http://json5.org/","dependencies":{"minimist":"^1.2.0"},"devDependencies":{"babel-cli":"^6.26.0","babel-core":"^6.26.0","babel-plugin-add-module-exports":"^0.2.1","babel-plugin-external-helpers":"^6.22.0","babel-plugin-istanbul":"^4.1.5","babel-preset-env":"^1.6.1","babel-register":"^6.26.0","babelrc-rollup":"^3.0.0","coveralls":"^3.0.0","cross-env":"^5.1.4","del":"^3.0.0","eslint":"^4.18.2","eslint-config-standard":"^11.0.0","eslint-plugin-import":"^2.9.0","eslint-plugin-node":"^6.0.1","eslint-plugin-promise":"^3.7.0","eslint-plugin-standard":"^3.0.1","mocha":"^5.0.4","nyc":"^11.4.1","regenerate":"^1.3.3","rollup":"^0.56.5","rollup-plugin-babel":"^3.0.3","rollup-plugin-commonjs":"^9.0.0","rollup-plugin-node-resolve":"^3.2.0","rollup-plugin-uglify":"^3.0.0","sinon":"^4.4.2","unicode-9.0.0":"^0.7.5"}}

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = {"name":"mime-db","description":"Media Type Database","version":"1.33.0","contributors":["Douglas Christopher Wilson <doug@somethingdoug.com>","Jonathan Ong <me@jongleberry.com> (http://jongleberry.com)","Robert Kieffer <robert@broofa.com> (http://github.com/broofa)"],"license":"MIT","keywords":["mime","db","type","types","database","charset","charsets"],"repository":"jshttp/mime-db","devDependencies":{"bluebird":"3.5.1","co":"4.6.0","cogent":"1.0.1","csv-parse":"1.3.1","eslint":"3.19.0","eslint-config-standard":"10.2.1","eslint-plugin-import":"2.8.0","eslint-plugin-node":"5.2.1","eslint-plugin-promise":"3.6.0","eslint-plugin-standard":"3.0.1","gnode":"0.1.2","mocha":"1.21.5","nyc":"11.4.1","raw-body":"2.3.2","stream-to-array":"2.3.0"},"files":["HISTORY.md","LICENSE","README.md","db.json","index.js"],"engines":{"node":">= 0.6"},"scripts":{"build":"node scripts/build","fetch":"gnode scripts/fetch-apache && gnode scripts/fetch-iana && gnode scripts/fetch-nginx","lint":"eslint .","test":"mocha --reporter spec --bail --check-leaks test/","test-cov":"nyc --reporter=html --reporter=text npm test","test-travis":"nyc --reporter=text npm test","update":"npm run fetch && npm run build"}}

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = {"name":"mime-types","description":"The ultimate javascript content-type utility.","version":"2.1.18","contributors":["Douglas Christopher Wilson <doug@somethingdoug.com>","Jeremiah Senkpiel <fishrock123@rocketmail.com> (https://searchbeam.jit.su)","Jonathan Ong <me@jongleberry.com> (http://jongleberry.com)"],"license":"MIT","keywords":["mime","types"],"repository":"jshttp/mime-types","dependencies":{"mime-db":"~1.33.0"},"devDependencies":{"eslint":"3.19.0","eslint-config-standard":"10.2.1","eslint-plugin-import":"2.8.0","eslint-plugin-node":"5.2.1","eslint-plugin-promise":"3.6.0","eslint-plugin-standard":"3.0.1","istanbul":"0.4.5","mocha":"1.21.5"},"files":["HISTORY.md","LICENSE","index.js"],"engines":{"node":">= 0.6"},"scripts":{"lint":"eslint .","test":"mocha --reporter spec test/test.js","test-cov":"istanbul cover node_modules/mocha/bin/_mocha -- --reporter dot test/test.js","test-travis":"istanbul cover node_modules/mocha/bin/_mocha --report lcovonly -- --reporter dot test/test.js"}}

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = {"author":{"name":"Robert Kieffer","url":"http://github.com/broofa","email":"robert@broofa.com"},"bin":{"mime":"cli.js"},"contributors":[{"name":"Benjamin Thomas","url":"http://github.com/bentomas","email":"benjamin@benjaminthomas.org"}],"description":"A comprehensive library for mime-type mapping","license":"MIT","dependencies":{},"devDependencies":{"mime-db":"1.30.0"},"scripts":{"prepublish":"node build/build.js > types.json","test":"node build/test.js"},"keywords":["util","mime"],"main":"mime.js","name":"mime","repository":{"url":"https://github.com/broofa/node-mime","type":"git"},"version":"1.4.1"}

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = {"name":"prop-types","version":"15.6.1","description":"Runtime type checking for React props and similar objects.","main":"index.js","license":"MIT","files":["LICENSE","README.md","checkPropTypes.js","factory.js","factoryWithThrowingShims.js","factoryWithTypeCheckers.js","index.js","prop-types.js","prop-types.min.js","lib"],"repository":"facebook/prop-types","keywords":["react"],"bugs":{"url":"https://github.com/facebook/prop-types/issues"},"homepage":"https://facebook.github.io/react/","dependencies":{"fbjs":"^0.8.16","loose-envify":"^1.3.1","object-assign":"^4.1.1"},"scripts":{"test":"jest","umd":"NODE_ENV=development browserify index.js -t envify --standalone PropTypes -o prop-types.js","umd-min":"NODE_ENV=production browserify index.js -t envify -t uglifyify --standalone PropTypes  -p bundle-collapser/plugin -o | uglifyjs --compress unused,dead_code -o prop-types.min.js","build":"yarn umd && yarn umd-min","prepublish":"yarn build"},"devDependencies":{"babel-jest":"^19.0.0","babel-preset-react":"^6.24.1","browserify":"^14.3.0","bundle-collapser":"^1.2.1","envify":"^4.0.0","jest":"^19.0.2","react":"^15.5.1","uglifyify":"^3.0.4","uglifyjs":"^2.4.10"},"browserify":{"transform":["loose-envify"]}}

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = {"name":"proxy-addr","description":"Determine address of proxied request","version":"2.0.3","author":"Douglas Christopher Wilson <doug@somethingdoug.com>","license":"MIT","keywords":["ip","proxy","x-forwarded-for"],"repository":"jshttp/proxy-addr","dependencies":{"forwarded":"~0.1.2","ipaddr.js":"1.6.0"},"devDependencies":{"benchmark":"2.1.4","beautify-benchmark":"0.2.4","eslint":"4.18.0","eslint-config-standard":"11.0.0","eslint-plugin-import":"2.8.0","eslint-plugin-markdown":"1.0.0-beta.6","eslint-plugin-node":"6.0.0","eslint-plugin-promise":"3.6.0","eslint-plugin-standard":"3.0.1","mocha":"3.5.3","nyc":"10.3.2"},"files":["LICENSE","HISTORY.md","README.md","index.js"],"engines":{"node":">= 0.10"},"scripts":{"bench":"node benchmark/index.js","lint":"eslint --plugin markdown --ext js,md .","test":"mocha --reporter spec --bail --check-leaks test/","test-cov":"nyc --reporter=text npm test","test-travis":"nyc --reporter=html --reporter=text npm test"}}

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = {"name":"qs","description":"A querystring parser that supports nesting and arrays, with a depth limit","homepage":"https://github.com/ljharb/qs","version":"6.5.2","repository":{"type":"git","url":"https://github.com/ljharb/qs.git"},"main":"lib/index.js","contributors":[{"name":"Jordan Harband","email":"ljharb@gmail.com","url":"http://ljharb.codes"}],"keywords":["querystring","qs"],"engines":{"node":">=0.6"},"dependencies":{},"devDependencies":{"@ljharb/eslint-config":"^12.2.1","browserify":"^16.2.0","covert":"^1.1.0","editorconfig-tools":"^0.1.1","eslint":"^4.19.1","evalmd":"^0.0.17","iconv-lite":"^0.4.21","mkdirp":"^0.5.1","qs-iconv":"^1.0.4","safe-publish-latest":"^1.1.1","safer-buffer":"^2.1.2","tape":"^4.9.0"},"scripts":{"prepublish":"safe-publish-latest && npm run dist","pretest":"npm run --silent readme && npm run --silent lint","test":"npm run --silent coverage","tests-only":"node test","readme":"evalmd README.md","prelint":"editorconfig-tools check * lib/* test/*","lint":"eslint lib/*.js test/*.js","coverage":"covert test","dist":"mkdirp dist && browserify --standalone Qs lib/index.js > dist/qs.js"},"license":"BSD-3-Clause"}

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = {"name":"send","description":"Better streaming static file server with Range and conditional-GET support","version":"0.16.2","author":"TJ Holowaychuk <tj@vision-media.ca>","contributors":["Douglas Christopher Wilson <doug@somethingdoug.com>","James Wyatt Cready <jcready@gmail.com>","Jesús Leganés Combarro <piranna@gmail.com>"],"license":"MIT","repository":"pillarjs/send","keywords":["static","file","server"],"dependencies":{"debug":"2.6.9","depd":"~1.1.2","destroy":"~1.0.4","encodeurl":"~1.0.2","escape-html":"~1.0.3","etag":"~1.8.1","fresh":"0.5.2","http-errors":"~1.6.2","mime":"1.4.1","ms":"2.0.0","on-finished":"~2.3.0","range-parser":"~1.2.0","statuses":"~1.4.0"},"devDependencies":{"after":"0.8.2","eslint":"3.19.0","eslint-config-standard":"10.2.1","eslint-plugin-import":"2.8.0","eslint-plugin-markdown":"1.0.0-beta.6","eslint-plugin-node":"5.2.1","eslint-plugin-promise":"3.6.0","eslint-plugin-standard":"3.0.1","istanbul":"0.4.5","mocha":"2.5.3","supertest":"1.1.0"},"files":["HISTORY.md","LICENSE","README.md","index.js"],"engines":{"node":">= 0.8.0"},"scripts":{"lint":"eslint --plugin markdown --ext js,md .","test":"mocha --check-leaks --reporter spec --bail","test-ci":"istanbul cover node_modules/mocha/bin/_mocha --report lcovonly -- --check-leaks --reporter spec","test-cov":"istanbul cover node_modules/mocha/bin/_mocha -- --check-leaks --reporter dot"}}

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = {"name":"serve-static","description":"Serve static files","version":"1.13.2","author":"Douglas Christopher Wilson <doug@somethingdoug.com>","license":"MIT","repository":"expressjs/serve-static","dependencies":{"encodeurl":"~1.0.2","escape-html":"~1.0.3","parseurl":"~1.3.2","send":"0.16.2"},"devDependencies":{"eslint":"3.19.0","eslint-config-standard":"10.2.1","eslint-plugin-import":"2.8.0","eslint-plugin-markdown":"1.0.0-beta.6","eslint-plugin-node":"5.2.1","eslint-plugin-promise":"3.6.0","eslint-plugin-standard":"3.0.1","istanbul":"0.4.5","mocha":"2.5.3","supertest":"1.1.0"},"files":["LICENSE","HISTORY.md","index.js"],"engines":{"node":">= 0.8.0"},"scripts":{"lint":"eslint --plugin markdown --ext js,md .","test":"mocha --reporter spec --bail --check-leaks test/","test-ci":"istanbul cover node_modules/mocha/bin/_mocha --report lcovonly -- --reporter spec --check-leaks test/","test-cov":"istanbul cover node_modules/mocha/bin/_mocha -- --reporter dot --check-leaks test/"}}

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = {"name":"supports-color","version":"5.3.0","description":"Detect whether a terminal supports color","license":"MIT","repository":"chalk/supports-color","author":{"name":"Sindre Sorhus","email":"sindresorhus@gmail.com","url":"sindresorhus.com"},"engines":{"node":">=4"},"scripts":{"test":"xo && ava"},"files":["index.js","browser.js"],"keywords":["color","colour","colors","terminal","console","cli","ansi","styles","tty","rgb","256","shell","xterm","command-line","support","supports","capability","detect","truecolor","16m"],"dependencies":{"has-flag":"^3.0.0"},"devDependencies":{"ava":"*","import-fresh":"^2.0.0","xo":"*"},"browser":"browser.js"}

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = {"name":"type-is","description":"Infer the content-type of a request.","version":"1.6.16","contributors":["Douglas Christopher Wilson <doug@somethingdoug.com>","Jonathan Ong <me@jongleberry.com> (http://jongleberry.com)"],"license":"MIT","repository":"jshttp/type-is","dependencies":{"media-typer":"0.3.0","mime-types":"~2.1.18"},"devDependencies":{"eslint":"3.19.0","eslint-config-standard":"10.2.1","eslint-plugin-import":"2.8.0","eslint-plugin-markdown":"1.0.0-beta.6","eslint-plugin-node":"5.2.1","eslint-plugin-promise":"3.6.0","eslint-plugin-standard":"3.0.1","istanbul":"0.4.5","mocha":"1.21.5"},"engines":{"node":">= 0.6"},"files":["LICENSE","HISTORY.md","index.js"],"scripts":{"lint":"eslint --plugin markdown --ext js,md .","test":"mocha --reporter spec --check-leaks --bail test/","test-cov":"istanbul cover node_modules/mocha/bin/_mocha -- --reporter dot --check-leaks test/","test-travis":"istanbul cover node_modules/mocha/bin/_mocha --report lcovonly -- --reporter spec --check-leaks test/"},"keywords":["content","type","checking"]}

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = {"name":"@storybook/core","version":"4.0.0-alpha.8","description":"Storybook framework-agnostic API","homepage":"https://github.com/storybooks/storybook/tree/master/lib/core","bugs":{"url":"https://github.com/storybooks/storybook/issues"},"repository":{"type":"git","url":"https://github.com/storybooks/storybook.git"},"license":"MIT","main":"dist/client/index.js","scripts":{"prepare":"node ../../scripts/prepare.js"},"dependencies":{"@storybook/addons":"4.0.0-alpha.8","@storybook/channel-postmessage":"4.0.0-alpha.8","@storybook/client-logger":"4.0.0-alpha.8","@storybook/core-events":"4.0.0-alpha.8","@storybook/node-logger":"4.0.0-alpha.8","@storybook/ui":"4.0.0-alpha.8","autoprefixer":"^8.5.0","babel-runtime":"^6.26.0","chalk":"^2.4.1","commander":"^2.15.1","css-loader":"^0.28.11","dotenv":"^5.0.1","emotion":"^9.1.3","events":"^2.0.0","express":"^4.16.3","file-loader":"^1.1.11","find-cache-dir":"^1.0.0","global":"^4.3.2","json-loader":"^0.5.7","json5":"^1.0.1","postcss-flexbugs-fixes":"^3.3.1","postcss-loader":"^2.1.5","prop-types":"^15.6.1","qs":"^6.5.2","react-emotion":"^9.1.3","redux":"^4.0.0","serve-favicon":"^2.5.0","shelljs":"^0.8.2","style-loader":"^0.21.0","svg-url-loader":"^2.3.2","url-loader":"^1.0.1","webpack":"^4.8.3","webpack-dev-middleware":"^3.1.3","webpack-hot-middleware":"^2.22.2"},"devDependencies":{"mock-fs":"^4.5.0"},"peerDependencies":{"react":">=15.0.0","react-dom":">=15.0.0"}}

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = {"name":"@storybook/react-komposer","version":"2.0.3","description":"Generic way to compose data containers for React.","repository":{"type":"git","url":"https://github.com/storybooks/react-komposer/"},"license":"MIT","scripts":{"prepublish":". ./.scripts/prepublish.sh","lint":"eslint src","lintfix":"eslint src --fix","testonly":"mocha --require .scripts/mocha_runner src/**/tests/**/*.js","test":"npm run lint && npm run testonly","test-watch":"npm run testonly -- --watch --watch-extensions js","storybook":"start-storybook -p 9010","publish-storybook":"bash .scripts/publish_storybook.sh"},"devDependencies":{"react":"^15.3.2","react-dom":"^15.3.2","babel-polyfill":"^6.13.0","babel-preset-react-app":"^0.2.1","babel-cli":"^6.14.0","babel-core":"^6.14.0","babel-plugin-transform-runtime":"^6.15.0","eslint":"^3.6.0","babel-eslint":"^6.1.2","eslint-config-airbnb":"^12.0.0","eslint-plugin-import":"^1.16.0","eslint-plugin-jsx-a11y":"^2.2.2","eslint-plugin-react":"^6.3.0","mocha":"^3.0.2","chai":"^3.5.0","sinon":"^1.17.6","enzyme":"^2.2.0","react-addons-test-utils":"^15.3.2","jsdom":"^9.5.0"},"peerDependencies":{"react":"^0.14.7 || ^15.0.0 || ^16.0.0"},"dependencies":{"babel-runtime":"^6.11.6","hoist-non-react-statics":"^1.2.0","lodash.pick":"^4.4.0","@storybook/react-stubber":"^1.0.0","shallowequal":"^0.2.2"},"main":"dist/index.js","engines":{"npm":">=3.0.0"}}

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = {"name":"@storybook/mantra-core","version":"1.7.2","description":"Core API for Mantra","repository":{"type":"git","url":"https://github.com/storybooks/mantra-core/"},"license":"MIT","options":{"mocha":"--require scripts/mocha_runner src/**/__tests__/**/*.js"},"scripts":{"prepublish":". ./scripts/prepublish.sh","lint":"eslint ./src","lintfix":"eslint ./src --fix","testonly":"mocha $npm_package_options_mocha","test":"npm run lint && npm run testonly","test-watch":"npm run testonly -- --watch --watch-extensions js"},"devDependencies":{"nodemon":"1.7.x","mocha":"2.x.x","chai":"3.x.x","eslint":"1.7.x","babel-eslint":"4.x.x","eslint-plugin-babel":"2.x.x","babel-cli":"6.x.x","babel-core":"6.x.x","babel-polyfill":"6.x.x","babel-preset-es2015":"6.x.x","babel-preset-stage-2":"6.x.x","babel-plugin-transform-runtime":"6.x.x","react":"^0.14.6"},"dependencies":{"babel-runtime":"6.x.x","@storybook/react-komposer":"^2.0.1","@storybook/react-simple-di":"^1.2.1"}}

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = {"name":"@storybook/node-logger","version":"4.0.0-alpha.8","description":"","license":"MIT","main":"dist/index.js","jsnext:main":"src/index.js","scripts":{"prepare":"node ../../scripts/prepare.js"},"dependencies":{"npmlog":"^4.1.2"}}

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = {"name":"@storybook/podda","version":"1.2.3","description":"Simple Reactive DataStore for JavaScript","repository":{"type":"git","url":"https://github.com/arunoda/podda.git"},"license":"MIT","scripts":{"prepublish":". ./.scripts/prepublish.sh","lint":"eslint src","lintfix":"eslint src --fix","testonly":"mocha --require .scripts/mocha_runner src/**/tests/**/*.js","test":"npm run lint && npm run testonly","test-watch":"npm run testonly -- --watch --watch-extensions js"},"devDependencies":{"babel-cli":"^6.14.0","babel-core":"^6.14.0","babel-eslint":"^6.1.2","babel-loader":"^6.2.5","babel-plugin-transform-runtime":"^6.15.0","babel-polyfill":"^6.13.0","babel-preset-react-app":"^0.2.1","chai":"^3.5.0","eslint":"^3.6.0","eslint-config-airbnb":"^12.0.0","eslint-plugin-import":"^1.16.0","eslint-plugin-jsx-a11y":"^2.2.2","eslint-plugin-react":"^6.6.0","mocha":"^3.0.2","sinon":"^1.17.6"},"dependencies":{"babel-runtime":"^6.11.6","immutable":"^3.8.1"},"main":"dist/index.js","engines":{"npm":">=3.0.0"}}

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = {"name":"ansi-regex","version":"3.0.0","description":"Regular expression for matching ANSI escape codes","license":"MIT","repository":"chalk/ansi-regex","author":{"name":"Sindre Sorhus","email":"sindresorhus@gmail.com","url":"sindresorhus.com"},"engines":{"node":">=4"},"scripts":{"test":"xo && ava","view-supported":"node fixtures/view-codes.js"},"files":["index.js"],"keywords":["ansi","styles","color","colour","colors","terminal","console","cli","string","tty","escape","formatting","rgb","256","shell","xterm","command-line","text","regex","regexp","re","match","test","find","pattern"],"devDependencies":{"ava":"*","xo":"*"}}

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = {"name":"ansi-styles","version":"3.2.1","description":"ANSI escape codes for styling strings in the terminal","license":"MIT","repository":"chalk/ansi-styles","author":{"name":"Sindre Sorhus","email":"sindresorhus@gmail.com","url":"sindresorhus.com"},"engines":{"node":">=4"},"scripts":{"test":"xo && ava","screenshot":"svg-term --command='node screenshot' --out=screenshot.svg --padding=3 --width=55 --height=3 --at=1000 --no-cursor"},"files":["index.js"],"keywords":["ansi","styles","color","colour","colors","terminal","console","cli","string","tty","escape","formatting","rgb","256","shell","xterm","log","logging","command-line","text"],"dependencies":{"color-convert":"^1.9.0"},"devDependencies":{"ava":"*","babel-polyfill":"^6.23.0","svg-term-cli":"^2.1.1","xo":"*"},"ava":{"require":"babel-polyfill"}}

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = {"name":"browserslist","version":"3.2.0","description":"Share target browsers between different front-end tools, like Autoprefixer, Stylelint and babel-env-preset","keywords":["caniuse","browsers","target"],"author":"Andrey Sitnik <andrey@sitnik.ru>","license":"MIT","repository":"ai/browserslist","dependencies":{"caniuse-lite":"^1.0.30000815","electron-to-chromium":"^1.3.39"},"bin":"./cli.js","devDependencies":{"cross-spawn":"^6.0.5","eslint":"^4.19.0","eslint-ci":"^0.1.1","eslint-config-logux":"^21.0.0","eslint-config-standard":"^11.0.0","eslint-plugin-es5":"^1.2.0","eslint-plugin-import":"^2.9.0","eslint-plugin-jest":"^21.15.0","eslint-plugin-node":"^6.0.1","eslint-plugin-promise":"^3.7.0","eslint-plugin-security":"^1.4.0","eslint-plugin-standard":"^3.0.1","jest":"^22.4.2","lint-staged":"^7.0.0","pre-commit":"^1.1.3","size-limit":"^0.17.0","yaspeller-ci":"^1.0.0"},"eslintConfig":{"extends":"eslint-config-logux/browser","rules":{"security/detect-unsafe-regex":"off","global-require":"off"},"overrides":{"files":["*.test.js"],"rules":{"es5/no-arrow-functions":"off"}}},"jest":{"testEnvironment":"node","coverageThreshold":{"global":{"statements":100}},"modulePathIgnorePatterns":["<rootDir>/test/fixtures"]},"size-limit":[{"path":"index.js","limit":"7.1 KB"}],"scripts":{"lint-staged":"lint-staged","spellcheck":"yaspeller-ci README.md CHANGELOG.md","lint":"eslint-ci *.js test/*.js __mocks__/*.js","test":"jest --coverage && yarn lint && yarn spellcheck && size-limit"},"lint-staged":{"*.md":"yaspeller-ci","*.js":"eslint"},"browser":{"./node.js":"./browser.js","path":false},"pre-commit":["lint-staged"]}

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = {"name":"chalk","version":"2.3.2","description":"Terminal string styling done right","license":"MIT","repository":"chalk/chalk","engines":{"node":">=4"},"scripts":{"test":"xo && tsc --project types && nyc ava","bench":"matcha benchmark.js","coveralls":"nyc report --reporter=text-lcov | coveralls"},"files":["index.js","templates.js","types/index.d.ts"],"keywords":["color","colour","colors","terminal","console","cli","string","str","ansi","style","styles","tty","formatting","rgb","256","shell","xterm","log","logging","command-line","text"],"dependencies":{"ansi-styles":"^3.2.1","escape-string-regexp":"^1.0.5","supports-color":"^5.3.0"},"devDependencies":{"ava":"*","coveralls":"^3.0.0","execa":"^0.9.0","import-fresh":"^2.0.0","matcha":"^0.7.0","nyc":"^11.0.2","resolve-from":"^4.0.0","typescript":"^2.5.3","xo":"*"},"types":"types/index.d.ts","xo":{"envs":["node","mocha"]}}

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = {"name":"cross-spawn","version":"6.0.5","description":"Cross platform child_process#spawn and child_process#spawnSync","keywords":["spawn","spawnSync","windows","cross-platform","path-ext","shebang","cmd","execute"],"author":"André Cruz <andre@moxy.studio>","homepage":"https://github.com/moxystudio/node-cross-spawn","repository":{"type":"git","url":"git@github.com:moxystudio/node-cross-spawn.git"},"license":"MIT","main":"index.js","files":["lib"],"scripts":{"lint":"eslint .","test":"jest --env node --coverage","prerelease":"npm t && npm run lint","release":"standard-version","precommit":"lint-staged","commitmsg":"commitlint -e $GIT_PARAMS"},"standard-version":{"scripts":{"posttag":"git push --follow-tags origin master && npm publish"}},"lint-staged":{"*.js":["eslint --fix","git add"]},"commitlint":{"extends":["@commitlint/config-conventional"]},"dependencies":{"nice-try":"^1.0.4","path-key":"^2.0.1","semver":"^5.5.0","shebang-command":"^1.2.0","which":"^1.2.9"},"devDependencies":{"@commitlint/cli":"^6.0.0","@commitlint/config-conventional":"^6.0.2","babel-core":"^6.26.0","babel-jest":"^22.1.0","babel-preset-moxy":"^2.2.1","eslint":"^4.3.0","eslint-config-moxy":"^5.0.0","husky":"^0.14.3","jest":"^22.0.0","lint-staged":"^7.0.0","mkdirp":"^0.5.1","regenerator-runtime":"^0.11.1","rimraf":"^2.6.2","standard-version":"^4.2.0"},"engines":{"node":">=4.8"}}

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = {"name":"electron-to-chromium","version":"1.3.48","description":"Provides a list of electron-to-chromium version mappings","main":"index.js","files":["versions.js","full-versions.js","chromium-versions.js","full-chromium-versions.js"],"scripts":{"build":"node build.js","update":"node automated-update.js","test":"nyc ava --verbose","report":"nyc report --reporter=text-lcov > coverage.lcov && codecov"},"repository":{"type":"git","url":"https://github.com/kilian/electron-to-chromium/"},"keywords":["electron","chrome","browserlist"],"author":"Kilian Valkhof","license":"ISC","devDependencies":{"ava":"^0.18.2","codecov":"^2.1.0","electron-releases":"^2.1.0","nyc":"^10.2.0","request":"^2.79.0","shelljs":"^0.7.6"}}

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = {"name":"external-editor","version":"2.2.0","description":"Edit a string with the users preferred text editor using $VISUAL or $ENVIRONMENT","main":"main/index.js","scripts":{"test":"npm run lint && npm run unit","unit":"mocha --recursive --compilers coffee:coffee-script/register --timeout 10000 ./test/spec","compile":"coffee --compile --output main/ src/","lint":"coffeelint -f .coffeelint.json src"},"repository":{"type":"git","url":"git+https://github.com/mrkmg/node-external-editor.git"},"keywords":["editor","external","user","visual"],"author":"Kevin Gravier <kevin@mrkmg.com> (https://mrkmg.com)","license":"MIT","bugs":{"url":"https://github.com/mrkmg/node-external-editor/issues"},"homepage":"https://github.com/mrkmg/node-external-editor#readme","dependencies":{"chardet":"^0.4.0","iconv-lite":"^0.4.17","tmp":"^0.0.33"},"engines":{"node":">=0.12"},"devDependencies":{"chai":"^4.0.0","coffee-script":"^1.10.0","coffeelint":"^1.14.2","mocha":"^3.2.0"},"files":["main","example_sync.js","example_async.js"]}

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = {"name":"filesize","description":"JavaScript library to generate a human readable String describing the file size","version":"3.6.0","homepage":"https://filesizejs.com","author":"Jason Mulligan <jason.mulligan@avoidwork.com>","repository":{"type":"git","url":"git://github.com/avoidwork/filesize.js.git"},"bugs":{"url":"https://github.com/avoidwork/filesize.js/issues"},"license":"BSD-3-Clause","main":"lib/filesize","engines":{"node":">= 0.4.0"},"scripts":{"test":"grunt test"},"devDependencies":{"babel-core":"^6.26.0","babel-preset-env":"^1.6.1","babel-minify":"^0.3.0","grunt":"^1.0.1","grunt-babel":"^7.0.0","grunt-cli":"^1.2.0","grunt-contrib-concat":"^1.0.1","grunt-contrib-nodeunit":"^1.0.0","grunt-contrib-uglify":"^3.3.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^20.1.0"},"keywords":["file","filesize","size","readable","file system","bytes","diff"]}

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = {"name":"globby","version":"8.0.1","description":"Extends `glob` with support for multiple patterns and exposes a Promise API","license":"MIT","repository":"sindresorhus/globby","author":{"email":"sindresorhus@gmail.com","name":"Sindre Sorhus","url":"sindresorhus.com"},"engines":{"node":">=4"},"scripts":{"bench":"npm update glob-stream fast-glob && matcha bench.js","test":"xo && ava"},"files":["index.js","gitignore.js"],"keywords":["all","array","directories","dirs","expand","files","filesystem","filter","find","fnmatch","folders","fs","glob","globbing","globs","gulpfriendly","match","matcher","minimatch","multi","multiple","paths","pattern","patterns","traverse","util","utility","wildcard","wildcards","promise","gitignore","git"],"dependencies":{"array-union":"^1.0.1","dir-glob":"^2.0.0","fast-glob":"^2.0.2","glob":"^7.1.2","ignore":"^3.3.5","pify":"^3.0.0","slash":"^1.0.0"},"devDependencies":{"ava":"*","glob-stream":"^6.1.0","globby":"sindresorhus/globby#master","matcha":"^0.7.0","rimraf":"^2.2.8","xo":"^0.18.0"}}

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = {"name":"has-flag","version":"3.0.0","description":"Check if argv has a specific flag","license":"MIT","repository":"sindresorhus/has-flag","author":{"name":"Sindre Sorhus","email":"sindresorhus@gmail.com","url":"sindresorhus.com"},"engines":{"node":">=4"},"scripts":{"test":"xo && ava"},"files":["index.js"],"keywords":["has","check","detect","contains","find","flag","cli","command-line","argv","process","arg","args","argument","arguments","getopt","minimist","optimist"],"devDependencies":{"ava":"*","xo":"*"}}

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = {"name":"ignore","version":"3.3.8","description":"Ignore is a manager and filter for .gitignore rules.","main":"./ignore.js","files":["ignore.js","index.d.ts"],"scripts":{"prepublish":"npm run build","build":"babel -o ignore.js index.js","test":"npm run build && istanbul cover ./node_modules/mocha/bin/_mocha --report lcovonly -- --reporter spec ./test/ignore.js && codecov","test-no-cov":"npm run build && mocha --reporter spec ./test/ignore.js","cov-report":"istanbul report"},"repository":{"type":"git","url":"git@github.com:kaelzhang/node-ignore.git"},"keywords":["ignore",".gitignore","gitignore","npmignore","rules","manager","filter","regexp","regex","fnmatch","glob","asterisks","regular-expression"],"author":"kael","license":"MIT","bugs":{"url":"https://github.com/kaelzhang/node-ignore/issues"},"devDependencies":{"babel-cli":"^6.26.0","babel-preset-es2015":"^6.24.1","chai":"~1.7.2","codecov":"^1.0.1","istanbul":"^0.4.5","mkdirp":"^0.5.1","mocha":"~1.13.0","pre-suf":"^1.0.4","rimraf":"^2.6.2","spawn-sync":"^1.0.15","tmp":"0.0.33"}}

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = {"name":"ansi-styles","version":"3.2.0","description":"ANSI escape codes for styling strings in the terminal","license":"MIT","repository":"chalk/ansi-styles","author":{"name":"Sindre Sorhus","email":"sindresorhus@gmail.com","url":"sindresorhus.com"},"engines":{"node":">=4"},"scripts":{"test":"xo && ava"},"files":["index.js"],"keywords":["ansi","styles","color","colour","colors","terminal","console","cli","string","tty","escape","formatting","rgb","256","shell","xterm","log","logging","command-line","text"],"dependencies":{"color-convert":"^1.9.0"},"devDependencies":{"ava":"*","babel-polyfill":"^6.23.0","xo":"*"},"ava":{"require":"babel-polyfill"}}

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = {"name":"chalk","version":"2.3.0","description":"Terminal string styling done right","license":"MIT","repository":"chalk/chalk","engines":{"node":">=4"},"scripts":{"test":"xo && tsc --project types && nyc ava","bench":"matcha benchmark.js","coveralls":"nyc report --reporter=text-lcov | coveralls"},"files":["index.js","templates.js","types/index.d.ts"],"keywords":["color","colour","colors","terminal","console","cli","string","str","ansi","style","styles","tty","formatting","rgb","256","shell","xterm","log","logging","command-line","text"],"dependencies":{"ansi-styles":"^3.1.0","escape-string-regexp":"^1.0.5","supports-color":"^4.0.0"},"devDependencies":{"ava":"*","coveralls":"^3.0.0","execa":"^0.8.0","import-fresh":"^2.0.0","matcha":"^0.7.0","nyc":"^11.0.2","resolve-from":"^4.0.0","typescript":"^2.5.3","xo":"*"},"types":"types/index.d.ts","xo":{"envs":["node","mocha"]}}

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = {"name":"has-flag","version":"2.0.0","description":"Check if argv has a specific flag","license":"MIT","repository":"sindresorhus/has-flag","author":{"name":"Sindre Sorhus","email":"sindresorhus@gmail.com","url":"sindresorhus.com"},"maintainers":["Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)","Joshua Appelman <jappelman@xebia.com> (jbnicolai.com)","JD Ballard <i.am.qix@gmail.com> (github.com/qix-)"],"engines":{"node":">=0.10.0"},"scripts":{"test":"xo && ava"},"files":["index.js"],"keywords":["has","check","detect","contains","find","flag","cli","command-line","argv","process","arg","args","argument","arguments","getopt","minimist","optimist"],"devDependencies":{"ava":"*","xo":"*"}}

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = {"name":"supports-color","version":"4.5.0","description":"Detect whether a terminal supports color","license":"MIT","repository":"chalk/supports-color","author":{"name":"Sindre Sorhus","email":"sindresorhus@gmail.com","url":"sindresorhus.com"},"engines":{"node":">=4"},"scripts":{"test":"xo && ava"},"files":["index.js","browser.js"],"keywords":["color","colour","colors","terminal","console","cli","ansi","styles","tty","rgb","256","shell","xterm","command-line","support","supports","capability","detect","truecolor","16m"],"dependencies":{"has-flag":"^2.0.0"},"devDependencies":{"ava":"*","import-fresh":"^2.0.0","xo":"*"},"browser":"browser.js"}

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = {"name":"inquirer","version":"5.1.0","description":"A collection of common interactive command line user interfaces.","author":"Simon Boudrias <admin@simonboudrias.com>","files":["lib"],"main":"lib/inquirer.js","keywords":["command","prompt","stdin","cli","tty","menu"],"engines":{"node":">=6.0.0"},"devDependencies":{"chai":"^4.0.1","cmdify":"^0.0.4","coveralls":"^3.0.0","eslint":"^4.1.0","eslint-config-prettier":"^2.4.0","eslint-config-xo":"^0.19.0","eslint-plugin-prettier":"^2.2.0","husky":"^0.14.3","lint-staged":"^6.0.0","mocha":"^5.0.0","mockery":"^2.1.0","nsp":"^3.0.0","nyc":"^11.3.0","prettier":"^1.7.0","sinon":"^4.0.0"},"scripts":{"test":"nyc mocha test/**/* -r ./test/before","prepublish":"nsp check","pretest":"eslint .","precommit":"lint-staged","coverage":"nyc report --reporter=text-lcov | coveralls"},"repository":"SBoudrias/Inquirer.js","license":"MIT","dependencies":{"ansi-escapes":"^3.0.0","chalk":"^2.0.0","cli-cursor":"^2.1.0","cli-width":"^2.0.0","external-editor":"^2.1.0","figures":"^2.0.0","lodash":"^4.3.0","mute-stream":"0.0.7","run-async":"^2.2.0","rxjs":"^5.5.2","string-width":"^2.1.0","strip-ansi":"^4.0.0","through":"^2.3.6"},"lint-staged":{"*.js":["eslint --fix","git add"],"*.json":["prettier --write","git add"]},"eslintConfig":{"extends":["xo","prettier"],"env":{"mocha":true,"node":true},"rules":{"no-eq-null":"off","eqeqeq":["error","always",{"null":"ignore"}],"prettier/prettier":["error",{"singleQuote":true,"printWidth":90}]},"plugins":["prettier"]}}

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = {"name":"pify","version":"3.0.0","description":"Promisify a callback-style function","license":"MIT","repository":"sindresorhus/pify","author":{"name":"Sindre Sorhus","email":"sindresorhus@gmail.com","url":"sindresorhus.com"},"engines":{"node":">=4"},"scripts":{"test":"xo && ava && npm run optimization-test","optimization-test":"node --allow-natives-syntax optimization-test.js"},"files":["index.js"],"keywords":["promise","promises","promisify","all","denodify","denodeify","callback","cb","node","then","thenify","convert","transform","wrap","wrapper","bind","to","async","await","es2015","bluebird"],"devDependencies":{"ava":"*","pinkie-promise":"^2.0.0","v8-natives":"^1.0.0","xo":"*"}}

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = {"name":"rxjs","version":"5.5.11","description":"Reactive Extensions for modern JavaScript","main":"./Rx.js","config":{"commitizen":{"path":"cz-conventional-changelog"}},"lint-staged":{"*.@(js)":["eslint --fix","git add"],"*.@(ts)":["tslint --fix","git add"]},"scripts-info":{"info":"List available script","build_all":"Build all packages (ES6, CJS, UMD) and generate packages","build_cjs":"Build CJS package with clean up existing build","build_esm5":"Build ESM/ES5 package with clean up existing build","build_esm2015":"Build ESM/ES2015 package with clean up existing build","build_closure_core":"Minify Global core build using closure compiler","build_global":"Build Global package, then minify build","build_perf":"Build CJS & Global build, run macro performance test","build_test":"Build CJS package & test spec, execute mocha test runner","build_cover":"Run lint to current code, build CJS & test spec, execute test coverage","build_docs":"Build ESM2015 & global package, create documentation using it","build_spec":"Build test specs","check_circular_dependencies":"Check codebase has circular dependencies","clean_spec":"Clean up existing test spec build output","clean_dist_cjs":"Clean up existing CJS package output","clean_dist_esm5":"Clean up existing ESM/ES5 package output","clean_dist_esm2015":"Clean up existing ESM/ES2015 package output","clean_dist_global":"Clean up existing Global package output","commit":"Run git commit wizard","compile_dist_cjs":"Compile codebase into CJS module","compile_module_esm5":"Compile codebase into ESM/ES5","compile_dist_esm2015":"Compile codebase into ESM/ES2015","cover":"Execute test coverage","lint_perf":"Run lint against performance test suite","lint_spec":"Run lint against test spec","lint_src":"Run lint against source","lint":"Run lint against everything","perf":"Run macro performance benchmark","perf_micro":"Run micro performance benchmark","test_mocha":"Execute mocha test runner against existing test spec build","test_browser":"Execute mocha test runner on browser against existing test spec build","test":"Clean up existing test spec build, build test spec and execute mocha test runner","tests2png":"Generate marble diagram image from test spec","watch":"Watch codebase, trigger compile when source code changes"},"repository":{"type":"git","url":"git@github.com:ReactiveX/RxJS.git"},"keywords":["Rx","RxJS","ReactiveX","ReactiveExtensions","Streams","Observables","Observable","Stream","ES6","ES2015"],"author":"Ben Lesh <ben@benlesh.com>","contributors":[{"name":"Ben Lesh","email":"ben@benlesh.com"},{"name":"Paul Taylor","email":"paul.e.taylor@me.com"},{"name":"Jeff Cross","email":"crossj@google.com"},{"name":"Matthew Podwysocki","email":"matthewp@microsoft.com"},{"name":"OJ Kwon","email":"kwon.ohjoong@gmail.com"},{"name":"Andre Staltz","email":"andre@staltz.com"}],"license":"Apache-2.0","bugs":{"url":"https://github.com/ReactiveX/RxJS/issues"},"homepage":"https://github.com/ReactiveX/RxJS","devDependencies":{"@angular-devkit/build-optimizer":"0.0.24","babel-polyfill":"^6.23.0","benchmark":"^2.1.0","benchpress":"2.0.0-beta.1","chai":"^3.5.0","color":"^0.11.1","colors":"1.1.2","commitizen":"^2.8.6","coveralls":"^2.11.13","cz-conventional-changelog":"^1.2.0","danger":"^1.1.0","doctoc":"^1.0.0","escape-string-regexp":"^1.0.5 ","esdoc":"^0.4.7","eslint":"^3.8.0","fs-extra":"^2.1.2","get-folder-size":"^1.0.0","glob":"^7.0.3","gm":"^1.22.0","google-closure-compiler-js":"^20170218.0.0","gzip-size":"^3.0.0","http-server":"^0.9.0","husky":"^0.13.3","klaw-sync":"^3.0.0","lint-staged":"3.2.5","lodash":"^4.15.0","madge":"^1.4.3","markdown-doctest":"^0.9.1","minimist":"^1.2.0","mkdirp":"^0.5.1","mocha":"^3.0.2","mocha-in-sauce":"0.0.1","npm-run-all":"^4.0.2","npm-scripts-info":"^0.3.4","nyc":"^10.2.0","opn-cli":"^3.1.0","platform":"^1.3.1","promise":"^7.1.1","protractor":"^3.1.1","rollup":"0.36.3","rollup-plugin-inject":"^2.0.0","rollup-plugin-node-resolve":"^2.0.0","rx":"latest","rxjs":"latest","shx":"^0.2.2","sinon":"^2.1.0","sinon-chai":"^2.9.0","source-map-support":"^0.4.0","tslib":"^1.5.0","tslint":"^4.4.2","typescript":"~2.0.6","typings":"^2.0.0","validate-commit-msg":"^2.14.0","watch":"^1.0.1","webpack":"^1.13.1","xmlhttprequest":"1.8.0"},"engines":{"npm":">=2.0.0"},"typings":"./Rx.d.ts","dependencies":{"symbol-observable":"1.0.1"}}

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = {"name":"semver","version":"5.5.0","description":"The semantic version parser used by npm.","main":"semver.js","scripts":{"test":"tap test/*.js --cov -J"},"devDependencies":{"tap":"^10.7.0"},"license":"ISC","repository":"https://github.com/npm/node-semver","bin":{"semver":"./bin/semver"},"files":["bin","range.bnf","semver.js"]}

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = {"name":"strip-ansi","version":"4.0.0","description":"Strip ANSI escape codes","license":"MIT","repository":"chalk/strip-ansi","author":{"name":"Sindre Sorhus","email":"sindresorhus@gmail.com","url":"sindresorhus.com"},"engines":{"node":">=4"},"scripts":{"test":"xo && ava"},"files":["index.js"],"keywords":["strip","trim","remove","ansi","styles","color","colour","colors","terminal","console","string","tty","escape","formatting","rgb","256","shell","xterm","log","logging","command-line","text"],"dependencies":{"ansi-regex":"^3.0.0"},"devDependencies":{"ava":"*","xo":"*"}}

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = {"name":"supports-color","version":"5.3.0","description":"Detect whether a terminal supports color","license":"MIT","repository":"chalk/supports-color","author":{"name":"Sindre Sorhus","email":"sindresorhus@gmail.com","url":"sindresorhus.com"},"engines":{"node":">=4"},"scripts":{"test":"xo && ava"},"files":["index.js","browser.js"],"keywords":["color","colour","colors","terminal","console","cli","ansi","styles","tty","rgb","256","shell","xterm","command-line","support","supports","capability","detect","truecolor","16m"],"dependencies":{"has-flag":"^3.0.0"},"devDependencies":{"ava":"*","import-fresh":"^2.0.0","xo":"*"},"browser":"browser.js"}

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = {"name":"symbol-observable","version":"1.0.1","description":"Symbol.observable ponyfill","license":"MIT","repository":"blesh/symbol-observable","author":{"name":"Ben Lesh","email":"ben@benlesh.com"},"engines":{"node":">=0.10.0"},"scripts":{"test":"npm run build && mocha && tsc ./ts-test/test.ts && node ./ts-test/test.js","build":"babel es --out-dir lib","prepublish":"npm test"},"files":["index.js","ponyfill.js","index.d.ts","es/index.js","es/ponyfill/js","lib/index.js","lib/ponyfill.js"],"jsnext:main":"es/index.js","typings":"index.d.ts","keywords":["symbol","observable","observables","ponyfill","polyfill","shim"],"devDependencies":{"babel-cli":"^6.9.0","babel-preset-es2015":"^6.9.0","chai":"^3.5.0","mocha":"^2.4.5","typescript":"^1.8.10"}}

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = {"name":"@storybook/react-dev-utils","version":"5.0.0","description":"Webpack utilities used by Create React App","repository":"facebook/create-react-app","license":"MIT","bugs":{"url":"https://github.com/facebook/create-react-app/issues"},"engines":{"node":">=6"},"files":["browsersHelper.js","checkRequiredFiles.js","clearConsole.js","crossSpawn.js","errorOverlayMiddleware.js","eslintFormatter.js","FileSizeReporter.js","formatWebpackMessages.js","getProcessForPort.js","ignoredFiles.js","inquirer.js","InterpolateHtmlPlugin.js","launchEditor.js","launchEditorEndpoint.js","ModuleScopePlugin.js","noopServiceWorkerMiddleware.js","openBrowser.js","openChrome.applescript","printBuildError.js","printHostingInstructions.js","WatchMissingNodeModulesPlugin.js","WebpackDevServerUtils.js","webpackHotDevClient.js","workspaceUtils.js"],"dependencies":{"@babel/code-frame":"7.0.0-beta.42","address":"1.0.3","browserslist":"3.2.0","chalk":"2.3.2","cross-spawn":"6.0.5","detect-port-alt":"1.1.5","escape-string-regexp":"1.0.5","filesize":"3.6.0","find-pkg":"1.0.0","global-modules":"1.0.0","globby":"8.0.1","gzip-size":"4.1.0","inquirer":"5.1.0","is-root":"1.0.0","opn":"5.3.0","pkg-up":"2.0.0","react-error-overlay":"^4.0.0","recursive-readdir":"2.2.2","shell-quote":"1.6.1","sockjs-client":"1.1.4","strip-ansi":"4.0.0","text-table":"0.2.0"},"devDependencies":{"jest":"22.4.3"},"scripts":{"test":"jest"}}

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = {"name":"@storybook/react-komposer","version":"2.0.4","description":"Generic way to compose data containers for React.","repository":{"type":"git","url":"https://github.com/storybooks/react-komposer/"},"license":"MIT","scripts":{"prepublish":". ./.scripts/prepublish.sh","lint":"eslint src","lintfix":"eslint src --fix","testonly":"mocha --require .scripts/mocha_runner src/**/tests/**/*.js","test":"npm run lint && npm run testonly","test-watch":"npm run testonly -- --watch --watch-extensions js","storybook":"start-storybook -p 9010","publish-storybook":"bash .scripts/publish_storybook.sh"},"devDependencies":{"babel-cli":"^6.14.0","babel-core":"^6.14.0","babel-eslint":"^6.1.2","babel-plugin-transform-runtime":"^6.15.0","babel-polyfill":"^6.13.0","babel-preset-react-app":"^0.2.1","chai":"^3.5.0","enzyme":"^2.2.0","eslint":"^3.6.0","eslint-config-airbnb":"^12.0.0","eslint-plugin-import":"^1.16.0","eslint-plugin-jsx-a11y":"^2.2.2","eslint-plugin-react":"^6.3.0","jsdom":"^9.5.0","mocha":"^3.0.2","react":"^15.3.2","react-addons-test-utils":"^15.3.2","react-dom":"^15.3.2","sinon":"^1.17.6"},"peerDependencies":{"react":"^0.14.7 || ^15.0.0 || ^16.0.0"},"dependencies":{"@storybook/react-stubber":"^1.0.0","babel-runtime":"^6.11.6","hoist-non-react-statics":"^1.2.0","lodash.pick":"^4.4.0","shallowequal":"^0.2.2"},"main":"dist/index.js","engines":{"npm":">=3.0.0"}}

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = {"name":"@storybook/react-simple-di","version":"1.3.0","description":"Simple Dependancy Injection Solution for React","repository":{"type":"git","url":"https://github.com/storybooks/react-simple-di/"},"license":"MIT","options":{"mocha":"--require scripts/mocha_runner lib/**/__tests__/**/*.js"},"scripts":{"prepublish":". ./scripts/prepublish.sh","lint":"eslint ./lib","lintfix":"eslint ./lib --fix","testonly":"mocha $npm_package_options_mocha","test":"npm run lint && npm run testonly"},"devDependencies":{"nodemon":"1.7.x","mocha":"2.x.x","chai":"3.x.x","eslint":"1.7.x","eslint-plugin-react":"3.x.x","babel-eslint":"4.x.x","eslint-plugin-babel":"2.x.x","babel-cli":"6.x.x","babel-core":"6.x.x","babel-polyfill":"6.x.x","babel-preset-es2015":"6.x.x","babel-preset-stage-2":"6.x.x","babel-preset-react":"6.x.x","babel-plugin-transform-runtime":"6.x.x","react":"^15.0.0","react-dom":"^15.0.0","react-addons-test-utils":"^15.0.0","enzyme":"^2.2.0"},"peerDependencies":{"react":"^0.14.0 || ^15.0.0 || ^16.0.0"},"dependencies":{"babel-runtime":"6.x.x","create-react-class":"^15.6.2","hoist-non-react-statics":"1.x.x","prop-types":"^15.6.0"}}

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = {"name":"@storybook/react-stubber","version":"1.0.1","description":"Simple but useful stubbing solution React","repository":{"type":"git","url":"https://github.com/storybooks/react-stubber"},"license":"MIT","scripts":{"prepublish":". ./.scripts/prepublish.sh","lint":"eslint src","lintfix":"eslint src --fix","testonly":"mocha --require .scripts/mocha_runner src/**/tests/**/*.js","test":"npm run lint && npm run testonly","test-watch":"npm run testonly -- --watch --watch-extensions js","storybook":"start-storybook -p 9010","publish-storybook":"bash .scripts/publish_storybook.sh"},"devDependencies":{"react":"^15.0.0","react-dom":"^15.0.0","babel-core":"^6.5.0","babel-loader":"^6.2.4","babel-polyfill":"^6.5.0","babel-preset-es2015":"^6.5.0","babel-preset-react":"^6.5.0","babel-preset-stage-2":"^6.5.0","babel-plugin-transform-runtime":"^6.5.0","babel-cli":"^6.5.0","eslint":"^2.7.0","babel-eslint":"^6.0.2","eslint-config-airbnb":"^7.0.0","eslint-plugin-babel":"^3.2.0","eslint-plugin-react":"^4.3.0","mocha":"^2.4.5","chai":"^3.5.0","sinon":"^1.17.3","enzyme":"^2.2.0","react-addons-test-utils":"^15.0.0","jsdom":"^8.3.1","eslint-plugin-jsx-a11y":"^0.6.2","@kadira/storybook":"^1.35.2","style-loader":"^0.13.1","raw-loader":"^0.5.1","git-url-parse":"^6.0.1"},"peerDependencies":{"react":"^0.14.7 || ^15.0.0 || ^16.0.0"},"dependencies":{"babel-runtime":"^6.5.0"},"main":"dist/index.js","engines":{"npm":">=3.0.0"}}

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = {"name":"babel-preset-env","version":"1.7.0","description":"A Babel preset for each environment.","author":"Henry Zhu <hi@henryzoo.com>","homepage":"https://babeljs.io/","license":"MIT","repository":"https://github.com/babel/babel-preset-env","main":"lib/index.js","scripts":{"build":"rimraf lib && babel src -d lib","build-data":"node ./scripts/build-data.js","changelog":"git log `git describe --tags --abbrev=0`..HEAD --pretty=format:' * %s (%an)' | grep -v 'Merge pull request'","coverage":"BABEL_ENV=test nyc npm run test","coverage-ci":"nyc report --reporter=json && codecov -f coverage/coverage-final.json","dev":"babel -w src -d lib","fix":"eslint . --fix","lint":"eslint .","prepublish":"npm run build","test":"npm run build && npm run test-only","test-ci":"nyc npm run test","test-only":"mocha ./test --compilers js:babel-register -t 10000"},"dependencies":{"babel-plugin-check-es2015-constants":"^6.22.0","babel-plugin-syntax-trailing-function-commas":"^6.22.0","babel-plugin-transform-async-to-generator":"^6.22.0","babel-plugin-transform-es2015-arrow-functions":"^6.22.0","babel-plugin-transform-es2015-block-scoped-functions":"^6.22.0","babel-plugin-transform-es2015-block-scoping":"^6.23.0","babel-plugin-transform-es2015-classes":"^6.23.0","babel-plugin-transform-es2015-computed-properties":"^6.22.0","babel-plugin-transform-es2015-destructuring":"^6.23.0","babel-plugin-transform-es2015-duplicate-keys":"^6.22.0","babel-plugin-transform-es2015-for-of":"^6.23.0","babel-plugin-transform-es2015-function-name":"^6.22.0","babel-plugin-transform-es2015-literals":"^6.22.0","babel-plugin-transform-es2015-modules-amd":"^6.22.0","babel-plugin-transform-es2015-modules-commonjs":"^6.23.0","babel-plugin-transform-es2015-modules-systemjs":"^6.23.0","babel-plugin-transform-es2015-modules-umd":"^6.23.0","babel-plugin-transform-es2015-object-super":"^6.22.0","babel-plugin-transform-es2015-parameters":"^6.23.0","babel-plugin-transform-es2015-shorthand-properties":"^6.22.0","babel-plugin-transform-es2015-spread":"^6.22.0","babel-plugin-transform-es2015-sticky-regex":"^6.22.0","babel-plugin-transform-es2015-template-literals":"^6.22.0","babel-plugin-transform-es2015-typeof-symbol":"^6.23.0","babel-plugin-transform-es2015-unicode-regex":"^6.22.0","babel-plugin-transform-exponentiation-operator":"^6.22.0","babel-plugin-transform-regenerator":"^6.22.0","browserslist":"^3.2.6","invariant":"^2.2.2","semver":"^5.3.0"},"devDependencies":{"babel-cli":"^6.23.0","babel-eslint":"^7.1.1","babel-helper-fixtures":"^6.22.0","babel-helper-plugin-test-runner":"^6.22.0","babel-plugin-istanbul":"^3.1.2","babel-preset-env":"^1.4.0","babel-register":"^6.23.0","chai":"^3.5.0","codecov":"^1.0.1","compat-table":"kangax/compat-table#957f1ff15972e8fb2892a172f985e9af27bf1c75","eslint":"^3.17.1","eslint-config-babel":"^6.0.0","eslint-plugin-flowtype":"^2.29.1","fs-extra":"~2.0.0","lodash":"^4.17.4","mocha":"^3.2.0","nyc":"^10.1.2","electron-to-chromium":"^1.3.11","rimraf":"^2.6.1"},"babel":{"presets":[["env",{"loose":true}]],"env":{"test":{"plugins":["istanbul"]}}},"nyc":{"all":true,"include":["src/*.js"],"instrument":false,"sourceMap":false}}

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = {"name":"browserslist","version":"3.2.8","description":"Share target browsers between different front-end tools, like Autoprefixer, Stylelint and babel-env-preset","keywords":["caniuse","browsers","target"],"author":"Andrey Sitnik <andrey@sitnik.ru>","license":"MIT","repository":"browserslist/browserslist","dependencies":{"caniuse-lite":"^1.0.30000844","electron-to-chromium":"^1.3.47"},"bin":"./cli.js","devDependencies":{"cross-spawn":"^6.0.5","eslint":"^4.19.1","eslint-ci":"^0.1.1","eslint-config-logux":"^22.1.0","eslint-config-standard":"^11.0.0","eslint-plugin-es5":"^1.3.1","eslint-plugin-import":"^2.12.0","eslint-plugin-jest":"^21.15.1","eslint-plugin-node":"^6.0.1","eslint-plugin-promise":"^3.7.0","eslint-plugin-security":"^1.4.0","eslint-plugin-standard":"^3.1.0","fs-extra":"^5.0.0","jest":"^22.4.4","lint-staged":"^7.1.2","pre-commit":"^1.1.3","size-limit":"^0.18.0","yaspeller-ci":"^1.0.0"},"jest":{"testEnvironment":"node","coverageThreshold":{"global":{"statements":100}},"modulePathIgnorePatterns":["<rootDir>/test/fixtures"]},"scripts":{"lint-staged":"lint-staged","spellcheck":"yaspeller-ci README.md CHANGELOG.md","lint":"eslint-ci *.js test/*.js benchmark/*.js","test":"jest --coverage && yarn lint && yarn spellcheck && size-limit"},"browser":{"./node.js":"./browser.js","path":false},"pre-commit":["lint-staged"]}

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports = {"name":"common-tags","description":"a few common utility template tags for ES2015","version":"1.7.2","author":"Declan de Wet <declandewet@me.com>","bugs":{"url":"http://github.com/declandewet/common-tags/issues"},"contributors":["Declan de Wet (https://github.com/declandewet)","Jason Killian (https://github.com/JKillian)","Laurent Goudet (https://github.com/laurentgoudet)","Kamil Ogórek (https://github.com/kamilogorek)","Lucian Buzzo (https://github.com/LucianBuzzo)","Rafał Ruciński (https://github.com/fatfisz)"],"dependencies":{"babel-runtime":"^6.26.0"},"devDependencies":{"babel-cli":"^6.26.0","babel-eslint":"^8.2.1","babel-plugin-add-module-exports":"^0.2.1","babel-plugin-transform-class-properties":"^6.24.1","babel-plugin-transform-export-extensions":"^6.22.0","babel-plugin-transform-runtime":"^6.23.0","babel-preset-env":"^1.6.1","babel-register":"^6.26.0","codecov":"^3.0.0","cross-env":"5.1.3","doctoc":"^1.3.0","eslint":"^4.15.0","eslint-config-prettier":"^2.9.0","eslint-plugin-prettier":"^2.4.0","jest":"^22.0.5","micromatch":"^3.1.4","prettier":"^1.9.2","rimraf":"^2.6.2","when":"^3.7.8"},"directories":{"lib":"lib"},"engines":{"node":">=4.0.0"},"homepage":"https://github.com/declandewet/common-tags","keywords":["array","babel","es2015","es2015-tag","es6","es6-tag","heredoc","html","indent","indents","line","literal","multi","multiline","normalize","one","oneline","single","singleline","string","strings","strip","tag","tagged","template"],"license":"MIT","main":"lib","jsnext:main":"es","module":"es","repository":{"type":"git","url":"https://github.com/declandewet/common-tags"},"scripts":{"clear":"rimraf lib && rimraf es","build":"npm run clear && npm run build:cjs && npm run build:es","build:cjs":"babel src -d lib --ignore *.test.js","build:es":"cross-env BABEL_ENV=es babel src -d es --ignore *.test.js","codecov":"codecov","doctoc":"doctoc readme.md --title \"\n## Table of Contents\"","lint":"eslint .*rc.js src/**/*.js --ignore-pattern '!.*rc.js'","lint:fix":"eslint --fix .*rc.js src/**/*.js --ignore-pattern '!.*rc.js'","prerelease":"npm run build","preversion":"npm run doctoc  && npm test","release":"npm publish","test":"npm run lint && jest"}}

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = {"name":"core-js","description":"Standard library","version":"2.5.7","repository":{"type":"git","url":"https://github.com/zloirock/core-js.git"},"main":"index.js","devDependencies":{"LiveScript":"1.3.x","es-observable-tests":"0.2.x","eslint":"4.19.x","eslint-plugin-import":"2.12.x","grunt":"^1.0.2","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-copy":"^1.0.0","grunt-contrib-uglify":"3.3.x","grunt-contrib-watch":"^1.0.0","grunt-karma":"^2.0.0","grunt-livescript":"0.6.x","karma":"^2.0.0","karma-qunit":"^2.1.0","karma-chrome-launcher":"^2.2.0","karma-firefox-launcher":"^1.0.1","karma-ie-launcher":"^1.0.0","karma-phantomjs-launcher":"1.0.x","phantomjs-prebuilt":"2.1.x","promises-aplus-tests":"^2.1.2","qunit":"2.6.x","temp":"^0.8.3","webpack":"^3.11.0"},"scripts":{"grunt":"grunt","lint":"eslint ./","promises-tests":"promises-aplus-tests tests/promises-aplus/adapter","observables-tests":"node tests/observables/adapter && node tests/observables/adapter-library","test":"npm run grunt clean copy && npm run lint && npm run grunt livescript client karma:default && npm run grunt library karma:library && npm run promises-tests && npm run observables-tests && lsc tests/commonjs"},"license":"MIT","keywords":["ES3","ES5","ES6","ES7","ES2015","ES2016","ES2017","ECMAScript 3","ECMAScript 5","ECMAScript 6","ECMAScript 7","ECMAScript 2015","ECMAScript 2016","ECMAScript 2017","Harmony","Strawman","Map","Set","WeakMap","WeakSet","Promise","Symbol","TypedArray","setImmediate","Dict","polyfill","shim"]}

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = {"name":"electron-to-chromium","version":"1.3.48","description":"Provides a list of electron-to-chromium version mappings","main":"index.js","files":["versions.js","full-versions.js","chromium-versions.js","full-chromium-versions.js"],"scripts":{"build":"node build.js","update":"node automated-update.js","test":"nyc ava --verbose","report":"nyc report --reporter=text-lcov > coverage.lcov && codecov"},"repository":{"type":"git","url":"https://github.com/kilian/electron-to-chromium/"},"keywords":["electron","chrome","browserlist"],"author":"Kilian Valkhof","license":"ISC","devDependencies":{"ava":"^0.18.2","codecov":"^2.1.0","electron-releases":"^2.1.0","nyc":"^10.2.0","request":"^2.79.0","shelljs":"^0.7.6"}}

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = {"name":"prop-types","version":"15.6.1","description":"Runtime type checking for React props and similar objects.","main":"index.js","license":"MIT","files":["LICENSE","README.md","checkPropTypes.js","factory.js","factoryWithThrowingShims.js","factoryWithTypeCheckers.js","index.js","prop-types.js","prop-types.min.js","lib"],"repository":"facebook/prop-types","keywords":["react"],"bugs":{"url":"https://github.com/facebook/prop-types/issues"},"homepage":"https://facebook.github.io/react/","dependencies":{"fbjs":"^0.8.16","loose-envify":"^1.3.1","object-assign":"^4.1.1"},"scripts":{"test":"jest","umd":"NODE_ENV=development browserify index.js -t envify --standalone PropTypes -o prop-types.js","umd-min":"NODE_ENV=production browserify index.js -t envify -t uglifyify --standalone PropTypes  -p bundle-collapser/plugin -o | uglifyjs --compress unused,dead_code -o prop-types.min.js","build":"yarn umd && yarn umd-min","prepublish":"yarn build"},"devDependencies":{"babel-jest":"^19.0.0","babel-preset-react":"^6.24.1","browserify":"^14.3.0","bundle-collapser":"^1.2.1","envify":"^4.0.0","jest":"^19.0.2","react":"^15.5.1","uglifyify":"^3.0.4","uglifyjs":"^2.4.10"},"browserify":{"transform":["loose-envify"]}}

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = {"name":"@storybook/react","version":"4.0.0-alpha.8","description":"Storybook for React: Develop React Component in isolation with Hot Reloading.","homepage":"https://github.com/storybooks/storybook/tree/master/app/react","bugs":{"url":"https://github.com/storybooks/storybook/issues"},"repository":{"type":"git","url":"https://github.com/storybooks/storybook.git"},"license":"MIT","main":"dist/client/index.js","jsnext:main":"src/client/index.js","bin":{"build-storybook":"./bin/build.js","start-storybook":"./bin/index.js","storybook-server":"./bin/index.js"},"scripts":{"prepare":"node ../../scripts/prepare.js"},"dependencies":{"@storybook/core":"4.0.0-alpha.8","@storybook/react-dev-utils":"^5.0.0","airbnb-js-shims":"^1.5.1","babel-loader":"^7.1.4","babel-plugin-macros":"^2.2.1","babel-plugin-react-docgen":"^2.0.0-rc.0","babel-plugin-transform-regenerator":"^6.26.0","babel-plugin-transform-runtime":"^6.23.0","babel-preset-env":"^1.7.0","babel-preset-minify":"^0.4.2","babel-preset-react":"^6.24.1","babel-preset-stage-0":"^6.24.1","babel-runtime":"^6.26.0","case-sensitive-paths-webpack-plugin":"^2.1.2","common-tags":"^1.7.2","core-js":"^2.5.6","dotenv-webpack":"^1.5.5","emotion":"^9.1.3","global":"^4.3.2","html-webpack-plugin":"^3.2.0","lodash.flattendeep":"^4.4.0","prop-types":"^15.6.1","raw-loader":"^0.5.1","react-emotion":"^9.1.3","webpack":"^4.8.3","webpack-hot-middleware":"^2.22.2"},"peerDependencies":{"babel-core":"^6.26.0 || ^7.0.0-0","babel-runtime":">=6.0.0","react":">=15.0.0","react-dom":">=15.0.0"}}

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = {"name":"storybook-ui-example","version":"1.0.0","description":"","main":"index.js","author":"","license":"MIT","devDependencies":{"babel-core":"^6.26.0","babel-eslint":"^7.2.2","babel-loader":"^7.1.2","babel-preset-env":"^1.6.0","babel-preset-react":"^6.24.1","babel-preset-stage-0":"^6.24.1","eslint":"^3.19.0","eslint-plugin-react":"^6.10.3","webpack":"^3.6.0","webpack-dev-server":"^2.4.2"},"dependencies":{"global":"^4.3.2","keycode":"^2.1.8","react":"^16.0.0","react-dom":"^16.0.0"}}

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = {"name":"events","id":"events","version":"2.0.0","description":"Node's event emitter for all engines.","keywords":["events","eventEmitter","eventDispatcher","listeners"],"author":"Irakli Gozalishvili <rfobic@gmail.com> (http://jeditoolkit.com)","repository":{"type":"git","url":"git://github.com/Gozala/events.git","web":"https://github.com/Gozala/events"},"bugs":{"url":"http://github.com/Gozala/events/issues/"},"main":"./events.js","engines":{"node":">=0.4.x"},"devDependencies":{"isarray":"^2.0.2","mocha":"^3.5.3","object-keys":"^1.0.11","zuul":"^3.11.1"},"scripts":{"test":"mocha --ui qunit -- tests/index.js && zuul -- tests/index.js"},"license":"MIT"}

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = {"name":"prop-types","version":"15.6.1","description":"Runtime type checking for React props and similar objects.","main":"index.js","license":"MIT","files":["LICENSE","README.md","checkPropTypes.js","factory.js","factoryWithThrowingShims.js","factoryWithTypeCheckers.js","index.js","prop-types.js","prop-types.min.js","lib"],"repository":"facebook/prop-types","keywords":["react"],"bugs":{"url":"https://github.com/facebook/prop-types/issues"},"homepage":"https://facebook.github.io/react/","dependencies":{"fbjs":"^0.8.16","loose-envify":"^1.3.1","object-assign":"^4.1.1"},"scripts":{"test":"jest","umd":"NODE_ENV=development browserify index.js -t envify --standalone PropTypes -o prop-types.js","umd-min":"NODE_ENV=production browserify index.js -t envify -t uglifyify --standalone PropTypes  -p bundle-collapser/plugin -o | uglifyjs --compress unused,dead_code -o prop-types.min.js","build":"yarn umd && yarn umd-min","prepublish":"yarn build"},"devDependencies":{"babel-jest":"^19.0.0","babel-preset-react":"^6.24.1","browserify":"^14.3.0","bundle-collapser":"^1.2.1","envify":"^4.0.0","jest":"^19.0.2","react":"^15.5.1","uglifyify":"^3.0.4","uglifyjs":"^2.4.10"},"browserify":{"transform":["loose-envify"]}}

/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports = {"name":"qs","description":"A querystring parser that supports nesting and arrays, with a depth limit","homepage":"https://github.com/ljharb/qs","version":"6.5.2","repository":{"type":"git","url":"https://github.com/ljharb/qs.git"},"main":"lib/index.js","contributors":[{"name":"Jordan Harband","email":"ljharb@gmail.com","url":"http://ljharb.codes"}],"keywords":["querystring","qs"],"engines":{"node":">=0.6"},"dependencies":{},"devDependencies":{"@ljharb/eslint-config":"^12.2.1","browserify":"^16.2.0","covert":"^1.1.0","editorconfig-tools":"^0.1.1","eslint":"^4.19.1","evalmd":"^0.0.17","iconv-lite":"^0.4.21","mkdirp":"^0.5.1","qs-iconv":"^1.0.4","safe-publish-latest":"^1.1.1","safer-buffer":"^2.1.2","tape":"^4.9.0"},"scripts":{"prepublish":"safe-publish-latest && npm run dist","pretest":"npm run --silent readme && npm run --silent lint","test":"npm run --silent coverage","tests-only":"node test","readme":"evalmd README.md","prelint":"editorconfig-tools check * lib/* test/*","lint":"eslint lib/*.js test/*.js","coverage":"covert test","dist":"mkdirp dist && browserify --standalone Qs lib/index.js > dist/qs.js"},"license":"BSD-3-Clause"}

/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = {"name":"prop-types","version":"15.6.0","description":"Runtime type checking for React props and similar objects.","main":"index.js","license":"MIT","files":["LICENSE","README.md","checkPropTypes.js","factory.js","factoryWithThrowingShims.js","factoryWithTypeCheckers.js","index.js","prop-types.js","prop-types.min.js","lib"],"repository":"reactjs/prop-types","keywords":["react"],"bugs":{"url":"https://github.com/reactjs/prop-types/issues"},"homepage":"https://facebook.github.io/react/","dependencies":{"fbjs":"^0.8.16","loose-envify":"^1.3.1","object-assign":"^4.1.1"},"scripts":{"test":"jest","umd":"NODE_ENV=development browserify index.js -t envify --standalone PropTypes -o prop-types.js","umd-min":"NODE_ENV=production browserify index.js -t envify -t uglifyify --standalone PropTypes  -p bundle-collapser/plugin -o | uglifyjs --compress unused,dead_code -o prop-types.min.js","build":"yarn umd && yarn umd-min","prepublish":"yarn build"},"devDependencies":{"babel-jest":"^19.0.0","babel-preset-react":"^6.24.1","browserify":"^14.3.0","bundle-collapser":"^1.2.1","envify":"^4.0.0","jest":"^19.0.2","react":"^15.5.1","uglifyify":"^3.0.4","uglifyjs":"^2.4.10"},"browserify":{"transform":["loose-envify"]}}

/***/ }),
/* 110 */
/***/ (function(module, exports) {

module.exports = {"name":"react-modal","version":"3.4.5","description":"Accessible modal dialog component for React.JS","main":"./lib/index.js","module":"./lib/index.js","repository":{"type":"git","url":"https://github.com/reactjs/react-modal.git"},"homepage":"https://github.com/reactjs/react-modal","bugs":"https://github.com/reactjs/react-modal/issues","directories":{"example":"examples"},"scripts":{"start":"./node_modules/.bin/webpack-dev-server --inline --host 127.0.0.1 --content-base examples/","test":"cross-env NODE_ENV=test karma start","lint":"eslint src/ specs/"},"authors":["Ryan Florence"],"license":"MIT","devDependencies":{"babel-cli":"^6.26.0","babel-core":"^6.25.0","babel-eslint":"^8.0.1","babel-loader":"^7.1.2","babel-plugin-add-module-exports":"^0.2.1","babel-preset-env":"^1.6.0","babel-preset-react":"^6.24.1","babel-preset-stage-2":"^6.24.1","coveralls":"^2.13.1","cross-env":"^5.0.1","eslint":"^4.8.0","eslint-config-prettier":"^2.6.0","eslint-import-resolver-webpack":"^0.9.0","eslint-plugin-import":"^2.10.0","eslint-plugin-jsx-a11y":"^6.0.2","eslint-plugin-prettier":"^2.3.1","eslint-plugin-react":"^7.4.0","gitbook-cli":"^2.3.0","istanbul-instrumenter-loader":"^3.0.0","karma":"^1.3.0","karma-chrome-launcher":"2.2.0","karma-coverage":"^1.1.1","karma-firefox-launcher":"1.0.1","karma-mocha":"^1.3.0","karma-mocha-reporter":"^2.2.1","karma-sourcemap-loader":"^0.3.7","karma-webpack":"^2.0.4","mocha":"3.5.3","npm-run-all":"^4.1.1","prettier":"^1.7.4","react":"^16.0.0","react-dom":"^16.0.0","react-router":"^4.2.0","react-router-dom":"^4.2.2","should":"^13.1.0","sinon":"next","uglify-js":"3.1.1","webpack":"^3.6.0","webpack-dev-server":"2.8.2"},"dependencies":{"exenv":"^1.2.0","prop-types":"^15.5.10","react-lifecycles-compat":"^3.0.0","warning":"^3.0.0"},"peerDependencies":{"react":"^0.14.0 || ^15.0.0 || ^16","react-dom":"^0.14.0 || ^15.0.0 || ^16"},"tags":["react","modal","dialog"],"keywords":["react","react-component","modal","dialog"]}

/***/ }),
/* 111 */
/***/ (function(module, exports) {

module.exports = {"name":"@storybook/ui","version":"4.0.0-alpha.8","description":"Core Storybook UI","repository":{"type":"git","url":"https://github.com/storybooks/storybook.git"},"license":"MIT","main":"dist/index.js","jsnext:main":"src/index.js","scripts":{"prepare":"node ../../scripts/prepare.js","publish-storybook":"bash ./.scripts/publish_storybook.sh","storybook":"start-storybook -p 9010"},"dependencies":{"@storybook/components":"4.0.0-alpha.8","@storybook/core-events":"4.0.0-alpha.8","@storybook/mantra-core":"^1.7.2","@storybook/podda":"^1.2.3","@storybook/react-komposer":"^2.0.4","babel-runtime":"^6.26.0","deep-equal":"^1.0.1","emotion":"^9.1.3","events":"^2.0.0","fuse.js":"^3.2.0","global":"^4.3.2","keycode":"^2.2.0","lodash.debounce":"^4.0.8","lodash.pick":"^4.4.0","lodash.sortby":"^4.7.0","lodash.throttle":"^4.1.1","prop-types":"^15.6.1","qs":"^6.5.2","react-emotion":"^9.1.3","react-fuzzy":"^0.5.2","react-icons":"^2.2.7","react-lifecycles-compat":"^3.0.4","react-modal":"^3.4.4","react-treebeard":"^2.1.0"},"devDependencies":{"@storybook/addon-actions":"4.0.0-alpha.8","@storybook/react":"4.0.0-alpha.8"},"peerDependencies":{"react":"*","react-dom":"*"}}

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(1);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(2);

var _promise2 = _interopRequireDefault(_promise);

var _stringify = __webpack_require__(20);

var _stringify2 = _interopRequireDefault(_stringify);

var _asyncToGenerator2 = __webpack_require__(0);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var waitForBuild = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(client, variables) {
    var _ref3, build, status, inProgressCount, specCount, changeCount, errorCount;

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
            status = build.status, inProgressCount = build.inProgressCount, specCount = build.specCount, changeCount = build.changeCount, errorCount = build.errorCount;

            if (!(status === 'BUILD_IN_PROGRESS')) {
              _context.next = 11;
              break;
            }

            if (inProgressCount !== lastInProgressCount) {
              lastInProgressCount = inProgressCount;
              log(inProgressCount + '/' + pluralize(specCount, 'story') + ' remain to test. ' + ('(' + pluralize(changeCount, 'change') + ', ' + pluralize(errorCount, 'error') + ')'));
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

var _util = __webpack_require__(4);

var _nodeAsk = __webpack_require__(22);

var _debug = __webpack_require__(3);

var _debug2 = _interopRequireDefault(_debug);

var _treeKill = __webpack_require__(23);

var _treeKill2 = _interopRequireDefault(_treeKill);

var _envCi = __webpack_require__(21);

var _envCi2 = _interopRequireDefault(_envCi);

var _url = __webpack_require__(24);

var _runtimes = __webpack_require__(16);

var _runtimes2 = _interopRequireDefault(_runtimes);

var _storybook = __webpack_require__(18);

var _storybook2 = _interopRequireDefault(_storybook);

var _startApp = __webpack_require__(17);

var _startApp2 = _interopRequireDefault(_startApp);

var _tunnel = __webpack_require__(13);

var _tunnel2 = _interopRequireDefault(_tunnel);

var _packageJson = __webpack_require__(15);

var _GraphQLClient = __webpack_require__(11);

var _GraphQLClient2 = _interopRequireDefault(_GraphQLClient);

var _git = __webpack_require__(14);

var _package = __webpack_require__(19);

var _environment = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BUILD_POLL_INTERVAL = 1000;

var TesterCreateAppTokenMutation = '\n  mutation TesterCreateAppTokenMutation($appCode: String!) {\n    createAppToken(code: $appCode)\n  }\n';

var TesterCreateBuildMutation = '\n  mutation TesterCreateBuildMutation($input: CreateBuildInput!, $isolatorUrl: String!) {\n    createBuild(input: $input, isolatorUrl: $isolatorUrl) {\n      id\n      number\n      specCount\n      componentCount\n      webUrl\n    }\n  }\n';

var TesterBuildQuery = '\n  query TesterBuildQuery($buildNumber: Int!) {\n    app {\n      build(number: $buildNumber) {\n        id\n        status\n        autoAcceptChanges\n        inProgressCount: snapshotCount(statuses: [SNAPSHOT_IN_PROGRESS])\n        specCount\n        changeCount\n        errorCount: snapshotCount(statuses: [SNAPSHOT_CAPTURE_ERROR])\n      }\n    }\n  }\n';

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
        only = _ref4.only,
        _ref4$fromCI = _ref4.fromCI,
        inputFromCI = _ref4$fromCI === undefined ? false : _ref4$fromCI,
        _ref4$autoAcceptChang = _ref4.autoAcceptChanges,
        autoAcceptChanges = _ref4$autoAcceptChang === undefined ? false : _ref4$autoAcceptChang,
        _ref4$exitZeroOnChang = _ref4.exitZeroOnChanges,
        exitZeroOnChanges = _ref4$exitZeroOnChang === undefined ? false : _ref4$exitZeroOnChang,
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
        originalArgv = _ref4$originalArgv === undefined ? false : _ref4$originalArgv;

    var client, _process$env, TRAVIS_EVENT_TYPE, TRAVIS_PULL_REQUEST_SLUG, TRAVIS_REPO_SLUG, _ref6, jwtToken, _ref7, commit, committedAt, committerEmail, committerName, branch, isTravisPrBuild, baselineCommits, child, _ref8, port, pathname, query, hash, isolatorUrl, tunnel, isolatorUrlObject, predicate, match, runtimeSpecs, fromCI, _getStorybookInfo, storybookVersion, viewLayer, exitCode, _ref10, _ref10$createBuild, number, specCount, componentCount, webUrl, onlineHint, _ref11, status, buildAutoAcceptChanges, changeCount, errorCount, scriptCommand, confirmed;

    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            client = new _GraphQLClient2.default({ uri: indexUrl + '/graphql' });
            _process$env = process.env, TRAVIS_EVENT_TYPE = _process$env.TRAVIS_EVENT_TYPE, TRAVIS_PULL_REQUEST_SLUG = _process$env.TRAVIS_PULL_REQUEST_SLUG, TRAVIS_REPO_SLUG = _process$env.TRAVIS_REPO_SLUG;

            if (TRAVIS_EVENT_TYPE === 'pull_request' && TRAVIS_PULL_REQUEST_SLUG === TRAVIS_REPO_SLUG) {
              log('WARNING: Running Chromatic on a Travis PR build from an internal branch.\n\nIt is recommended to run Chromatic on the push builds from Travis where possible.\nWe advise turning on push builds and disabling Chromatic for internal PR builds.\nRead more: http://docs.chromaticqa.com/setup_ci#travis\n', { noPrefix: true, level: 'warn' });
            }

            if (appCode) {
              _context2.next = 5;
              break;
            }

            throw new Error('You must provide an app code  -- visit https://www.chromaticqa.com to get your code.' + '\nPass your app code with the `CHROMATIC_APP_CODE` environment variable or the `--app-code` flag.');

          case 5:
            if (scriptName || commandName || noStart) {
              _context2.next = 7;
              break;
            }

            throw new Error('Either scriptName, commandName or noStart is required');

          case 7:
            _context2.prev = 7;
            _context2.next = 10;
            return client.runQuery(TesterCreateAppTokenMutation, {
              appCode: appCode
            });

          case 10:
            _ref6 = _context2.sent;
            jwtToken = _ref6.createAppToken;

            client.setJwtToken(jwtToken);
            _context2.next = 20;
            break;

          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2['catch'](7);

            if (!(_context2.t0[0] && _context2.t0[0].message && _context2.t0[0].message.match('No app with code'))) {
              _context2.next = 19;
              break;
            }

            throw new Error('Incorrect app code \'' + appCode + '\' -- visit https://www.chromaticqa.com to get your code');

          case 19:
            throw _context2.t0;

          case 20:
            _context2.next = 22;
            return (0, _git.getCommit)();

          case 22:
            _ref7 = _context2.sent;
            commit = _ref7.commit;
            committedAt = _ref7.committedAt;
            committerEmail = _ref7.committerEmail;
            committerName = _ref7.committerName;
            _context2.next = 29;
            return (0, _git.getBranch)();

          case 29:
            branch = _context2.sent;
            isTravisPrBuild = process.env.TRAVIS_EVENT_TYPE === 'pull_request';

            // Travis PR builds are weird, we want to ensure we mark build against the commit that was
            // merged from, rather than the resulting "psuedo" merge commit that doesn't stick around in the
            // history of the project (so approvals will get lost). We also have to ensure we use the right branch.

            if (!isTravisPrBuild) {
              _context2.next = 36;
              break;
            }

            commit = process.env.TRAVIS_PULL_REQUEST_SHA;
            branch = process.env.TRAVIS_PULL_REQUEST_BRANCH;

            if (!(!commit || !branch)) {
              _context2.next = 36;
              break;
            }

            throw new Error('`TRAVIS_EVENT_TYPE` environment variable set to \'pull_request\', \nbut `TRAVIS_PULL_REQUEST_SHA` and `TRAVIS_PULL_REQUEST_BRANCH` are not both set.\n\nRead more here: https://docs.chromaticqa.com/setup_ci#travis');

          case 36:

            // On certain CI systems, a branch is not checked out
            // (instead a detached head is used for the commit).
            if (branch === 'HEAD' || !branch) {
              branch = (0, _envCi2.default)().branch;

              // $HEAD is for netlify: https://www.netlify.com/docs/continuous-deployment/
              if (branch === 'HEAD' || !branch) {
                branch = process.env.HEAD || branch || 'HEAD';
              }
            }

            debug('git info: ' + (0, _stringify2.default)({ commit: commit, committedAt: committedAt, branch: branch }));

            _context2.next = 40;
            return (0, _git.getBaselineCommits)(client);

          case 40:
            baselineCommits = _context2.sent;

            debug('Found baselineCommits: ' + baselineCommits);

            child = void 0;

            if (noStart) {
              _context2.next = 51;
              break;
            }

            log('Starting storybook');
            _context2.next = 47;
            return (0, _startApp2.default)({ scriptName: scriptName, commandName: commandName, url: url });

          case 47:
            child = _context2.sent;

            log('Started storybook at ' + url);
            _context2.next = 56;
            break;

          case 51:
            _context2.next = 53;
            return (0, _startApp.checkResponse)(url);

          case 53:
            if (_context2.sent) {
              _context2.next = 55;
              break;
            }

            throw new Error('No server responding at ' + url + ' -- make sure you\'ve started it.');

          case 55:
            log('Detected storybook at ' + url);

          case 56:
            _ref8 = new _url.URL(url), port = _ref8.port, pathname = _ref8.pathname, query = _ref8.query, hash = _ref8.hash;
            isolatorUrl = url;
            tunnel = void 0;

            if (!createTunnel) {
              _context2.next = 70;
              break;
            }

            log('Opening tunnel to Chromatic capture servers');
            _context2.next = 63;
            return (0, _tunnel2.default)({ tunnelUrl: tunnelUrl, port: port });

          case 63:
            tunnel = _context2.sent;

            debug('Opened tunnel to ' + tunnel.url);
            isolatorUrlObject = new _url.URL(tunnel.url);

            isolatorUrlObject.pathname = pathname;
            isolatorUrlObject.query = query;
            isolatorUrlObject.hash = hash;
            isolatorUrl = isolatorUrlObject.toString();

          case 70:

            debug('Connecting to ' + isolatorUrl);
            log('Uploading and verifying build (this may take a few minutes depending on your connection)');

            predicate = function predicate() {
              return true;
            };

            if (!only) {
              _context2.next = 79;
              break;
            }

            match = only.match(/(.*):([^:]*)/);

            if (match) {
              _context2.next = 77;
              break;
            }

            throw new Error('--only argument must provided in the from "componentName:storyName"');

          case 77:
            log('Running only story \'' + match[2] + '\' of component \'' + match[1] + '\'');

            predicate = function predicate(_ref9) {
              var name = _ref9.name,
                  componentName = _ref9.componentName,
                  otherComponentName = _ref9.component.name;
              return name === match[2] && (componentName || otherComponentName) === match[1];
            };

          case 79:
            _context2.next = 81;
            return (0, _runtimes2.default)(isolatorUrl, { verbose: verbose });

          case 81:
            _context2.t1 = predicate;
            runtimeSpecs = _context2.sent.filter(_context2.t1);

            if (!(runtimeSpecs.length === 0)) {
              _context2.next = 85;
              break;
            }

            throw new Error('Cannot run a build with no stories. Please add some stories!');

          case 85:

            log('Found ' + pluralize(runtimeSpecs.length, 'story'));

            // REPOSITORY_URL is for netlify: https://www.netlify.com/docs/continuous-deployment/
            fromCI = inputFromCI || !!process.env.CI || !!process.env.REPOSITORY_URL;
            _getStorybookInfo = (0, _storybook2.default)(), storybookVersion = _getStorybookInfo.storybookVersion, viewLayer = _getStorybookInfo.viewLayer;


            debug('Detected build fromCI:' + fromCI);
            debug('Detected package version:' + _package.version + ', storybook version:' + storybookVersion + ', view layer: ' + viewLayer);

            exitCode = 5;
            _context2.prev = 91;
            _context2.next = 94;
            return client.runQuery(TesterCreateBuildMutation, {
              input: {
                autoAcceptChanges: autoAcceptChanges,
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

          case 94:
            _ref10 = _context2.sent;
            _ref10$createBuild = _ref10.createBuild;
            number = _ref10$createBuild.number;
            specCount = _ref10$createBuild.specCount;
            componentCount = _ref10$createBuild.componentCount;
            webUrl = _ref10$createBuild.webUrl;
            onlineHint = 'View it online at ' + webUrl;

            log('Started Build ' + number + ' ' + ('(' + pluralize(componentCount, 'component') + ', ' + pluralize(specCount, 'story') + ').\n\n' + onlineHint + '.'));

            _context2.next = 104;
            return waitForBuild(client, {
              buildNumber: number
            });

          case 104:
            _ref11 = _context2.sent;
            status = _ref11.status;
            buildAutoAcceptChanges = _ref11.autoAcceptChanges;
            changeCount = _ref11.changeCount;
            errorCount = _ref11.errorCount;
            _context2.t2 = status;
            _context2.next = _context2.t2 === 'BUILD_PASSED' ? 112 : _context2.t2 === 'BUILD_ACCEPTED' ? 115 : _context2.t2 === 'BUILD_PENDING' ? 115 : _context2.t2 === 'BUILD_DENIED' ? 115 : _context2.t2 === 'BUILD_FAILED' ? 119 : _context2.t2 === 'BUILD_TIMED_OUT' ? 122 : _context2.t2 === 'BUILD_ERROR' ? 125 : 128;
            break;

          case 112:
            log('Build ' + number + ' passed! ' + onlineHint + '.');
            exitCode = 0;
            return _context2.abrupt('break', 129);

          case 115:
            log('Build ' + number + ' has ' + pluralize(changeCount, 'change') + '. ' + onlineHint + '.');
            exitCode = exitZeroOnChanges || buildAutoAcceptChanges ? 0 : 1;
            if (exitCode !== 0) {
              log('Pass --exit-zero-on-changes if you want this command to exit successfully in this case.\n  Alternatively, pass --auto-accept-changes if you want changed builds to pass on this branch.\n  Read more: http://docs.chromaticqa.com/test');
            }
            return _context2.abrupt('break', 129);

          case 119:
            log('Build ' + number + ' has ' + pluralize(errorCount, 'error') + '. ' + onlineHint + '.');
            exitCode = 2;
            return _context2.abrupt('break', 129);

          case 122:
            log('Build ' + number + ' has timed out. Ensure your machine is connected to the internet and please try again.');
            exitCode = 3;
            return _context2.abrupt('break', 129);

          case 125:
            log('Build ' + number + ' has failed to run. Our apologies. Please try again.');
            exitCode = 4;
            return _context2.abrupt('break', 129);

          case 128:
            throw new Error('Unexpected build status: ' + status);

          case 129:
            _context2.next = 139;
            break;

          case 131:
            _context2.prev = 131;
            _context2.t3 = _context2['catch'](91);

            if (!(_context2.t3.length && _context2.t3[0] && _context2.t3[0].message.match(/Cannot run a build with no specs./))) {
              _context2.next = 138;
              break;
            }

            log(_context2.t3[0].message);
            exitCode = 255;
            _context2.next = 139;
            break;

          case 138:
            throw _context2.t3;

          case 139:
            _context2.prev = 139;

            if (tunnel) {
              tunnel.close();
            }

            if (!child) {
              _context2.next = 144;
              break;
            }

            _context2.next = 144;
            return (0, _util.promisify)(_treeKill2.default)(child.pid, 'SIGHUP');

          case 144:
            return _context2.finish(139);

          case 145:
            if (!(!(0, _packageJson.checkPackageJson)() && originalArgv && !fromCI && interactive)) {
              _context2.next = 152;
              break;
            }

            scriptCommand = ('chromatic test ' + originalArgv.slice(2).join(' ')).replace(/--app-code[= ]\S+/, '');
            _context2.next = 149;
            return (0, _nodeAsk.confirm)("\nYou have not added Chromatic's test script to your `package.json`. Would you like me to do it for you?");

          case 149:
            confirmed = _context2.sent;

            if (confirmed) {
              (0, _packageJson.addScriptToPackageJson)('chromatic', scriptCommand);
              log('\nAdded script `chromatic`. You can now run it here or in CI with `npm run chromatic` (or `yarn chromatic`)', { noPrefix: true });
            } else {
              log('\nNo problem. You can add it later with:\n{\n  "scripts": {\n    "chromatic": "' + scriptCommand + '"\n  }\n}', { noPrefix: true });
            }

            log('\nMake sure you set the `CHROMATIC_APP_CODE` environment variable when running builds (in particular on your CI server).', { noPrefix: true });

          case 152:
            return _context2.abrupt('return', exitCode);

          case 153:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this, [[7, 15], [91, 131, 139, 145]]);
  }));

  function runTest(_x4) {
    return _ref5.apply(this, arguments);
  }

  return runTest;
}();

/***/ }),
/* 113 */
/***/ (function(module, exports) {

module.exports = require("apollo-fetch");

/***/ }),
/* 114 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/keys");

/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/values");

/***/ }),
/* 116 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ }),
/* 117 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports = require("jsdom");

/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports = require("jsonfile");

/***/ }),
/* 120 */
/***/ (function(module, exports) {

module.exports = require("localtunnel");

/***/ })
/******/ ]);
//# sourceMappingURL=tester.js.map