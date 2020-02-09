import React from "react";
import { NavLink } from "react-router-dom";
import { signOut } from "../../store/actions/authActions";
import { connect } from "react-redux";
import SearchbarDrivers from "../drivers/SearchbarDrivers";

const SignedInLinks = props => {
  const { driver } = props;
  // this.props.signOut() - I cant say this.props because this is a functional component. I need to pass in props as parameter in the function and then use it.
  return (
    <ul className="right hide-on-med-and-down">
      <li>
        <a
          className="btn blue darken-2 dropdown-trigger"
          href="#!"
          data-target="dropdown2"
        >
          Drivers<i className="material-icons right">arrow_drop_down</i>
        </a>
        <ul id="dropdown2" className="dropdown-content">
          {driver &&
            driver.map(driver => (
              <SearchbarDrivers driver={driver} key={driver.id} />
            ))}
        </ul>
      </li>
      <li>
        <NavLink
          to="/archived-routes"
          activeStyle={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
        >
          Archived Routes
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/find-routes"
          activeStyle={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
        >
          Find Routes
        </NavLink>
      </li>
      <li>
        <a href="/" onClick={props.signOut}>
          Log Out
        </a>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating blue darken-2">
          {props.profile.initials}
        </NavLink>
      </li>
    </ul>
  );
};

// mapDispatchToProps returns the action creator you want to use, defined in an object as a property (function).
const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut(dispatch))
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
