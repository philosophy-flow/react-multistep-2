import { INCREMENT_ACTIVE_STEP, RESET_ACTIVE_STEP } from "../constants";

export const stepReducer = (state = 1, action) => {
  switch (action.type) {
    case INCREMENT_ACTIVE_STEP:
      return state + 1;
    case RESET_ACTIVE_STEP:
      return 1;
    default:
      return state;
  }
};

export default stepReducer;
