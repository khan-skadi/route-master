import React, { Fragment } from 'react';
import { Highlight } from 'react-instantsearch-dom';

const Hit = props => {
  const { hit } = props;

  return (
    <Fragment>
      <div style={{ margin: '15px 20px' }}>
        <a className="modal-trigger green-text" href="#edit-log-modal">
          <Highlight attribute="locationFrom" hit={hit} /> -{' '}
          <Highlight attribute="locationTo" hit={hit} /> :{' '}
          <Highlight attribute="price" hit={hit} />
          {' $'}
        </a>
        <br />
        <span className="grey-text">
          Last updated by{' '}
          <span className="black-text">
            <Highlight attribute="driver" hit={hit} />
          </span>{' '}
          <Highlight attribute="date" hit={hit} />
        </span>
        <a
          className="tooltipped secondary-content"
          data-position="top"
          data-tooltip="Delete"
          href="#!"
        >
          <i className="material-icons grey-text">delete</i>
        </a>
        <a
          className="tooltipped secondary-content"
          data-position="bottom"
          data-tooltip="Archive"
          href="#!"
        >
          <i className="material-icons grey-text">archive</i>
        </a>
      </div>
    </Fragment>
  );
};

export default Hit;
