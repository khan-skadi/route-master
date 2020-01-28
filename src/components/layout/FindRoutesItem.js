import React from "react";
import { connect } from "react-redux";
import { setCurrentRoute } from "../../store/actions/routeActions";
import PropTypes from "prop-types";

const FindRoutesItem = ({ route, setCurrentRoute }) => {
  return (
    <li className="collection-item">
      <div>
        <a
          href="#find-routes-modal"
          className={`modal-trigger text-accent-4 blue-text`}
          onClick={() => setCurrentRoute(route)}
        >
          Route: {route.locationFrom} - {route.locationTo}{" "}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{route.id}</span> posted by{" "}
          <span className="black-text">{route.postedBy}</span> on 01.19.2020
        </span>
        <a href="#!" className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

FindRoutesItem.propTypes = {
  route: PropTypes.object.isRequired,
  setCurrentRoute: PropTypes.func.isRequired
};

export default connect(null, { setCurrentRoute })(FindRoutesItem);
// Add button to add the route to the logs.
