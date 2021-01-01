import React from 'react';
import { useSelector } from "react-redux";

import ArticleList from "./article/ArticleList";
import Footer from "./Footer";

const Home = ({ history }) => {
  const auth = useSelector((state) => state.authReducer);

  return (
    <div className="container">
      <h1>Welcome, {auth.isLoggedIn ? `${auth.user.userName}` : "Guest"}. Here is what is currently trending around the web3 world.</h1>
      <ArticleList />
      <Footer />
    </div>
  );
}

export default Home;