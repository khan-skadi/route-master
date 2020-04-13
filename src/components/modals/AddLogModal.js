import React, { useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { addLog } from '../../store/logActions.js';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddLogModal = (props) => {
  const [locationFrom, setLocationFrom] = useState('');
  const [locationTo, setLocationTo] = useState('');
  const [distance, setDistance] = useState(0);
  const [postedOn, setPostedOn] = useState('');
  const [postedBy, setPostedBy] = useState('');
  const [attention, setAttention] = useState(false);
  const [progress, setProgress] = useState(false);
  const [driver, setDriver] = useState('');
  const [price, setPrice] = useState(0);

  const { addLog } = props;

  // useEffect(() => {
  //   props.getDrivers();

  //   // eslint-disable-next-line
  // }, []);

  const onSubmit = () => {
    // Add Route
    const newRoute = {
      locationFrom,
      locationTo,
      distance,
      postedOn,
      postedBy,
      attention,
      progress,
      driver,
      price,
      date: new Date()
    };
    addLog(newRoute);
    // props.addLog(newRoute);
    M.toast({ html: 'Route added' });

    // Update driver available status
    // const realDriver =
    //   props.driver.drivers &&
    //   props.driver.drivers.find(driver =>
    //     newRoute.driver === driver.firstName.concat(` ${driver.lastName}`)
    //       ? driver
    //       : false
    //   );
    // const updatedDriver = {
    //   ...realDriver,
    //   available: false
    // };
    // props.updateDriver(updatedDriver);

    setLocationFrom('');
    setLocationTo('');
    setDistance(0);
    setPostedOn('');
    setPostedBy('');
    setAttention(false);
    setProgress(false);
    setDriver('');
    setPrice(0);
  };

  return (
    <div id="add-route-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <div className="row">
          <div className="col s12">
            <h4>Add Route</h4>
            <br />
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12">
            <i className="material-icons prefix">keyboard_arrow_left</i>
            <input
              type="text"
              name="locationFrom"
              value={locationFrom || ''}
              onChange={(e) => setLocationFrom(e.target.value)}
            />
            <label htmlFor="locationFrom" className="active">
              Location From
            </label>
          </div>

          <div className="input-field col s12">
            <i className="material-icons prefix">keyboard_arrow_right</i>
            <input
              type="text"
              name="locationTo"
              value={locationTo || ''}
              onChange={(e) => setLocationTo(e.target.value)}
            />
            <label htmlFor="locationTo" className="active">
              Location To
            </label>
          </div>

          <div className="input-field col s12">
            <select
              name="driver"
              value={driver || ''}
              className="browser-default"
              onChange={(e) => setDriver(e.target.value)}
            >
              <option value="" disabled>
                Select Driver
              </option>
              <option value={driver}>Skadi</option>
              <option value={driver}>Igor</option>
            </select>
          </div>

          <div className="input-field col s12">
            <i className="material-icons prefix">swap_horiz</i>
            <input
              type="text"
              name="distance"
              value={distance || 0}
              onChange={(e) => setDistance(e.target.value)}
            />
            <label htmlFor="distance" className="active">
              Distance
            </label>
          </div>

          <div className="input-field col s12">
            <i className="material-icons prefix">date_range</i>
            <input
              type="text"
              name="postedOn"
              value={postedOn || ''}
              onChange={(e) => setPostedOn(e.target.value)}
            />
            <label htmlFor="postedOn" className="active">
              Posted On
            </label>
          </div>

          <div className="input-field col s12">
            <i className="material-icons prefix">account_box</i>
            <input
              type="text"
              name="postedBy"
              value={postedBy || ''}
              onChange={(e) => setPostedBy(e.target.value)}
            />
            <label htmlFor="postedBy" className="active">
              Posted By
            </label>
          </div>

          <div className="input-field col s12">
            <i className="material-icons prefix">attach_money</i>
            <input
              type="number"
              name="price"
              value={price || ''}
              onChange={(e) => setPrice(e.target.value)}
            />
            <label htmlFor="price" className="active">
              Price
            </label>
          </div>

          <div className="input-field col s12">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Important - Time Sensitive</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={progress}
                  value={progress}
                  onChange={(e) => setProgress(!progress)}
                />
                <span>In Progress</span>
              </label>
            </p>

            <div className="modal-footer">
              <a
                href="#!"
                onClick={onSubmit}
                className="modal-close waves-effect blue darken-2 btn"
              >
                Submit
                <i className="material-icons right">send</i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const modalStyle = {
  width: '55%',
  height: '100%'
};

AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    logs: state.firestore.ordered.logs
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addLog: (log) => {
      dispatch(addLog(log));
    }
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: 'logs' }])
)(AddLogModal);
