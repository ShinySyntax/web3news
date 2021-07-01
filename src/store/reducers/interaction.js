import {
  UPVOTE_POST_FAILURE,
  UPVOTE_POST_SUCCESS,
  DOWNVOTE_POST_FAILURE,
  DOWNVOTE_POST_SUCCESS,
} from "../actions/actionTypes";

const initalState = {};

const interactionReducer = (state = initalState, action) => {
  const { type, payload } = action;

  switch (type) {
    case UPVOTE_POST_FAILURE:
      return { ...state };
    case UPVOTE_POST_SUCCESS:
      return { ...state, voteTotal: payload.voteTotal };
    case DOWNVOTE_POST_FAILURE:
      return { ...state };
    case DOWNVOTE_POST_SUCCESS:
      return { ...state, voteTotal: payload.voteTotal };
    default:
      return state;
  }
};

export default interactionReducer;
