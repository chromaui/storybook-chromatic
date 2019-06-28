#!/usr/bin/env node
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _commander = _interopRequireDefault(require("commander"));

_commander.default.version(require('../../package.json').version).command('test', 'run a Chromatic test', {
  isDefault: true
}).parse(process.argv);
//# sourceMappingURL=chromatic.js.map