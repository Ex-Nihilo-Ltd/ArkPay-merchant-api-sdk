import { Expose, Type } from 'class-transformer';
import { MerchantApiTransactionDTO } from './merchant-api-transaction.dto';

export class MerchantApiCreatedTransactionDTO {
  @Expose()
  @Type(() => MerchantApiTransactionDTO)
  public transaction!: MerchantApiTransactionDTO;

  @Expose()
  public redirectUrl?: string;

  constructor(response?: Partial<MerchantApiCreatedTransactionDTO>) {
    Object.assign(this, response);
  }
}
