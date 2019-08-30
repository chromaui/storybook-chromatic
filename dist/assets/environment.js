"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOGGLY_CUSTOMER_TOKEN = exports.CHROMA_APP_CODE = exports.CHROMATIC_APP_CODE = exports.CHROMATIC_CREATE_TUNNEL = exports.CHROMATIC_TUNNEL_URL = exports.CHROMATIC_INDEX_URL = exports.CHROMATIC_SERVER_PORT = void 0;
// Note this file differs from our usual convention because it is packaged
var _process$env = process.env,
    _process$env$CHROMATI = _process$env.CHROMATIC_SERVER_PORT,
    CHROMATIC_SERVER_PORT = _process$env$CHROMATI === void 0 ? 3004 : _process$env$CHROMATI,
    _process$env$CHROMATI2 = _process$env.CHROMATIC_INDEX_URL,
    CHROMATIC_INDEX_URL = _process$env$CHROMATI2 === void 0 ? 'https://index.chromaticqa.com' : _process$env$CHROMATI2,
    _process$env$CHROMATI3 = _process$env.CHROMATIC_TUNNEL_URL,
    CHROMATIC_TUNNEL_URL = _process$env$CHROMATI3 === void 0 ? 'https://tunnel.chromaticqa.com' : _process$env$CHROMATI3,
    _process$env$CHROMATI4 = _process$env.CHROMATIC_CREATE_TUNNEL,
    CHROMATIC_CREATE_TUNNEL = _process$env$CHROMATI4 === void 0 ? 'true' : _process$env$CHROMATI4,
    CHROMATIC_APP_CODE = _process$env.CHROMATIC_APP_CODE,
    CHROMA_APP_CODE = _process$env.CHROMA_APP_CODE,
    _process$env$LOGGLY_C = _process$env.LOGGLY_CUSTOMER_TOKEN,
    LOGGLY_CUSTOMER_TOKEN = _process$env$LOGGLY_C === void 0 ? 'b5e26204-cdc5-4c78-a9cc-c69eb7fabad3' : _process$env$LOGGLY_C;
exports.LOGGLY_CUSTOMER_TOKEN = LOGGLY_CUSTOMER_TOKEN;
exports.CHROMA_APP_CODE = CHROMA_APP_CODE;
exports.CHROMATIC_APP_CODE = CHROMATIC_APP_CODE;
exports.CHROMATIC_CREATE_TUNNEL = CHROMATIC_CREATE_TUNNEL;
exports.CHROMATIC_TUNNEL_URL = CHROMATIC_TUNNEL_URL;
exports.CHROMATIC_INDEX_URL = CHROMATIC_INDEX_URL;
exports.CHROMATIC_SERVER_PORT = CHROMATIC_SERVER_PORT;
//# sourceMappingURL=environment.js.map