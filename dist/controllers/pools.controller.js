"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _poolsService = _interopRequireDefault(require("../services/pools.service"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let PoolsController = class PoolsController {
    constructor(){
        this.poolService = new _poolsService.default();
        this.getPools = async (req, res, next)=>{
            try {
                const findAllPoolsData = await this.poolService.findAll();
                res.status(200).json({
                    data: findAllPoolsData,
                    message: 'findAll'
                });
            } catch (error) {
                next(error);
            }
        };
        this.getPoolById = async (req, res, next)=>{
            try {
                const poolId = req.params.id;
                const findOnePoolData = await this.poolService.findById(poolId);
                res.status(200).json({
                    data: findOnePoolData,
                    message: 'findOne'
                });
            } catch (error) {
                next(error);
            }
        };
        this.createPool = async (req, res, next)=>{
            try {
                const poolData = req.body;
                const createPoolData = await this.poolService.create(poolData);
                res.status(201).json({
                    data: createPoolData,
                    message: 'created'
                });
            } catch (error) {
                next(error);
            }
        };
        this.updatePool = async (req, res, next)=>{
            try {
                const poolId = req.params.id;
                const poolData = req.body;
                const updatePoolData = await this.poolService.update(poolId, poolData);
                res.status(200).json({
                    data: updatePoolData,
                    message: 'updated'
                });
            } catch (error) {
                next(error);
            }
        };
        this.deletePool = async (req, res, next)=>{
            try {
                const poolid = req.params.id;
                const deletePoolData = await this.poolService.delete(poolid);
                res.status(200).json({
                    data: deletePoolData,
                    message: 'deleted'
                });
            } catch (error) {
                next(error);
            }
        };
    }
};
var _default = PoolsController;
exports.default = _default;

//# sourceMappingURL=pools.controller.js.map