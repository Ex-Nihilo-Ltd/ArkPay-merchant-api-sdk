import { Expose, Type } from 'class-transformer';

export class MerchantApiStoreDTO {
  @Expose()
  public id!: string;

  @Expose()
  public name!: string;

  @Expose()
  public website!: string;

  @Expose()
  public successRedirectUrl!: string;

  @Expose()
  public errorRedirectUrl!: string;

  @Expose()
  public returnUrl!: string;

  @Expose()
  public acsRedirectWebhookUrl!: string;

  constructor(store?: Partial<MerchantApiStoreDTO>) {
    Object.assign(this, store);
  }
}

export class MerchantApiTransactionDTO {
  @Expose()
  public id!: string;

  @Expose()
  public merchantTransactionId!: string;

  @Expose()
  public email!: string;

  @Expose()
  public amount!: number;

  @Expose()
  public fee!: number;

  @Expose()
  public earning!: number;

  @Expose()
  public status!: string;

  @Expose()
  public currencyCode!: string;

  @Expose()
  public testObject?: boolean;

  @Expose()
  public companyId!: string;

  @Expose()
  @Type(() => MerchantApiStoreDTO)
  public store!: MerchantApiStoreDTO;

  @Expose()
  public redirectUrl?: string;

  @Expose()
  @Type(() => Date)
  public createdAt!: Date;

  @Expose()
  @Type(() => Date)
  public updatedAt!: Date;

  constructor(transaction?: Partial<MerchantApiTransactionDTO>) {
    Object.assign(this, transaction);
  }
}
