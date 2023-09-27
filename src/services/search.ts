import { api } from "@base/lib/request";

/**
 * Service class for handling GraphQL queries.
 */
export default class SearchService {
  /**
   * Handles the execution of a GraphQL query.
   *
   * @template TData - The expected query result data type.
   * @template TVariables - The variable types used in the query.
   * @param {string} query - The GraphQL query.
   * @param {TVariables} [variables] - The query variables.
   * @returns {Promise<TData>} A promise that resolves with the query result data.
   */
  static async handle<TData, TVariables>(
    query: string,
    variables?: TVariables,
  ): Promise<TData> {
    return new Promise<TData>((resolve, reject) => {
      api
        .post<TData>("/graphql", { query, variables })
        .then((response: TData) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
