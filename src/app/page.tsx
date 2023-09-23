"use client";
import Container from "@mui/material/Container";
import style from "@base/styles/page.module.css";
import { Search } from "@base/components/search";
import { Suspense, useState } from "react";
import { SkeletonLoader } from "@base/components/loading";
import { Grid } from "@mui/material";
import { Repositories } from "@base/components/repositories";
import { mock } from "@base/constants";

export default function Home() {
  const [search, setSearch] = useState("");

  const searching = (value: string) => {
    setSearch(value);
  };

  return (
    <main className={style.main}>
      <Container maxWidth="lg">
        <Search onSearch={searching} />
        <Suspense fallback={<SkeletonLoader />}>
          <Grid container spacing={2} direction="row" pt={2}>
            <Grid item sm={4}>
              Filtros
            </Grid>
            <Grid item sm={8}>
              <Repositories items={mock} search={search} />
            </Grid>
          </Grid>
        </Suspense>
      </Container>
    </main>
  );
}
