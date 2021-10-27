import "../../index.css";
import "../../MultiStepForm/MultiStepForm.css";

import React from "react";
import withFormik from "storybook-formik";

import Step3 from "../Step3";
import { validate3 } from "../../validationSchemas";

export default {
  title: "Form Steps / Step Three",
  component: Step3,
  decorators: [withFormik],
  parameters: {
    formik: {
      initialValues: {
        product: "",
      },
      validationSchema: validate3,
      onSubmit: () => alert("Form submitted!"),
    },
  },
};

export const Template = (args) => <Step3 {...args} />;

export const Default = Template.bind({});
