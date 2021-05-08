import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const options = {
  latency: 500,
};

const composeEnhancers = composeWithDevTools(options);

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
