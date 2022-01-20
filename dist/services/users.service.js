"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _bcrypt = require("bcrypt");
var _httpException = require("../exceptions/HttpException");
var _usersModel = _interopRequireDefault(require("../models/users.model"));
var _util = require("../utils/util");
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
let UserService = class UserService {
    async findAllUser() {
        const users = await this.users.find();
        return users;
    }
    async findUserById(userId) {
        if ((0, _util).isEmpty(userId)) throw new _httpException.HttpException(400, "You're not userId");
        const findUser = await this.users.findOne({
            _id: userId
        });
        if (!findUser) throw new _httpException.HttpException(409, "You're not user");
        return findUser;
    }
    async createUser(userData) {
        if ((0, _util).isEmpty(userData)) throw new _httpException.HttpException(400, "You're not userData");
        const findUser = await this.users.findOne({
            email: userData.email
        });
        if (findUser) throw new _httpException.HttpException(409, `You're email ${userData.email} already exists`);
        const hashedPassword = await (0, _bcrypt).hash(userData.password, 10);
        const createUserData = await this.users.create(_objectSpread({}, userData, {
            password: hashedPassword
        }));
        return createUserData;
    }
    async updateUser(userId, userData) {
        if ((0, _util).isEmpty(userData)) throw new _httpException.HttpException(400, "You're not userData");
        if (userData.email) {
            const findUser = await this.users.findOne({
                email: userData.email
            });
            if (findUser && findUser._id != userId) throw new _httpException.HttpException(409, `You're email ${userData.email} already exists`);
        }
        if (userData.password) {
            const hashedPassword = await (0, _bcrypt).hash(userData.password, 10);
            userData = _objectSpread({}, userData, {
                password: hashedPassword
            });
        }
        const updateUserById = await this.users.findByIdAndUpdate(userId, {
            userData
        });
        if (!updateUserById) throw new _httpException.HttpException(409, "You're not user");
        return updateUserById;
    }
    async deleteUser(userId) {
        const deleteUserById = await this.users.findByIdAndDelete(userId);
        if (!deleteUserById) throw new _httpException.HttpException(409, "You're not user");
        return deleteUserById;
    }
    constructor(){
        this.users = _usersModel.default;
    }
};
var _default = UserService;
exports.default = _default;

//# sourceMappingURL=users.service.js.map