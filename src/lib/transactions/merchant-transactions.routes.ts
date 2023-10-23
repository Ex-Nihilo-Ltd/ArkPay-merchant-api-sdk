import { plainToClass } from 'class-transformer';
import { SDKMerchantApiBase } from '../base/api';
import { SDKMerchantApiConstructParams } from '../base/types';

import { MerchantHash } from '../hash/api';
import { CreateMerchantTransactionDTO, MerchantApiCreatedTransactionDTO, MerchantApiTransactionDTO } from './types';

export class MerchantApiTransactionsRoutes {
  private baseURI: string;
  private signatureBaseURI: string;

  constructor(private readonly api: SDKMerchantApiBase, private readonly config: SDKMerchantApiConstructParams) {
    this.signatureBaseURI = '/api/v1/merchant/api/transactions';
    this.baseURI = '/transactions';
  }

  public async createTransaction(payload: CreateMerchantTransactionDTO): Promise<MerchantApiCreatedTransactionDTO> {
    const signature = MerchantHash.createSignature(
      'POST',
      this.signatureBaseURI,
      JSON.stringify(payload),
      this.config.secretKey,
    );

    const transaction = await this.api.post<MerchantApiCreatedTransactionDTO, CreateMerchantTransactionDTO>(
      `${this.baseURI}`,
      payload,
      { headers: { 'x-api-key': this.config.apiKey, signature } },
    );

    return plainToClass(MerchantApiCreatedTransactionDTO, transaction);
  }

  public async getTransactionById(transactionId: string): Promise<MerchantApiTransactionDTO> {
    const signature = MerchantHash.createSignature(
      'GET',
      `${this.signatureBaseURI}/id/${transactionId}`,
      JSON.stringify({}),
      this.config.secretKey,
    );

    const transaction = await this.api.get<MerchantApiTransactionDTO>(`${this.baseURI}/id/${transactionId}`, {
      headers: { 'x-api-key': this.config.apiKey, signature },
    });

    return plainToClass(MerchantApiTransactionDTO, transaction);
  }

  public async getTransactionByMerchantTransactionId(
    merchantTransactionId: string,
  ): Promise<MerchantApiTransactionDTO> {
    const signature = MerchantHash.createSignature(
      'GET',
      `${this.signatureBaseURI}/merchantTransactionId/${merchantTransactionId}`,
      JSON.stringify({}),
      this.config.secretKey,
    );
    const transaction = await this.api.get<MerchantApiTransactionDTO>(
      `${this.baseURI}/merchantTransactionId/${merchantTransactionId}`,
      {
        headers: {
          'x-api-key': this.config.apiKey,
          signature,
        },
      },
    );

    return plainToClass(MerchantApiTransactionDTO, transaction);
  }
}
