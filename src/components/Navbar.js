import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faConnectdevelop } from "@fortawesome/free-brands-svg-icons";

const Navbar = (...props) => {
  const auth = useSelector((state) => state.authReducer);

  return (
    <header
      className="fixed bg-darkblue-800 bg-opacity-95 shadow-sm z-50 w-full px-1 py-1 flex justify-between items-center"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="">
        <Link className="flex text-darkblue-50" to="/">
          <FontAwesomeIcon
            icon={faConnectdevelop}
            size="2x"
            className="mx-2"
          />
          <p className="flex mt-1">Web3News</p>
        </Link>
      </div>

      <div className="flex items-center">
        <div className="">
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
        <div className="">
          <div
            id="coinmarketcap-widget-marquee"
            coins="1,1027,2010"
            currency="USD"
            theme="dark"
            transparent="true"
            show-symbol-logo="true"
          ></div>
        </div>
        <div className="">
          {auth.isLoggedIn ? (
            <>
              <Link
                className="m-4 text-darkblue-400 hover:text-darkblue-100"
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
                className="m-4 text-darkblue-400 hover:text-darkblue-100"
              >
                <i className="material-icons">account_box</i>
              </Link>
              <Link
                className="m-4 text-darkblue-400 hover:text-darkblue-100"
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
        {!auth.isLoggedIn ? (
          <div className="flex items-center mr-2">
            <Link to="/login" className="text-darkblue-800 p-2 m-1 rounded bg-darkblue-300 hover:bg-darkblue-600 hover:text-darkblue-300">
              Login
              </Link>
            <Link to="/register" className="text-darkblue-800 p-2 m-1 rounded bg-darkblue-300 hover:bg-darkblue-600 hover:text-darkblue-300">
              Register
              </Link>
          </div>
        ) : null}
      </div>
    </header>
  );
};
export default Navbar;
