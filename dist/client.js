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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__(3);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _toConsumableArray2 = __webpack_require__(4);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = __webpack_require__(2);

var _extends3 = _interopRequireDefault(_extends2);

exports.default = configure;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-env browser */
function configure(_ref) {
  var runtimes = _ref.runtimes;

  var runtimeRenderers = {};
  runtimes.forEach(function (r) {
    runtimeRenderers[r.runtime] = r.renderSpec;
  });

  function runtimeSpecs() {
    return runtimes.map(function (_ref2) {
      var runtime = _ref2.runtime,
          specs = _ref2.specs;
      return specs().map(function (spec) {
        return (0, _extends3.default)({ runtime: runtime }, spec);
      });
    }).reduce(function (a, b) {
      return [].concat((0, _toConsumableArray3.default)(a), (0, _toConsumableArray3.default)(b));
    }, []);
  }

  function renderSpecToDom(spec) {
    var parsedSpec = (0, _extends3.default)({}, spec, {
      input: typeof spec.input === 'string' ? JSON.parse(spec.input) : spec.input
    });

    if (spec.runtime) {
      var renderer = runtimeRenderers[spec.runtime];
      if (!renderer) {
        throw new Error('Didn\'t find a renderer for runtime \'' + spec.runtime + '\' -- are you sure you added it in your client configuration?');
      }
      return renderer(parsedSpec);
    }
    throw new Error('No runtime passed for spec', spec);
  }

  // API to be used by test script to gather runtime spec definitions
  window.__chromaticRuntimeSpecs__ = runtimeSpecs;

  // API to be used by capture worker to render a spec
  window.__renderChromaticSpec__ = renderSpecToDom;

  function handleMessage(_ref3) {
    var data = _ref3.data,
        source = _ref3.source,
        origin = _ref3.origin;

    // TODO -- is it unsafe to not check origin? I don't get the sense it matters

    var message = data.message,
        rest = (0, _objectWithoutProperties3.default)(data, ['message']);

    if (message === 'requestCapabilities') {
      source.postMessage({
        message: 'capabilities',
        service: 'chromatic-isolator',
        version: 0
      }, origin);
    } else if (message === 'renderSpec') {
      try {
        renderSpecToDom(rest.spec);
        source.postMessage({
          message: 'renderedSpec'
        }, origin);
      } catch (error) {
        source.postMessage({
          message: 'renderSpecError',
          error: error.toString()
        }, origin);

        // For now, throw the error so we can see it in the iframe
        throw error;
      }
    }
  }

  window.addEventListener('message', handleMessage, false);
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isolator = __webpack_require__(0);

var _isolator2 = _interopRequireDefault(_isolator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hasSetup = false; /* eslint-env browser */

function configure() {
  var runtimes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  if (hasSetup) {
    throw new Error('Chromatic already configured.');
  }
  hasSetup = true;

  if (runtimes === []) {
    throw new Error('Chromatic must be configured with at least one runtime. http://docs.chromaticqa.com/runtime-api');
  }

  // If we are rendered in an iframe, (by ourself), then we need to clear
  // the screen right away, rather than waiting for a spec
  var isIsolator = document.location.hash.match('__chromatic_isolator__');

  (0, _isolator2.default)({
    runtimes: [].concat(runtimes), // allow passing a single runtime
    clearScreen: isIsolator
  });
}

exports.default = configure;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/objectWithoutProperties");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/toConsumableArray");

/***/ })
/******/ ]);
//# sourceMappingURL=client.js.map