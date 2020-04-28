import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { searchLogs } from '../../store/actions/logActions.js';
import PropTypes from 'prop-types';

import logo from '../../assets/img/Logo.png';

// import NavbarSearch from './NavbarSearch';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = props => {
  const { auth, profile, location, drivers } = props;

  const links = auth.uid ? (
    <SignedInLinks profile={profile} drivers={drivers} />
  ) : (
    <SignedOutLinks />
  );

  // const text = useRef('');

  // const onChange = e => {
  //   e.preventDefault();
  //   props.searchLogs(text.current.value);
  // };

  if (location.pathname.match(/signin/) || location.pathname.match(/signup/)) {
    return null;
  }

  return (
    <nav className="green accent-4">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo center">
          <img src={logo} alt="logo" width="108" height="auto" />
        </Link>
        {links}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  searchLogs: PropTypes.func.isRequired,
  drivers: PropTypes.array
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    drivers: state.firestore.ordered.drivers
  };
};

export default withRouter(
  compose(
    connect(mapStateToProps, { searchLogs }),
    firestoreConnect([{ collection: 'drivers' }])
  )(Navbar)
);
