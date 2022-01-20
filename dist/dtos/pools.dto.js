"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CreatePoolDto = void 0;
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
var _class, _descriptor, _dec, _dec1, _descriptor1, _dec2, _dec3, _descriptor2, _dec4, _dec5, _descriptor3, _dec6, _dec7, _descriptor4, _dec8, _dec9, _descriptor5, _dec10, _dec11, _descriptor6, _dec12, _dec13, _descriptor7, _dec14, _dec15, _descriptor8, _dec16, _dec17, _descriptor9, _dec18, _dec19, _descriptor10, _dec20, _dec21, _descriptor11, _dec22, _dec23, _descriptor12, _dec24, _dec25;
let CreatePoolDto = ((_class = class CreatePoolDto {
    constructor(){
        _initializerDefineProperty(this, "name", _descriptor, this);
        _initializerDefineProperty(this, "address", _descriptor1, this);
        _initializerDefineProperty(this, "logoURL", _descriptor2, this);
        _initializerDefineProperty(this, "description", _descriptor3, this);
        _initializerDefineProperty(this, "link", _descriptor4, this);
        _initializerDefineProperty(this, "vestingSchedule", _descriptor5, this);
        _initializerDefineProperty(this, "network", _descriptor6, this);
        _initializerDefineProperty(this, "acceptedCurrency", _descriptor7, this);
        _initializerDefineProperty(this, "minimumTier", _descriptor8, this);
        _initializerDefineProperty(this, "saleType", _descriptor9, this);
        _initializerDefineProperty(this, "claimDate", _descriptor10, this);
        _initializerDefineProperty(this, "swapDate", _descriptor11, this);
        _initializerDefineProperty(this, "whitelistPeriod", _descriptor12, this);
    }
}) || _class, _dec = (0, _classValidator).IsString(), _dec1 = typeof Reflect !== "undefined" && typeof Reflect.metadata === "function" && Reflect.metadata("design:type", String), _dec2 = (0, _classValidator).IsString(), _dec3 = typeof Reflect !== "undefined" && typeof Reflect.metadata === "function" && Reflect.metadata("design:type", String), _dec4 = (0, _classValidator).IsUrl(), _dec5 = typeof Reflect !== "undefined" && typeof Reflect.metadata === "function" && Reflect.metadata("design:type", String), _dec6 = (0, _classValidator).IsString(), _dec7 = typeof Reflect !== "undefined" && typeof Reflect.metadata === "function" && Reflect.metadata("design:type", String), _dec8 = (0, _classValidator).IsUrl(), _dec9 = typeof Reflect !== "undefined" && typeof Reflect.metadata === "function" && Reflect.metadata("design:type", String), _dec10 = (0, _classValidator).IsString(), _dec11 = typeof Reflect !== "undefined" && typeof Reflect.metadata === "function" && Reflect.metadata("design:type", String), _dec12 = (0, _classValidator).IsString(), _dec13 = typeof Reflect !== "undefined" && typeof Reflect.metadata === "function" && Reflect.metadata("design:type", String), _dec14 = (0, _classValidator).IsString(), _dec15 = typeof Reflect !== "undefined" && typeof Reflect.metadata === "function" && Reflect.metadata("design:type", String), _dec16 = (0, _classValidator).IsString(), _dec17 = typeof Reflect !== "undefined" && typeof Reflect.metadata === "function" && Reflect.metadata("design:type", String), _dec18 = (0, _classValidator).IsString(), _dec19 = typeof Reflect !== "undefined" && typeof Reflect.metadata === "function" && Reflect.metadata("design:type", String), _dec20 = (0, _classValidator).IsDate(), _dec21 = typeof Reflect !== "undefined" && typeof Reflect.metadata === "function" && Reflect.metadata("design:type", String), _dec22 = (0, _classValidator).IsDate(), _dec23 = typeof Reflect !== "undefined" && typeof Reflect.metadata === "function" && Reflect.metadata("design:type", String), _dec24 = (0, _classValidator).IsString(), _dec25 = typeof Reflect !== "undefined" && typeof Reflect.metadata === "function" && Reflect.metadata("design:type", String), _descriptor = _applyDecoratedDescriptor(_class.prototype, "name", [
    _dec,
    _dec1
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: void 0
}), _descriptor1 = _applyDecoratedDescriptor(_class.prototype, "address", [
    _dec2,
    _dec3
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: void 0
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "logoURL", [
    _dec4,
    _dec5
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: void 0
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "description", [
    _dec6,
    _dec7
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: void 0
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "link", [
    _dec8,
    _dec9
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: void 0
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "vestingSchedule", [
    _dec10,
    _dec11
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: void 0
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "network", [
    _dec12,
    _dec13
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: void 0
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "acceptedCurrency", [
    _dec14,
    _dec15
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: void 0
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "minimumTier", [
    _dec16,
    _dec17
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: void 0
}), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "saleType", [
    _dec18,
    _dec19
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: void 0
}), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "claimDate", [
    _dec20,
    _dec21
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: void 0
}), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, "swapDate", [
    _dec22,
    _dec23
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: void 0
}), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, "whitelistPeriod", [
    _dec24,
    _dec25
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: void 0
}), _class);
exports.CreatePoolDto = CreatePoolDto;

//# sourceMappingURL=pools.dto.js.map