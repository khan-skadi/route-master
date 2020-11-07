import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';

import logo from '../../assets/RouteMasterLogo.png';

import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = (props) => {
  const { auth, profile, location, drivers } = props;

  const links = auth.uid ? (
    <SignedInLinks profile={profile} drivers={drivers} />
  ) : (
    <SignedOutLinks />
  );

  if (location.pathname.match(/signin/) || location.pathname.match(/signup/)) {
    return null;
  }

  return (
    <nav className="green accent-4">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          <img
            src={logo}
            alt="logo"
            style={{ marginTop: '10px', marginLeft: '10px' }}
          />
        </Link>
        {links}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  drivers: PropTypes.array
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    drivers: state.firestore.ordered.drivers
  };
};

export default withRouter(
  compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection: 'drivers' }])
  )(Navbar)
);
