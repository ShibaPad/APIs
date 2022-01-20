"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _express = require("express");
var _validationMiddleware = _interopRequireDefault(require("../middlewares/validation.middleware"));
var _poolsController = _interopRequireDefault(require("../controllers/pools.controller"));
var _poolsDto = require("../dtos/pools.dto");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let PoolsRoute = class PoolsRoute {
    initializeRoutes() {
        this.router.get(`${this.path}`, this.poolsController.getPools);
        this.router.get(`${this.path}/:id`, this.poolsController.getPoolById);
        this.router.post(`${this.path}`, (0, _validationMiddleware).default(_poolsDto.CreatePoolDto, 'body'), this.poolsController.createPool);
        this.router.put(`${this.path}/:id`, (0, _validationMiddleware).default(_poolsDto.CreatePoolDto, 'body', true), this.poolsController.updatePool);
        this.router.delete(`${this.path}/:id`, this.poolsController.deletePool);
    }
    constructor(){
        this.path = '/pools';
        this.router = (0, _express).Router();
        this.poolsController = new _poolsController.default();
        this.initializeRoutes();
    }
};
var _default = PoolsRoute;
exports.default = _default;

//# sourceMappingURL=pools.route.js.map