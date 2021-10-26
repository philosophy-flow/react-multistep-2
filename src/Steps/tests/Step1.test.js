import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import { Formik } from "formik";

import Step1 from "../Step1";
import { validate1 } from "../../validationSchemas";

describe("step one validation", () => {
  beforeEach(() => {
    render(
      <Formik
        initialValues={{ first: "", last: "", email: "" }}
        validationSchema={validate1}
      >
        <Step1 />
      </Formik>
    );
  });

  test("show first name field validation on blur", async () => {
    const firstName = screen.getByLabelText(/first name/i);
    fireEvent.blur(firstName);

    let firstNameError;
    await waitFor(() => {
      firstNameError = screen.getByText("Required");
    });
    expect(firstNameError).not.toBeNull();
  });

  test("show last name field validation on blur", async () => {
    const lastName = screen.getByLabelText(/last name/i);
    fireEvent.blur(lastName);

    let lastNameError;
    await waitFor(() => {
      lastNameError = screen.getByText("Required");
    });
    expect(lastNameError).not.toBeNull();
  });

  test("show email field validation on blur", async () => {
    const email = screen.getByLabelText(/email address/i);
    fireEvent.blur(email);

    let emailError;
    await waitFor(() => {
      emailError = screen.getByText("Required");
    });
    expect(emailError).not.toBeNull();
  });

  test("show email field validation for incorrect format", async () => {
    const email = screen.getByLabelText(/email address/i);
    userEvent.type(email, "notAnEmailAddress");
    fireEvent.blur(email);

    let emailError;
    await waitFor(() => {
      emailError = screen.getByText(/invalid format/i);
    });

    expect(emailError).not.toBeNull();
  });
});
