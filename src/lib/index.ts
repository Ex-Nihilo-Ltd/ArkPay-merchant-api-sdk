import { SDKMerchantApiBase } from "./base/api";
import { SDKMerchantApiConstructParams } from "./base/types";
import { MerchantApiStoreRoutes } from "./stores/merchant-stores.routes";
import { MerchantApiTransactionsRoutes } from "./transactions/merchant-transactions.routes";

export class SDKMerchantApiIntegration {
  private readonly api: SDKMerchantApiBase;

  public readonly transactions: MerchantApiTransactionsRoutes;
  public readonly stores: MerchantApiStoreRoutes;

  constructor(apiConfig: SDKMerchantApiConstructParams) {
    this.api = new SDKMerchantApiBase(apiConfig);

    this.transactions = new MerchantApiTransactionsRoutes(this.api, apiConfig);
    this.stores = new MerchantApiStoreRoutes(this.api, apiConfig);
  }
}

//types
export * from "./base/types";
export * from "./transactions/types";
export * from "./hash/api";
