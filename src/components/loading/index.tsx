"use client";

import React, { ReactElement } from "react";
import { Card, CardContent, CardHeader, Grid, Skeleton } from "@mui/material";

/**
 * React component for rendering a skeleton loader with placeholders for content loading.
 *
 * @returns {ReactElement} The rendered component.
 */
export const SkeletonLoader = (): ReactElement => {
  const items = Array.from<number>({ length: 6 });
  return (
    <Grid
      container
      direction="row"
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      {items.map((_, index) => (
        <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
          <Card>
            <CardHeader
              avatar={
                <Skeleton
                  animation="wave"
                  variant="circular"
                  width={40}
                  height={40}
                />
              }
              title={
                <Skeleton
                  animation="wave"
                  height={10}
                  width="80%"
                  style={{ marginBottom: 6 }}
                />
              }
              subheader={<Skeleton animation="wave" height={10} width="40%" />}
            />
            <Skeleton
              sx={{ height: 190 }}
              animation="wave"
              variant="rectangular"
            />
            <CardContent>
              <Skeleton
                animation="wave"
                height={10}
                style={{ marginBottom: 6 }}
              />
              <Skeleton animation="wave" height={10} width="80%" />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
