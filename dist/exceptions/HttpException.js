"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
let HttpException = class HttpException extends Error {
    constructor(status, message){
        super(message);
        this.status = status;
        this.message = message;
    }
};
exports.HttpException = HttpException;

//# sourceMappingURL=HttpException.js.map