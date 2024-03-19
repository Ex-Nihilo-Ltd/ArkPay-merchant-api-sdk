import { SDKMerchantApiBase } from "../base/api";
import { SDKMerchantApiConstructParams } from "../base/types";

import { MerchantHash } from "../hash/api";
import {
  ICreateMerchantTransactionPayload,
  IMerchantApiCreatedTransactionResponse,
  IMerchantApiTransactionResponse,
  IMerchantPayTransactionPayload,
  IMerchantPayTransactionResponse,
} from "./types";

export class MerchantApiTransactionsRoutes {
  private baseURI: string;
  private signatureBaseURI: string;

  constructor(
    private readonly api: SDKMerchantApiBase,
    private readonly config: SDKMerchantApiConstructParams
  ) {
    this.signatureBaseURI = "/api/v1/merchant/api/transactions";
    this.baseURI = "/transactions";
  }

  public async createTransaction(
    payload: ICreateMerchantTransactionPayload
  ): Promise<IMerchantApiCreatedTransactionResponse> {
    const signature = MerchantHash.createSignature(
      "POST",
      this.signatureBaseURI,
      JSON.stringify(payload),
      this.config.secretKey
    );

    return this.api.post<
      IMerchantApiCreatedTransactionResponse,
      ICreateMerchantTransactionPayload
    >(`${this.baseURI}`, payload, {
      headers: { "x-api-key": this.config.apiKey, signature },
    });
  }

  public async getTransactionById(
    transactionId: string
  ): Promise<IMerchantApiTransactionResponse> {
    const signature = MerchantHash.createSignature(
      "GET",
      `${this.signatureBaseURI}/id/${transactionId}`,
      JSON.stringify({}),
      this.config.secretKey
    );

    return this.api.get<IMerchantApiTransactionResponse>(
      `${this.baseURI}/id/${transactionId}`,
      {
        headers: { "x-api-key": this.config.apiKey, signature },
      }
    );
  }

  public async getTransactionByMerchantTransactionId(
    merchantTransactionId: string
  ): Promise<IMerchantApiTransactionResponse> {
    const signature = MerchantHash.createSignature(
      "GET",
      `${this.signatureBaseURI}/merchantTransactionId/${merchantTransactionId}`,
      JSON.stringify({}),
      this.config.secretKey
    );

    return this.api.get<IMerchantApiTransactionResponse>(
      `${this.baseURI}/merchantTransactionId/${merchantTransactionId}`,
      {
        headers: {
          "x-api-key": this.config.apiKey,
          signature,
        },
      }
    );
  }

  public async payTransaction(
    transactionId: string,
    payload: IMerchantPayTransactionPayload
  ): Promise<IMerchantPayTransactionResponse> {
    const signature = MerchantHash.createSignature(
      "POST",
      `${this.signatureBaseURI}/${transactionId}/pay`,
      JSON.stringify(payload),
      this.config.secretKey
    );

    return this.api.post<
      IMerchantPayTransactionResponse,
      IMerchantPayTransactionPayload
    >(`${this.baseURI}/${transactionId}/pay`, payload, {
      headers: { "x-api-key": this.config.apiKey, signature },
    });
  }

  public async refund(transactionId: string): Promise<IMerchantPayTransactionResponse> {
    const signature = MerchantHash.createSignature(
      "POST",
      `${this.signatureBaseURI}/${transactionId}/refund`,
      JSON.stringify({}),
      this.config.secretKey
    );

    return this.api.post<IMerchantPayTransactionResponse>(`${this.baseURI}/${transactionId}/refund`, {}, {
      headers: { "x-api-key": this.config.apiKey, signature },
    })
  }
}
