import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getDrivers } from "../../store/actions/driverActions";
import DriverProfileList from "./DriverProfileList";
import DriverProfileButton from "./DriverProfileButton";
import PropTypes from "prop-types";

const DriverProfile = ({ driver, getDrivers }) => {
  useEffect(() => {
    getDrivers();

    // eslint-disable-next-line
  }, []);

  return (
    <div className="row" style={{ backgroundColor: "light-blue accent-1" }}>
      <div className="col s12 z-depth-1">
        <span className="flow-text"> DRIVERS > 4321</span>
      </div>
      <br />
      <br />
      <br />
      {/* Main left side */}
      <div className="col s4">
        <div className="row">
          <div className="col s10 center">
            <img
              style={{ marginLeft: "80px" }}
              className="responsive-img materialboxed circle"
              width="120px"
              src="https://content-static.upwork.com/blog/uploads/sites/4/2016/11/01071306/Amy-Sept-profile.jpg"
              alt="profile_picture"
            />
            <span className="flow-text center">{driver.lastName}</span>
          </div>
          <div className="col s2">
            <span>
              <i className="fas fa-user-edit small"></i>
              <span style={{ fontWeight: "bold" }}>EDIT</span>
            </span>
          </div>
        </div>

        <div className="row">
          <span>
            <span className="grey-text">LICENSE NUMBER</span>
            <br />
            <span className="flow-text">15461514</span>
          </span>
        </div>
        <br />
        <div className="row">
          <span>
            <span className="grey-text">EMAIL/USERNAME</span>
            <br />
            <span className="flow-text">
              <a href="#!">sarawilson@gmail.com</a>
            </span>
          </span>
        </div>
        <br />
        <div className="row">
          <span>
            <span className="grey-text">PHONE NUMBER</span>
            <br />
            <span className="flow-text">
              <a href="#!">+1-555-424-3535</a>
            </span>
          </span>
        </div>
      </div>
      {/* Main right side */}
      <div className="col s8">
        <ul className="right">
          <li>
            <img src="#!" alt="" />
          </li>
          <DriverProfileButton />
        </ul>
        <div className="col s12">
          <ul className="with-header">
            <li className="collection-header">
              <h4 className="center">Sara's Logs</h4>
            </li>
            {driver.drivers &&
              driver.drivers.map(driver => {
                return <DriverProfileList driver={driver} />;
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

DriverProfile.propTypes = {
  driver: PropTypes.object.isRequired,
  getDrivers: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  driver: state.driver
});

export default connect(mapStateToProps, { getDrivers })(DriverProfile);
