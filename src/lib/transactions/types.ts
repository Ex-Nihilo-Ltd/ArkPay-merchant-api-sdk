export interface ICreateMerchantTransactionPayload {
  merchantTransactionId: string;
  acsReturnUrl?: string;
  amount: number;
  currency: string;
  description?: string;
  handlePayment?: boolean;
}

export interface ICustomerPayAddressPayload {
  address?: string;
  city?: string;
  countryRegion?: string;
  zipCode?: string;
  phoneNumber?: string;
}
export interface IMerchantPayTransactionPayload {
  cardNumber: string;
  email: string;
  cardExpiryDate: string;
  cvc: string;
  holderName: string;
  customerAddress?: ICustomerPayAddressPayload;
  amount?: number;
  acsReturnUrl?: string;
  ipAddress?: string;
  currency: string;
}

export interface IMerchantApiCreatedTransactionResponse {
  transaction: IMerchantApiTransactionResponse;
  redirectUrl?: string;
}

export interface IMerchantApiStoreResponse {
  id: string;
  name: string;
  website: string;
  successRedirectUrl: string;
  errorRedirectUrl: string;
  returnUrl: string;
  acsRedirectWebhookUrl: string;
}

export interface IMerchantApiTransactionResponse {
  id: string;
  merchantTransactionId: string;
  email: string;
  amount: number;
  fee: number;
  earning: number;
  status: string;
  currencyCode: string;
  testObject?: boolean;
  companyId: string;
  store: IMerchantApiStoreResponse;
  redirectUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IMerchantPayTransactionResponse {
  id: string;
  amount: number;
  currency: ICurrencyResponse;
  storeName?: string;
  returnUrl?: string;
  successRedirectUrl?: string;
  errorRedirectUrl?: string;
  status: TransactionStatus;
  message: string;
  feeType: string;
  totalFee: number;
  earning: number;
  acquirer: string;
}

export enum TransactionStatus {
  NOT_STARTED = "NOT_STARTED",
  PROCESSING = "PROCESSING",
  SUMSUB_CARD_VERIFY = "SUMSUB_CARD_VERIFY",
  FAILED = "FAILED",
  COMPLETED = "COMPLETED",
  REFUNDED = "REFUNDED",
}

export interface ICurrencyResponse {
  code: string;
  name: string;
  symbol: string;
}
