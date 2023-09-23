import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { IRequests } from "@base/interfaces/request";
import { GITHUB_API } from "@base/constants";

class Requests implements IRequests {
  private axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  async request<T>(options: AxiosRequestConfig): Promise<Awaited<T>> {
    return await this.axiosInstance.request(options);
  }

  async get<T>(endpoint: string, config?: object): Promise<Awaited<T>> {
    const res = await this.axiosInstance.get(endpoint, config);
    return res.data;
  }

  async post<T>(
    endpoint: string,
    body: object,
    config?: object,
  ): Promise<Awaited<T>> {
    const res = await this.axiosInstance.post(endpoint, body, config);
    return res.data;
  }

  async put<T>(
    endpoint: string,
    body: object,
    config?: object,
  ): Promise<Awaited<T>> {
    const res = await this.axiosInstance.put(endpoint, body, config);
    return res.data;
  }

  async delete<T>(endpoint: string, config?: object): Promise<Awaited<T>> {
    const res = await this.axiosInstance.delete(endpoint, config);
    return res.data;
  }

  async patch<T>(
    endpoint: string,
    body: object,
    config?: object,
  ): Promise<Awaited<T>> {
    const res = await this.axiosInstance.patch(endpoint, body, config);
    return res.data;
  }

  async externalGet<T>(endpoint: string, config?: object): Promise<Awaited<T>> {
    const res = await axios.get(endpoint, config);
    return res.data;
  }
}

const axiosInstance = axios.create({
  baseURL: GITHUB_API,
  timeout: 30000,
});

export const api = new Requests(axiosInstance);
