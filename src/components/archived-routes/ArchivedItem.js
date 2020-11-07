import React from 'react';
import Moment from 'react-moment';
import { formatTimestamp } from '../../util/formatTimestamp';

const ArchivedItem = ({ arch, onDelete, setCurrentArch }) => {
  return (
    <div>
      <li className="collection-item">
        <div>
          <a
            href="#archived-log-modal"
            className={`modal-trigger grey-text`}
            onClick={() => setCurrentArch(arch)}
          >
            Route: {arch.locationFrom} - {arch.locationTo}
          </a>
          <br />
          <span className="grey-text">
            <span className="black-text">Archive</span> last updated by{' '}
            <span className="black-text">{arch.driver}</span> on{' '}
            <Moment format="MMMM Do YYYY, h:mm:ss a">
              {formatTimestamp(arch.date)}
            </Moment>
          </span>
          <a
            href="#!"
            onClick={() => onDelete(arch.id)}
            className="secondary-content"
          >
            <i className="material-icons grey-text">delete</i>
          </a>
        </div>
      </li>
    </div>
  );
};

export default ArchivedItem;
