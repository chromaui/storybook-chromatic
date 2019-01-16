"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return isChromatic;
};

/* eslint-env browser */

var isChromatic = window.navigator.userAgent.match(/Chromatic/) || window.location.href.match(/chromatic=true/);
//# sourceMappingURL=isChromatic.js.map