import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { register } from '../../store/actions/auth';

const Register = ({ history }) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(register({ userName, email, password }, history));
  };

  return (
    <div className="container col s12 xl12 center center-align">
      <div className="card-panel blue lighten-5 z-depth-5 center center-align">
        <form onSubmit={submitForm}>
          <h5 className="header strong">Register your free account today.</h5>
          <h6 className="light">
            and get the latest cutting edge web3 news... straight to your homepage
          </h6>
          <div className="container">
          <div className="input-field">
              <i className="material-icons prefix light-blue-text text-lighten-2">
                account_circle
              </i>
              <input
                id="account_name"
                type="text"
                className="validate"
                placeholder="Username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <label htmlFor="account_name"></label>
            </div>
            <div className="input-field">
              <i className="material-icons prefix light-blue-text text-lighten-2">
                email
              </i>
              <input
                id="email"
                type="email"
                className="validate"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="email"></label>
            </div>

            <div className="input-field">
              <i className="material-icons prefix light-blue-text text-lighten-2">
                lock
              </i>
              <input
                id="account_password"
                type="text"
                className="validate"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="account_password"></label>
            </div>
            <div className="right-align">
              <button
                className="btn blue darken-4 waves-light"
                type="submit"
                name="action"
              >
                Submit
                <i className="material-icons right">send</i>
              </button>
              <p>
                Already have an account? <Link to="/Login">Login</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;