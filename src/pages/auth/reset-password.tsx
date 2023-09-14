import { LockReset } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Avatar, Box, Container, Stack, Typography } from "@mui/material";
import { standardSize } from "assets/theme";
import MyTextField from "components/my/MyTextField";
import { useFormik } from "formik";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { postFetch } from "utils/fetches";
import { RESET_PASSWORD_FORM_VALIDATION, RESET_PASSWORD_INITIAL_FORM_STATE } from "utils/formiks";

function ResetPassword() {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const resetPasswordformik = useFormik({
        initialValues: RESET_PASSWORD_INITIAL_FORM_STATE,
        validationSchema: RESET_PASSWORD_FORM_VALIDATION,
        onSubmit: ({ email }) => {
            setIsLoading(true);
            postFetch<never>({ email }, "/auth/password/reset-email", { customError: true })
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
            <Container component="main" sx={{ display: "flex", justifyContent: "center" }}>
                <Stack mt={{ xs: 5, md: 10 }} alignItems="center" width={standardSize}>
                    <Avatar
                        sx={{
                            mb: 2,
                            bgcolor: "primary.main",
                            width: "70px",
                            height: "70px",
                            color: "white",
                        }}
                    >
                        <LockReset fontSize="large" />
                    </Avatar>

                    <Typography component="h1" variant="h4" mb={1}>
                        Resetowanie Hasła
                    </Typography>

                    <Box
                        component={"form"}
                        noValidate
                        onSubmit={resetPasswordformik.handleSubmit}
                        width={"100%"}
                    >
                        <Typography variant="body2" textAlign={"center"}>
                            Na adres mailowy zostanie wysłany link resetujący hasło
                        </Typography>
                        <MyTextField name="email" label="Email" formik={resetPasswordformik} />
                        <LoadingButton
                            loading={isLoading}
                            type="submit"
                            fullWidth
                            variant="contained"
                            disabled={!(resetPasswordformik.isValid && resetPasswordformik.dirty)}
                        >
                            Wyślij
                        </LoadingButton>
                    </Box>
                </Stack>
            </Container>
        </>
    );
}
export default ResetPassword;
