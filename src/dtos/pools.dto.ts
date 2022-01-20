import { IsString, IsDateString, IsUrl, isDate } from 'class-validator';

export class CreatePoolDto {
  @IsString()
  public name: string;

  @IsString()
  public address: string;

  @IsUrl()
  public logoURL: string;

  @IsString()
  public description: string;

  @IsUrl()
  public link: string;

  @IsString()
  public vestingSchedule: string;

  @IsString()
  public network: string;

  @IsString()
  public acceptedCurrency: string;

  @IsString()
  public minimumTier: string;

  @IsString()
  public saleType: string;

  @IsDateString()
  public claimDate: Date;

  @IsDateString()
  public swapDate: Date;

  @IsString()
  public whitelistPeriod: string;
}
