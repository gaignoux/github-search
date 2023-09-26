"use client";
import { ReactElement } from "react";
import { Grid, Typography } from "@mui/material";
import { useAppSelector } from "@base/store";
import { Repository } from "@base/components/repository";
import { TRepository } from "@base/types/repository";

export const Favorites = (): ReactElement => {
  const favorites = useAppSelector<TRepository[]>(
    ({ repository }) => repository.favorites,
  );

  return (
    <Grid container spacing={2} direction="row">
      {favorites.length ? (
        favorites.map((favorite, index) => (
          <Grid item key={index} sm={6}>
            <Repository {...favorite} enableRating />
          </Grid>
        ))
      ) : (
        <Grid item width="100%">
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            height="500px"
          >
            <Typography variant="subtitle1">Empty list</Typography>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};
