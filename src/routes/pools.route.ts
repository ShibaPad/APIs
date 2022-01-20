import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';
import PoolsController from '@/controllers/pools.controller';
import { CreatePoolDto } from '@/dtos/pools.dto';

class PoolsRoute implements Routes {
  public path = '/pools';
  public router = Router();
  public poolsController = new PoolsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.poolsController.getPools);
    this.router.get(`${this.path}/:id`, this.poolsController.getPoolById);
    this.router.post(`${this.path}`, validationMiddleware(CreatePoolDto, 'body'), this.poolsController.createPool);
    this.router.put(`${this.path}/:id`, validationMiddleware(CreatePoolDto, 'body', true), this.poolsController.updatePool);
    this.router.delete(`${this.path}/:id`, this.poolsController.deletePool);
  }
}

export default PoolsRoute;
