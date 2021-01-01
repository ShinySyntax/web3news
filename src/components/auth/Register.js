import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIdBadge,
  faAt,
  faKey,
  faPaperPlane,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

import { register } from '../../store/actions/auth';

const Register = ({ history }) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(register({ userName, email, password }, history))
      .then(data => {
        alert(data);
      })
      .catch(err => console.error(err.message));
  };

  return (
    <div className="hero is-white">
      <section className="section is-block is-relative is-small">
        <div className="container">
          <header className="has-text-centered">
            <h1 className="title has-text-weight-bold is-3 is-spaced">
              Register your free account today.
            </h1>
            <h2 className="subtitle">
              and get the latest cutting edge web3 news... straight to your
              homepage
            </h2>
          </header>

          <form onSubmit={submitForm}>
            <div className="field">
              <div className="control has-icons-left has-icons-right">
                <input
                  type="text"
                  className="input is-medium"
                  placeholder="Username"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <span className="icon is-small is-left">
                  <FontAwesomeIcon
                    icon={faIdBadge}
                    size="1x"
                    className={userName.length >= 5 ? "has-text-info" : ""}
                  />
                </span>
                <span className="icon is-small is-right">
                  <FontAwesomeIcon
                    icon={faCheck}
                    size="1x"
                    className={userName.length >= 5 ? "has-text-info" : ""}
                  />
                </span>
              </div>
              {userName.length < 5 ? (
                <p className="help is-danger">Please enter your username</p>
              ) : null}
            </div>

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
                Already have an account? <Link to="/Login">Login</Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
  
};

export default Register;