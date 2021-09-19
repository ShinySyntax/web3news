import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faConnectdevelop } from "@fortawesome/free-brands-svg-icons";

import Login from "./auth/Login";
import Modal from "./Modal";
import Register from "./auth/Register";

const Navbar = () => {
  const auth = useSelector((state) => state.authReducer);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const onShowLogin = () => {
    setShowLogin(true);
  };
  const onShowRegister = () => {
    setShowRegister(true);
  };

  return (
    <header className="flex fixed w-full px-1 py-1 h-14 bg-darkblue-800 bg-opacity-95 shadow-md z-50 justify-between items-center">
      {showLogin ? (
        <Modal show={showLogin}>
          <Login setShowModal={setShowLogin} />
        </Modal>
      ) : null}
      {showRegister ? (
        <Modal show={showRegister}>
          <Register setShowModal={setShowRegister} />
        </Modal>
      ) : null}
      <div className="">
        <Link className="flex text-darkblue-50 hover-transition" to="/">
          <FontAwesomeIcon icon={faConnectdevelop} size="2x" className="mx-2" />
          <p className="mt-1 hidden lg:flex">Web3News</p>
        </Link>
      </div>

      <div className="flex items-center">
        <div
          id="coinmarketcap-widget-marquee"
          className="hidden lg:flex"
          coins="1,1027,2010"
          currency="USD"
          theme="dark"
          transparent="true"
          show-symbol-logo="true"
        ></div>
        <div className="flex">
          {auth.isLoggedIn ? (
            <>
              <Link
                className="m-2 text-darkblue-400 hover:text-darkblue-100"
                to={{
                  pathname: "/post/new",
                  state: { user: auth.user },
                }}
              >
                <i className="material-icons hover-transition">add</i>
              </Link>
              <Link
                className="m-2 text-darkblue-400 hover:text-darkblue-100"
                to={{
                  pathname: "/reading-list",
                  state: { user: auth.user },
                }}
              >
                <i className="material-icons hover-transition">menu_book</i>
              </Link>
              <Link
                to={{
                  pathname: "/notifications",
                  state: { user: auth.user },
                }}
                className="m-2 text-darkblue-400 hover:text-darkblue-100"
              >
                <i className="material-icons hover-transition">notifications</i>
              </Link>
              <Link
                to={{
                  pathname: "/chat",
                  state: { user: auth.user },
                }}
                className="m-2 text-darkblue-400 hover:text-darkblue-100"
              >
                <i className="material-icons hover-transition">chat</i>
              </Link>
              <Link
                to={{
                  pathname: "/profile",
                  state: { user: auth.user },
                }}
                className="m-2 text-darkblue-400 hover:text-darkblue-100"
              >
                <i className="material-icons hover-transition">
                  account_circle
                </i>
              </Link>
              <Link
                className="m-2 text-darkblue-400 hover:text-darkblue-100"
                to={{
                  pathname: "/logout",
                }}
              >
                <i className="material-icons hover-transition">logout</i>
              </Link>
            </>
          ) : null}
        </div>
        {!auth.isLoggedIn ? (
          <div className="flex items-center mr-2">
            <div
              onClick={onShowLogin}
              className="text-darkblue-800 p-2 m-1 rounded bg-darkblue-300 hover:bg-darkblue-700 hover:text-darkblue-300 cursor-pointer"
            >
              Login
            </div>
            <div
              onClick={onShowRegister}
              className="text-darkblue-800 p-2 m-1 rounded bg-darkblue-300 hover:bg-darkblue-700 hover:text-darkblue-300 cursor-pointer"
            >
              Register
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
};
export default Navbar;
