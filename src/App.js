import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import { createBrowserHistory } from "history";
// import queryString from 'query-string'

// import "bulma/css/bulma.css";
import "./assets/main.css";
import { Toaster } from "react-hot-toast";

import Home from "./components/Home";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UserProfile from "./components/Profile";
import Navbar from "./components/Navbar";
import NewArticle from "./components/article/New";
import ReadingList from "./components/ReadingList";
import Footer from "./components/Footer";
import Logout from "./components/auth/Logout";
import NotFound from "./components/NotFound";

// import * as url from "./assets/images/laptop.jpg";

const App = () => {
  // const { path, url } = useRouteMatch()
  // console.log(path, url)
  // const { search } = useLocation()
  // const { tag } = queryString.parse(search)
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Navbar />
      <Toaster
        position="top-center"
        toastOptions={{ className: "toast-notif" }}
        reverseOrder={false}
      />
      <div
        // style={{
        //   backgroundImage: `url(${url.default})`,
        //   backgroundSize: "100%",
        //   backgroundRepeat: "no-repeat",
        // }}
        className="bg-darkblue-800 justify-center"
      >
        <div className="flex flex-row relative top-16">
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route path={`${path}/tag=${tag}`} component={Home} /> */}
            <ProtectedRoute path="/profile" component={UserProfile} />
            <Route path="/logout" component={Logout} />
            <ProtectedRoute path="/article/new" component={NewArticle} />
            <ProtectedRoute path="/reading-list" component={ReadingList} />
            <Route component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
