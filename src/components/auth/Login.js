import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAt,
  faKey,
  faPaperPlane,
  faCheck
} from "@fortawesome/free-solid-svg-icons";

import { login } from "../../store/actions/auth";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }, history));
  };

  return (
    <div className="flex justify-center rounded-lg">
      <section className="p-8 shadow antialiased text-darkblue-400">
        <header className="">
          <h1 className="font-semibold text-xl text-center">Login</h1>
          <h2 className="mx-4 text-sm">
            and get the latest cutting edge web3 news...
              <strong>straight to your homepage</strong>
          </h2>
        </header>
        <form onSubmit={submitForm}>
          <div className="m-4">
            <div className="flex">
              <span className="m-2">
                <FontAwesomeIcon
                  icon={faAt}
                  size="1x"
                />
              </span>
              <input
                type="email"
                className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="m-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  size="1x"
                  className={email.length > 6 ? "text-darkblue-400" : "text-darkblue-700"}
                />
              </span>
            </div>
            {!email ? (
              <p className="text-sm font-light ml-8">Please enter your email</p>
            ) : null}
          </div>

          <div className="m-4">
            <div className="flex">
              <span className="m-2">
                <FontAwesomeIcon
                  icon={faKey}
                  size="1x"
                />
              </span>
              <input
                type="password"
                className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="m-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  size="1x"
                  className={password.length >= 6 ? "text-darkblue-400" : "text-darkblue-700"}
                />
              </span>
            </div>
            {password.length >= 6 ? null : (
              <p className="text-sm font-light ml-8">
                Password must be a minimum of 6 characters
              </p>
            )}
          </div>

          <div className="flex justify-end">
            <button
              className="font-bold"
              type="submit"
              name="action"
            >
              Submit
                <FontAwesomeIcon
                icon={faPaperPlane}
                size="1x"
                className="ml-2"
              />
            </button>
          </div>
          <div className="flex justify-end">
            <p className="font-light">
              Don't have an account? <Link to="/register" className="font-bold">Register</Link>
            </p>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;
