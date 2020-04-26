import React, { Component } from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  // Hits,
  SearchBox,
  connectHits,
  Pagination,
  Highlight,
  ClearRefinements,
  RefinementList,
  Configure
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';

const searchClient = algoliasearch(
  'R5EXCHKAF7',
  'c85e3316e75c5aaecf474076b02144cb'
);

const Hits = connectHits(({ hits }) => (
  <ul className="collection">
    {hits.map(hit => (
      <div key={hit.objectID}>
        <li className="collection-item">
          <a className="modal-trigger green-text" href="#!">
            <Highlight attribute="locationFrom" hit={hit} /> -{' '}
            <Highlight attribute="locationTo" hit={hit} /> :{' '}
            <Highlight attribute="price" hit={hit} /> {+'$'}
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
        </li>
      </div>
    ))}
  </ul>
));

class TestComponent extends Component {
  render() {
    return (
      <div className="ais-InstantSearch">
        <h1>Search Logs</h1>
        <InstantSearch indexName="logs" searchClient={searchClient}>
          <div className="left-panel">
            <ClearRefinements />
            <RefinementList attribute="locationFrom" />
            <Configure hitsPerPage={8} />
            <RefinementList attribute="locationTo" />
            <Configure hitsPerPage={8} />
          </div>
          <div className="input-field">
            <SearchBox
              translations={{
                placeholder: 'Search Active Routes..'
              }}
            />
            <Hits />
            {/* <Hits hitComponent={Hit} /> */}
            <Pagination />
          </div>
        </InstantSearch>
      </div>
    );
  }
}

function Hit(props) {
  return (
    <div>
      <div className="hit-name">
        Driver: <Highlight attribute="driver" hit={props.hit} />
      </div>
      <div className="hit-aiarea">
        Location From: <Highlight attribute="locationFrom" hit={props.hit} />
      </div>
      <div className="hit-corporatefuncction">
        Location To: <Highlight attribute="locationTo" hit={props.hit} />
      </div>
      <div className="hit-description">{props.hit.postedOn}</div>
    </div>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired
};

export default TestComponent;
