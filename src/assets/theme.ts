import type { PaletteMode } from "@mui/material";

// declare module "@mui/material/styles" {
//   interface Palette {
//     complementary: Palette["primary"];
//   }

//   interface PaletteOptions {
//     complementary?: PaletteOptions["primary"];
//   }
// }

export const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
        mode,
        ...(mode === "light"
            ? {
                  // palette values for light mode
                  primary: {
                      main: "#468faf",
                      contrastText: "#000",
                  },
                  secondary: {
                      main: "#fff",
                      contrastText: "#468faf",
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
              }
            : {
                  // palette values for dark mode
                  primary: {
                      main: "#2c5a69",
                      contrastText: "#fff",
                  },
                  secondary: {
                      main: "#fff",
                      contrastText: "#fff",
                  },
                  background: {
                      default: "#303030",
                      paper: "#424242",
                  },
                  divider: "#D3D3D3",
                  text: {
                      primary: "#fff",
                      secondary: "#fff",
                  },
              }),
    },
    typography: {
        fontFamily: ["Montserrat", "sans-serif"].join(","),
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 768,
            md: 1024,
            lg: 1216,
            xl: 1408,
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: (mode === "light" ? "#468faf" : "#2c5a69"),
                },
            },
        },
    },
});

export const standardSize = { xs: "95%", sm: "85%", md: "70%", lg: "55%", xl: "40%" };

//Light mode
// "50": "#e4f5fe",
// "100": "#bbe7fb",
// "200": "#92d8f7",
// "300": "#5dbee7",
// "500": "#5ab3de",
// "600": "#51a4ca",
// "700": "#4690af",
// "800": "#3d7c96",
// "900": "#2c5a69",

//Dark mode
// "50": "#e4f5fe",
// "100": "#bbe7fb",
// "200": "#92d8f7",
// "300": "#5dbee7",
// "500": "#5ab3de",
// "600": "#51a4ca",
// "700": "#4690af",
// "800": "#3d7c96",
// "900": "#2c5a69",
