import { Password } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Avatar, Box, Container, Stack, Typography } from "@mui/material";
import MyTextField from "components/my/MyTextField";
import { useFormik } from "formik";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { postFetch } from "utils/fetches";
import { NEW_PASSWORD_FORM_VALIDATION, NEW_PASSWORD_INITIAL_FORM_STATE } from "utils/formiks";

function NewPassword() {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const { token } = router.query;

    const newPasswordFormik = useFormik({
        initialValues: NEW_PASSWORD_INITIAL_FORM_STATE,
        validationSchema: NEW_PASSWORD_FORM_VALIDATION,
        onSubmit: ({ newPassword }) => {
            setIsLoading(true);
            postFetch<never>({ token, newPassword }, "/auth/new-password", {
                customError: true,
            })
                .then(() => {
                    router.push("/login");
                })
                .catch(() => {
                    router.push("/login");
                });
        },
    });

    return (
        <>
            <Head>
                <title>Resetowanie Hasła</title>
                <meta name="description" content="Resetowanie hasła" />
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
                        <Password fontSize="large" />
                    </Avatar>

                    <Typography component="h1" variant="h4" mb={1}>
                        Nowe Hasło
                    </Typography>
                    <Box noValidate component={"form"} onSubmit={newPasswordFormik.handleSubmit}>
                        <MyTextField
                            name="newPassword"
                            type="password"
                            label="Hasło"
                            autoComplete="new-password"
                            formik={newPasswordFormik}
                        />
                        <MyTextField
                            name="confirmPassword"
                            type="password"
                            label="Potwierdzenie Hasła"
                            autoComplete="new-password"
                            formik={newPasswordFormik}
                        />

                        <LoadingButton
                            loading={isLoading}
                            type="submit"
                            fullWidth
                            variant="contained"
                            disabled={!(newPasswordFormik.isValid && newPasswordFormik.dirty)}
                        >
                            Nowe Hasło
                        </LoadingButton>
                    </Box>
                </Stack>
            </Container>
        </>
    );
}
export default NewPassword;
