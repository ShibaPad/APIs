export interface Pool {
  _id: string;
  name: string;
  address: string;
  logoURL: string;
  description: string;
  link: string;
  vestingSchedule: string;
  network: string;
  acceptedCurrency: string;
  minimumTier: string;
  saleType: string;
  claimDate: Date;
  swapDate: Date;
  whitelistPeriod: string;
}
