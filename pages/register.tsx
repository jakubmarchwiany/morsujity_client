import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LoadingButton from "@mui/lab/LoadingButton";
import { Avatar, Box, Container, Typography } from "@mui/material";
import { useFormik } from "formik";
import { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import * as Yup from "yup";
import MyLinkButton from "../src/components/my/MyLinkButton";
import MyTextField from "../src/components/my/MyTextField";
import Notification, { NotificationProps } from "../src/layout/Notification";
import { postFetch } from "../src/utils/fetches";

const ENV = process.env.NEXT_PUBLIC_ENV;
const DEV_API_ENDPOINT = process.env.NEXT_PUBLIC_DEV_API_ENDPOINT;

const INITIAL_FORM_STATE = {
  nickname: "",
  pseudonym: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const FORM_VALIDATION = Yup.object().shape({
  pseudonym: Yup.string()
    .required("Wymagane")
    .min(3, "Ksywka za krótka - Co najmniej 3 znaki")
    .max(15, "Ksywka za długa - Maksymalnie 15 znaków"),
  email: Yup.string().required("Wymagane").email("Email niepoprawny"),
  password: Yup.string()
    .required("Wymagane")
    .min(8, "Hasło za krótkie - co najmniej 8 znaków")
    .max(20, "Hasło za długie - maksymalnie 20 znaków")
    .matches(/(?=.*[a-z])/, "Musi zawierać mała literę")
    .matches(/(?=.*[A-Z])/, "Musi zawierać dużą literę")
    .matches(/(?=.*[0-9])/, "Musi zawierać cyfrę")
    .matches(
      /(?=.*[!@#$%^&*])/,
      "Musi zawierać znak specjalny (! @ # $ % ^ & *)"
    ),
  confirmPassword: Yup.string()
    .required("Wymagane")
    .oneOf([Yup.ref("password"), null], "Hasła muszą być takie same"),
});

const Register: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState<NotificationProps>({
    open: false,
    message: "",
    type: "error",
  });

  const closeNotification = () => {
    setNotification({ ...notification, open: false });
  };

  const formik = useFormik({
    initialValues: INITIAL_FORM_STATE,
    validationSchema: FORM_VALIDATION,
    onSubmit: ({ pseudonym, email, password }) => {
      const END_POINT =
        ENV === "development"
          ? DEV_API_ENDPOINT
          : window.location.origin + "/api";
      setLoading(true);
      postFetch<{ message: string }>(
        { pseudonym, email, password },
        END_POINT + "/auth/register"
      )
        .then(({ message }) => {
          window.location.href = "/login?message=" + message;
        })
        .catch(({ message }) => {
          setNotification({
            open: true,
            message: message,
            type: "error",
          });
          setLoading(false);
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
            <LockOutlinedIcon fontSize="large" />
          </Avatar>

          <Typography component="h1" variant="h4">
            Stwórz konto
          </Typography>

          <Box
            component={"form"}
            noValidate
            onSubmit={formik.handleSubmit}
            sx={{ mt: 2 }}
          >
            <MyTextField
              name="pseudonym"
              label={"Ksywka (pseudonim, Imię i Nazwisko)"}
              formik={formik}
            />

            <MyTextField name="email" label={"Adres email"} formik={formik} />

            <MyTextField
              type="password"
              name="password"
              label={"Hasło"}
              autoComplete="new-password"
              formik={formik}
            />

            <MyTextField
              type="password"
              name="confirmPassword"
              label={"Potwierdzenie Hasła"}
              autoComplete="new-password"
              formik={formik}
            />

            <LoadingButton
              loading={loading}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2 }}
              disabled={!(formik.isValid && formik.dirty)}
            >
              Rejestruj
            </LoadingButton>

            <MyLinkButton size="large" href="/login" text="Masz już konto?" />
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
export default Register;
