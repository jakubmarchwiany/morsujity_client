import { LockReset } from "@mui/icons-material";
import { Avatar, Box, Button, Container, Typography } from "@mui/material";
import { useFormik } from "formik";
import Head from "next/head";
import { useRouter } from "next/router";
import * as Yup from "yup";
import MyTextField from "../../src/components/my/MyTextField";
import { postFetch } from "../../src/utils/fetches";

const DEV_API_ENDPOINT = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT;

const INITIAL_FORM_STATE = {
    email: "",
};

const FORM_VALIDATION = Yup.object().shape({
    email: Yup.string().required("Wymagane").email("Email niepoprawny"),
});

function ResetPassword() {
    const router = useRouter();

    const formik = useFormik({
        initialValues: INITIAL_FORM_STATE,
        validationSchema: FORM_VALIDATION,
        onSubmit: ({ email }) => {
            postFetch<{ message: string }>({ email }, DEV_API_ENDPOINT + `/auth/reset-password`)
                .then(({ message }) => {
                    router.push({
                        pathname: "/login",
                        query: { open: true, message, type: "success" },
                    });
                })
                .catch((error) => {
                    router.push({
                        pathname: "/login",
                        query: { open: true, message: error.message, type: "error" },
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
                        <LockReset fontSize="large" />
                    </Avatar>

                    <Typography component="h1" variant="h4">
                        Resetowanie Hasła
                    </Typography>
                    <Box noValidate component={"form"} onSubmit={formik.handleSubmit}>
                        <Typography variant="body2" mt={3}>
                            Na adres mailowy zostanie wysłany link resetujący hasło
                        </Typography>
                        <MyTextField name="email" label="Email" formik={formik} />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 1 }}
                            disabled={!(formik.isValid && formik.dirty)}
                        >
                            Wyślij
                        </Button>
                    </Box>
                </Box>
            </Container>
        </>
    );
}
export default ResetPassword;
