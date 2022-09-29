import { Stack, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Strona główna</title>
        <meta name="description" content="Strona główna. Morsujity" />
        <link rel="canonical" href="/" />
      </Head>
      <Stack
        sx={{
          mx: { xs: 1, sm: 10, md: 20, lg: 30, xl: 40 },
          my: { xs: 1, sm: 1.5, lg: 2 },
        }}
        justifyContent="center"
        alignItems="center"
        spacing={{ xs: 1, sm: 1.5, lg: 2 }}
      >
        <Typography>START</Typography>
      </Stack>
    </>
  );
};

export default Home;
