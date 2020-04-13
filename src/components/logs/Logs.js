import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { NavLink } from 'react-router-dom';
import { addLog, getLogs } from '../../store/logActions.js';
import LogItem from './LogItem';
import Preloader from '../layout/Preloader';

const Logs = (props) => {
  const { logs, addLog, getLogs } = props;

  useEffect(() => {
    getLogs();
  });

  return (
    <div className='container'>
      <div className='row'>
        <div className='col s12'>
          {logs && logs.length === 0 ? (
            <Preloader />
          ) : (
            logs && logs.map((log) => <LogItem log={log} key={log.date} />)
          )}
          <h1>Logs</h1>
          <NavLink to='/archived-routes' className='flow-text'>
            <blockquote style={{ color: 'green' }}>Archived Routes</blockquote>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    logs: state.firestore.ordered.logs
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addLog: (log) => {
      dispatch(addLog(log));
    },
    getLogs: (id) => {
      dispatch(getLogs(id));
    }
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: 'logs' }])
)(Logs);
