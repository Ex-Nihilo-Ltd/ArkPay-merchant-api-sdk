export interface IMerchantCard {
  id: string;
  pan: string;
  expiry: string;
  holder: string;
  verified: boolean;
}

export interface IGetCardsByExternalCustomerIdResponse {
  cards: IMerchantCard[];
  verificationUrl: string;
}
