import React from "react";

const AddBtn = () => {
  return (
    <div className="fixed-action-btn">
      <a
        href="#add-log-modal"
        className="btn-floating btn-large blue darken-2 modal-trigger"
      >
        <i className="large material-icons">add</i>
      </a>
      <ul>
        <li>
          <a
            href="#tech-list-modal"
            className="btn-floating green modal-trigger"
          >
            <i className="material-icons">person</i>
          </a>
        </li>
        <li>
          <a
            href="#add-tech-modal"
            className="btn-floating teal darken-2 modal-trigger"
          >
            <i className="material-icons">person_add</i>
          </a>
        </li>
        <li>
          <a
            href="#add-driver-modal"
            className="btn-floating  blue lighten-1 modal-trigger"
          >
            <i className="material-icons">add_circle</i>
          </a>
        </li>
        <li>
          <a
            href="#driver-list-modal"
            className="btn-floating  indigo lighten-1 modal-trigger"
          >
            <i className="material-icons">check</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AddBtn;
