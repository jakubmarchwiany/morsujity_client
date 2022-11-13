import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { LoadingButton } from "@mui/lab";
import { Avatar, Box, Container, Stack, Typography } from "@mui/material";
import MyLinkButton from "components/my/MyLinkButton";
import MyTextField from "components/my/MyTextField";
import { useFormik } from "formik";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { postFetch } from "utils/fetches";
import { REGISTER_FORM_VALIDATION, REGISTER_INITIAL_FORM_STATE } from "utils/formiks";
import { sleeper } from "utils/useFull";

const Register: NextPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const registerFormik = useFormik({
        initialValues: REGISTER_INITIAL_FORM_STATE,
        validationSchema: REGISTER_FORM_VALIDATION,
        onSubmit: ({ pseudonym, email, password }) => {
            setIsLoading(true);
            postFetch<never>({ pseudonym, email, password }, "/auth/register", {
                customError: true,
            })
                .then(async () => {
                    await sleeper(5);
                    router.push("/login");
                })
                .catch(() => {
                    setIsLoading(false);
                });
        },
    });

    return (
        <>
            <Head>
                <title>Rejestracja</title>
                <meta
                    name="description"
                    content="Zarejestruj się do serwisu aby w pełni móc wykorzystać możliwości aplikacji."
                />
                <link rel="canonical" href="/register" />
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
                        <LockOutlinedIcon fontSize="large" />
                    </Avatar>

                    <Typography component="h1" variant="h4" mb={1}>
                        Stwórz konto
                    </Typography>

                    <Box component={"form"} noValidate onSubmit={registerFormik.handleSubmit}>
                        <MyTextField
                            name="pseudonym"
                            label={"Ksywka [pseudonim, imię i nazwisko]"}
                            formik={registerFormik}
                        />
                        <MyTextField name="email" label={"Email"} formik={registerFormik} />
                        <MyTextField
                            type="password"
                            name="password"
                            label={"Hasło"}
                            autoComplete="new-password"
                            formik={registerFormik}
                        />
                        <MyTextField
                            type="password"
                            name="confirmPassword"
                            label={"Potwierdzenie Hasła"}
                            autoComplete="new-password"
                            formik={registerFormik}
                        />

                        <LoadingButton
                            loading={isLoading}
                            type="submit"
                            fullWidth
                            variant="contained"
                            disabled={!(registerFormik.isValid && registerFormik.dirty)}
                        >
                            Rejestruj
                        </LoadingButton>

                        <MyLinkButton
                            text="Masz już konto?"
                            href="/login"
                            size="small"
                            fullWidth={false}
                        />
                    </Box>
                </Stack>
            </Container>
        </>
    );
};
export default Register;
