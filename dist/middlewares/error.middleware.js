"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _logger = require("../utils/logger");
const errorMiddleware = (error, req, res, next)=>{
    try {
        const status = error.status || 500;
        const message = error.message || 'Something went wrong';
        _logger.logger.error(`[${req.method}] ${req.path} >> StatusCode:: ${status}, Message:: ${message}`);
        res.status(status).json({
            message
        });
    } catch (error1) {
        next(error1);
    }
};
var _default = errorMiddleware;
exports.default = _default;

//# sourceMappingURL=error.middleware.js.map