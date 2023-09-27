import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { IRequests } from "@base/interfaces/request";
import { ACCESS_TOKEN, GITHUB_API } from "@base/constants";

/**
 * Implementation of the `IRequests` interface for making HTTP requests.
 *
 * @implements {IRequests}
 */
class Requests implements IRequests {
  private axiosInstance: AxiosInstance;

  /**
   * Creates an instance of the `Requests` class.
   *
   * @param {AxiosInstance} axiosInstance - Axios instance for making HTTP requests.
   */
  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  /**
   * Sends an HTTP POST request.
   *
   * @template T - The response data type.
   * @param {string} endpoint - The endpoint URL for the POST request.
   * @param {object} body - The request body.
   * @param {AxiosRequestConfig} [config] - Additional request configuration.
   * @returns {Promise<Awaited<T>>} A promise that resolves with the response data.
   */
  async post<T>(
    endpoint: string,
    body: object,
    config?: AxiosRequestConfig,
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

/**
 * The API instance for making HTTP requests.
 */
export const api = new Requests(axiosInstance);
