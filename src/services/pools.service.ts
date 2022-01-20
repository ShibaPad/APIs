import { CreatePoolDto } from '@dtos/pools.dto';
import { HttpException } from '@exceptions/HttpException';
import { Pool } from '@interfaces/pools.interface';
import poolModel from '@models/pools.model';
import { isEmpty } from '@utils/util';

class PoolService {
  public pools = poolModel;

  public async findAll(): Promise<Pool[]> {
    const users: Pool[] = await this.pools.find();
    return users;
  }

  public async findById(poolId: string): Promise<Pool> {
    if (isEmpty(poolId)) throw new HttpException(400, "You're not poolId");

    const findPool: Pool = await this.pools.findOne({ _id: poolId });
    if (!findPool) throw new HttpException(409, "You're not pool");

    return findPool;
  }

  public async create(poolData: CreatePoolDto): Promise<Pool> {
    if (isEmpty(poolData)) throw new HttpException(400, "You're not poolData");

    const findPool: Pool = await this.pools.findOne({ name: poolData.name });
    if (findPool) throw new HttpException(409, `Your pool name(${poolData.name}) already exists`);

    const createPoolData: Pool = await this.pools.create(poolData);

    return createPoolData;
  }

  public async update(poolId: string, poolData: CreatePoolDto): Promise<Pool> {
    if (isEmpty(poolData)) throw new HttpException(400, "You're not poolData");

    if (poolData.name) {
      const findPool: Pool = await this.pools.findOne({ name: poolData.name });
      if (findPool && findPool._id != poolId) throw new HttpException(409, `Your pool name ${poolData.name} already exists`);
    }

    const updatePoolById: Pool = await this.pools.findByIdAndUpdate(poolId, poolData);
    if (!updatePoolById) throw new HttpException(409, "You're not pool");

    return updatePoolById;
  }

  public async delete(poolId: string): Promise<Pool> {
    const deletePoolById: Pool = await this.pools.findByIdAndDelete(poolId);
    if (!deletePoolById) throw new HttpException(409, "You're not pool");

    return deletePoolById;
  }
}

export default PoolService;
