import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import {
  SearchRepositoriesQuery,
  SearchRepositoriesQueryVariables,
} from "@base/types/graphql";
import SearchService from "@base/services/search";

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
        nameWithOwner
        description
        forkCount
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

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> =>
    SearchService.handle<TData, TVariables>(query, variables);
}

export const useSearchRepositoriesQuery = <
  TData = SearchRepositoriesQuery,
  TError = unknown,
>(
  variables: SearchRepositoriesQueryVariables,
  options?: UseQueryOptions<SearchRepositoriesQuery, TError, TData>,
) =>
  useQuery<SearchRepositoriesQuery, TError, TData>(
    ["searchRepositories", variables],
    fetcher<SearchRepositoriesQuery, SearchRepositoriesQueryVariables>(
      SearchRepositoriesDocument,
      variables,
    ),
    options,
  );
