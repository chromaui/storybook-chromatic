'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _client = require('../client');

var _client2 = _interopRequireDefault(_client);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (!location.pathname.match('/iframe.html') && typeof jest === 'undefined') {
  console.error('storybook-chromatic should be installed in your `.storybook/config.js`');
} /* eslint-env browser */
/* eslint-disable import/no-extraneous-dependencies, global-require */

var runtime = 'storybook';

exports.default = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _client2.default)((0, _extends3.default)({
    runtime: runtime,
    renderSpec: function renderSpec(_ref) {
      var specRuntime = _ref.runtime,
          story = _ref.name,
          kind = _ref.component.name;
      var _window = window,
          __STORYBOOK_CLIENT_API__ = _window.__STORYBOOK_CLIENT_API__,
          __STORYBOOK_ADDONS_CHANNEL__ = _window.__STORYBOOK_ADDONS_CHANNEL__;


      if (!__STORYBOOK_CLIENT_API__ || !__STORYBOOK_ADDONS_CHANNEL__) {
        throw new Error('Chromatic requires Storybook version at least 3.4. Please update your storybook!');
      }

      if (specRuntime !== runtime) {
        throw new Error('Storybook plugin cannot handle ' + specRuntime + ' specs');
      }

      // We need to emulate the event sent by the manager to the preview.
      // In SB@4+ if we emit a message on the channel it will get picked up by the preview
      // (note that we are on the preview side). However, in SB@3.4, perhaps more correctly,
      // if we emit a message, it won't be picked up by the preview. So we need to reach
      // in and simulate receiving an event
      // eslint-disable-next-line no-underscore-dangle
      __STORYBOOK_ADDONS_CHANNEL__._handleEvent({
        type: 'setCurrentStory',
        args: [{ kind: kind, story: story }],
        from: 'chromatic'
      });

      // If the story has rendered with an error, SB does not return any kind of error
      // (we will fix this...) However, in the meantime, you can pick this up via a class on the body
      if (document.body.classList.contains('sb-show-errordisplay')) {
        var message = document.getElementById('error-message').textContent;
        var stack = document.getElementById('error-stack').textContent;
        var error = new Error(message);
        error.stack = stack;
        throw error;
      }

      return document.getElementById('root');
    },
    specs: function specs() {
      var _window2 = window,
          __STORYBOOK_CLIENT_API__ = _window2.__STORYBOOK_CLIENT_API__,
          __STORYBOOK_ADDONS_CHANNEL__ = _window2.__STORYBOOK_ADDONS_CHANNEL__;


      if (!__STORYBOOK_CLIENT_API__ || !__STORYBOOK_ADDONS_CHANNEL__) {
        throw new Error('Chromatic requires Storybook version at least 3.4. Please update your storybook!');
      }

      // eslint-disable-next-line no-underscore-dangle
      var storyStore = __STORYBOOK_CLIENT_API__._storyStore;

      return __STORYBOOK_CLIENT_API__.getStorybook().map(function (_ref2) {
        var kind = _ref2.kind,
            stories = _ref2.stories;
        return stories.map(function (_ref3) {
          var name = _ref3.name;

          var parameters = void 0;
          if (storyStore.getStoryAndParameters) {
            // Annoying to have to do this, we should support this in .getStorybook
            var _storyStore$getStoryA = storyStore.getStoryAndParameters(kind, name),
                chromatic = _storyStore$getStoryA.parameters.chromatic;

            if (chromatic) {
              var viewports = chromatic.viewports,
                  delay = chromatic.delay;

              parameters = (0, _extends3.default)({}, viewports && { viewports: viewports }, delay && { delay: delay });
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
        return [].concat((0, _toConsumableArray3.default)(a), (0, _toConsumableArray3.default)(b));
      }, []); // flatten
    }
  }, options));
};
//# sourceMappingURL=configure.js.map