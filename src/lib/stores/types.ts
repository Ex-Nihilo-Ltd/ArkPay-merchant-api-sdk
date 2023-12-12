export interface IMerchantCard {
  pan: string;
  verified: boolean;
}

export interface IGetCardsByExternalCustomerIdResponse {
  cards: IMerchantCard[];
  verificationUrl: string;
}
