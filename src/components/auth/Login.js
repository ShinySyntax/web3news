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
    <div className="hero is-white">
      <section className="section is-block is-relative is-small">
        <div className="container">
          <header className="has-text-centered">
            <h1 className="title has-text-weight-bold is-3 is-spaced">Login</h1>
            <h2 className="subtitle">
              and get the latest cutting edge web3 news...
              <strong>straight to your homepage</strong>
            </h2>
          </header>

          <form onSubmit={submitForm}>
            <div className="field">
              <div className="control has-icons-left has-icons-right">
                <input
                  type="email"
                  className="input is-medium"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="icon is-small is-left">
                  <FontAwesomeIcon
                    icon={faAt}
                    size="1x"
                    className={email ? "has-text-info" : ""}
                  />
                </span>
                <span className="icon is-small is-right">
                  <FontAwesomeIcon
                    icon={faCheck}
                    size="1x"
                    className={email ? "has-text-info" : ""}
                  />
                </span>
              </div>
              {!email ? (
                <p className="help is-danger">Please enter your email</p>
              ) : null}
            </div>

            <div className="field">
              <div className="control has-icons-left has-icons-right">
                <input
                  type="password"
                  className="input is-medium"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="icon is-small is-left">
                  <FontAwesomeIcon
                    icon={faKey}
                    size="1x"
                    className={password.length >= 6 ? "has-text-info" : ""}
                  />
                </span>
                <span className="icon is-small is-right">
                  <FontAwesomeIcon
                    icon={faCheck}
                    size="1x"
                    className={password.length >= 6 ? "has-text-info" : ""}
                  />
                </span>
              </div>
              {password.length >= 6 ? null : (
                <p className="help is-danger">
                  Password must be a minimum of 6 characters
                </p>
              )}
            </div>

            <div className="control">
              <button
                className="button is-medium is-fullwidth is-primary"
                type="submit"
                name="action"
              >
                Submit
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  size="1x"
                  className={
                    email && password.length > 6 ? "has-text-info" : ""
                  }
                />
              </button>
              <p className="has-text-right is-size-6">
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
