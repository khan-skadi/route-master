import React from "react";
import { withRouter } from "react-router-dom";

const AddBtn = props => {
  const { location } = props;
  if (location.pathname.match(/signin/) || location.pathname.match(/signup/)) {
    return null;
  }

  return (
    <div className="fixed-action-btn">
      <a href="#!" className="btn-floating btn-large blue darken-2">
        <i className="large material-icons">add</i>
      </a>
      <ul>
        <li>
          <a
            href="#add-drivers-modal"
            className="btn-floating green modal-trigger"
          >
            <i className="material-icons">group_add</i>
          </a>
        </li>
        <li>
          <a
            href="#add-log-modal"
            className="btn-floating teal darken-2 modal-trigger"
          >
            <i className="material-icons">drive_eta</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default withRouter(AddBtn);
