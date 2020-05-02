import React, { useEffect, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import {
  deleteLog,
  setCurrentLog,
  getLogsForDashboard
} from '../../store/actions/logActions.js';
import {
  setAvailableTrue,
  addCompletedRoute
} from '../../store/actions/driverActions.js';
import { addArch } from '../../store/actions/archActions.js';
import PropTypes from 'prop-types';

import Preloader from '../layout/Preloader';
import LogItem from './LogItem';

const Logs = props => {
  const {
    drivers,
    logs,
    deleteLog,
    setAvailableTrue,
    addCompletedRoute,
    addArch,
    setCurrentLog,
    loading,
    getLogsForDashboard
  } = props;

  useEffect(() => {
    async function next() {
      await getLogsForDashboard();
    }
    next();

    if (loading) {
      next();
    }
  }, [loading, getLogsForDashboard]);

  const onDelete = log => {
    const findDriver =
      drivers &&
      drivers.find(driver =>
        driver.firstName.concat(` ${driver.lastName}`) === log.driver
          ? driver
          : false
      );
    const updatedDriver = {
      ...findDriver,
      available: true,
      completedRoutes: [...findDriver.completedRoutes, log]
    };

    setAvailableTrue(updatedDriver);
    addCompletedRoute(updatedDriver, log);
    deleteLog(log.id);
  };

  const onArchive = log => {
    const newArchive = {
      ...log,
      date: new Date()
    };
    addArch(newArchive);
    onDelete(log);
  };

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">Active Routes</h4>
      </li>
      {!loading && logs && logs.length === 0 ? (
        <Fragment>
          <Preloader />
          <p className="flow-text center-align">No logs available..</p>
        </Fragment>
      ) : (
        logs &&
        logs.map(log => (
          <LogItem
            key={log.id}
            log={log}
            onDelete={onDelete}
            onArchive={onArchive}
            setCurrentLog={setCurrentLog}
          />
        ))
      )}
      <NavLink to="/archived-routes" className="flow-text">
        <blockquote style={{ color: '#00c853', borderLeftColor: '#1976d2' }}>
          Archived Routes
        </blockquote>
      </NavLink>
    </ul>
  );
};

Logs.propTypes = {
  logs: PropTypes.array,
  drivers: PropTypes.array,
  deleteLog: PropTypes.func.isRequired,
  setAvailableTrue: PropTypes.func.isRequired,
  addCompletedRoute: PropTypes.func.isRequired,
  addArch: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    logs: state.log.logs,
    loading: state.async.loading,
    drivers: state.firestore.ordered.drivers
  };
};

const actions = {
  deleteLog,
  setAvailableTrue,
  addCompletedRoute,
  addArch,
  setCurrentLog,
  getLogsForDashboard
};

export default connect(
  mapStateToProps,
  actions
)(firestoreConnect([{ collection: 'logs' }])(Logs));
