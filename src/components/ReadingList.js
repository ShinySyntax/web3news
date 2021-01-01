import React from 'react';
import { useSelector } from "react-redux";

const ReadingList = ({ history }) => {
  const auth = useSelector((state) => state.authReducer);

  return <h1>READING LIST for {auth.user.userName}</h1>;
};

export default ReadingList;