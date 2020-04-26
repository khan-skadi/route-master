import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { NavLink } from 'react-router-dom';
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
import M from 'materialize-css/dist/js/materialize';
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
    getLogsForDashboard
  } = props;

  useEffect(() => {
    async function next() {
      await getLogsForDashboard();
    }
    next();
  }, []);

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
    console.log(log);
  };

  const onArchive = log => {
    const newArchive = {
      ...log,
      date: new Date()
    };
    addArch(newArchive);
    onDelete(log);

    M.toast({ html: 'Route Archived' });
  };

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">Active Routes</h4>
      </li>
      {logs && logs.length === 0 ? (
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
            M={M}
          />
        ))
      )}
      <NavLink to="/archived-routes" className="flow-text">
        <blockquote style={{ color: 'green' }}>Archived Routes</blockquote>
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
    drivers: state.firestore.ordered.drivers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteLog: id => {
      dispatch(deleteLog(id));
    },
    setAvailableTrue: driver => {
      dispatch(setAvailableTrue(driver));
    },
    addCompletedRoute: (driver, log) => {
      dispatch(addCompletedRoute(driver, log));
    },
    addArch: arch => {
      dispatch(addArch(arch));
    },
    setCurrentLog: log => {
      dispatch(setCurrentLog(log));
    },
    getLogsForDashboard: () => dispatch(getLogsForDashboard())
  };
};

// export default compose(
//   firestoreConnect([{ collection: 'logs' }]),
//   connect(mapStateToProps, mapDispatchToProps)
// )(Logs);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(firestoreConnect([{ collection: 'logs' }])(Logs));
