"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _config = _interopRequireDefault(require("config"));
var _jsonwebtoken = require("jsonwebtoken");
var _httpException = require("../exceptions/HttpException");
var _usersModel = _interopRequireDefault(require("../models/users.model"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const authMiddleware = async (req, res, next)=>{
    try {
        const Authorization = req.cookies['Authorization'] || (req.header('Authorization') ? req.header('Authorization').split('Bearer ')[1] : null);
        if (Authorization) {
            const secretKey = _config.default.get('secretKey');
            const verificationResponse = await (0, _jsonwebtoken).verify(Authorization, secretKey);
            const userId = verificationResponse._id;
            const findUser = await _usersModel.default.findById(userId);
            if (findUser) {
                req.user = findUser;
                next();
            } else {
                next(new _httpException.HttpException(401, 'Wrong authentication token'));
            }
        } else {
            next(new _httpException.HttpException(404, 'Authentication token missing'));
        }
    } catch (error) {
        next(new _httpException.HttpException(401, 'Wrong authentication token'));
    }
};
var _default = authMiddleware;
exports.default = _default;

//# sourceMappingURL=auth.middleware.js.map