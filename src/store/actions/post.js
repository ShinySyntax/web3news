import PostService from "../../services/postService";
import { LIST_ALL, POST } from "./actionTypes";

export const post = (params, history) => (dispatch) => {
  return PostService.post(params)
    .then((data) => {
      dispatch({ type: POST, payload: data });
      history.push("/");
    })
    .catch((err) => console.log(err));
};

export const listAll = () => (dispatch) => {
  return PostService.listAll()
    .then((data) => {
      dispatch({ type: LIST_ALL, payload: data });
    })
    .catch((err) => console.log(err));
};
