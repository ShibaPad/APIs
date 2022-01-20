"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _mongoose = require("mongoose");
const userSchema = new _mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});
const userModel = (0, _mongoose).model('User', userSchema);
var _default = userModel;
exports.default = _default;

//# sourceMappingURL=users.model.js.map