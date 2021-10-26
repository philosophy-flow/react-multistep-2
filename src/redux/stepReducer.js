import { INCREMENT_ACTIVE_STEP } from "./constants";
import { combineReducers } from "redux";

const stepReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT_ACTIVE_STEP:
      return state + 1;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  highestCompletedStep: stepReducer,
});

export default rootReducer;
