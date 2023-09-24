"use client";
import { ReactElement, useMemo } from "react";
import { TRepository, TRepositoryProps } from "@base/types/repository";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
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
  rate,
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
      favorite: isInFavorite,
    };
    dispatch(isInFavorite ? remove(item) : add(item));
  };

  const cardHeader = useMemo(() => {
    const isInFavorite = favorites?.some((item) => item.name === name);
    return (
      <CardHeader
        title={name}
        subheader={user}
        action={
          <Tooltip
            title={
              isInFavorite ? "Remove from my favorites" : "Add to my favorites"
            }
          >
            <IconButton aria-label="favorite" onClick={favorite}>
              <Favorite color={isInFavorite ? "error" : "action"} />
            </IconButton>
          </Tooltip>
        }
      />
    );
  }, [favorites]);

  return (
    <Card variant="outlined">
      {cardHeader}
      <CardContent>
        <Typography variant="body1" component="div">
          {description}
        </Typography>
      </CardContent>
      {enableRating && (
        <CardActions>
          <Rating
            value={rate || 0}
            onChange={(_, value) => {
              value !== null && dispatch(rateFavorite({ name, value }));
            }}
          />
        </CardActions>
      )}
    </Card>
  );
};
