"use client";
import { Suspense } from "react";
import { SkeletonLoader } from "@base/components/loading";
import { Container, Grid, Paper, Typography } from "@mui/material";
import { Favorites } from "@base/components/favorites";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Paper component="div" sx={{ marginBottom: "1rem" }}>
        <Grid
          container
          p={2}
          direction="row"
          alignSelf="center"
          justifyContent="center"
        >
          <Typography variant="h5" component="div">
            Github Search Favorites
          </Typography>
        </Grid>
      </Paper>
      <Suspense fallback={<SkeletonLoader />}>
        <Favorites />
      </Suspense>
    </Container>
  );
}
