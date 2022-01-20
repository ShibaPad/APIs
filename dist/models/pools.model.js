"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _mongoose = require("mongoose");
const poolSchema = new _mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true,
        unique: true
    },
    logoURL: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    link: {
        type: String
    },
    vestingSchedule: {
        required: true,
        type: String
    },
    network: {
        type: String,
        required: true
    },
    acceptedCurrency: String,
    minimumTier: String,
    saleType: String,
    claimDate: {
        type: Date,
        requried: true
    },
    swapDate: {
        type: Date,
        required: true
    },
    whitelistPeriod: String
});
const poolModel = (0, _mongoose).model('Pool', poolSchema);
var _default = poolModel;
exports.default = _default;

//# sourceMappingURL=pools.model.js.map