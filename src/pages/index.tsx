import { Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import MyLinkButton from "components/my/MyLinkButton";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Morsujity</title>
                <meta
                    name="description"
                    content="Witaj w Morsujity!
                    Morsuj dołączaj do grup.
                    Zdobywaj kolejne rangi!."
                />
                <link rel="canonical" href="/" />
            </Head>
            <Container component="main">
                <Stack alignItems="center" mt={{ xs: 3, md: 10 }}>
                    <Typography variant="h1">Morsuj i Ty</Typography>
                    <Typography mt={{ xs: 5, md: 10 }} mb={3} variant="h5" textAlign={"center"}>
                        Morsuj
                        <br />
                        Zapisuj postępy
                        <br />
                        Dołączaj do grup
                        <br />
                        Zdobywaj kolejne rangi!
                    </Typography>
                    <MyLinkButton
                        text="O aplikacji"
                        href="/blog/1"
                        isActive={false}
                        size="large"
                        fullWidth={false}
                    />
                    <MyLinkButton
                        text="Jak zacząć morsowanie"
                        href="/blog/2"
                        isActive={false}
                        size="large"
                        fullWidth={false}
                    />
                </Stack>
            </Container>
        </>
    );
};
export default Home;
