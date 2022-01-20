"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.dbConnection = void 0;
var _config = _interopRequireDefault(require("config"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { host , port , database  } = _config.default.get('dbConfig');
const dbConnection = {
    url: `mongodb://${host}:${port}/${database}`,
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }
};
exports.dbConnection = dbConnection;

//# sourceMappingURL=index.js.map