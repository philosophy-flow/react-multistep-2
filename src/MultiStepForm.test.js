import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

import MultiStepForm from "./MultiStepForm";

describe("successful forward step transitions and form submission", () => {
  test("step two renders after step one", async () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <MultiStepForm />
      </Router>
    );

    userEvent.type(screen.getByLabelText(/first name/i), "John");
    userEvent.type(screen.getByLabelText(/last name/i), "Smith");
    userEvent.type(screen.getByLabelText(/email/i), "john@test.com");
    userEvent.click(screen.getByText(/next/i));

    await waitFor(() => {
      expect(history.location.pathname).toBe("/2");
      expect(screen.getByText(/address info/i)).toBeInTheDocument();
    });
  });

  test("step three renders after step two", async () => {
    const history = createMemoryHistory();
    history.push("2");
    render(
      <Router history={history}>
        <MultiStepForm />
      </Router>
    );

    userEvent.type(screen.getByLabelText(/location/i), "Anywhere");
    userEvent.click(screen.getByText(/next/i));

    await waitFor(() => {
      expect(history.location.pathname).toBe("/3");
      expect(screen.getByText(/verify info/i)).toBeInTheDocument();
    });
  });

  test("successful form submision", async () => {
    const history = createMemoryHistory();
    history.push("3");
    render(
      <Router history={history}>
        <MultiStepForm />
      </Router>
    );

    userEvent.click(screen.getByText(/submit form/i));

    window.alert = jest.fn();
    await waitFor(() => {
      expect(window.alert).toHaveBeenCalled();
      expect(history.location.pathname).toBe("/1");
    });
  });
});

describe("successful backward step transitions", () => {
  test("step two renders after step three", async () => {
    const history = createMemoryHistory();
    history.push("3");
    render(
      <Router history={history}>
        <MultiStepForm />
      </Router>
    );

    userEvent.click(screen.getByText(/previous/i));

    await waitFor(() => {
      expect(history.location.pathname).toBe("/2");
      expect(screen.getByText(/address info/i)).toBeInTheDocument();
    });
  });

  test("step one renders after step two", async () => {
    const history = createMemoryHistory();
    history.push("2");
    render(
      <Router history={history}>
        <MultiStepForm />
      </Router>
    );

    userEvent.click(screen.getByText(/previous/i));

    await waitFor(() => {
      expect(history.location.pathname).toBe("/1");
      expect(screen.getByText(/basic info/i)).toBeInTheDocument();
    });
  });
});
