"use client";
import { ReactElement, useEffect, useMemo, useState } from "react";
import { Repository } from "@base/components/repository";
import {
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "@base/store";
import { PageInfo } from "@base/interfaces/search";
import { useDebounce } from "@base/hooks/useDebounce";
import { useRepositories } from "@base/hooks/useRepositories";
import { TRepository } from "@base/types/repository";
import { setPageInfo } from "@base/store/repositorySlice";

export const Repositories = (): ReactElement => {
  const search = useAppSelector<string>(({ repository }) => repository.search);
  const dispatch = useAppDispatch();

  const [limit, setLimit] = useState(10);
  const [total, setTotal] = useState(0);
  const [after, setAfter] = useState<string | null>(null);
  const [before, setBefore] = useState<string | null>(null);

  const handleChange = (event: SelectChangeEvent<number>) => {
    setLimit(event.target.value as number);
  };

  const query = useDebounce<string>(search);

  const repositories = useRepositories({
    query,
    after,
    before,
  });

  const items = useMemo<TRepository[]>(() => {
    let nodes: TRepository[] = [];

    if (repositories?.search?.nodes) {
      nodes = repositories?.search?.nodes.map((repo) => {
        return {
          user: repo.nameWithOwner,
          name: repo.name,
          description: repo.description,
          id: repo.id,
          url: repo.url,
          homepage_url: repo.homepageUrl,
          graphImage: repo.openGraphImageUrl,
          stargazerCount: repo.stargazerCount,
          created_at: repo.createdAt,
          updated_at: repo.updatedAt,
          rate: 0,
          favorite: false,
        } as TRepository;
      });
    }

    return nodes;
  }, [repositories]);

  useEffect(() => {
    repositories?.search?.pageInfo &&
      dispatch(setPageInfo({ ...(repositories.search.pageInfo as PageInfo) }));
  }, [repositories]);

  useEffect(() => {
    repositories?.search?.repositoryCount &&
      setTotal(repositories.search.repositoryCount);
  }, [repositories]);

  return (
    <Grid container direction="row" pt={2}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        pb={2}
      >
        <Grid item>
          <Typography variant="caption" component="div">
            Showing <b>1</b> - <b>{limit}</b> out of <b>{total}</b> for:
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
      <Grid
        container
        direction="row"
        width="100%"
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {items
          .slice(0, limit)
          .sort((a, b) => {
            if (a.favorite === undefined && b.favorite === undefined) {
              return 0;
            }
            if (a.favorite && !b.favorite) {
              return -1;
            }
            if (!a.favorite && b.favorite) {
              return 1;
            }
            return 0;
          })
          .map((repo, index) => (
            <Grid item key={index} sm={6}>
              <Repository key={index} {...repo} />
            </Grid>
          ))}
      </Grid>
    </Grid>
  );
};
