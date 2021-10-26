import * as Yup from "yup";

export const validate1 = Yup.object({
  first: Yup.string().required("Required"),
  last: Yup.string().required("Required"),
  email: Yup.string().required("Required").email("Invalid format"),
});

export const validate2 = Yup.object({
  address1: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  zipcode: Yup.string()
    .required("Required")
    .matches(/^[0-9]{5}(?:-[0-9]{4})?$/i, "Invalid zipcode"),
});

export const validate3 = Yup.object({
  product: Yup.string().required("Select a product"),
});

export const noValidation = Yup.object({});
