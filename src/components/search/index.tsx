"use client";

import { ChangeEvent, ReactElement, useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import style from "@base/styles/page.module.css";
import { TSearchProps } from "@base/types/search";

export const Search = ({ onSearch }: TSearchProps): ReactElement => {
  const [hasError, setHasError] = useState<boolean>(false);
  const [search, setSearch] = useState<string>();

  useEffect(() => {
    if (search?.length && search.length > 0) {
      onSearch && onSearch(search);
    }
  }, [search, onSearch]);

  const handleSearch = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    event.preventDefault();
    setHasError(false);

    if (event.target.value) {
      return setSearch(event.target.value);
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
