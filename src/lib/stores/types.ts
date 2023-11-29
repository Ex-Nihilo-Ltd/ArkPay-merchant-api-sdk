export interface IMerchantCard {
  pan: string;
  isCardVerified: boolean;
}

export interface IGetCardsByExternalCustomerIdResponse {
  cards: IMerchantCard[],
  verificationUrl: string;
}