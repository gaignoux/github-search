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
import { TSearchState } from "@base/types/search";
import { EmptyData } from "@base/components/empty-data";
import { SkeletonLoader } from "@base/components/loading";
import { IRepositoryHandle } from "@base/interfaces/repository";

/**
 * React component for handling and rendering a collection of repositories.
 *
 * @param {IRepositoryHandle} props - The component's props.
 * @param {TRepository[]} props.items - An array of repositories to display.
 * @param {string | undefined} props.search - An optional search query to filter repositories.
 * @returns {JSX.Element} The rendered component.
 */
const HandleComponent = ({
  items,
  search,
}: IRepositoryHandle): ReactElement | ReactElement[] => {
  if (items.length > 0) {
    return items.map((repo, index) => (
      <Grid item key={index} sm={6}>
        <Repository key={index} {...repo} />
      </Grid>
    ));
  } else if (search) {
    return (
      <Grid item alignSelf="center" width="100%">
        <SkeletonLoader />
      </Grid>
    );
  }

  return (
    <Grid item alignSelf="center" width="100%">
      <EmptyData text="You haven’t search for anything yet." />
    </Grid>
  );
};

/**
 * React component for displaying a list of repositories with pagination and search.
 *
 * @returns {ReactElement} The rendered component.
 */
export const Repositories = (): ReactElement => {
  const { search, favorites, after, before } = useAppSelector<TSearchState>(
    ({ repository }) => repository,
  );
  const dispatch = useAppDispatch();

  const [limit, setLimit] = useState(10);
  const [total, setTotal] = useState(0);

  /**
   * Handles the change in the number of repositories to display per page.
   *
   * @param {SelectChangeEvent<number>} event - The event containing the selected limit value.
   */
  const handleChange = (event: SelectChangeEvent<number>) => {
    setLimit(event.target.value as number);
  };

  const query = useDebounce<string>(search);

  const repositories = useRepositories({
    query,
    after,
    before,
  });

  /**
   * The list of repositories to display, filtered and sorted.
   */
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
          homepageUrl: repo.homepageUrl,
          graphImage: repo.openGraphImageUrl,
          stargazerCount: repo.stargazerCount,
          createdAt: repo.createdAt,
          updatedAt: repo.updatedAt,
          rate: 0,
          favorite: favorites.some((item) => item.id === repo.id),
        } as TRepository;
      });
    }

    return nodes.slice(0, limit).sort((a, b) => {
      if (a.favorite && !b.favorite) {
        return -1;
      }
      if (!a.favorite && b.favorite) {
        return 1;
      }
      return 0;
    });
  }, [repositories, limit, favorites]);

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
            Showing <b>1</b> - <b>{limit}</b> out of{" "}
            <b>{items.length === 0 ? items.length : total}</b> for:
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
        <HandleComponent {...{ items, search }} />
      </Grid>
    </Grid>
  );
};
