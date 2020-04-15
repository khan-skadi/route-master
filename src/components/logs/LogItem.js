import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const LogItem = ({ log, onDelete, onArchive, M }) => {
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
          onClick={() => onDelete(log)}
        >
          <i className="material-icons grey-text">delete</i>
        </a>
        <a
          className="tooltipped secondary-content"
          data-position="bottom"
          data-tooltip="Archive"
          href="#!"
          onClick={() => onArchive()}
        >
          <i className="material-icons grey-text">archive</i>
        </a>
      </li>
    </div>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired
};

export default LogItem;
