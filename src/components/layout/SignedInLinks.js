import React, { useEffect, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';
import M from 'materialize-css/dist/js/materialize';

import Preloader from '../layout/Preloader.js';
import SearchbarDriversList from '../drivers/SearchbarDriversList';

const SignedInLinks = props => {
  const { drivers } = props;

  useEffect(() => {
    const dropdowns = document.querySelectorAll('.dropdown-trigger');
    for (let i = 0; i < dropdowns.length; i++) {
      M.Dropdown.init(dropdowns[i]);
    }
  }, []);

  return (
    <Fragment>
      <SearchbarDriversList drivers={drivers} />
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <NavLink exact to="/" activeStyle={backgroundStyle}>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/archived-routes" activeStyle={backgroundStyle}>
            Archived Routes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/drivers"
            className="dropdown-trigger"
            data-target="driversListNavbar"
            activeStyle={backgroundStyle}
          >
            Drivers<i className="material-icons right">arrow_drop_down</i>
          </NavLink>
        </li>
        <li>
          <a href="/" onClick={props.signOut}>
            Log Out
          </a>
        </li>
        {props.profile.photoURL && props.profile.photoURL === null ? (
          <Preloader />
        ) : (
          <li>
            <a
              href="#!"
              data-target="slide-out"
              className="sidenav-trigger show-on-large"
            >
              <img
                className="circle"
                src={props.profile.photoURL}
                width="42"
                height="42"
                alt=""
                style={{
                  verticalAlign: 'middle'
                }}
              />
            </a>
          </li>
        )}
      </ul>
    </Fragment>
  );
};

const backgroundStyle = { backgroundColor: 'rgba(0, 0, 0, 0.1)' };

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut(dispatch))
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
