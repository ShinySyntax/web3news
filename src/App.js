import { BrowserRouter as Router, Route, Switch, useLocation, useRouteMatch } from "react-router-dom";
import React from "react";
import { createBrowserHistory } from 'history';
import queryString from 'query-string'

// import "bulma/css/bulma.css";
import "./assets/main.css";
import { Toaster } from "react-hot-toast";

import Home from "./components/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UserProfile from "./components/Profile";
import Navbar from "./components/Navbar";
import NewArticle from "./components/article/New";
import ReadingList from "./components/ReadingList";

// import AuthToken from "./utils/AuthToken"; // figure persistent sessions out... decide on cookies vs localStorage
// import * as url from "./assets/images/web3-dev.jpg";

const App = () => {
  // const { path, url } = useRouteMatch()
  // console.log(path, url)
  // const { search } = useLocation()
  // const { tag } = queryString.parse(search)
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Navbar />
      <Toaster position="top-center" toastOptions={{ className: "toast-notif" }} reverseOrder={false} />
      <div
        style={{
          // backgroundImage: `url(${url.default})`,
          // backgroundSize: "cover",
        }}
        className="bg-darkblue-800 justify-center"
      >
        <div className="flex flex-row relative top-16">
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route path={`${path}/tag=${tag}`} component={Home} /> */}
            <ProtectedRoute path="/profile" component={UserProfile} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <ProtectedRoute path="/article/new" component={NewArticle} />
            <ProtectedRoute path="/reading-list" component={ReadingList} />
            <Route render={() => <h1 className="container">404 PAGE NOT FOUND.</h1>} />
          </Switch>
        </div>
      </div>
    </Router >
  );
};

export default App;
