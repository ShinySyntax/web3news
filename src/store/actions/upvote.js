import UpvoteService from "../../services/upvoteService";
import {
  DOWNVOTE_ARTICLE,
  DOWNVOTE_ARTICLE_FAILURE,
  GET_VOTE_SUM_TOTAL,
  UPVOTE_ARTICLE,
  UPVOTE_ARTICLE_FAILURE,
} from "./actionTypes";

export const upvote = (params) => (dispatch) => {
  return UpvoteService.upvote(params)
    .then((data) => {
      dispatch({ type: UPVOTE_ARTICLE, payload: data });
    })
    .catch((err) => {
      dispatch({ type: UPVOTE_ARTICLE_FAILURE, payload: err });
    });
};

export const downvote = (params) => (dispatch) => {
  return UpvoteService.downvote(params)
    .then((data) => {
      dispatch({ type: DOWNVOTE_ARTICLE, payload: data });
    })
    .catch((err) => {
      dispatch({ type: DOWNVOTE_ARTICLE_FAILURE, payload: err });
    });
};

export const getSumTotal = (params) => (dispatch) => {
  return UpvoteService.getInteractionsForArticle(params)
    .then((data) => {
      dispatch({ type: GET_VOTE_SUM_TOTAL, payload: data });
    })
    .catch((err) => console.log(err));
};
