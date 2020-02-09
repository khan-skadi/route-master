import React, { useRef } from "react";
import { connect } from "react-redux";
import { searchLogs } from "../../store/actions/logActions";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import PropTypes from "prop-types";
import logo from "../../img/Logo.png";

export const SearchBar = props => {
  const { auth, profile, driver } = props;

  const links = auth.uid ? (
    <SignedInLinks profile={profile} driver={driver} />
  ) : (
    <SignedOutLinks />
  );

  const text = useRef("");

  const onChange = e => {
    props.searchLogs(text.current.value);
  };

  return (
    <nav style={{ marginBottom: "30px" }} className="green accent-4">
      <div className="nav-wrapper">
        <form className="left hide-on-med-and-down">
          <div className="input-field">
            <input
              id="search"
              type="search"
              placeholder="Search.."
              ref={text}
              onChange={onChange}
            />
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
  console.log(state.auth);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    driver: state.driver.drivers
  };
};

export default connect(mapStateToProps, { searchLogs })(SearchBar);
