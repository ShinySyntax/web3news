import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router";
import { logout } from "../../store/actions/auth";

const Logout = ({ history }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(logout(history));
  }, [dispatch, history]);

  return <Redirect to="/" />;
};

export default Logout;
