import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';        // THIRD  
import React from 'react';                                                        // PARTY
import 'materialize-css/dist/css/materialize.min.css';                            // LIBRARIES

import Home from "./components/Home";
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UserProfile from './components/Profile';
import Navbar from './components/Navbar';
import NewArticle from './components/article/New';
import ReadingList from './components/ReadingList';

// import useToken  from "./utils/useToken";              figure persistent sessions out...
import * as url from './assets/images/web3-dev.jpg';

const App = () => {
  // const { token, setToken } = useToken();

  return (
    <Router>
      <Navbar />
      <div
        style={{
          backgroundImage: `url(${url.default})`,
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <div className="container center">
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