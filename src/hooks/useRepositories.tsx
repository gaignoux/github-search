import { useSearchRepositoriesQuery } from "@base/graphql";
import { ISearchProps } from "@base/interfaces/search";

export const useRepositories = ({
  query = "",
  after,
  before,
}: ISearchProps) => {
  return useSearchRepositoriesQuery(
    {
      query,
      ...(!!before ? { before, last: 30 } : { after, first: 30 }),
    },
    { enabled: true },
  );
};
