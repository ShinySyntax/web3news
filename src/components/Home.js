import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import PostList from "./post/PostList";
import SidebarLeft from "./sidebar/SidebarLeft";
import SidebarRight from "./sidebar/SidebarRight";

const Home = () => {
  AOS.init(); // Initalize animations

  return (
    <>
      <SidebarLeft />
      <PostList />
      <SidebarRight />
    </>
  );
};

export default Home;
