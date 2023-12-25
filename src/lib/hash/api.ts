import { createHmac } from 'crypto';

export class MerchantHash {
  public static createSignature(httpMethod: 'GET' | 'POST' | "DELETE", uri: string, body: string, secretKey: string): string {
    const payload = `${httpMethod} ${uri}\n${body}`;

    const hmac = createHmac('sha256', secretKey);
    return hmac.update(payload).digest('hex');
  }

  public static checkSignature(
    httpMethod: 'GET' | 'POST' | 'DELETE',
    uri: string,
    body: string,
    secretKey: string,
    signature: string,
  ): boolean {
    const actualSignature = MerchantHash.createSignature(httpMethod, uri, body, secretKey);

    return actualSignature === signature;
  }
}
