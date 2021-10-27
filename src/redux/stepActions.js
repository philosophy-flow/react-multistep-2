import { INCREMENT_ACTIVE_STEP, RESET_ACTIVE_STEP } from "./constants";

export const incrementActiveStep = () => {
  return {
    type: INCREMENT_ACTIVE_STEP,
  };
};

export const resetActiveStep = () => {
  return {
    type: RESET_ACTIVE_STEP,
  };
};
