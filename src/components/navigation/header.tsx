import { ReactElement } from "react";
import {
  AppBar,
  Badge,
  Box,
  Grid,
  IconButton,
  Toolbar,
  Tooltip,
} from "@mui/material";
import { Favorite, Search } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@base/store";
import { set } from "@base/store/navigationSlice";

/**
 * React component for the header navigation bar with search and favorites links.
 *
 * @returns {ReactElement} The rendered component.
 */
export const HeaderNavigation = (): ReactElement => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const favorites = useAppSelector<string>(
    ({ repository }) => repository.favorites,
  );

  /**
   * Handles the navigation and state update when changing routes.
   *
   * @param {string} value - The target route value.
   */
  const change = (value: string) => {
    dispatch(set(value));
    router.push(value);
  };

  return (
    <Box sx={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 2 }}>
      <AppBar position="static">
        <Toolbar>
          <Grid container direction="row" justifyContent="space-between">
            <Tooltip title="Search any repo">
              <IconButton
                size="large"
                color="inherit"
                onClick={() => change("/")}
              >
                <Search />
              </IconButton>
            </Tooltip>
            <Tooltip title="My favorites">
              <IconButton
                size="large"
                aria-label={`show ${favorites.length} favorites`}
                color="inherit"
                onClick={() => change("/my-favorites")}
              >
                {favorites.length ? (
                  <Badge badgeContent={favorites.length} color="error">
                    <Favorite />
                  </Badge>
                ) : (
                  <Favorite />
                )}
              </IconButton>
            </Tooltip>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
