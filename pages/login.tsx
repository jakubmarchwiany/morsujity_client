import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import LoadingButton from "@mui/lab/LoadingButton";
import { Avatar, Box, Container, Typography } from "@mui/material";
import Cookies from "js-cookie";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import MyLinkButton from "../src/components/my/MyLinkButton";
import MyTextField from "../src/components/my/MyTextField";
import Notification, { NotificationProps } from "../src/layout/Notification";

import { postFetch } from "../src/utils/fetches";

const DEV_API_ENDPOINT = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT;

const Login: NextPage = () => {
    const router = useRouter();
    const { open, message, type } = router.query;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [notification, setNotification] = useState<NotificationProps>({
        open: open === "true" ? true : false,
        message: message ? message.toString() : "",
        type: type ? (type.toString() as "success" | "error" | "info" | "warning") : "success",
    });

    const onSubmit = () => {
        setLoading(true);
        postFetch<{ message: string; token: string }>(
            { email, password },
            DEV_API_ENDPOINT + `/auth/login`
        )
            .then(({ token }) => {
                Cookies.set("Authorization", token, {
                    expires: 7,
                    path: "/",
                });

                router.push("/user/home");
            })
            .catch(({ message }) => {
                setLoading(false);
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
            <Container
                component="main"
                sx={{
                    px: { xs: 5, sm: 30, md: 15, lg: 30, xl: 40 },
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar
                        sx={{
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
                        <MyLinkButton
                            text="Nie pamiętasz hasła?"
                            href="/auth/reset-password"
                            isActive={false}
                            size="small"
                            fullWidth={false}
                        />
                        <LoadingButton
                            loading={loading}
                            type="button"
                            onClick={onSubmit}
                            fullWidth
                            variant="contained"
                            sx={{ mb: 0.5 }}
                        >
                            Zaloguj
                        </LoadingButton>
                        <MyLinkButton
                            text="Nie masz konta?"
                            href="/register"
                            isActive={false}
                            size="small"
                            fullWidth={false}
                        />
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
