import { CacheProvider, EmotionCache } from "@emotion/react";
import {
    Unstable_Grid2 as Grid2,
    Stack,
    ThemeProvider,
    createTheme,
    responsiveFontSizes,
    useMediaQuery
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import "assets/styles.css";
import { getDesignTokens } from "assets/theme";
import useSetMode from "hooks/use-set-mode";
import Ads from "layout/Ads";
import Navbar from "layout/Navbar";
import Navigator from "layout/Navigator";
import { AppProps } from "next/app";
import Head from "next/head";
import { useMemo } from "react";
import { Toaster } from "react-hot-toast";
import createEmotionCache from "utils/createEmotionCache";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
    const [mode, setMode] = useSetMode();
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

    const theme = useMemo(() => responsiveFontSizes(createTheme(getDesignTokens(mode))), [mode]);

    const isBigScreen = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Stack height="100vh" display="flex" flexDirection="column">
                    <Navbar switchMode={setMode} />
                    <Grid2
                        container
                        flex={1}
                        overflow="auto"
                        columns={20}
                        bgcolor={"background.default"}
                        color={"primary.contrastText"}
                    >
                        {isBigScreen && (
                            <Grid2 md={4} lg={3} mt={2}>
                                <Navigator />
                            </Grid2>
                        )}

                        <Grid2
                            xs={20}
                            md={12}
                            lg={14}
                            bgcolor={"background.paper"}
                        >
                            <Component {...pageProps} />
                        </Grid2>

                        {isBigScreen && (
                            <Grid2 md={4} lg={3}>
                                <Ads />
                            </Grid2>
                        )}
                    </Grid2>
                    {/* <Footer /> */}
                </Stack>
                <Toaster
                    position="bottom-center"
                    gutter={10}
                    containerStyle={{ marginBottom: "40px" }}
                    toastOptions={{
                        style: {
                            maxWidth: "90vw",
                            background: theme.palette.background.default,
                            color: theme.palette.text.secondary,
                        },
                    }}
                />
            </ThemeProvider>
        </CacheProvider>
    );
}
