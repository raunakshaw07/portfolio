import { combineReducers } from "redux";
import skillReducer from "./skillReducer";
import messageReducer from "./messageReducer";
import bioReducer from "./bioReducer";

export default combineReducers({
  skill: skillReducer,
  message: messageReducer,
  bio: bioReducer,
});
