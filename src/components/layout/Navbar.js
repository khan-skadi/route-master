import React, { useRef } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { searchLogs } from "../../store/actions/logActions";
import NavbarSearch from "./NavbarSearch";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import PropTypes from "prop-types";
import logo from "../../img/Logo.png";

export const SearchBar = props => {
  const { auth, profile, driver, location } = props;

  const links = auth.uid ? (
    <SignedInLinks profile={profile} driver={driver} />
  ) : (
    <SignedOutLinks />
  );

  const text = useRef("");

  const onChange = e => {
    props.searchLogs(text.current.value);
  };

  if (location.pathname.match(/signin/) || location.pathname.match(/signup/)) {
    return null;
  }

  return (
    <nav className="green accent-4">
      <div className="nav-wrapper">
        <form className="left hide-on-med-and-down">
          <div className="input-field">
            <NavbarSearch onChange={onChange} text={text} />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>

        <Link to="/" className="brand-logo center">
          <img src={logo} alt="logo" width="108" height="auto" />
        </Link>
        {links}
      </div>
    </nav>
  );
};

SearchBar.propTypes = {
  searchLogs: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    driver: state.driver.drivers
  };
};

export default withRouter(connect(mapStateToProps, { searchLogs })(SearchBar));
