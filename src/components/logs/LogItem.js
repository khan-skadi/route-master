import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import M from 'materialize-css/dist/js/materialize';

const LogItem = ({ log, onDelete, onArchive, setCurrentLog }) => {
  useEffect(() => {
    const tooltips = document.querySelectorAll('.tooltipped');
    for (let i = 0; i < tooltips.length; i++) {
      M.Tooltip.init(tooltips[i]);
    }
  });

  return (
    <div>
      <li className="collection-item">
        <a
          href="#edit-log-modal"
          className={`tooltipped modal-trigger ${
            log.attention
              ? 'red-text'
              : log.progress
              ? 'green-text'
              : 'blue-text'
          }`}
          data-position="top"
          data-tooltip="View/Edit Log"
          onClick={() => setCurrentLog(log)}
        >
          {log.locationFrom} - {log.locationTo} : {log.price + '$'}
        </a>
        <br />
        <span className="grey-text">
          Route assigned to{' '}
          <span className="black-text">
            {log.driver ? log.driver : 'Admin'}
          </span>{' '}
          in{' '}
          <Moment format="MMMM Do YYYY, h:mm:ss a">{log.date.toDate()}</Moment>
        </span>
        <a
          className="tooltipped secondary-content"
          data-position="top"
          data-tooltip="Delete Log"
          href="#!"
          onClick={() => onDelete(log)}
        >
          <i className="material-icons grey-text">delete</i>
        </a>
        <a
          className="tooltipped secondary-content"
          data-position="bottom"
          data-tooltip="Archive Log"
          href="#!"
          onClick={() => onArchive(log)}
        >
          <i className="material-icons grey-text">archive</i>
        </a>
        <a
          href="#edit-log-modal"
          className="tooltipped modal-trigger secondary-content"
          data-position="top"
          data-tooltip="Edit Log"
          onClick={() => setCurrentLog(log)}
        >
          <i className="material-icons grey-text">edit</i>
        </a>
      </li>
    </div>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  setCurrentLog: PropTypes.func.isRequired
};

export default LogItem;
