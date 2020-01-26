// List logic for "Our Staff" section.
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const OurStaffList = ({ driver }) => {
  return (
    <ul className="list-inline">
      <li>
        <div className="col s12 m3">
          <div className="card">
            <div className="card-image">
              <img src={driver.url} height="180px" width="200px" alt="" />
              <span className="card-title">{driver.firstName}</span>
            </div>
            <div className="card-content">
              <span>HourlyRate:</span>
              <p className="flow-text">{driver.hourlyRate + "$"}</p>
              <span>License:</span>
              <p className="flow-text">{driver.license}</p>
            </div>
            <div className="card-action">
              <Link to={"/driver/" + driver.id}>
                <button className="btn btn-primary">Profile</button>
              </Link>
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
