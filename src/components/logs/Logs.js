import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { NavLink } from 'react-router-dom';
import { getLogs } from '../../store/logActions.js';
import LogItem from './LogItem';
import Preloader from '../layout/Preloader';

const Logs = (props) => {
  const { logs, getLogs } = props;

  useEffect(() => {
    getLogs();
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <h1 className="center-align">Logs</h1>
          <ul className="collection with-header">
            <li className="collection-header center-align">
              <h4>Active Logs</h4>
            </li>
            {logs && logs.length === 0 ? (
              <Preloader />
            ) : (
              logs && logs.map((log) => <LogItem log={log} key={log.date} />)
            )}
            <NavLink to="/archived-routes" className="flow-text">
              <blockquote style={{ color: 'green' }}>
                Archived Routes
              </blockquote>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    logs: state.firestore.ordered.logs
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getLogs: (id) => {
      dispatch(getLogs(id));
    }
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: 'logs' }])
)(Logs);
