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
    case UPVOTE_POST_SUCCESS: {
      const { postID, userID, voteTotal } = payload?.interaction;

      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.id === postID) {
            let interactions = post.interactions.map((interaction) => {
              if (userID === interaction.userID) {
                return payload.interaction;
              } else {
                return { ...interaction };
              }
            });
            return { ...post, interactions, voteTotal };
          } else return { ...post };
        }),
      };
    }
    case DOWNVOTE_POST_FAILURE:
      return { ...state };
    case DOWNVOTE_POST_SUCCESS: {
      const { postID, userID, voteTotal } = payload?.interaction;
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.id === postID) {
            let interactions = post.interactions.map((interaction) => {
              if (userID === interaction.userID) {
                return payload.interaction;
              } else {
                return { ...interaction };
              }
            });
            return { ...post, interactions, voteTotal };
          } else return { ...post };
        }),
      };
    }
    default:
      return state;
  }
};

export default postReducer;
