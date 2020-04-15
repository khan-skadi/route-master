import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { getLatestArch } from '../../store/archActions.js';
import PropTypes from 'prop-types';
import Preloader from '../layout/Preloader.js';
import Moment from 'react-moment';
import AdminPanelList from './AdminPanelList';

const AdminPanel = props => {
  const [latest, setLatest] = useState(null);

  const { drivers, logs, archs, getLatestArch } = props;

  useEffect(() => {
    //   .then(date => {
    //     setLatest(date[0]);
    //   })
    setLatest(getLatestArch());

    //eslint-disable-next-line
  }, []);

  // Calculate Active and Finished Routes price
  const archsPrice = archs && archs.map(arch => parseInt(arch.price));
  const logsPrice = logs && logs.map(log => parseInt(log.price));
  const adminReducer = (accumulator, currentValue) =>
    Math.round(accumulator + currentValue);

  const currentActiveRoutes = logsPrice && logsPrice.reduce(adminReducer, 0);
  const finishedRoutesTotal = archsPrice && archsPrice.reduce(adminReducer, 0);

  // Find when was the last finished route
  const date = latest && latest.date.toDate();

  return (
    <div className="hide-on-med-and-down">
      <div className="row">
        <div className="col s12">
          <ul className="collection with-header">
            <li className="collection-header">
              <h4 className="center">Admin Panel</h4>
            </li>
          </ul>
          <div className="card blue-grey lighten-3">
            <div className="card-content white-text">
              <span
                className="card-title blue-text text-darken-2"
                style={{ fontWeight: '410' }}
              >
                Active Routes{' '}
                <i className="material-icons right">assignment_turned_in</i>
              </span>
              <p className="flow-text">{currentActiveRoutes} $</p>
              <br />
              <p className="grey-text text-lighten-4">
                Last route finished on:
              </p>
              <p className="grey-text text-lighten-4">
                <Moment format="MMMM Do YYYY, h:mm:ss a">{date}</Moment>
              </p>
            </div>
            <div
              className="card-content white-text"
              style={{ marginTop: '-15px' }}
            >
              <span
                className="card-title blue-text text-darken-2"
                style={{ fontWeight: '410' }}
              >
                Finished Routes{' '}
                <i className="material-icons right">assistant</i>
              </span>
              <p className="flow-text">{finishedRoutesTotal} $</p>
              <br />
              <p className="grey-text text-lighten-4">
                Last route ends 05.24.2019
              </p>
            </div>
          </div>
        </div>

        <div className="col s12">
          <div className="card blue-grey lighten-3">
            <div className="card-content">
              <span>
                <h5
                  className="blue-text text-darken-2"
                  style={{ fontWeight: '410' }}
                >
                  Available drivers{' '}
                  <span className="right">
                    {' '}
                    <i className="material-icons center">assignment_ind</i>
                  </span>
                </h5>
              </span>

              {drivers && drivers.length === 0 ? (
                <Preloader />
              ) : (
                drivers &&
                drivers
                  .filter(driver => driver.available === true)
                  .map(driver => {
                    return (
                      <div key={driver.id}>
                        <Link to={'/drivers/' + driver.id} key={driver.id}>
                          <AdminPanelList driver={driver} />
                        </Link>
                      </div>
                    );
                  })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AdminPanel.propTypes = {
  drivers: PropTypes.array,
  logs: PropTypes.array,
  archs: PropTypes.array,
  getLatestArch: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    drivers: state.firestore.ordered.drivers,
    logs: state.firestore.ordered.logs,
    archs: state.firestore.ordered.archs
  };
};

export default compose(
  connect(mapStateToProps, { getLatestArch }),
  firestoreConnect([
    { collection: 'drivers' },
    { collection: 'logs' },
    { collection: 'archs' }
  ])
)(AdminPanel);
