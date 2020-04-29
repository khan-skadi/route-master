import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { setCurrentDriver } from '../../store/actions/driverActions.js';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize';

const DriverInfo = ({ driver, completedCount, setCurrentDriver }) => {
  useEffect(() => {
    const tooltips = document.querySelectorAll('.tooltipped');
    for (let i = 0; i < tooltips.length; i++) {
      M.Tooltip.init(tooltips[i]);
    }
  });

  return (
    <Fragment>
      <div className="section section-driver_image">
        <a
          href="#edit-driver-profile"
          className="btn tooltipped waves-effect waves-light modal-trigger btn-floating grey lighten-1"
          data-position="top"
          data-tooltip="Edit Driver Profile"
          onClick={() => setCurrentDriver(driver)}
        >
          <i className="material-icons">edit</i>
        </a>
        <img
          className="responsive-img circle"
          width="180em"
          src={driver.imageUrl}
          alt="driver profile"
        />
      </div>

      <div className="section section-driver_info">
        <h4>
          {driver.firstName} {driver.lastName}
        </h4>

        <div className="section">
          <p className="grey-text">LICENSE NUMBER</p>
          <p className="flow-text">{driver.license}</p>
        </div>

        <div className="section">
          <p className="grey-text">EMAIL/USERNAME</p>
          <p className="flow-text">
            <a className="black-text" href={`mailto:${driver.email}`}>
              {driver.email}
            </a>
          </p>
        </div>

        <div className="section">
          <p className="grey-text">PHONE NUMBER</p>
          <p className="flow-text">
            <a className="black-text" href={`callto:${driver.phoneNumber}`}>
              {driver.phoneNumber}
            </a>
          </p>
        </div>

        <div className="section">
          <p className="grey-text">HOURLY RATE</p>
          <p className="flow-text">{driver.hourlyRate + '$'}</p>
        </div>

        <div className="section">
          <p className="grey-text">COMPLETED ROUTES</p>
          <p className="flow-text">
            {driver.completedRoutes === null ? '-/-' : completedCount}
          </p>
        </div>
      </div>
    </Fragment>
  );
};

DriverInfo.propTypes = {
  driver: PropTypes.object.isRequired,
  setCurrentDriver: PropTypes.func.isRequired
};

export default connect(null, { setCurrentDriver })(DriverInfo);
