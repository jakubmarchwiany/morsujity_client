/* eslint-disable @typescript-eslint/no-explicit-any */
import type { TextFieldProps } from "@mui/material";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledTextField = styled(TextField)<TextFieldProps>(({ theme }) => ({
    ...(theme.palette.mode === "light"
        ? {
              "& label": {
                  color: theme.palette.primary.main,
              },
              "& label.Mui-focused": {
                  color: theme.palette.primary.main,
              },
              "& .MuiOutlinedInput-root": {
                  backgroundColor: "#f5f5f5",
                  "&:hover fieldset": {
                      borderColor: theme.palette.primary.main,
                  },
                  "&.Mui-focused fieldset": {
                      borderColor: theme.palette.primary.main,
                  },
              },
          }
        : {
              "& label": {
                  color: theme.palette.secondary.main,
              },
              "& label.Mui-focused": {
                  color: theme.palette.secondary.main,
              },
              "& .MuiOutlinedInput-root": {
                  backgroundColor: "#616161",
                  "&:hover fieldset": {
                      borderColor: theme.palette.secondary.main,
                  },
                  "&.Mui-focused fieldset": {
                      borderColor: theme.palette.secondary.main,
                  },
              },
          }),
}));

type MyTextFieldType = {
    type?: string;
    name: string;
    placeholder?: string;
    label: string;
    autoComplete?: string;
    formik?: any;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const MyTextField = (props: TextFieldProps & MyTextFieldType) => {
    const { formik } = props;

    return formik ? (
        <StyledTextField
            fullWidth
            variant="filled"
            value={formik.values[props.name!]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched[props.name!] && Boolean(formik.errors[props.name!])}
            helperText={formik.touched[props.name!] && formik.errors[props.name!]}
            {...props}
        />
    ) : (
        <StyledTextField fullWidth variant="filled" {...props} />
    );
};
export default MyTextField;
