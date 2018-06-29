'use strict';

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _client = require('../client');

var _client2 = _interopRequireDefault(_client);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (!location.pathname.match('/iframe.html')) {
  console.error('storybook-chromatic should be installed in your `.storybook/config.js`');
} /* eslint-env browser */
/* eslint-disable import/no-extraneous-dependencies, global-require */

var _window = window,
    __STORYBOOK_CLIENT_API__ = _window.__STORYBOOK_CLIENT_API__,
    __STORYBOOK_ADDONS_CHANNEL__ = _window.__STORYBOOK_ADDONS_CHANNEL__;


var runtime = 'storybook';
(0, _client2.default)({
  runtime: runtime,
  renderSpec: function renderSpec(_ref) {
    var specRuntime = _ref.runtime,
        input = _ref.input;

    if (specRuntime !== runtime) {
      throw new Error('Storybook plugin cannot handle ' + specRuntime + ' specs');
    }

    var kind = input.kind,
        name = input.name;

    __STORYBOOK_ADDONS_CHANNEL__.emit('setCurrentStory', { kind: kind, story: name });

    return document.getElementById('root');
  },
  specs: function specs() {
    return __STORYBOOK_CLIENT_API__.getStorybook().map(function (_ref2) {
      var kind = _ref2.kind,
          stories = _ref2.stories;
      return stories.map(function (_ref3) {
        var name = _ref3.name;
        return {
          name: name,
          component: {
            name: kind,
            displayName: kind.split('/').slice(-1)[0]
          },
          runtime: runtime,
          input: (0, _stringify2.default)({
            kind: kind,
            name: name
          })
        };
      });
    }).reduce(function (a, b) {
      return [].concat((0, _toConsumableArray3.default)(a), (0, _toConsumableArray3.default)(b));
    }, []); // flatten
  }
});
//# sourceMappingURL=storybook-addon.js.map