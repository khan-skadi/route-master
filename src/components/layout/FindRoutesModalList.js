import React from "react";
import { connect } from "react-redux";

const FindRoutesModalList = ({ route, currentRoute }) => {
  return (
    <div>
      <a
        href="#find-routes-modal"
        className={`modal-trigger text-accent-4 blue-text`}
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
  );
};

export default connect()(FindRoutesModalList);
