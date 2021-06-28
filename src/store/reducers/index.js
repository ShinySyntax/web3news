import { combineReducers } from "redux";
import authReducer from "./auth";
import postReducer from "./post";
import interactionReducer from "./interaction";

export default combineReducers({
  authReducer,
  postReducer,
  interactionReducer,
});
