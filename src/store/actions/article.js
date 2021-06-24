import ArticleService from "../../services/articleService";
import { LIST_ALL, POST } from "./actionTypes";

export const post = (params, history) => (dispatch) => {
  return ArticleService.post(params)
    .then((data) => {
      dispatch({ type: POST, payload: data });
      history.push("/");
    })
    .catch((err) => console.log(err));
};

export const listAll = () => (dispatch) => {
  return ArticleService.listAll()
    .then((data) => {
      dispatch({ type: LIST_ALL, payload: data });
    })
    .catch((err) => console.log(err));
};
