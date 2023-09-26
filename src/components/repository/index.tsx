"use client";
import { ReactElement, useMemo } from "react";
import { TRepository, TRepositoryProps } from "@base/types/repository";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Rating,
  Tooltip,
  Typography,
} from "@mui/material";
import { Favorite } from "@mui/icons-material";
import { add, rateFavorite, remove } from "@base/store/repositorySlice";
import { useAppDispatch, useAppSelector } from "@base/store";

export const Repository = ({
  name,
  user,
  description,
  url,
  id,
  rate,
  graphImage,
  created_at,
  updated_at,
  stargazerCount,
  homepage_url,
  enableRating = false,
}: TRepositoryProps): ReactElement => {
  const favorites = useAppSelector<TRepository[]>(
    ({ repository }) => repository.favorites,
  );
  const dispatch = useAppDispatch();

  const favorite = () => {
    const isInFavorite = favorites?.some((item) => item.name === name);
    const item: TRepository = {
      name,
      user,
      description,
      url,
      id,
      graphImage,
      created_at,
      updated_at,
      stargazerCount,
      homepage_url,
      rate: 0,
      favorite: isInFavorite,
    };
    dispatch(isInFavorite ? remove(item) : add(item));
  };

  const cardHeader = useMemo(() => {
    const isInFavorite = favorites?.some((item) => item.id === id);
    return {
      avatar: (
        <Avatar alt="User avatar" src={`${url.split(`/${name}`).at(0)}.png`} />
      ),
      title: name,
      subheader: `@${user.split("/").at(0)}`,
      action: (
        <Tooltip
          title={
            isInFavorite ? "Remove from my favorites" : "Add to my favorites"
          }
        >
          <IconButton aria-label="favorite" onClick={favorite}>
            <Favorite color={isInFavorite ? "error" : "action"} />
          </IconButton>
        </Tooltip>
      ),
    };
  }, [id, name, user, url, favorites]);

  const Header = () => <CardHeader {...cardHeader} />;

  return (
    <Card variant="outlined">
      <Header />
      <CardMedia component="img" height="194" image={graphImage} />
      <CardContent>
        <Typography variant="body2" component="div" align="justify">
          {description}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "1rem",
          width: "100%",
        }}
      >
        <Grid item>
          <Typography variant="caption" component="div">
            Created at{" "}
            <b>{new Date(created_at as string).toLocaleDateString()}</b> and
            updated at{" "}
            <b>{new Date(updated_at as string).toLocaleDateString()}</b> for the
            last time.
          </Typography>
          <Typography variant="caption" component="div">
            Has <b>{stargazerCount}</b> stargazer count until now.
          </Typography>
        </Grid>
        {enableRating && (
          <Grid item alignSelf="center">
            <Rating
              value={rate || 0}
              onChange={(_, value) => {
                value !== null && dispatch(rateFavorite({ id, value }));
              }}
            />
          </Grid>
        )}
        <Grid item>
          <Button size="small" color="primary" href={url} target="_blank">
            See more
          </Button>
          {homepage_url && (
            <Button
              size="small"
              color="primary"
              href={homepage_url}
              target="_blank"
            >
              Docs
            </Button>
          )}
        </Grid>
      </CardActions>
    </Card>
  );
};
