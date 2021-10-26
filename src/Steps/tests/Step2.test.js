import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import { Formik } from "formik";

import Step2 from "../Step2";
import { validate2 } from "../../validationSchemas";

describe("step one validation", () => {
  beforeEach(() => {
    render(
      <Formik
        initialValues={{ address1: "", city: "", zipcode: "" }}
        validationSchema={validate2}
      >
        <Step2 />
      </Formik>
    );
  });

  test("show address 1 field validation on blur", async () => {
    const address = screen.getByLabelText(/address line 1/i);
    fireEvent.blur(address);

    let addressError;
    await waitFor(() => {
      addressError = screen.getByText("Required");
    });
    expect(addressError).not.toBeNull();
  });

  test("show city field validation on blur", async () => {
    const city = screen.getByLabelText(/city/i);
    fireEvent.blur(city);

    let cityError;
    await waitFor(() => {
      cityError = screen.getByText("Required");
    });
    expect(cityError).not.toBeNull();
  });

  test("show zip code field validation on blur", async () => {
    const zipcode = screen.getByLabelText(/zip code/i);
    fireEvent.blur(zipcode);

    let zipcodeError;
    await waitFor(() => {
      zipcodeError = screen.getByText("Required");
    });
    expect(zipcodeError).not.toBeNull();
  });
});
