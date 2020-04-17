import React, { useEffect, Fragment } from 'react';
import M from 'materialize-css/dist/js/materialize';

const DriverInfo = ({ driver, completedCount }) => {
  useEffect(() => {
    var elems = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(elems);
  });

  return (
    <Fragment>
      <div className="section section-driver_image">
        <a
          href="#edit-driver-profile"
          className="waves-effect right waves-light btn btn-floating tooltipped grey lighten-1 modal-trigger"
          data-position="bottom"
          data-tooltip="Edit Driver"
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

export default DriverInfo;
