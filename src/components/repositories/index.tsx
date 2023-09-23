"use client";
import { ReactElement, useState } from "react";
import { TRepositoriesProps } from "@base/types/repository";
import { Repository } from "@base/components/repository";
import {
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";

export const Repositories = ({
  items,
  search,
}: TRepositoriesProps): ReactElement => {
  const [limit, setLimit] = useState(10);

  const handleChange = (event: SelectChangeEvent<number>) => {
    setLimit(event.target.value as number);
  };

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        pb={2}
      >
        <Grid item>
          <Typography variant="caption" component="div">
            Showing <b>1</b> - <b>{limit}</b> out of <b>{items.length}</b> for:{" "}
            {`"${search}"`}
          </Typography>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            spacing={1}
          >
            <Grid item>
              <Typography variant="caption" component="div">
                Show
              </Typography>
            </Grid>
            <Grid item>
              <Select
                variant="outlined"
                size="small"
                value={limit}
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container direction="row" spacing={2}>
        {items.slice(0, limit).map((repo, index) => (
          <Grid item key={index} sm={6}>
            <Repository {...repo} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
