import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const OurStaffList = ({ driver }) => {
  const truncate = string => {
    return string.length > 7 ? string.substring(0, 6) + ".." : string;
  };
  const truncateSecond = string => {
    return string.length > 15 ? string.substring(0, 16) + ".." : string;
  };

  const pStyle = {
    overflow: "hidden"
  };

  return (
    <ul className="list-inline">
      <li>
        <div className="col l4 s12 m6">
          <div className="card hoverable large">
            <div className="card-image waves-effect waves-block waves-light">
              <img src={driver.url} className="activator" alt="" />
            </div>

            <div className="card-content">
              <span
                className="card-title activator grey-text text-darken-4"
                style={{ fontWeight: "376" }}
              >
                {truncate(driver.firstName)}
                <i className="material-icons right">more_vert</i>
              </span>

              <div
                className="center center-align"
                style={{ marginTop: "15px" }}
              >
                <span className="grey-text text-lighten-1">Hourly Rate:</span>
                <br></br>
                <p>{driver.hourlyRate + "$"}</p>
                <br></br>
                <div className="divider"></div>
                <br></br>
                <span className="grey-text text-lighten-1">License:</span>
                <br></br>
                <p>{driver.license}</p>
              </div>
            </div>

            <div className="card-reveal center">
              <span
                className="card-title grey-text text-darken-4 left-align"
                style={{ fontSize: "1.4em", fontWeight: "370" }}
              >
                {driver.firstName}
                <br></br> {driver.lastName}
                <i
                  className="material-icons right"
                  style={{ marginTop: "-1em" }}
                >
                  close
                </i>
                <br></br>
                <br></br>
              </span>

              <p
                className="grey-text text-lighten-1"
                style={{ fontSize: "1.2em" }}
              >
                Availability:
              </p>
              <p>{driver.available ? "Available" : "En Route"}</p>

              <div className="divider"></div>
              <br></br>

              <p
                className="grey-text text-lighten-1"
                style={{ fontSize: "1.2em" }}
              >
                Email:
              </p>
              <a
                className="tooltipped grey-text text-darken-4"
                data-position="bottom"
                data-tooltip={driver.email}
                href={`mailto: ${driver.email}`}
              >
                {" "}
                {truncateSecond(driver.email)}
              </a>
              {/* <a className="modal-trigger" href="#driver-email-modal">
                {truncateSecond(driver.email)}
              </a> */}

              <div className="divider" style={{ marginTop: "15px" }}></div>
              <br></br>

              <p
                className="grey-text text-lighten-1"
                style={{ fontSize: "1.2em" }}
              >
                Phone:
              </p>
              <a
                className="tooltipped grey-text text-darken-4"
                data-position="bottom"
                data-tooltip={`Call +389${driver.phoneNumber.substring(1)}`}
                href={`tel: +389${driver.phoneNumber.substring(1)}`}
              >
                {driver.phoneNumber}
              </a>

              <div className="divider"></div>
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
