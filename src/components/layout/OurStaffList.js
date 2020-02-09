import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const OurStaffList = ({ driver }) => {
  return (
    <ul className="list-inline">
      <li>
        <div className="col l3 s12 m6">
          <div className="card">
            <div className="card-image">
              <img src={driver.url} height="180px" alt="" />
              <span className="card-title">{driver.firstName}</span>
            </div>
            <div className="card-content">
              <span>HourlyRate:</span>
              <p style={{ fontSize: "1.2em" }}>{driver.hourlyRate + "$"}</p>
              <span>License:</span>
              <p style={{ fontSize: "1.2em" }}>{driver.license}</p>
            </div>
            <div className="card-action">
              <button className="btn btn-primary">Profile</button>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
};

OurStaffList.propTypes = {
  driver: PropTypes.object.isRequired
};

export default connect()(OurStaffList);
