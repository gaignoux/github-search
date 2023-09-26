import { api } from "@base/lib/request";

export default class SearchService {
  static async handle<TData, TVariables>(
    query: string,
    variables?: TVariables,
  ) {
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
