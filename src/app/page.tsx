"use client";
import { Search } from "@base/components/search";
import { Suspense } from "react";
import { SkeletonLoader } from "@base/components/loading";
import { Container, Grid } from "@mui/material";
import { Repositories } from "@base/components/repositories";
import { mock } from "@base/constants";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Search />
      <Suspense fallback={<SkeletonLoader />}>
        <Grid container spacing={2} direction="row" pt={2}>
          <Grid item sm={4}>
            Filters
          </Grid>
          <Grid item sm={8}>
            <Repositories items={mock} />
          </Grid>
        </Grid>
      </Suspense>
    </Container>
  );
}
