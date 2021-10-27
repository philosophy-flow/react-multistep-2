import "../../index.css";
import "../../MultiStepForm/MultiStepForm.css";

import React from "react";
import withFormik from "storybook-formik";

import Step1 from "../Step1";
import { validate1 } from "../../validationSchemas";

export default {
  title: "Form Steps / Step One",
  component: Step1,
  decorators: [withFormik],
  parameters: {
    formik: {
      initialValues: {
        first: "",
        last: "",
        email: "",
      },
      validationSchema: validate1,
      onSubmit: () => alert("Form submitted!"),
    },
  },
};

const Template = (args) => <Step1 {...args} />;

export const Default = Template.bind({});
