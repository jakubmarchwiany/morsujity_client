import { Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
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
            <Container
                component="main"
                sx={{
                    px: { xs: 5, sm: 10, md: 10, lg: 15, xl: 30 },
                }}
            >
                <Stack alignItems="center">
                    <Typography variant="h1">Morsuj i Ty</Typography>
                    <Typography mt={10} mb={5} variant="h5">
                        Witaj w Morsujity! <br />
                        Morsuj dołączaj do grup. <br />
                        Zdobywaj kolejne rangi!
                    </Typography>
                </Stack>
            </Container>
        </>
    );
};
export default Home;
