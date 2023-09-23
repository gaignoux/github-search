"use client";
import { ReactElement } from "react";
import { TRepository } from "@base/types/repository";
import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import { Favorite } from "@mui/icons-material";

export const Repository = ({
  name,
  user,
  description,
}: TRepository): ReactElement => {
  const favorite = () => {};

  return (
    <Card variant="outlined">
      <CardHeader
        title={name}
        subheader={user}
        action={
          <IconButton aria-label="favorite" onClick={favorite}>
            <Favorite />
          </IconButton>
        }
      />
      <CardContent>
        <Typography variant="body1" component="div">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};
