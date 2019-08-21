"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _objectSpread3 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _client = require("@storybook/core/client");

var _client2 = _interopRequireDefault(require("../client"));

/* eslint-env browser */

/* eslint-disable import/no-extraneous-dependencies, global-require */
// eslint-disable-next-line no-restricted-globals
if (!location.pathname.match('/iframe.html') && typeof jest === 'undefined') {
  // eslint-disable-next-line no-console
  console.error("storybook-chromatic should be installed in your `.storybook/config.js`");
}

var CHROMATIC_PARAMETERS = ['viewports', 'delay', 'disable', 'noScroll', 'diffThreshold', 'pauseAnimationAtEnd'];

var _default = function _default() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _client2.default)((0, _objectSpread3.default)({
    renderSpec: function () {
      var _renderSpec = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(_ref) {
        var storyId, story, kind, _window, __STORYBOOK_CLIENT_API__, __STORYBOOK_ADDONS_CHANNEL__, channel, message, stack, error;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                storyId = _ref.storyId, story = _ref.name, kind = _ref.component.name;
                _window = window, __STORYBOOK_CLIENT_API__ = _window.__STORYBOOK_CLIENT_API__, __STORYBOOK_ADDONS_CHANNEL__ = _window.__STORYBOOK_ADDONS_CHANNEL__;

                if (!(!__STORYBOOK_CLIENT_API__ || !__STORYBOOK_ADDONS_CHANNEL__)) {
                  _context.next = 4;
                  break;
                }

                throw new Error("Chromatic requires Storybook version at least 3.4. Please update your Storybook!");

              case 4:
                channel = __STORYBOOK_ADDONS_CHANNEL__; // In Storybook 5+ we can be sure of the emitting, and we need to use a storyId API

                if (!_client.toId) {
                  _context.next = 7;
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
                  channel.on('storyMissing', function () {
                    return reject(new Error('storyMissing'));
                  });
                  channel.emit('setCurrentStory', {
                    storyId: storyId || (0, _client.toId)(kind, story)
                  });
                }));

              case 7:
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
                  _context.next = 14;
                  break;
                }

                message = document.getElementById('error-message').textContent;
                stack = document.getElementById('error-stack').textContent;
                error = new Error(message);
                error.stack = stack;
                throw error;

              case 14:
                return _context.abrupt("return", document.getElementById('root'));

              case 15:
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
        throw new Error("Chromatic requires Storybook version at least 3.4. Please update your Storybook!");
      } // eslint-disable-next-line no-underscore-dangle


      var storyStore = __STORYBOOK_CLIENT_API__._storyStore;

      function specFromStory(_ref2) {
        var id = _ref2.id,
            kind = _ref2.kind,
            name = _ref2.name,
            _ref2$parameters = _ref2.parameters;
        _ref2$parameters = _ref2$parameters === void 0 ? {} : _ref2$parameters;
        var chromatic = _ref2$parameters.chromatic;

        var param = function param(value) {
          return typeof value === 'function' ? value({
            id: id,
            kind: kind,
            name: name
          }) : value;
        };

        return {
          storyId: id,
          name: name,
          component: {
            name: kind,
            displayName: kind.split(/\||\/|\./).slice(-1)[0]
          },
          parameters: chromatic && CHROMATIC_PARAMETERS.reduce(function (acc, key) {
            return chromatic[key] ? (0, _objectSpread3.default)({}, acc, (0, _defineProperty2.default)({}, key, param(chromatic[key]))) : acc;
          }, {})
        };
      } // Storybook 5+ API


      if (storyStore.extract) {
        return Object.values(storyStore.extract()).map(specFromStory);
      } // Storybook 4- API


      return __STORYBOOK_CLIENT_API__.getStorybook().map(function (_ref3) {
        var kind = _ref3.kind,
            stories = _ref3.stories;
        return stories.map(function (_ref4) {
          var name = _ref4.name;
          return specFromStory({
            kind: kind,
            name: name,
            parameters: storyStore.getStoryAndParameters && storyStore.getStoryAndParameters(kind, name).parameters
          });
        });
      }).reduce(function (a, b) {
        return [].concat((0, _toConsumableArray2.default)(a), (0, _toConsumableArray2.default)(b));
      }, []); // flatten
    }
  }, options));
};

exports.default = _default;
//# sourceMappingURL=configure.js.map