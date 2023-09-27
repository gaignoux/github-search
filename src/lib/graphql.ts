import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import {
  SearchRepositoriesQuery,
  SearchRepositoriesQueryVariables,
} from "@base/types/graphql";
import SearchService from "@base/services/search";

/**
 * GraphQL query document for searching repositories.
 */
const SearchRepositoriesDocument = `
    query searchRepositories($query: String!, $after: String, $before: String, $first: Int, $last: Int) {
  search(
    query: $query
    after: $after
    type: REPOSITORY
    first: $first
    last: $last
    before: $before
  ) {
    nodes {
      ... on Repository {
        name
        nameWithOwner
        description
        openGraphImageUrl
        id
        homepageUrl
        url
        createdAt
        updatedAt
        stargazerCount
      }
    }
    pageInfo {
      endCursor
      startCursor
      hasNextPage
      hasPreviousPage
    }
    userCount
    repositoryCount
  }
}
    `;

/**
 * A utility function for fetching data using the provided query and variables.
 *
 * @template TData - The data type to be fetched.
 * @template TVariables - The variable types used in the query.
 * @param {string} query - The GraphQL query document.
 * @param {TVariables} variables - The query variables.
 * @returns {Promise<() => Promise<TData>>} A function that returns a Promise of the data.
 */
function fetcher<TData, TVariables>(
  query: string,
  variables?: TVariables,
): () => Promise<TData> {
  return async (): Promise<TData> =>
    SearchService.handle<TData, TVariables>(query, variables);
}

/**
 * Custom React hook for executing the searchRepositories query.
 *
 * @template TData - The expected query result data type.
 * @template TError - The expected error data type.
 * @param {SearchRepositoriesQueryVariables} variables - The query variables.
 * @param {UseQueryOptions<SearchRepositoriesQuery, TError, TData>} options - Query options.
 * @returns {UseQueryResult<SearchRepositoriesQuery, TError>} The query result.
 */
export const useSearchRepositoriesQuery = <
  TData = SearchRepositoriesQuery,
  TError = unknown,
>(
  variables: SearchRepositoriesQueryVariables,
  options?: UseQueryOptions<SearchRepositoriesQuery, TError, TData>,
): UseQueryResult<TData, TError> =>
  useQuery<SearchRepositoriesQuery, TError, TData>(
    ["searchRepositories", variables],
    fetcher<SearchRepositoriesQuery, SearchRepositoriesQueryVariables>(
      SearchRepositoriesDocument,
      variables,
    ),
    options,
  );
