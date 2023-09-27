import { AxiosRequestConfig } from "axios";

/**
 * Represents a set of request methods.
 */
export interface IRequests {
  /**
   * Send a POST request.
   * @param endpoint - The endpoint to send the request to.
   * @param body - The request body as an object.
   * @param config - Optional Axios request configuration.
   * @returns A promise that resolves to the response data.
   */
  post<T>(
    endpoint: string,
    body: object,
    config?: AxiosRequestConfig,
  ): Promise<Awaited<T>>;
}
