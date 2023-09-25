"use client";
import { Search } from "@base/components/search";
import { Suspense, useMemo, useState } from "react";
import { SkeletonLoader } from "@base/components/loading";
import { Container, Grid } from "@mui/material";
import { Repositories } from "@base/components/repositories";
import { mock } from "@base/constants";
import { TRepository } from "@base/types/repository";
import { useRepositories } from "@base/hooks/useRepositories";
import { useAppSelector } from "@base/store";

interface PageInfo {
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  endCursor?: string;
  startCursor?: string;
}

export default function Home() {
  const query = useAppSelector<string>(({ repository }) => repository.search);
  const [pageInfo, setPageInfo] = useState<PageInfo>();
  const [after, setAfter] = useState<string | null>(null);
  const [before, setBefore] = useState<string | null>(null);

  const { data: searchReposData } = useRepositories({
    query,
    after,
    before,
  });

  const repositories = useMemo(() => {
    setPageInfo({ ...(searchReposData?.search?.pageInfo as PageInfo) });
    return searchReposData?.search?.nodes || mock;
  }, [searchReposData]);

  const handleGotoNextPage = () => {
    setAfter(pageInfo?.endCursor || "");
    setBefore("");
  };

  const handleGotoPreviousPage = () => {
    setAfter("");
    setBefore(pageInfo?.startCursor || "");
  };

  return (
    <Container maxWidth="lg">
      <Search />
      <Suspense fallback={<SkeletonLoader />}>
        <Grid container spacing={2} direction="row" pt={2}>
          <Grid item sm={4}>
            Filters
          </Grid>
          <Grid item sm={8}>
            <Repositories items={repositories as TRepository[]} />
          </Grid>
        </Grid>
      </Suspense>
      <div className="flex flex-row space-x-6">
        <button
          className="rounded-md bg-indigo-600  px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-white disabled:border disabled:border-gray-500 disabled:text-gray-500"
          onClick={handleGotoPreviousPage}
          disabled={!pageInfo?.hasPreviousPage}
        >
          Previous
        </button>
        <button
          className="rounded-md bg-indigo-600  px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-white disabled:border disabled:border-gray-500 disabled:text-gray-500"
          onClick={handleGotoNextPage}
          disabled={!pageInfo?.hasNextPage}
        >
          Next
        </button>
      </div>
    </Container>
  );
}
