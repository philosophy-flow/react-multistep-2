import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

import MultiStepForm from "./MultiStepForm";

describe("successful step transitions and form submission", () => {
  const history = createMemoryHistory();
  beforeEach(() => {
    render(
      <Router history={history}>
        <MultiStepForm />
      </Router>
    );
  });

  test("step two renders after step one", async () => {
    userEvent.type(screen.getByLabelText(/first name/i), "John");
    userEvent.click(screen.getByText(/next/i));

    await waitFor(() => {
      expect(history.location.pathname).toBe("/2");
      expect(screen.getByText(/location/i)).toBeInTheDocument();
    });
  });

  test("step three renders after step two", async () => {
    userEvent.type(screen.getByLabelText(/location/i), "Anywhere");
    userEvent.click(screen.getByText(/next/i));

    await waitFor(() => {
      expect(history.location.pathname).toBe("/3");
      expect(screen.getByText(/verify info/i)).toBeInTheDocument();
    });
  });

  test("successful form submision", async () => {
    window.alert = jest.fn();

    userEvent.click(screen.getByText(/submit form/i));

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalled();
      expect(history.location.pathname).toBe("/1");
    });
  });
});
