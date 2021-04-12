import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faConnectdevelop } from "@fortawesome/free-brands-svg-icons";

const Navbar = (...props) => {
  const auth = useSelector((state) => state.authReducer);

  return (
    <nav
      className="navbar is-dark is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <FontAwesomeIcon
            icon={faConnectdevelop}
            size="2x"
            style={{ marginRight: "6px" }}
          />
          Web3News
        </Link>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          {/* <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">More</a>
            <div className="navbar-dropdown">
              <a className="navbar-item">About</a>
              <a className="navbar-item">Jobs</a>
              <a className="navbar-item">Contact</a>
              <hr className="navbar-divider" />
              <a className="navbar-item">Report an issue</a>
            </div>
          </div> */}
        </div>
        <div className="navbar-item">
          <div
            id="coinmarketcap-widget-marquee"
            coins="1,1027,2010"
            currency="USD"
            theme="dark"
            transparent="true"
            show-symbol-logo="true"
          ></div>
        </div>
        <div className="navbar-end">
          {auth.isLoggedIn ? (
            <>
              <Link
                className="navbar-item"
                to={{
                  pathname: "/article/new",
                  state: { user: auth.user },
                }}
              >
                <i className="material-icons">add</i>
              </Link>
              <Link
                to={{
                  pathname: "/profile",
                  state: { user: auth.user },
                }}
                className="navbar-item"
              >
                <i className="material-icons">account_box</i>
              </Link>
              <Link
                className="navbar-item"
                to={{
                  pathname: "/reading-list",
                  state: { user: auth.user },
                }}
              >
                <i className="material-icons">chrome_reader_mode</i>
              </Link>
            </>
          ) : null}
        </div>
        <div className="navbar-item">
          {!auth.isLoggedIn ? (
            <div className="buttons">
              <Link to="/login" className="button is-light">
                Login
              </Link>
              <Link to="/register" className="button is-light">
                Register
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
