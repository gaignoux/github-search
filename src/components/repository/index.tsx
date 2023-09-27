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

/**
 * React component for displaying information about a repository.
 *
 * @param {TRepositoryProps} props - The component's props.
 * @param {string} props.name - The name of the repository.
 * @param {string} props.user - The owner/user of the repository.
 * @param {string} props.description - The description of the repository.
 * @param {string} props.url - The URL of the repository.
 * @param {string} props.id - The unique identifier of the repository.
 * @param {number | undefined} props.rate - The rating value for the repository (optional).
 * @param {string} props.graphImage - The URL of the repository's open graph image.
 * @param {string} props.createdAt - The creation date of the repository.
 * @param {string} props.updatedAt - The last update date of the repository.
 * @param {number} props.stargazerCount - The count of stargazers for the repository.
 * @param {string | undefined} props.homepageUrl - The URL of the repository's homepage (optional).
 * @param {boolean} props.enableRating - Indicates whether rating functionality is enabled (default: false).
 *
 * @returns {ReactElement} The rendered component.
 */
export const Repository = ({
  name,
  user,
  description,
  url,
  id,
  rate,
  graphImage,
  createdAt,
  updatedAt,
  stargazerCount,
  homepageUrl,
  enableRating = false,
}: TRepositoryProps): ReactElement => {
  const favorites = useAppSelector<TRepository[]>(
    ({ repository }) => repository.favorites,
  );
  const dispatch = useAppDispatch();

  /**
   * Handles adding/removing the repository to/from favorites.
   */
  const favorite = () => {
    const isInFavorite = favorites?.some((item) => item.id === id);
    const item: TRepository = {
      name,
      user,
      description,
      url,
      id,
      graphImage,
      createdAt,
      updatedAt,
      stargazerCount,
      homepageUrl,
      rate: 0,
      favorite: isInFavorite,
    };
    dispatch(isInFavorite ? remove(item) : add(item));
  };

  /**
   * Constructs the card header with user avatar, repository name, and favorite button.
   */
  const cardHeader = useMemo(() => {
    const isInFavorite = favorites?.some((item) => item.id === id);
    return {
      avatar: (
        <Avatar alt="User avatar" src={`${url?.split(`/${name}`).at(0)}.png`} />
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

  /**
   * Represents the header section of the card.
   */
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
            <b>{new Date(createdAt as string).toLocaleDateString()}</b> and
            updated at{" "}
            <b>{new Date(updatedAt as string).toLocaleDateString()}</b> for the
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
          {homepageUrl && (
            <Button
              size="small"
              color="primary"
              href={homepageUrl}
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
