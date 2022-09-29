import { CacheProvider, EmotionCache } from "@emotion/react";
import {
  createTheme,
  responsiveFontSizes,
  Stack,
  ThemeProvider,
  Unstable_Grid2 as Grid2,
  useMediaQuery,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { AppProps } from "next/app";
import Head from "next/head";
import { useMemo } from "react";
import "../src/assets/styles.css";
import { getDesignTokens } from "../src/assets/theme";
import useSetMode from "../src/hooks/use-set-mode";
import Ads from "../src/layout/Ads";
import Footer from "../src/layout/Footer";
import Navbar from "../src/layout/Navbar";
import Navigator from "../src/layout/Navigator";
import createEmotionCache from "../src/utils/createEmotionCache";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const [mode, setMode] = useSetMode();

  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const theme = useMemo(
    () => responsiveFontSizes(createTheme(getDesignTokens(mode))),
    [mode]
  );

  const isBigScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Stack height="100vh" display="flex" flexDirection="column">
          <Navbar mode={mode} switchMode={setMode} />
          <Grid2
            container
            flex={1}
            overflow="auto"
            columns={20}
            bgcolor={"background.default"}
            color={"text.primary"}
          >
            {isBigScreen && (
              <Grid2
                md={4}
                lg={3}
                sx={{ display: { xs: "none", md: "block" }, pt: 2 }}
              >
                <Navigator mode={mode} switchMode={setMode} />
              </Grid2>
            )}

            <Grid2 xs={20} md={12} lg={14} bgcolor={"background.paper"}>
              <Component {...pageProps} />
            </Grid2>

            {isBigScreen && (
              <Grid2
                md={4}
                lg={3}
                sx={{ display: { xs: "none", md: "block" } }}
              >
                <Ads />
              </Grid2>
            )}
          </Grid2>
          <Footer />
        </Stack>
      </ThemeProvider>
    </CacheProvider>
  );
}
