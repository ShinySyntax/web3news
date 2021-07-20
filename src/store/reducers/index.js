import { combineReducers } from "redux";
import authReducer from "./auth";
import postReducer from "./post";

export default combineReducers({
  authReducer,
  postReducer,
});
