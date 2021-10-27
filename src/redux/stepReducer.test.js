import { stepReducer } from "./stepReducer";
import { incrementActiveStep, resetActiveStep } from "./stepActions";

test("should return the initial state", () => {
  expect(stepReducer(undefined, {})).toEqual(1);
});

test("should handle incrementing the active step", () => {
  const previousState = 6;
  expect(stepReducer(previousState, incrementActiveStep())).toEqual(7);
});

test("should handle reseting active step", () => {
  const previousState = 7;
  expect(stepReducer(previousState, resetActiveStep())).toEqual(1);
});
