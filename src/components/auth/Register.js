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
    <div className="flex justify-center rounded-lg">
      <section className="flex p-8 shadow antialiased text-darkblue-400">
        <div className="">
          <header className="">
            <h1 className="font-semibold text-xl text-center">Register</h1>
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
                    icon={faIdBadge}
                    size="1x"
                  />
                </span>
                <input
                  type="text"
                  className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow"
                  placeholder="Username"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <span className="m-2">
                  <FontAwesomeIcon
                    icon={faCheck}
                    size="1x"
                    className={userName.length >= 5 ? "text-darkblue-400" : "text-darkblue-700"}
                  />
                </span>
              </div>
              {userName.length < 5 ? (
                <p className="text-sm font-light ml-8">Please enter your username</p>
              ) : null}
            </div>

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
                    className={email ? "text-darkblue-400" : "text-darkblue-700"}
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
                Have an account? <Link to="/login" className="font-bold">Login</Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );

};

export default Register;