"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _httpException = require("../exceptions/HttpException");
var _poolsModel = _interopRequireDefault(require("../models/pools.model"));
var _util = require("../utils/util");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let PoolService = class PoolService {
    async findAll() {
        const users = await this.pools.find();
        return users;
    }
    async findById(poolId) {
        if ((0, _util).isEmpty(poolId)) throw new _httpException.HttpException(400, "You're not poolId");
        const findPool = await this.pools.findOne({
            _id: poolId
        });
        if (!findPool) throw new _httpException.HttpException(409, "You're not pool");
        return findPool;
    }
    async create(poolData) {
        if ((0, _util).isEmpty(poolData)) throw new _httpException.HttpException(400, "You're not poolData");
        const findPool = await this.pools.findOne({
            name: poolData.name
        });
        if (findPool) throw new _httpException.HttpException(409, `Your pool name(${poolData.name}) already exists`);
        const createPoolData = await this.pools.create(poolData);
        return createPoolData;
    }
    async update(poolId, poolData) {
        if ((0, _util).isEmpty(poolData)) throw new _httpException.HttpException(400, "You're not poolData");
        if (poolData.name) {
            const findPool = await this.pools.findOne({
                name: poolData.name
            });
            if (findPool && findPool._id != poolId) throw new _httpException.HttpException(409, `Your pool name ${poolData.name} already exists`);
        }
        const updatePoolById = await this.pools.findByIdAndUpdate(poolId, {
            poolData
        });
        if (!updatePoolById) throw new _httpException.HttpException(409, "You're not pool");
        return updatePoolById;
    }
    async delete(poolId) {
        const deletePoolById = await this.pools.findByIdAndDelete(poolId);
        if (!deletePoolById) throw new _httpException.HttpException(409, "You're not pool");
        return deletePoolById;
    }
    constructor(){
        this.pools = _poolsModel.default;
    }
};
var _default = PoolService;
exports.default = _default;

//# sourceMappingURL=pools.service.js.map