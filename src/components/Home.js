import React from 'react';
import { useSelector } from "react-redux";

import AOS from "aos";
import "aos/dist/aos.css";

import ArticleList from "./article/ArticleList";
import Footer from "./Footer";
import Sidebar from './sidebar/Sidebar';

const Home = ({ history }) => {
  const auth = useSelector((state) => state.authReducer);
  AOS.init(); // Initalize animations

  return (
    <div>
      <h1>Welcome, {auth.isLoggedIn ? `${auth.user.userName}` : "Guest"}. Here is what is currently trending around the web3 world.</h1>
      <ArticleList />
      <Sidebar />
      <Footer />
    </div>
  );
}

export default Home;