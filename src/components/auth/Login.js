import { React, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import toast from "react-hot-toast";
import { isBrowser } from "react-device-detect";
import {
  faAt,
  faKey,
  faPaperPlane,
  faCheck,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

import { login } from "../../store/actions/auth";
import AtalaPrism from "../../assets/images/atala-prism-logo.svg";
import w3news from "../../assets/images/w3news-office.jpg";

const Login = ({ setShowModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const closeLogin = () => {
    setShowModal(false);
  };

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }, history))
      .then(() => {
        toast.success("Welcome back to web3 🚀🚀🚀");
        closeLogin();
      })
      .catch((message) => {
        toast.error(`${message} 💩`);
      });
  };

  return (
    <div className="flex flex-row max-w-2xl bg-darkblue-900 rounded-lg shadow w3n-hover">
      <div className="w-72 hidden md:flex">
        <img src={w3news} alt="Web3News" />
      </div>
      <div className="w-96 text-center p-5 justify-center text-darkblue-400">
        <div className="flex justify-end relative right-0">
          <FontAwesomeIcon
            icon={faTimesCircle}
            size="2x"
            onClick={closeLogin}
            className="cursor-pointer text-darkblue-700 hover:text-darkblue-50"
          />
        </div>
        <h1 className="font-semibold text-xl text-center">Login</h1>
        <h2 className="mx-4 text-sm">Welcome back!</h2>
        <form onSubmit={submitForm}>
          <div className="m-2">
            <div className="flex">
              <span className="m-2">
                <FontAwesomeIcon icon={faAt} size="1x" />
              </span>
              <input
                type="email"
                className="border-2 rounded px-3 py-2 w-full text-darkblue-900 focus:outline-none focus:border-blue-100 focus:shadow"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="m-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  size="1x"
                  className={
                    email.length > 6 ? "text-darkblue-400" : "text-darkblue-700"
                  }
                />
              </span>
            </div>
            {!email ? (
              <p className="text-sm font-light mx-auto">
                Please enter your email
              </p>
            ) : null}
          </div>
          <div className="m-2">
            <div className="flex">
              <span className="m-2">
                <FontAwesomeIcon icon={faKey} size="1x" />
              </span>
              <input
                type="password"
                className="border-2 rounded px-3 py-2 w-full text-darkblue-900 focus:outline-none focus:border-blue-100 focus:shadow"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="m-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  size="1x"
                  className={
                    password.length >= 6
                      ? "text-darkblue-400"
                      : "text-darkblue-700"
                  }
                />
              </span>
            </div>
            {password?.length >= 6 ? null : (
              <p className="text-sm font-light mx-auto">
                Password must be a minimum of 6 characters
              </p>
            )}
          </div>
          <div className="flex justify-end">
            <button
              className="font-bold hover:text-darkblue-50"
              type="submit"
              name="action"
            >
              Submit
              <FontAwesomeIcon icon={faPaperPlane} size="1x" className="ml-2" />
            </button>
          </div>
          <div className="flex justify-end">
            <p className="font-light">
              Don't have an account?{"  "}
              <Link to="/register" className="font-bold hover:text-darkblue-50">
                Register
              </Link>
            </p>
          </div>

          {isBrowser ? (
            <div className="flex flex-row justify-evenly mt-4">
              <div className="place-content-stretch	italic font-medium">
                Coming soon...
                <img
                  src={AtalaPrism}
                  alt="Atala PRISM"
                  height="80px"
                  width="210px"
                />
              </div>
            </div>
          ) : null}
        </form>
      </div>
    </div>
  );
};

export default Login;
