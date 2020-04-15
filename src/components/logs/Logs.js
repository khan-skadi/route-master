import React, { Fragment, useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { NavLink } from 'react-router-dom';
import { getLogs, deleteLog } from '../../store/logActions.js';
import { setAvailableTrue } from '../../store/driverActions.js';
import M from 'materialize-css/dist/js/materialize.min.js';
import Preloader from '../layout/Preloader';
import LogItem from './LogItem';

const Logs = props => {
  const { drivers, logs, getLogs, deleteLog, setAvailableTrue } = props;

  useEffect(() => {
    getLogs();
  });

  const onDelete = log => {
    deleteLog(log.id);

    const findDriver =
      drivers &&
      drivers.find(driver =>
        driver.firstName.concat(` ${driver.lastName}`) === log.driver
          ? driver
          : false
      );
    const updatedDriver = {
      ...findDriver,
      available: true
    };
    setAvailableTrue(updatedDriver);

    M.toast({ html: 'Route Deleted' });
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
          <LogItem key={log.date} log={log} onDelete={onDelete} M={M} />
        ))
      )}
      <NavLink to="/archived-routes" className="flow-text">
        <blockquote style={{ color: 'green' }}>Archived Routes</blockquote>
      </NavLink>
    </ul>
  );
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
    }
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: 'logs' }, { collection: 'drivers' }])
)(Logs);
