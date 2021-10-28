import { combineReducers } from "redux";

import stepReducer from "./stepReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
  activeStep: stepReducer,
  products: productReducer,
});

export default rootReducer;
