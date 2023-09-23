import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
      light: "#848f9e",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiCardActions: {
      styleOverrides: {
        root: {
          width: "100%",
        },
      },
    },
  },
});
export default theme;
