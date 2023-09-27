"use client";
import { ReactElement } from "react";
import { Grid } from "@mui/material";
import { useAppSelector } from "@base/store";
import { Repository } from "@base/components/repository";
import { TRepository } from "@base/types/repository";
import { EmptyData } from "@base/components/empty-data";

/**
 * React component for displaying a list of favorite repositories.
 *
 * @returns {ReactElement} The rendered component.
 */
export const Favorites = (): ReactElement => {
  const favorites = useAppSelector<TRepository[]>(
    ({ repository }) => repository.favorites,
  );

  return (
    <Grid
      container
      width="100%"
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      direction="row"
    >
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
            <EmptyData
              text="You haven't favorited any repositories yet."
              showButton
            />
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};
