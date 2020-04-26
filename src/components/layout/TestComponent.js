import React, { Component } from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  SearchBox,
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

class TestComponent extends Component {
  render() {
    return (
      <div className="ais-InstantSearch">
        <h1>Partner Network Search</h1>
        <InstantSearch indexName="logs" searchClient={searchClient}>
          <div className="left-panel">
            <ClearRefinements />
            <h2>Industry</h2>
            <RefinementList attribute="locationFrom" />
            <Configure hitsPerPage={8} />
            <h2>AI AREA</h2>
            <RefinementList attribute="locationTo" />
            <Configure hitsPerPage={8} />
          </div>
          <div className="input-field">
            <SearchBox
              translations={{
                placeholder: 'Search Active Routes..'
              }}
            />
            <Hits hitComponent={Hit} />
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
