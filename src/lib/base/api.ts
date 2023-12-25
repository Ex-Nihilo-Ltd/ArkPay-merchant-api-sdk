import axios, {
  AxiosInstance,
  AxiosResponse,
  RawAxiosRequestConfig,
} from "axios";
import { SDKMerchantApiConstructParams } from "./types";

export class SDKMerchantApiBase {
  private api!: AxiosInstance;

  constructor(private readonly config: SDKMerchantApiConstructParams) {
    this.createApi();
  }

  private createApi() {
    this.api = axios.create({
      baseURL: `${this.config.arkpayHostUrl}/merchant/api`,
    });
  }

  public async get<TResponse, TData = unknown>(
    url: string,
    config?: RawAxiosRequestConfig<TData> | undefined
  ): Promise<TResponse> {
    const { data } = await this.api.get<
      TResponse,
      AxiosResponse<TResponse>,
      TData
    >(url, config);

    return data;
  }

  public async post<TResponse, TData = unknown>(
    url: string,
    data?: TData,
    config?: RawAxiosRequestConfig<TData> | undefined
  ) {
    const { data: resData } = await this.api.post<
      TResponse,
      AxiosResponse<TResponse>,
      TData
    >(url, data, config);

    return resData;
  }

  public async delete<TResponse, TData = unknown>(
    url: string,
    config?: RawAxiosRequestConfig<TData> | undefined,
  ): Promise<TResponse> {
    const { data } = await this.api.delete<TResponse, AxiosResponse<TResponse>, TData>(url, config);

    return data;
  }
}
