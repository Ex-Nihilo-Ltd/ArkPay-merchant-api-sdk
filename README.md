# ArkPay - Merchant API SDK

## Installation

```
  $ npm install arkpay-merchant-api-sdk
```

## API Usage Example

### Create Instance

In order to use API coverage through ArkPay Merchant API SDK, one needs to create an instace of `SDKMerchantApiIntegration`, after that
API requests are made by simply calling the methods on the instance. Usage example following

```ts
import { SDKMerchantApiIntegration } from "arkpay-merchant-api-sdk";

// API usage example
const merchantApiSDK = new SDKMerchantApiIntegration({
  arkpayHostUrl: "https://arkpay.com/api/v1",
  apiKey: storeApiKey ?? "",
  secretKey: storeSecretKey ?? "",
});
```

### Create Transaction

```ts
import { v4 as uuidv4 } from "uuid";

const randomId = uuidv4();
const randomExternalCustomerId = uuidv4();

// Create transaction API example
const response = await merchantApiSDK.transactions.createTransaction({
  amount: 50.99,
  currency: "USD",
  merchantTransactionId: `RANDOM ID ${randomId}`,
  description: `Buying example package`,
  handlePayment: true,
  externalCustomerId: `RANDOM ID ${randomExternalCustomerId}`,
});
```

### Pay Transaction

Paying transaction is only available if 'handlePayment' is set to true when creating transaction

```ts
// Pay transaction API example
const paymentResponse = await merchantApiSDK.transactions.payTransaction(
  response.transaction.id,
  {
    cardNumber: "4111111111111111",
    email: "test.user@arkpay.com",
    cardExpiryDate: "01/25",
    cvc: "000",
    ipAddress: "138.199.42.123",
    holderName: "Arkpay user",
    customerAddress: {
      address: "5th Avenue",
      city: "New York",
      state: "New York State",
      countryCode: "US",
      zipCode: "10012",
      phoneNumber: "1234567890",
    },
    currency: "USD",
  }
);
```

### Refund Transaction by transactionId

```ts

import { v4 as uuidv4 } from "uuid";

const randomId = uuidv4();

const result = await merchantApiSDK.transactions.refund(randomId);
```

### Find Transaction By ArkPay Transaction Id

```ts
import { v4 as uuidv4 } from "uuid";

const randomId = uuidv4();

const result = await merchantApiSDK.transactions.getTransactionById(randomId);
```

### Find Transaction By Merchant Unique Transaction Id

```ts
import { v4 as uuidv4 } from "uuid";

const randomId = uuidv4();

const result =
  await merchantApiSDK.transactions.getTransactionByMerchantTransactionId(
    randomId
  );
```

### Get Cards Information By External Customer Id

```ts
import { v4 as uuidv4 } from "uuid";

const randomId = uuidv4();

const result =
  await merchantApiSDK.stores.getCardsByExternalCustomerId(randomId);
```

### Whitelist card in the store's scope.

If merchant wishes to allow users to withdraw funds without user verification, this function enables you to directly verify a card without requiring user verifications.

```ts

const result = 
  await merchantApiSDK.stores.whiteListCard(cardId, externalCustomerId);

```

### Un-whitelist card.

The "unwhiteListCard" function is used to remove card from whitelist

```ts

const result = 
  await merchantApiSDK.stores.unwhiteListCard(cardId, externalCustomerId);

```