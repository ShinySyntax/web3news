import InteractionService from "../../services/interactionService";
import {
  DOWNVOTE_POST_SUCCESS,
  DOWNVOTE_POST_FAILURE,
  GET_VOTE_SUM_TOTAL,
  GET_VOTE_SUM_TOTAL_FAILURE,
  UPVOTE_POST_SUCCESS,
  UPVOTE_POST_FAILURE,
} from "./actionTypes";

export const upvote = (params) => (dispatch) => {
  return InteractionService.upvote(params)
    .then((data) => {
      dispatch({ type: UPVOTE_POST_SUCCESS, payload: data });
    })
    .catch((err) => {
      dispatch({ type: UPVOTE_POST_FAILURE, payload: err });
    });
};

export const downvote = (params) => (dispatch) => {
  return InteractionService.downvote(params)
    .then((data) => {
      dispatch({ type: DOWNVOTE_POST_SUCCESS, payload: data });
    })
    .catch((err) => {
      dispatch({ type: DOWNVOTE_POST_FAILURE, payload: err });
    });
};

export const getSumTotal = (params) => (dispatch) => {
  return InteractionService.getInteractionsForPost(params)
    .then((data) => {
      dispatch({ type: GET_VOTE_SUM_TOTAL, payload: data });
    })
    .catch((err) => {
      dispatch({ type: GET_VOTE_SUM_TOTAL_FAILURE, payload: err });
    });
};
