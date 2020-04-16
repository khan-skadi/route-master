import React from 'react';
import DriverProfileTable from './DriverProfileTable';
import DriverNavbar from './DriverNavbar';
import PropTypes from 'prop-types';

const DriverProfileList = ({ driver }) => {
  let completedCount = driver.completedRoutes.length;

  return (
    <div>
      <DriverNavbar driver={driver} />
      <div className="container">
        {/* Main left side - INFO */}
        <div className="row">
          <div className="col s4"></div>
          <div className="col s8">
            <h4 className="center" style={{ fontWeight: 'bold' }}>
              {driver.firstName}'s Logs
            </h4>
          </div>
          <div
            className="col s4 card-panel grey lighten-3 center"
            style={{ padding: '0.7em 1em 1em 1em', marginTop: '15px' }}
          >
            <div className="col s12">
              <div className="col s2 push-s10">
                <a
                  href="#edit-driver-profile"
                  className="waves-effect waves-light btn-floating tooltipped grey lighten-1 modal-trigger"
                  data-position="bottom"
                  data-tooltip="Edit Driver"
                >
                  <i className="material-icons">edit</i>
                </a>
              </div>
              <div className="col s10 push-s1">
                <img
                  className="materialboxed responsive-img circle"
                  width="160em"
                  src={driver.imageUrl}
                  alt="profile_picture"
                />
              </div>
            </div>

            <div className="row">
              <div className="col s12">
                <h5 style={{ fontWeight: 'bold' }}>
                  {driver.firstName} {driver.lastName}
                </h5>
              </div>
            </div>
            <div className="row">
              <span>
                <span className="grey-text">LICENSE NUMBER</span>
                <br />
                <span className="flow-text">{driver.license}</span>
              </span>
            </div>
            <br />
            <div className="row">
              <span>
                <span className="grey-text">EMAIL/USERNAME</span>
                <br />
                <span className="flow-text">
                  <a className="black-text" href={`mailto:${driver.email}`}>
                    {driver.email}
                  </a>
                </span>
              </span>
            </div>
            <br />
            <div className="row">
              <span>
                <span className="grey-text">PHONE NUMBER</span>
                <br />
                <span className="flow-text">
                  <a
                    className="black-text"
                    href={`callto:${driver.phoneNumber}`}
                  >
                    {driver.phoneNumber}
                  </a>
                </span>
              </span>
            </div>
            <div className="row">
              <span>
                <span className="grey-text">HOURLY RATE</span>
                <br />
                <span className="flow-text">
                  <span className="flow-text">{driver.hourlyRate + '$'}</span>
                </span>
              </span>
            </div>
            <div className="row">
              <span>
                <span className="grey-text">COMPLETED ROUTES</span>
                <br />
                <span className="flow-text">
                  <span className="flow-text">
                    {driver.completedRoutes === null ? '-/-' : completedCount}
                  </span>
                </span>
              </span>
            </div>
          </div>

          {/* Main right side - LOGS */}
          <div className="col s8">
            <ul>
              <div className="col s12">
                <DriverProfileTable driver={driver} key={driver.id} />
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

DriverProfileList.propTypes = {
  driver: PropTypes.object
};

export default DriverProfileList;
