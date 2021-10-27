import { INCREMENT_ACTIVE_STEP, RESET_ACTIVE_STEP } from "./constants";
import { combineReducers } from "redux";

const stepReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT_ACTIVE_STEP:
      return state + 1;
    case RESET_ACTIVE_STEP:
      return 0;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  activeStep: stepReducer,
});

export default rootReducer;
