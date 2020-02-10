import React from "react";
import { connect } from "react-redux";
import Moment from "react-moment";

const DriverItem = ({ arch }) => {
  const style = {
    fontWeight: "bold"
  };

  return (
    <div
      className="z-depth-2"
      style={{ marginBottom: "10px", padding: "20px" }}
    >
      <li className="collection-item">
        <div className="valign-wrapper">
          <div className="col s2">
            <a
              style={style}
              className={`modal-trigger ${
                arch.attention
                  ? "red-text"
                  : arch.progress
                  ? "green-text"
                  : "blue-text"
              }`}
              href="#archived-log-modal"
            >
              {arch.locationFrom}
            </a>
          </div>
          <div className="col s2">
            <a
              style={style}
              className={`modal-trigger ${
                arch.attention
                  ? "red-text"
                  : arch.progress
                  ? "green-text"
                  : "blue-text"
              }`}
              href="#archived-log-modal"
            >
              {arch.locationTo}
            </a>
          </div>
          <div className="col s2">
            <span style={style}>{arch.distance}</span>
          </div>
          <div className="col s2">
            <span style={style}>
              <Moment format="DD-MM-YYYY">{arch.date}</Moment>
            </span>
          </div>
          <div className="col s4 push-s2">
            <button
              className="btn waves-effect waves-light green accent-4"
              name="action"
            >
              Signed
              <i className="material-icons right">assignment_turned_in</i>
            </button>
          </div>
        </div>
      </li>
    </div>
  );
};

export default connect()(DriverItem);
