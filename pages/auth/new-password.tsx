import { Password } from "@mui/icons-material";
import { Avatar, Box, Button, Container, Typography } from "@mui/material";
import { useFormik } from "formik";
import Head from "next/head";
import { useRouter } from "next/router";
import * as Yup from "yup";
import MyTextField from "../../src/components/my/MyTextField";
import { postFetch } from "../../src/utils/fetches";

const DEV_API_ENDPOINT = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT;

const INITIAL_FORM_STATE = {
    password: "",
    confirmPassword: "",
};

const FORM_VALIDATION = Yup.object().shape({
    password: Yup.string()
        .required("Wymagane")
        .min(8, "Hasło za krótkie - co najmniej 8 znaków")
        .max(20, "Hasło za długie - maksymalnie 20 znaków")
        .matches(/(?=.*[a-z])/, "Musi zawierać mała literę")
        .matches(/(?=.*[A-Z])/, "Musi zawierać dużą literę")
        .matches(/(?=.*[0-9])/, "Musi zawierać cyfrę")
        .matches(/(?=.*[!@#$%^&*])/, "Musi zawierać znak specjalny (! @ # $ % ^ & *)"),
    confirmPassword: Yup.string()
        .required("Wymagane")
        .oneOf([Yup.ref("password"), null], "Hasła muszą być takie same"),
});

function NewPassword() {
    const router = useRouter();
    const { token } = router.query;

    const formik = useFormik({
        initialValues: INITIAL_FORM_STATE,
        validationSchema: FORM_VALIDATION,
        onSubmit: ({ password }) => {
            postFetch<{ message: string }>(
                { token, newPassword: password },
                DEV_API_ENDPOINT + `/auth/new-password`
            )
                .then(({ message }) => {
                    router.push({
                        pathname: "/login",
                        query: { open: true, message, type: "success" },
                    });
                })
                .catch(({ message }) => {
                    router.push({
                        pathname: "/login",
                        query: { open: true, message, type: "error" },
                    });
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
                        <Password fontSize="large" />
                    </Avatar>

                    <Typography component="h1" variant="h4">
                        Nowe Hasło
                    </Typography>
                    <Box noValidate component={"form"} onSubmit={formik.handleSubmit}>
                        <MyTextField
                            name="password"
                            type="password"
                            label="Hasło"
                            autoComplete="new-password"
                            formik={formik}
                        />
                        <MyTextField
                            name="confirmPassword"
                            type="password"
                            label="Potwierdzenie Hasła"
                            autoComplete="new-password"
                            formik={formik}
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 1 }}
                            disabled={!(formik.isValid && formik.dirty)}
                        >
                            Zmień
                        </Button>
                    </Box>
                </Box>
            </Container>
        </>
    );
}
export default NewPassword;
