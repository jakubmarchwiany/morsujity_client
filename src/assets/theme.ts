import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    // palette values for light mode
    primary: {
      main: "#468faf",
    },
    secondary: {
      main: "#468faf",
    },
    background: {
      default: "#fff",
      paper: "#fafafa",
    },
    divider: "#D3D3D3",
    text: {
      primary: "#000",
      secondary: "#468faf",
    },
  },
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 769,
      md: 1024,
      lg: 1216,
      xl: 1408,
    },
  },
});

theme = responsiveFontSizes(theme);

export { theme };
