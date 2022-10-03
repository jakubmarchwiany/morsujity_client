import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import LoadingButton from "@mui/lab/LoadingButton";
import { Avatar, Box, Container, Typography } from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import MyTextField from "../src/components/my/MyTextField";
import Notification, { NotificationProps } from "../src/layout/Notification";

import { postFetch } from "../src/utils/fetches";

const ENV = process.env.NEXT_PUBLIC_ENV;
const DEV_API_ENDPOINT = process.env.NEXT_PUBLIC_DEV_API_ENDPOINT;

const Login: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState<NotificationProps>({
    open: false,
    message: "",
    type: "error",
  });

  const onSubmit = () => {
    const END_POINT =
      ENV === "development"
        ? DEV_API_ENDPOINT
        : window.location.origin + "/api";
    setLoading(true);
    postFetch<{ message: string }>(
      { email, password },
      END_POINT + `/auth/login`
    )
      .then(() => {
        window.location.href = "/user/home";
      })
      .catch((message) => {
        setNotification({
          open: true,
          message: message,
          type: "error",
        });
      });
  };

  const closeNotification = () => {
    setNotification({ ...notification, open: false });
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <Head>
        <title>Logowanie</title>
        <meta name="description" content="Zaloguj się do swojego konta." />
        <link rel="canonical" href="/login" />
      </Head>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{
              mt: 2,
              mb: 2,
              bgcolor: "primary.main",
              width: "70px",
              height: "70px",
              color: "white",
            }}
          >
            <LockOpenOutlinedIcon fontSize="large" />
          </Avatar>

          <Typography component="h1" variant="h4">
            Zaloguj się
          </Typography>
          <Box component={"form"} noValidate sx={{ mt: 2 }}>
            <MyTextField
              name="email"
              label="E-mail"
              value={email}
              onChange={handleEmailChange}
            />

            <MyTextField
              name="password"
              type="password"
              label="Hasło"
              autoComplete="current-password"
              value={password}
              onChange={handlePasswordChange}
            />

            <LoadingButton
              loading={loading}
              type="button"
              onClick={onSubmit}
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
            >
              Zaloguj
            </LoadingButton>
          </Box>
        </Box>
      </Container>
      <Notification
        open={notification.open}
        message={notification.message}
        type={notification.type}
        close={closeNotification}
      />
    </>
  );
};
export default Login;
