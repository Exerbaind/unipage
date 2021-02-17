import { combineReducers } from "redux";
import speedPrintReducer from "./speedPrintReducer";
import audioPlayerReducer from "./audioPlayerReducer";

const allReducers = combineReducers({
  appParameters: speedPrintReducer,
  player: audioPlayerReducer,
});

export default allReducers;
