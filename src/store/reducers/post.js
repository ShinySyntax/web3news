import {
  LIST_ALL,
  POST,
  UPVOTE_POST_FAILURE,
  UPVOTE_POST_SUCCESS,
  DOWNVOTE_POST_FAILURE,
  DOWNVOTE_POST_SUCCESS,
} from "../actions/actionTypes";

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
    case UPVOTE_POST_FAILURE:
      return { ...state };
    case UPVOTE_POST_SUCCESS:
      return {
        ...state,
        posts: state.posts.map((post) => {
          const { postID, userID } = payload?.interaction;
          const { interactions } = post;
          return interactions.map((interaction) => {
            if (
              postID === interaction.postID &&
              userID === interaction.userID
            ) {
              return payload.interaction;
            } else {
              return { ...interaction };
            }
          });
        }),
        voteTotal: payload.voteTotal,
      };
    case DOWNVOTE_POST_FAILURE:
      return { ...state };
    case DOWNVOTE_POST_SUCCESS:
      return { ...state, voteTotal: payload.voteTotal };
    default:
      return state;
  }
};

export default postReducer;
