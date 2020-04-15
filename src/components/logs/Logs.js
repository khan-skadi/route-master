import React, { Fragment, useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { NavLink } from 'react-router-dom';
import { getLogs, deleteLog } from '../../store/logActions.js';
import {
  setAvailableTrue,
  addCompletedRoute
} from '../../store/driverActions.js';
import PropTypes from 'prop-types';
import Preloader from '../layout/Preloader';
import M from 'materialize-css/dist/js/materialize.min.js';
import LogItem from './LogItem';

const Logs = props => {
  const {
    drivers,
    logs,
    getLogs,
    deleteLog,
    setAvailableTrue,
    addCompletedRoute
  } = props;

  useEffect(() => {
    getLogs();
  });

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

    M.toast({ html: 'Route Deleted' });
  };

  const onArchive = arch => {
    // const newArchive = {
    //   locationFrom: log.locationFrom,
    //   locationTo: log.locationTo,
    //   distance: log.distance,
    //   postedOn: log.postedOn,
    //   postedBy: log.postedBy,
    //   attention: log.attention,
    //   progress: log.progress,
    //   driver: log.driver,
    //   price: log.price,
    //   date: new Date()
    // };

    // const updatedDriver = {
    //   ...currentDriver,
    //   available: true,
    //   completedRoutes: [...currentDriver.completedRoutes, newArchive]
    // };

    // updateDriver(updatedDriver);

    // deleteLog(log.id);
    console.log('Log archived');

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
            key={log.date}
            log={log}
            onDelete={onDelete}
            onArchive={onArchive}
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
  getLogs: PropTypes.func.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setAvailableTrue: PropTypes.func.isRequired,
  addCompletedRoute: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    logs: state.firestore.ordered.logs,
    drivers: state.firestore.ordered.drivers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getLogs: id => {
      dispatch(getLogs(id));
    },
    deleteLog: id => {
      dispatch(deleteLog(id));
    },
    setAvailableTrue: driver => {
      dispatch(setAvailableTrue(driver));
    },
    addCompletedRoute: (driver, log) => {
      dispatch(addCompletedRoute(driver, log));
    }
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: 'logs' }, { collection: 'drivers' }])
)(Logs);
