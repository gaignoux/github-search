import { AxiosRequestConfig } from "axios/index";

export interface IRequests {
  request<T>(options: AxiosRequestConfig): Promise<Awaited<T>>;
  get<T>(endpoint: string, config?: object): Promise<Awaited<T>>;
  post<T>(endpoint: string, body: object, config?: object): Promise<Awaited<T>>;
  put<T>(endpoint: string, body: object, config?: object): Promise<Awaited<T>>;
  delete<T>(endpoint: string, config?: object): Promise<Awaited<T>>;
  patch<T>(
    endpoint: string,
    body?: object,
    config?: object,
  ): Promise<Awaited<T>>;
  externalGet<T>(endpoint: string, config?: object): Promise<Awaited<T>>;
}
