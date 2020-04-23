// View Archived item
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import { clearCurrentArch } from '../../store/actions/archActions';
import PropTypes from 'prop-types';

import DriverSelectOptions from '../drivers/DriverSelectOptions';

const ArchivedItemModal = ({ current, drivers, clearCurrentArch }) => {
  const [locationFrom, setLocationFrom] = useState('');
  const [locationTo, setLocationTo] = useState('');
  const [distance, setDistance] = useState(0);
  const [postedOn, setPostedOn] = useState('');
  const [postedBy, setPostedBy] = useState('');
  const [attention, setAttention] = useState(false);
  const [progress, setProgress] = useState(false);
  const [driver, setDriver] = useState('');
  const [price, setPrice] = useState(0);

  useEffect(() => {
    if (current) {
      setAttention(current.attention);
      setDriver(current.driver);
      setProgress(current.progress);
      setLocationFrom(current.locationFrom);
      setLocationTo(current.locationTo);
      setDistance(current.distance);
      setPostedOn(current.postedOn);
      setPostedBy(current.postedBy);
      setPrice(current.price);
    }

    return () => clearCurrentArch();
  }, [current, clearCurrentArch]);

  return (
    <div id="archived-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>View Archived Route</h4>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="locationFrom"
              value={locationFrom || 0}
              readOnly
            />
            <label htmlFor="locationFrom" className="active">
              Location From
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="locationTo"
              value={locationTo || 0}
              readOnly
            />
            <label htmlFor="locationTo" className="active">
              Location To
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <select
              name="driver"
              value={driver || 0}
              className="browser-default"
              readOnly
            >
              <option value="" disabled>
                {driver}
              </option>
              {!isLoaded(drivers)
                ? 'Loading'
                : isEmpty(drivers)
                ? 'No available archives'
                : drivers.map(driver => (
                    <DriverSelectOptions key={driver.id} driver={driver} />
                  ))}
            </select>

            <label htmlFor="driver" className="active">
              Driver
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input type="text" name="distance" value={distance || 0} readOnly />
            <label htmlFor="distance" className="active">
              Distance
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input type="text" name="postedOn" value={postedOn || 0} readOnly />
            <label htmlFor="postedOn" className="active">
              Posted On
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input type="text" name="postedBy" value={postedBy || 0} readOnly />
            <label htmlFor="postedBy" className="active">
              Posted By
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input type="number" name="price" value={price || 0} readOnly />
            <label htmlFor="price" className="active">
              Price
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  readOnly
                />
                <span>Needs Attention</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={progress}
                  value={progress}
                  readOnly
                />
                <span>In Progress</span>
              </label>
            </p>
          </div>
        </div>
      </div>

      <div className="modal-footer">
        <a href="#!" className="modal-close waves-effect blue btn">
          Close
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: '75%',
  height: '75%'
};

ArchivedItemModal.propTypes = {
  current: PropTypes.object,
  drivers: PropTypes.array,
  clearCurrentArch: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    current: state.arch.current,
    drivers: state.firestore.ordered.drivers
  };
};

export default connect(mapStateToProps, { clearCurrentArch })(
  ArchivedItemModal
);
