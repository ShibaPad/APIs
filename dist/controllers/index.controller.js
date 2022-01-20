"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
let IndexController = class IndexController {
    constructor(){
        this.index = (req, res, next)=>{
            try {
                res.sendStatus(200);
            } catch (error) {
                next(error);
            }
        };
    }
};
var _default = IndexController;
exports.default = _default;

//# sourceMappingURL=index.controller.js.map