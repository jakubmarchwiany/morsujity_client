import { Box, Stack, Typography } from "@mui/material";
import cookie from "js-cookie";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { getFetch } from "../src/utils/fetches";

const ENV = process.env.NEXT_PUBLIC_ENV;
const DEV_API_ENDPOINT = process.env.NEXT_PUBLIC_DEV_API_ENDPOINT;

const Home: NextPage = () => {
  useEffect(() => {
    if (cookie.get("Authorization") !== undefined) {
      const END_POINT =
        ENV === "development"
          ? DEV_API_ENDPOINT
          : window.location.origin + "/api";
      getFetch<{ message: string }>(END_POINT + "/auth/auto-login")
        .then(({ message }) => {
          console.log(message);
          window.location.href = "/user/home";
        })
        .catch(({ message }) => {
          console.log(message);
        });
    }
  }, []);

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
      <Stack
        sx={{
          my: { xs: 1, sm: 1.5, lg: 2 },
        }}
        justifyContent="center"
        alignItems="center"
        spacing={{ xs: 1, sm: 1.5, lg: 2 }}
      >
        <Box mt={5} textAlign="center">
          <Typography variant="h1">Morsuj i Ty</Typography>
          <Typography mt={10} mb={5} variant="h5">
            Witamj w Morsujity! <br />
            Morsuj dołączaj do grup. <br />
            Zdobywaj kolejne rangi!
          </Typography>
        </Box>
      </Stack>
    </>
  );
};

export default Home;
