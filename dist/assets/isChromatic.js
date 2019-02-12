"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

/* eslint-env browser */
var isChromatic = window.navigator.userAgent.match(/Chromatic/) || window.location.href.match(/chromatic=true/);

function _default() {
  return isChromatic;
}
//# sourceMappingURL=isChromatic.js.map