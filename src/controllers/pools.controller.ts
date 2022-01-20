import { NextFunction, Request, Response } from 'express';
import { CreatePoolDto } from '@dtos/pools.dto';
import { Pool } from '@interfaces/pools.interface';
import PoolService from '@services/pools.service';

class PoolsController {
  public poolService = new PoolService();

  public getPools = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllPoolsData: Pool[] = await this.poolService.findAll();

      res.status(200).json({ data: findAllPoolsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getPoolById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const poolId: string = req.params.id;
      const findOnePoolData: Pool = await this.poolService.findById(poolId);

      res.status(200).json({ data: findOnePoolData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createPool = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const poolData: CreatePoolDto = req.body;
      const createPoolData: Pool = await this.poolService.create(poolData);

      res.status(201).json({ data: createPoolData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updatePool = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const poolId: string = req.params.id;
      const poolData: CreatePoolDto = req.body;
      const updatePoolData: Pool = await this.poolService.update(poolId, poolData);

      res.status(200).json({ data: updatePoolData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deletePool = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const poolid: string = req.params.id;
      const deletePoolData: Pool = await this.poolService.delete(poolid);

      res.status(200).json({ data: deletePoolData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default PoolsController;
