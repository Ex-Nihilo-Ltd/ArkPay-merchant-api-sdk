import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateMerchantTransactionDTO {
  @IsString()
  @IsNotEmpty()
  public merchantTransactionId!: string;

  @IsString()
  @IsOptional()
  public acsReturnUrl?: string;

  @IsNumber()
  @IsNotEmpty()
  public amount!: number;

  @IsString()
  @IsNotEmpty()
  public currency!: string;

  @IsString()
  public description?: string;

  constructor(person?: Partial<CreateMerchantTransactionDTO>) {
    Object.assign(this, person);
  }
}
