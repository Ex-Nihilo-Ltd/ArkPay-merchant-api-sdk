import { SDKMerchantApiBase } from './base/api';
import { SDKMerchantApiConstructParams } from './base/types';
import { MerchantApiTransactionsRoutes } from './transactions/merchant-transactions.routes';

export class SDKMerchantApiIntegration {
  private readonly api: SDKMerchantApiBase;

  public readonly transactions: MerchantApiTransactionsRoutes;

  constructor(apiConfig: SDKMerchantApiConstructParams) {
    this.api = new SDKMerchantApiBase(apiConfig);

    this.transactions = new MerchantApiTransactionsRoutes(this.api, apiConfig);
  }
}

//types
export * from './base/types';
export * from './transactions/types';
export * from './hash/api';
