import { useSearchRepositoriesQuery } from "@base/lib/graphql";
import { ISearchProps } from "@base/interfaces/search";

export const useRepositories = ({
  query = "",
  after,
  before,
}: ISearchProps) => {
  const { data } = useSearchRepositoriesQuery(
    {
      query,
      ...(!!before ? { before, last: 30 } : { after, first: 30 }),
    },
    { enabled: true },
  );
  return data?.data;
};
