import { SDKMerchantApiBase } from "../base/api";
import { SDKMerchantApiConstructParams } from "../base/types";
import { MerchantHash } from "../hash/api";
import { IGetCardsByExternalCustomerIdResponse } from "./types";

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
      `${this.baseURI}/${externalCustomerId}`,
      {
        headers: { "x-api-key": this.config.apiKey, signature },
      }
    );
  }
}
