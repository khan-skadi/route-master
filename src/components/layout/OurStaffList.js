import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const OurStaffList = ({ driver }) => {
  const truncate = string => {
    return string.length > 8 ? string.substring(0, 7) + "..." : string;
  };

  return (
    <ul className="list-inline">
      <li>
        <div className="col l4 s12 m6">
          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <img src={driver.url} className="activator" alt="" />
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">
                {truncate(driver.firstName)}
                <i className="material-icons right">more_vert</i>
              </span>
              <span className="blue-text text-darken-2">HourlyRate:</span>
              <p>{driver.hourlyRate + "$"}</p>
              <span className="blue-text text-darken-2">License:</span>
              <p>{driver.license}</p>
            </div>
            {/* Open Card */}
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">
                {driver.firstName} {driver.lastName}
                <i className="material-icons right">close</i>
              </span>
              <br />
              <span className="card-title blue-text text-darken-2">
                Availability:
              </span>
              <p>{driver.available}</p>
              <span className="card-title blue-text text-darken-2">Email:</span>
              <p>{driver.email}</p>
              <span className="card-title blue-text text-darken-2">Phone:</span>
              <p>{driver.phoneNumber}</p>
            </div>
            <div className="card-action">
              <Link to={"/drivers/" + driver.id}>
                <button className="btn btn-primary blue darken-2">
                  Profile
                </button>
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

export default OurStaffList;
