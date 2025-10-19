import * as yup from "yup";

const LoginSchema = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
  remember: yup.boolean(),
});

export const validation={
    LoginSchema
}