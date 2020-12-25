import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAtlas } from '@fortawesome/free-solid-svg-icons'

const Navbar = (...props) => {
  const auth = useSelector(state => state.authReducer);
  
  return (
    <nav>
      <div className="nav-wrapper light-blue darken-1">
        <div className="brand-logo">
          <NavLink to="/">
            <FontAwesomeIcon icon={faAtlas} />
            Web3News
          </NavLink>
        </div>

        <ul className="right hide-on-med-and-down">
          <li>
            <NavLink
              to="/profile"
              activeClassName={"waves-effect waves-light btn blue darken-5"}
            >
              <i className="material-icons">search</i>
            </NavLink>
          </li>
          {auth.isLoggedIn ? (
            <li>
              <NavLink
                to={{
                  pathname: "/article/new",
                  state: { user: auth.user },
                }}
                activeClassName={"waves-effect waves-light btn blue darken-5"}
              >
                <i className="material-icons">add</i>
              </NavLink>
            </li>
          ) : null}
          {auth.isLoggedIn ? (
            <li>
              <NavLink
                to={{
                  pathname: "/reading-list",
                  state: { user: auth.user },
                }}
                activeClassName={"waves-effect waves-light btn blue darken-5"}
              >
                <i className="material-icons">chrome_reader_mode</i>
              </NavLink>
            </li>
          ) : null}
          <li>
            <NavLink
              to="/profile"
              activeClassName={"waves-effect waves-light btn blue darken-5"}
            >
              <i className="material-icons">account_box</i>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              activeClassName={"waves-effect waves-light btn blue darken-5"}
            >
              <i className="material-icons">more_vert</i>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );

};
export default Navbar;
