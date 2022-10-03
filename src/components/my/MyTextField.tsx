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

const MyTextField = ({
  type,
  name,
  label,
  placeholder,
  onChange,
  autoComplete,
  value,
  formik,
}: MyTextFieldType) => (
  <StyledTextField
    type={type !== undefined ? type : "text"}
    name={name}
    label={label}
    placeholder={placeholder !== undefined ? placeholder : undefined}
    autoComplete={autoComplete !== undefined ? autoComplete : name}
    fullWidth
    margin="dense"
    value={formik ? formik.values[name] : value}
    onChange={formik ? formik.handleChange : onChange}
    onBlur={formik && formik.handleBlur}
    error={formik && formik.touched[name] && Boolean(formik.errors[name])}
    helperText={formik && formik.touched[name] && formik.errors[name]}
  />
);

export default MyTextField;
