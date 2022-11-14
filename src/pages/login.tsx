import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import { LoadingButton } from "@mui/lab";
import { Avatar, Box, Container, Stack, Typography } from "@mui/material";
import MyLinkButton from "components/my/MyLinkButton";
import MyTextField from "components/my/MyTextField";
import { useFormik } from "formik";
import Cookies from "js-cookie";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { postFetch } from "utils/fetches";
import { LOGIN_FORM_VALIDATION, LOGIN_INITIAL_FORM_STATE } from "utils/formiks";
import { sleeper } from "utils/useFull";

const USER_APP_URL = process.env.NEXT_PUBLIC_USER_APP_URL;

const Login: NextPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const loginFormik = useFormik({
        initialValues: LOGIN_INITIAL_FORM_STATE,
        validationSchema: LOGIN_FORM_VALIDATION,
        onSubmit: ({ email, password }, { resetForm }) => {
            setIsLoading(true);
            postFetch<{ message: string; token: string }>({ email, password }, "/auth/login", {
                customError: true,
            })
                .then(async ({ token }) => {
                    Cookies.set("authorization", token, {
                        expires: 7,
                        path: "/",
                        domain: "morsujity.com",
                    });
                    await sleeper(3);
                    router.push(USER_APP_URL);
                })
                .catch(() => {
                    setIsLoading(false);
                    resetForm();
                });
        },
    });

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
                <Stack alignItems="center">
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

                    <Typography component="h1" variant="h4" mb={1}>
                        Zaloguj się
                    </Typography>
                    <Box component={"form"} noValidate onSubmit={loginFormik.handleSubmit}>
                        <MyTextField name="email" label={"Email"} formik={loginFormik} />
                        <MyTextField
                            type="password"
                            name="password"
                            label={"Hasło"}
                            autoComplete="password"
                            formik={loginFormik}
                        />

                        <MyLinkButton
                            text="Nie pamiętasz hasła?"
                            href="/auth/reset-password"
                            isActive={false}
                            size="small"
                            fullWidth={false}
                        />

                        <LoadingButton
                            loading={isLoading}
                            type="submit"
                            fullWidth
                            variant="contained"
                            disabled={!(loginFormik.isValid && loginFormik.dirty)}
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
                </Stack>
            </Container>
        </>
    );
};
export default Login;
