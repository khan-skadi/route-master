import React from "react";
import { NavLink } from "react-router-dom";
import { signOut } from "../../store/actions/authActions";
import { connect } from "react-redux";
import SearchbarDrivers from "../drivers/SearchbarDrivers";

const SignedInLinks = props => {
  const { driver } = props;

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
        <div>
          <a
            href="/"
            data-target="slide-out"
            className="sidenav-trigger show-on-large"
            style={{
              position: "relative",
              cursor: "pointer",
              display: "inline-block",
              overflow: "hidden",
              verticalAlign: "middle",
              height: "48px",
              width: "48px",
              borderRadius: "50%",
              backgroundColor: "#1976d2",
              letterSpacing: "0.5px",
              textAlign: "center",
              lineHeight: "48px",
              fontSize: "14px",
              padding: "0",
              zIndex: "1",
              color: "#fff",
              textDecoration: "none",
              outline: "0",
              border: "none",
              textTransform: "uppercase",
              boxShadow:
                "0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)",
              transition: ".3s ease-out",
              WebkitTapHighlightColor: "transparent",
              fontFamily:
                '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
              fontWeight: "normal",
              marginTop: "8px"
            }}
          >
            {props.profile.initials}
          </a>
        </div>
      </li>
    </ul>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut(dispatch))
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
