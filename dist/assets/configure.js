"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _client = require("@storybook/core/client");

var _client2 = _interopRequireDefault(require("../client"));

/* eslint-env browser */

/* eslint-disable import/no-extraneous-dependencies, global-require */
// eslint-disable-next-line no-restricted-globals
if (!location.pathname.match('/iframe.html') && typeof jest === 'undefined') {
  console.error("storybook-chromatic should be installed in your `.storybook/config.js`");
}

var runtime = 'storybook';

var _default = function _default() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _client2.default)((0, _objectSpread2.default)({
    runtime: runtime,
    renderSpec: function () {
      var _renderSpec = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(_ref) {
        var specRuntime, story, kind, _window, __STORYBOOK_CLIENT_API__, __STORYBOOK_ADDONS_CHANNEL__, channel, message, stack, error;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                specRuntime = _ref.runtime, story = _ref.name, kind = _ref.component.name;
                _window = window, __STORYBOOK_CLIENT_API__ = _window.__STORYBOOK_CLIENT_API__, __STORYBOOK_ADDONS_CHANNEL__ = _window.__STORYBOOK_ADDONS_CHANNEL__;

                if (!(!__STORYBOOK_CLIENT_API__ || !__STORYBOOK_ADDONS_CHANNEL__)) {
                  _context.next = 4;
                  break;
                }

                throw new Error("Chromatic requires Storybook version at least 3.4. Please update your storybook!");

              case 4:
                if (!(specRuntime !== runtime)) {
                  _context.next = 6;
                  break;
                }

                throw new Error("Storybook plugin cannot handle ".concat(specRuntime, " specs"));

              case 6:
                channel = __STORYBOOK_ADDONS_CHANNEL__; // In storybook 5+ we can be sure of the emitting, and we need to use a storyId API

                if (!_client.toId) {
                  _context.next = 9;
                  break;
                }

                return _context.abrupt("return", new Promise(function (resolve, reject) {
                  channel.on('storyRendered', function () {
                    return resolve(document.getElementById('root'));
                  });
                  channel.on('storyUnchanged', function () {
                    return resolve(document.getElementById('root'));
                  });
                  channel.on('storyErrored', function (error) {
                    return reject(error);
                  });
                  channel.on('storyThrewException', function (error) {
                    return reject(error);
                  });
                  channel.emit('setCurrentStory', {
                    storyId: (0, _client.toId)(kind, story)
                  });
                }));

              case 9:
                // We need to emulate the event sent by the manager to the preview.
                // In SB@4+ if we emit a message on the channel it will get picked up by the preview
                // (note that we are on the preview side). However, in SB@3.4, perhaps more correctly,
                // if we emit a message, it won't be picked up by the preview. So we need to reach
                // in and simulate receiving an event
                // eslint-disable-next-line no-underscore-dangle
                channel._handleEvent({
                  type: 'setCurrentStory',
                  args: [{
                    kind: kind,
                    story: story
                  }],
                  from: 'chromatic'
                }); // If the story has rendered with an error, SB does not return any kind of error
                // (we will fix this...) However, in the meantime, you can pick this up via a class on the body


                if (!document.body.classList.contains('sb-show-errordisplay')) {
                  _context.next = 16;
                  break;
                }

                message = document.getElementById('error-message').textContent;
                stack = document.getElementById('error-stack').textContent;
                error = new Error(message);
                error.stack = stack;
                throw error;

              case 16:
                return _context.abrupt("return", document.getElementById('root'));

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function renderSpec(_x) {
        return _renderSpec.apply(this, arguments);
      }

      return renderSpec;
    }(),
    specs: function specs() {
      var _window2 = window,
          __STORYBOOK_CLIENT_API__ = _window2.__STORYBOOK_CLIENT_API__,
          __STORYBOOK_ADDONS_CHANNEL__ = _window2.__STORYBOOK_ADDONS_CHANNEL__;

      if (!__STORYBOOK_CLIENT_API__ || !__STORYBOOK_ADDONS_CHANNEL__) {
        throw new Error("Chromatic requires Storybook version at least 3.4. Please update your storybook!");
      } // eslint-disable-next-line no-underscore-dangle


      var storyStore = __STORYBOOK_CLIENT_API__._storyStore;
      return __STORYBOOK_CLIENT_API__.getStorybook().map(function (_ref2) {
        var kind = _ref2.kind,
            stories = _ref2.stories;
        return stories.map(function (_ref3) {
          var name = _ref3.name;
          var parameters;

          if (storyStore.getStoryAndParameters) {
            // Annoying to have to do this, we should support this in .getStorybook
            var _storyStore$getStoryA = storyStore.getStoryAndParameters(kind, name),
                chromatic = _storyStore$getStoryA.parameters.chromatic;

            if (chromatic) {
              var viewports = chromatic.viewports,
                  delay = chromatic.delay,
                  disable = chromatic.disable,
                  noScroll = chromatic.noScroll,
                  diffThreshold = chromatic.diffThreshold;
              parameters = (0, _objectSpread2.default)({}, viewports && {
                viewports: viewports
              }, delay && {
                delay: delay
              }, disable && {
                disable: disable
              }, noScroll && {
                noScroll: noScroll
              }, diffThreshold && {
                diffThreshold: diffThreshold
              });
            }
          }

          return {
            name: name,
            component: {
              name: kind,
              displayName: kind.split('/').slice(-1)[0]
            },
            runtime: runtime,
            parameters: parameters
          };
        });
      }).reduce(function (a, b) {
        return [].concat((0, _toConsumableArray2.default)(a), (0, _toConsumableArray2.default)(b));
      }, []); // flatten
    }
  }, options));
};

exports.default = _default;
//# sourceMappingURL=configure.js.map