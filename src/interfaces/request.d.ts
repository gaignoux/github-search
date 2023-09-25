import { AxiosRequestConfig } from "axios";

export interface IRequests {
  get<T>(endpoint: string, config?: AxiosRequestConfig): Promise<Awaited<T>>;
  post<T>(
    endpoint: string,
    body: object,
    config?: AxiosRequestConfig,
  ): Promise<Awaited<T>>;
}
