import UpvoteService from "../../services/upvoteService";
import {
  DOWNVOTE_ARTICLE,
  GET_VOTE_SUM_TOTAL,
  UPVOTE_ARTICLE,
} from "./actionTypes";

export const upvote = (params) => (dispatch) => {
  return UpvoteService.upvote(params)
    .then((data) => {
      dispatch({ type: UPVOTE_ARTICLE, payload: data });
    })
    .catch((err) => console.log(err));
};

export const downvote = (params) => (dispatch) => {
  return UpvoteService.downvote(params)
    .then((data) => {
      dispatch({ type: DOWNVOTE_ARTICLE, payload: data });
    })
    .catch((err) => console.log(err));
};

export const getSumTotal = (params) => (dispatch) => {
  return UpvoteService.getInteractionsForArticle(params)
    .then((data) => {
      dispatch({ type: GET_VOTE_SUM_TOTAL, payload: data });
    })
    .catch((err) => console.log(err));
};
