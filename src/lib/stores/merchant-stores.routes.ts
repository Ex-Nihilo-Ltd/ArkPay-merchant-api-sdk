import { SDKMerchantApiBase } from "../base/api";
import { SDKMerchantApiConstructParams } from "../base/types";
import { MerchantHash } from "../hash/api";
import { IGetCardsByExternalCustomerIdResponse, IMerchantCardWhitelistResponse } from "./types";

export class MerchantApiStoreRoutes {
  private baseURI: string;
  private signatureBaseURI: string;

  constructor(
    private readonly api: SDKMerchantApiBase,
    private readonly config: SDKMerchantApiConstructParams
  ) {
    this.signatureBaseURI = "/api/v1/merchant/api/stores";
    this.baseURI = "/stores";
  }

  public async getCardsByExternalCustomerId(
    externalCustomerId: string
  ): Promise<IGetCardsByExternalCustomerIdResponse> {
    const signature = MerchantHash.createSignature(
      "GET",
      `${this.signatureBaseURI}/kyc-cards/${externalCustomerId}`,
      JSON.stringify({}),
      this.config.secretKey
    );

    return this.api.get<IGetCardsByExternalCustomerIdResponse>(
      `${this.baseURI}/kyc-cards/${externalCustomerId}`,
      {
        headers: { "x-api-key": this.config.apiKey, signature },
      }
    );
  }

  public async whiteListCard(cardId: string, externalCustomerId: string) {
    const signature = MerchantHash.createSignature(
      "POST",
      `${this.signatureBaseURI}/card/whitelist/${cardId}/${externalCustomerId}`,
      JSON.stringify({}),
      this.config.secretKey
    );

    return this.api.post<IMerchantCardWhitelistResponse>(
      `${this.baseURI}/card/whitelist/${cardId}/${externalCustomerId}`,
      {},
      {
        headers: { "x-api-key": this.config.apiKey, signature },
      }
    );
  }

  public async unwhiteListCard(cardId: string, externalCustomerId: string) {
    const signature = MerchantHash.createSignature(
      "DELETE",
      `${this.signatureBaseURI}/card/whitelist/${cardId}/${externalCustomerId}`,
      JSON.stringify({}),
      this.config.secretKey
    );

    return this.api.delete<IMerchantCardWhitelistResponse>(
      `${this.baseURI}/card/whitelist/${cardId}/${externalCustomerId}`,
      {
        headers: { "x-api-key": this.config.apiKey, signature },
      }
    );
  }
}
