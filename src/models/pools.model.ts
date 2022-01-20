import { model, Schema, Document } from 'mongoose';
import { Pool } from '@interfaces/pools.interface';

const poolSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
    unique: true,
  },
  logoURL: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
  vestingSchedule: {
    required: true,
    type: String,
  },
  network: {
    type: String,
    required: true,
  },
  acceptedCurrency: String,
  minimumTier: String,
  saleType: String,
  claimDate: {
    type: Date,
    requried: true,
  },
  swapDate: {
    type: Date,
    required: true,
  },
  whitelistPeriod: String,
});

const poolModel = model<Pool & Document>('Pool', poolSchema);

export default poolModel;
