import { Box, Typography } from "@mui/material";
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
                    content="Witamj w Morsujity!
                    Morsuj dołączaj do grup.
                    Zdobywaj kolejne rangi!."
                />
                <link rel="canonical" href="/" />
            </Head>
            <Container
                component="main"
                sx={{
                    px: { xs: 5, sm: 30, md: 15, lg: 30, xl: 40 },
                }}
            >
                <Box textAlign="center">
                    <Typography variant="h1">Morsuj i Ty</Typography>
                    <Typography mt={10} mb={5} variant="h5">
                        Witamj w Morsujity! <br />
                        Morsuj dołączaj do grup. <br />
                        Zdobywaj kolejne rangi!
                    </Typography>
                </Box>
            </Container>
        </>
    );
};

export default Home;
