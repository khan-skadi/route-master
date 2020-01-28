import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const FindRoutesItem = ({ route }) => {
  return (
    <li className="collection-item">
      <div>
        <a href="#!">
          Route: {route.locationFrom} - {route.locationTo}{" "}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{route.id}</span> last updated by{" "}
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
  route: PropTypes.object.isRequired
};

export default connect()(FindRoutesItem);
// Add button to add the route to the logs.
