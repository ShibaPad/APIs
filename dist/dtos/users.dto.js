"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CreateUserDto = void 0;
var _classValidator = require("class-validator");
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object.keys(descriptor).forEach(function(key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;
    if ("value" in desc || desc.initializer) {
        desc.writable = true;
    }
    desc = decorators.slice().reverse().reduce(function(desc, decorator) {
        return decorator ? decorator(target, property, desc) || desc : desc;
    }, desc);
    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }
    var own = Object.getOwnPropertyDescriptor(target, property);
    if (own && (own.get || own.set)) {
        delete desc.writable;
        delete desc.initializer;
    }
    if (desc.initializer === void 0) {
        Object.defineProperty(target, property, desc);
        desc = null;
    }
    return desc;
}
function _initializerDefineProperty(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}
var _class, _descriptor, _dec, _dec1, _descriptor1, _dec2, _dec3;
let CreateUserDto = ((_class = class CreateUserDto {
    constructor(){
        _initializerDefineProperty(this, "email", _descriptor, this);
        _initializerDefineProperty(this, "password", _descriptor1, this);
    }
}) || _class, _dec = (0, _classValidator).IsEmail(), _dec1 = typeof Reflect !== "undefined" && typeof Reflect.metadata === "function" && Reflect.metadata("design:type", String), _dec2 = (0, _classValidator).IsString(), _dec3 = typeof Reflect !== "undefined" && typeof Reflect.metadata === "function" && Reflect.metadata("design:type", String), _descriptor = _applyDecoratedDescriptor(_class.prototype, "email", [
    _dec,
    _dec1
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: void 0
}), _descriptor1 = _applyDecoratedDescriptor(_class.prototype, "password", [
    _dec2,
    _dec3
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: void 0
}), _class);
exports.CreateUserDto = CreateUserDto;

//# sourceMappingURL=users.dto.js.map