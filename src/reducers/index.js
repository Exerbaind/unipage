import { combineReducers } from "redux";
import speedPrintReducer from "./speedPrintReducer";

const allReducers = combineReducers({
  appParameters: speedPrintReducer,
});

export default allReducers;
