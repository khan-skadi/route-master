import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import M from 'materialize-css/dist/js/materialize.min.js';

const LogItem = ({ log }) => {
  const onDelete = () => {
    console.log('pressed delete log');
    M.toast({ html: 'Route Deleted' });
  };

  const onArchive = () => {
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
    console.log('pressed onArchive');
    M.toast({ html: 'Route Archived' });
  };

  return (
    <div>
      <li className="collection-item">
        <a
          className={`modal-trigger ${
            log.attention
              ? 'red-text'
              : log.progress
              ? 'green-text'
              : 'blue-text'
          }`}
          href="#edit-log-modal"
        >
          {log.locationFrom} - {log.locationTo} : {log.price + '$'}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{log.id}</span> last updated by{' '}
          <span className="black-text">
            {log.driver ? log.driver : 'Admin'}
          </span>{' '}
          on{' '}
          <Moment format="MMMM Do YYYY, h:mm:ss a">{log.date.toDate()}</Moment>
        </span>
        <a
          className="tooltipped secondary-content"
          data-position="top"
          data-tooltip="Delete"
          href="#!"
          onClick={onDelete}
        >
          <i className="material-icons grey-text">delete</i>
        </a>
        <a
          className="tooltipped secondary-content"
          data-position="bottom"
          data-tooltip="Archive"
          href="#!"
          onClick={onArchive}
        >
          <i className="material-icons grey-text">archive</i>
        </a>
      </li>
    </div>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired
};

export default connect()(LogItem);
