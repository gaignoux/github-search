import axios, { AxiosInstance } from "axios";
import { IRequests } from "@base/interfaces/request";
import { ACCESS_TOKEN, GITHUB_API } from "@base/constants";

class Requests implements IRequests {
  private axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
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
}

const axiosInstance = axios.create({
  baseURL: GITHUB_API,
  timeout: 30000,
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});

export const api = new Requests(axiosInstance);
