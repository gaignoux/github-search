"use client";

import { ChangeEvent, ReactElement, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import style from "@base/styles/page.module.css";
import { setSearch } from "@base/store/repositorySlice";
import { useAppDispatch, useAppSelector } from "@base/store";

export const Search = (): ReactElement => {
  const search = useAppSelector<string>(({ repository }) => repository.search);
  const [hasError, setHasError] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleSearch = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    event.preventDefault();
    setHasError(false);

    if (event.target.value) {
      return dispatch(setSearch(event.target.value));
    }

    setHasError(true);
  };

  return (
    <Card>
      <CardContent className={style.center}>
        <Grid container spacing={4} direction="column">
          <Grid item alignSelf="center">
            <Typography variant="h5" component="div">
              Github Search Interface with GraphQL and Nextjs
            </Typography>
          </Grid>
          <Grid item>
            <Box component="form" noValidate autoComplete="off">
              <TextField
                id="github-search"
                label="Search wherever you want"
                variant="outlined"
                required
                fullWidth
                value={search}
                error={hasError}
                onChange={handleSearch}
                helperText={
                  hasError ? "You need to input something to search." : ""
                }
              />
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
