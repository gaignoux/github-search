"use client";
import { Search } from "@base/components/search";
import { Suspense, useState } from "react";
import { SkeletonLoader } from "@base/components/loading";
import { Container } from "@mui/material";
import { Repositories } from "@base/components/repositories";
import { PageInfo } from "@base/interfaces/search";
import { useAppSelector } from "@base/store";

export default function Home() {
  const pageInfo = useAppSelector<PageInfo | undefined>(
    ({ repository }) => repository.pageInfo,
  );
  const [after, setAfter] = useState<string | null>(null);
  const [before, setBefore] = useState<string | null>(null);

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
        <Repositories />
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
