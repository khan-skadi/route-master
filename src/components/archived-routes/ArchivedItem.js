import React from 'react';
import Moment from 'react-moment';

const ArchivedItem = ({ arch, onDelete }) => {
  return (
    <div>
      <li className="collection-item">
        <div>
          <a href="#archived-log-modal" className={`modal-trigger grey-text`}>
            Route: {arch.locationFrom} - {arch.locationTo}
          </a>
          <br />
          <span className="grey-text">
            <span className="black-text">ID #{arch.id}</span> last updated by{' '}
            <span className="black-text">{arch.driver}</span> on{' '}
            <Moment format="MMMM Do YYYY, h:mm:ss a">
              {arch.date.toDate()}
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
