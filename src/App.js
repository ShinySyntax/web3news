import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import { createBrowserHistory } from "history";
// import queryString from 'query-string'

import "./assets/main.css";
import { Toaster } from "react-hot-toast";
// import * as url from "./assets/images/laptop.jpg";

import Home from "./components/Home";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UserProfile from "./components/Profile";
import Navbar from "./components/Navbar";
import NewArticle from "./components/article/New";
import ReadingList from "./components/ReadingList";
import Logout from "./components/auth/Logout";
import NotFound from "./components/NotFound";

const App = () => {
  // const { path, url } = useRouteMatch()
  // console.log(path, url)
  // const { search } = useLocation()
  // const { tag } = queryString.parse(search)
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Toaster
        position="top-center"
        toastOptions={{ className: "toast-notif" }}
        reverseOrder={false}
      />
      <Navbar />
      <div
        className="flex flex-row relative top-16 bg-darkblue-800"
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
          <ProtectedRoute path="/article/new" component={NewArticle} />
          <ProtectedRoute path="/reading-list" component={ReadingList} />
          <Route path="/logout" component={Logout} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
