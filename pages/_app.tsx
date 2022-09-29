import { CacheProvider, EmotionCache } from "@emotion/react";
import { Box, Stack, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { AppProps } from "next/app";
import Head from "next/head";
import "../src/assets/styles.css";
import { theme } from "../src/assets/theme";
import createEmotionCache from "../src/utils/createEmotionCache";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Stack
          height="100vh"
          display="flex"
          flexDirection="column"
          className="background"
        >
          <Box
            component={"main"}
            id="scroller"
            flex={1}
            overflow="auto"
            color="primary.contrastText"
          >
            <Component {...pageProps} />
          </Box>
        </Stack>
      </ThemeProvider>
    </CacheProvider>
  );
}
