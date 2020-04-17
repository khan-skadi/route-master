import React from 'react';
import PropTypes from 'prop-types';
import DriverNavbar from './DriverNavbar.js';
import DriverInfo from './DriverInfo.js';
import DriverProfileTable from './DriverProfileTable.js';

const DriverProfileList = ({ driver }) => {
  let completedCount = driver.completedRoutes.length;

  return (
    <React.Fragment>
      <DriverNavbar driver={driver} />
      <div className="container">
        <div className="row">
          <div className="col s4"></div>
          <div className="col s8">
            <h4 className="center" style={{ fontWeight: 'bold' }}>
              {driver.firstName}'s Logs
            </h4>
          </div>

          {/* Left side - INFO */}
          <div
            className="col s4 card-panel grey lighten-3 center"
            style={{ padding: '0.7em 1em 1em 1em', marginTop: '15px' }}
          >
            <DriverInfo driver={driver} completedCount={completedCount} />
          </div>

          {/* Right side - LOGS */}
          <div className="col s8">
            <DriverProfileTable driver={driver} key={driver.id} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

DriverProfileList.propTypes = {
  driver: PropTypes.object
};

export default DriverProfileList;
