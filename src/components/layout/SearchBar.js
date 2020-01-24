import React, { useRef } from "react";
import { connect } from "react-redux";
import { searchLogs } from "../../store/actions/logActions";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import PropTypes from "prop-types";
import logo from "../../img/Logo.png";

export const SearchBar = (props, { searchLogs }) => {
  const { auth, profile } = props;
  // console.log(auth);
  // This is the logic for rendering the right side of the Navbar based on whether a user is logged in or not.
  const links = auth.uid ? (
    <SignedInLinks profile={profile} />
  ) : (
    <SignedOutLinks />
  );

  const text = useRef("");

  const onChange = e => {
    searchLogs(text.current.value);
  };

  return (
    <nav style={{ marginBottom: "30px" }} className="green accent-4">
      <div className="nav-wrapper">
        {
          // Left section - Search Bar
        }
        <form className="left hide-on-med-and-down">
          <div className="input-field">
            <input
              id="search"
              type="search"
              placeholder="Search Routes.."
              ref={text}
              onChange={onChange}
              style={{ width: "600px" }}
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
        {
          // Middle section - Logo
        }
        <Link to="/" className="brand-logo center">
          <img src={logo} alt="logo" width="108" height="auto" />
        </Link>
        {
          // Right section - Social (follow) links
        }
        {links}
        {/* <ul className="right">
          <li>
            <span>
              <NavLink to="/find-routes" className="flow-text">
                Find Routes
              </NavLink>
            </span>
          </li>
          <li>
            <span>
              <NavLink to="/signup" className="flow-text">
                Sign Up
              </NavLink>
            </span>
          </li>
          <li>
            <span>
              <NavLink to="/signin" className="flow-text">
                Sign In
              </NavLink>
            </span>
          </li>
        </ul> */}
        {/* -------------------- FAIL SAFE------------------------ */}
        {/* <ul className="right hide-on-med-and-down">
          <span className="left">
            <NavLink to="/archived-routes" className="flow-text">
              Archived Routes&nbsp;&nbsp;&nbsp;
            </NavLink>
          </span>
          <span className="left">
            <NavLink to="find-routes" className="flow-text">
              Find Routes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </NavLink>
          </span> */}
        {/* -------------------- FAIL SAFE------------------------ */}

        {/* <span className="left">
            <a href="#!">follow us</a>
          </span>
          <li>
            <a href="#!">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#!">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#!">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#!">
              <i className="fab fa-youtube"></i>
            </a>
          </li> */}
        {/* </ul> */}
      </div>
    </nav>
  );
};

SearchBar.propTypes = {
  searchLogs: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps, { searchLogs })(SearchBar);
