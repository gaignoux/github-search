import { useSearchRepositoriesQuery } from "@base/lib/graphql";
import { ISearchProps } from "@base/interfaces/search";
import { SearchRepositoryData } from "@base/types/graphql";

/**
 * Custom React hook for fetching a list of repositories based on search criteria.
 *
 * @param {ISearchProps} params - The parameters for the repository search.
 * @param {string} params.query - The search query string.
 * @param {string | null} params.after - The cursor for fetching repositories after this point.
 * @param {string | null} params.before - The cursor for fetching repositories before this point.
 * @returns { SearchRepositoryData  | undefined} The search results data or undefined.
 */
export const useRepositories = ({
  query = "",
  after,
  before,
}: ISearchProps): SearchRepositoryData | undefined => {
  const { data } = useSearchRepositoriesQuery(
    {
      query,
      ...(!!before ? { before, last: 30 } : { after, first: 30 }),
    },
    { enabled: true },
  );
  return data?.data;
};
