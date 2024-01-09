export interface ICreateMerchantTransactionPayload {
  merchantTransactionId: string;
  amount: number;
  currency: string;
  description: string;
  handlePayment?: boolean;
  externalCustomerId?: string;
}

export interface ICustomerPayAddressPayload {
  address?: string;
  city?: string;
  countryCode?: string;
  zipCode?: string;
}
export interface IMerchantPayTransactionPayload {
  cardNumber: string;
  email: string;
  cardExpiryDate: string;
  cvc: string;
  phoneNumber?: string;
  ipAddress?: string;
  holderName: string;
  acsReturnUrl?: string;
  customerAddress?: ICustomerPayAddressPayload;
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
  externalCustomerId?: string;
}

export interface IMerchantPayTransactionResponse {
  id: string;
  amount: number;
  currency: ICurrencyResponse;
  storeId: string;
  storeName?: string;
  status: TransactionStatus;
  message: string;
  feeType: string;
  totalFee: number;
  earning: number;
}

export enum TransactionStatus {
  NOT_STARTED = "NOT_STARTED",
  PROCESSING = "PROCESSING",
  FAILED = "FAILED",
  COMPLETED = "COMPLETED",
  REFUNDED = "REFUNDED",
}

export interface ICurrencyResponse {
  code: string;
  name: string;
  symbol: string;
}
