import * as Yup from "yup";

export const REGISTER_INITIAL_FORM_STATE = {
    nickname: "",
    pseudonym: "",
    email: "",
    password: "",
    confirmPassword: "",
};

export const REGISTER_FORM_VALIDATION = Yup.object().shape({
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
        .matches(/(?=.*[!@#$%^&*])/, "Musi zawierać znak specjalny (! @ # $ % ^ & *)"),
    confirmPassword: Yup.string()
        .required("Wymagane")
        .oneOf([Yup.ref("password")], "Hasła muszą być takie same"),
});

export const LOGIN_INITIAL_FORM_STATE = {
    email: "",
    password: "",
};

export const LOGIN_FORM_VALIDATION = Yup.object().shape({
    email: Yup.string().required("Wymagane").email("Email niepoprawny"),
    password: Yup.string()
        .required("Wymagane")
        .min(8, "Hasło za krótkie - co najmniej 8 znaków")
        .max(20, "Hasło za długie - maksymalnie 20 znaków"),
});

export const RESET_PASSWORD_INITIAL_FORM_STATE = {
    email: "",
};

export const RESET_PASSWORD_FORM_VALIDATION = Yup.object().shape({
    email: Yup.string().required("Wymagane").email("Email niepoprawny"),
});

export const NEW_PASSWORD_INITIAL_FORM_STATE = {
    newPassword: "",
    confirmPassword: "",
};

export const NEW_PASSWORD_FORM_VALIDATION = Yup.object().shape({
    newPassword: Yup.string()
        .required("Wymagane")
        .min(8, "Hasło za krótkie - co najmniej 8 znaków")
        .max(20, "Hasło za długie - maksymalnie 20 znaków")
        .matches(/(?=.*[a-z])/, "Musi zawierać mała literę")
        .matches(/(?=.*[A-Z])/, "Musi zawierać dużą literę")
        .matches(/(?=.*[0-9])/, "Musi zawierać cyfrę")
        .matches(/(?=.*[!@#$%^&*])/, "Musi zawierać znak specjalny (! @ # $ % ^ & *)"),
    confirmPassword: Yup.string()
        .required("Wymagane")
        .oneOf([Yup.ref("newPassword")], "Hasła muszą być takie same"),
});
