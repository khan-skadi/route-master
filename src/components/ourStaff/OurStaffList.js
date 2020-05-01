import React from 'react';
import { Link } from 'react-router-dom';
import { truncate } from '../../util/helper.js';
import PropTypes from 'prop-types';

const OurStaffList = ({ driver }) => {
  return (
    <ul className="list-inline">
      <li>
        <div className="col l3 s12 m6">
          <div className="card hoverable large">
            <div className="card-image waves-effect waves-block waves-light">
              <img src={driver.imageUrl} className="activator" alt="" />
            </div>

            <div className="card-content">
              <span
                className="card-title activator grey-text text-darken-4"
                style={{ fontWeight: '376' }}
              >
                {truncate(driver.firstName, 7)}
                <i className="material-icons right">more_vert</i>
              </span>

              <div
                className="center center-align"
                style={{ marginTop: '15px' }}
              >
                <span className="grey-text text-darken-1">Hourly Rate:</span>
                <br></br>
                <p>{driver.hourlyRate + '$'}</p>
                <br></br>
                <div className="divider"></div>
                <br></br>
                <span className="grey-text text-darken-1">Status:</span>
                <br></br>
                <p className={driver.available ? 'green-text' : 'red-text'}>
                  {driver.available ? 'Available' : 'En Route'}
                </p>
              </div>
            </div>

            <div className="card-reveal center">
              <span
                className="card-title grey-text text-darken-4 left-align"
                style={{ fontSize: '1.4em', fontWeight: '370' }}
              >
                {driver.firstName}
                <br></br> {driver.lastName}
                <i
                  className="material-icons right"
                  style={{ marginTop: '-1em' }}
                >
                  close
                </i>
                <br></br>
                <br></br>
              </span>

              <p
                className="grey-text text-darken-1"
                style={{ fontSize: '1.2em' }}
              >
                License Plate:
              </p>
              <p>{driver.license}</p>

              <div className="divider"></div>
              <br></br>

              <p
                className="grey-text text-darken-1"
                style={{ fontSize: '1.2em' }}
              >
                Email:
              </p>
              <a
                className="tooltipped grey-text text-darken-4"
                data-position="bottom"
                data-tooltip={driver.email}
                href={`mailto: ${driver.email}`}
              >
                {' '}
                {truncate(driver.email, 13)}
              </a>

              <div className="divider" style={{ marginTop: '15px' }}></div>
              <br></br>

              <p
                className="grey-text text-darken-1"
                style={{ fontSize: '1.2em' }}
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
              <Link to={'/drivers/' + driver.id}>
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
