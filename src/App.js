import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
// import queryString from 'query-string'

import "./assets/main.css";
import { Toaster } from "react-hot-toast";
// import * as url from "./assets/images/laptop.jpg";

import Home from "./components/Home";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UserProfile from "./components/Profile";
import Navbar from "./components/Navbar";
import NewPost from "./components/post/New";
import ReadingList from "./components/ReadingList";
import Logout from "./components/auth/Logout";
import NotFound from "./components/NotFound";
import ChatNotification from "./components/ChatNotification";
import VideoPlayer from "./components/VideoPlayer";

const App = () => {
  // const { path, url } = useRouteMatch()
  // console.log(path, url)
  // const { search } = useLocation()
  // const { tag } = queryString.parse(search)

  return (
    <>
      <Router>
        <Toaster
          position="top-center"
          toastOptions={{ className: "toast-notif" }}
          reverseOrder={false}
        />
        <Navbar />
        <div
          className="flex flex-row max-h-screen overflow-y-hidden relative top-12 bg-darkblue-800"
          // style={{
          //   backgroundImage: `url(${url.default})`,
          //   backgroundSize: "100%",
          //   backgroundRepeat: "no-repeat",
          // }}
        >
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route path={`${path}/tag=${tag}`} component={Home} /> */}
            <ProtectedRoute path="/profile" component={UserProfile} />
            <ProtectedRoute path="/post/new" component={NewPost} />
            <ProtectedRoute path="/reading-list" component={ReadingList} />
            <Route path="/logout" component={Logout} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
      <VideoPlayer />
      <ChatNotification />
    </>
  );
};

export default App;
