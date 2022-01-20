"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _express = require("express");
var _indexController = _interopRequireDefault(require("../controllers/index.controller"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let IndexRoute = class IndexRoute {
    initializeRoutes() {
        this.router.get(`${this.path}`, this.indexController.index);
    }
    constructor(){
        this.path = '/';
        this.router = (0, _express).Router();
        this.indexController = new _indexController.default();
        this.initializeRoutes();
    }
};
var _default = IndexRoute;
exports.default = _default;

//# sourceMappingURL=index.route.js.map