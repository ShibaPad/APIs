"use strict";
require("dotenv/config");
require("./index");
var _app = _interopRequireDefault(require("./app"));
var _authRoute = _interopRequireDefault(require("./routes/auth.route"));
var _indexRoute = _interopRequireDefault(require("./routes/index.route"));
var _usersRoute = _interopRequireDefault(require("./routes/users.route"));
var _poolsRoute = _interopRequireDefault(require("./routes/pools.route"));
var _validateEnv = _interopRequireDefault(require("./utils/validateEnv"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
(0, _validateEnv).default();
const app = new _app.default([
    new _indexRoute.default(),
    new _usersRoute.default(),
    new _authRoute.default(),
    new _poolsRoute.default()
]);
app.listen();

//# sourceMappingURL=server.js.map