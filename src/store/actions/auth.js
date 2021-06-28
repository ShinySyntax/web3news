import AuthService from "../../services/authService";
import { LOGIN_SUCCESS, REGISTER_SUCCESS, LOGOUT } from "./actionTypes";

export const login = (params, history) => (dispatch) => {
  return AuthService.login(params).then((data) => {
    dispatch({ type: LOGIN_SUCCESS, payload: data });
    history.push("/");
  });
};

export const register = (params, history) => (dispatch) => {
  return AuthService.register(params).then((data) => {
    dispatch({ type: REGISTER_SUCCESS, payload: data });
    history.push("/");
  });
};

export const logout = (history) => (dispatch) => {
  AuthService.logout();
  dispatch({ type: LOGOUT });
  history.push("/");
};
