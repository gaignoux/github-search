"use client";

import React, { ReactElement } from "react";
import { Grid, Skeleton } from "@mui/material";

export const SkeletonLoader = (): ReactElement => {
  const color = "#d5dbe5";

  return (
    <Grid container spacing={2} direction="row" pt={2}>
      <Grid item sm={4}>
        <Skeleton variant="rounded" height={350} />
      </Grid>
      <Grid item>
        <Skeleton variant="rounded" height={350} />
      </Grid>
    </Grid>
  );
};
