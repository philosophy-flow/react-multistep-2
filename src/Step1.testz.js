import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

import Step1 from "./MultiStepForm";

const history = createMemoryHistory();

test("testing", async () => {
  render(
    <Router history={history}>
      <Step1 />
    </Router>
  );

  history.push = jest.fn();

  userEvent.type(screen.getByLabelText(/first name/i), "John");

  userEvent.click(screen.getByText(/next/i));

  await waitFor(() => {
    expect(history.push).toHaveBeenCalledWith("2");
  });
});
