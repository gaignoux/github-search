import { ReactElement } from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { Favorite, Search } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@base/store";
import { set } from "@base/store/navigationSlice";

export const FooterNavigation = (): ReactElement => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const current = useAppSelector<string>(
    ({ navigation }) => navigation.current,
  );

  const change = (_: any, newValue: string) => {
    dispatch(set(newValue));
    router.push(newValue);
  };

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation showLabels value={current} onChange={change}>
        <BottomNavigationAction label="Search" value="/" icon={<Search />} />
        <BottomNavigationAction
          label="Favorites"
          value="/my-favorites"
          icon={<Favorite />}
        />
      </BottomNavigation>
    </Paper>
  );
};
