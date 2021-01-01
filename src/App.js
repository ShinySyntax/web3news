import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';        // THIRD  
import React from 'react';                                                        // PARTY
import 'bulma/css/bulma.css';
import './assets/main.css';
import { Toaster } from "react-hot-toast";

import Home from "./components/Home";
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UserProfile from './components/Profile';
import Navbar from './components/Navbar';
import NewArticle from './components/article/New';
import ReadingList from './components/ReadingList';

// import useToken  from "./utils/useToken";              figure persistent sessions out... decide on cookies vs localStorage
import * as url from './assets/images/web3-dev.jpg';

const App = () => {
  // const { token, setToken } = useToken();

  return (
    <Router>
      <Navbar />
      <Toaster position="top-center" />
      <div
        style={{
          // backgroundImage: `url(${url.default})`,
          // backgroundSize: "cover",
          // height: "100vh",
          background: '#171924',
          position: 'relative',
          top: '24px'
        }}
      >
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <ProtectedRoute path="/profile" component={UserProfile} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <ProtectedRoute path="/article/new" component={NewArticle} />
            <ProtectedRoute path="/reading-list" component={ReadingList} />
            <Route render={() => <h1 className="container">404 PAGE NOT FOUND.</h1>} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;