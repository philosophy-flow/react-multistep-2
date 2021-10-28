import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import { Formik } from "formik";

import Step3 from "../Step3";
import { validate3 } from "../../validationSchemas";

describe("step three validation", () => {
  beforeEach(() => {
    const mockProducts = [
      { id: 1, title: "Product #1" },
      { id: 2, title: "Product #2" },
      { id: 3, title: "Product #3" },
    ];

    render(
      <Formik initialValues={{ product: "" }} validationSchema={validate3}>
        <Step3 products={mockProducts} />
      </Formik>
    );
  });

  test("product field validation appears on submit if no value selected", async () => {
    userEvent.click(screen.getByText(/next/i));

    let productError;
    await waitFor(() => {
      productError = screen.getByText("Select a product");
    });

    expect(productError).not.toBeNull();
  });
});
