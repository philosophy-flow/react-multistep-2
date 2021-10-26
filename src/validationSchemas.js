import * as yup from "yup";

export const validate1 = yup.object({
  first: yup.string().required("First name required"),
  last: yup.string().required("Last name required"),
  email: yup.string().required("Email required").email("Invalid format"),
});

export const validate2 = yup.object({
  location: yup.string().required("Location required"),
});

export const noValidation = yup.object({});
