import AuthService from "../../services/authService";
import { LOGIN, REGISTER, LOGOUT } from "./actionTypes";

export const login = (params, history) => (dispatch) => {
  return AuthService.login(params)
    .then((data) => {
      dispatch({ type: LOGIN, payload: data });
      history.push("/");
    })
    .catch((err) => console.log(err.message));
};

export const register = (params, history) => (dispatch) => {
  return AuthService.register(params)
    .then((data) => {
      dispatch({ type: REGISTER, payload: data });
      history.push("/");
    })
    .catch((err) => console.log(err.message));
};

export const logout = (params, history) => (dispatch) => {
  return AuthService.logout(params)
    .then((data) => {
      dispatch({ type: LOGOUT, payload: data });
      history.push("/");
    })
    .catch((err) => console.log(err.message));
};
