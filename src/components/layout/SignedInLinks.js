import React from "react";
import { NavLink } from "react-router-dom";
import { signOut } from "../../store/actions/authActions";
import { connect } from "react-redux";

const SignedInLinks = props => {
  // this.props.signOut() - I cant say this.props because this is a functional component. I need to pass in props as parameter in the function and then use it.
  return (
    <ul className="right">
      <li>
        <NavLink
          to="/find-routes"
          activeStyle={{
            clear: "both",
            position: "relative",
            marginTop: "600px"
          }}
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
