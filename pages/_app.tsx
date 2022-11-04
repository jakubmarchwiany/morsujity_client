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
import "assets/styles.css";
import { getDesignTokens } from "assets/theme";
import useSetMode from "hooks/use-set-mode";
import Cookies from "js-cookie";
import Ads from "layout/Ads";
import Footer from "layout/Footer";
import Navbar from "layout/Navbar";
import Navigator from "layout/Navigator";
import { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import createEmotionCache from "utils/createEmotionCache";

const DEV_API_ENDPOINT = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT;

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
    const router = useRouter();
    useEffect(() => {
        const authorization = Cookies.get("Authorization");
        if (authorization !== undefined) {
            fetch(DEV_API_ENDPOINT + "/auth/auto-login", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${authorization}`,
                },
            })
                .then(async (response) => {
                    if (response.ok) {
                        router.push("/user/dashboard");
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, []);
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
                        color={"text.primary"}
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
                            py={{ xs: 1, sm: 2, md: 3, lg: 4 }}
                        >
                            <Component {...pageProps} />
                        </Grid2>

                        {isBigScreen && (
                            <Grid2 md={4} lg={3}>
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
