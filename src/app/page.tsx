import Container from "@mui/material/Container";
import style from "@base/styles/page.module.css";
import { Search } from "@base/components/search";
import { Suspense } from "react";
import { SkeletonLoader } from "@base/components/loading";
import { Grid } from "@mui/material";

export default function Home() {
  return (
    <main className={style.main}>
      <Container maxWidth="lg">
        <Search />
        <Suspense fallback={<SkeletonLoader />}>
          <Grid container spacing={2} direction="row" pt={2}>
            <Grid item sm={4}>
              Filtros
            </Grid>
            <Grid item>
              <Items />
            </Grid>
          </Grid>
        </Suspense>
      </Container>
    </main>
  );
}
