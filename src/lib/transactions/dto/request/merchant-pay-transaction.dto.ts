import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class MerchantPayTransactionDTO {
  @IsNotEmpty()
  @IsString()
  cardNumber!: string;

  @IsNotEmpty()
  @IsString()
  email!: string;

  @IsNotEmpty()
  @IsString()
  cardExpiryDate!: string;

  @IsUUID()
  transactionId!: string;

  @IsNotEmpty()
  @IsString()
  cvc!: string;

  @IsNotEmpty()
  @IsString()
  holderName!: string;

  @IsOptional()
  @IsString()
  countryRegion?: string;

  @IsOptional()
  @IsString()
  zipCode?: string;

  constructor(initiatePayment?: Partial<MerchantPayTransactionDTO>) {
    Object.assign(this, initiatePayment);
  }
}
