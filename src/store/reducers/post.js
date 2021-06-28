import { LIST_ALL, POST } from "../actions/actionTypes";

const initalState = {
  posts: [],
};

const postReducer = (state = initalState, action) => {
  const { type, payload } = action;

  switch (type) {
    case POST:
      return {
        ...state,
        post: payload,
      };
    case LIST_ALL:
      return {
        ...state,
        posts: payload,
      };
    default:
      return state;
  }
};

export default postReducer;
