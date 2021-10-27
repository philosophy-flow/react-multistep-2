import "../../index.css";
import "../../MultiStepForm/MultiStepForm.css";
import React from "react";
import withFormik from "storybook-formik";

import Step2 from "../Step2";
import { validate2 } from "../../validationSchemas";

export default {
  title: "Form Steps / Step Two",
  component: Step2,
  decorators: [withFormik],
  parameters: {
    formik: {
      initialValues: {
        address1: "",
        address2: "",
        city: "",
        zipcode: "",
      },
      validationSchema: validate2,
      onSubmit: () => alert("Form submitted!"),
    },
  },
};

const Template = (args) => <Step2 {...args} />;

export const Default = Template.bind({});
