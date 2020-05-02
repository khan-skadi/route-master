import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import {
  setCurrentLog,
  getLogsForDashboard
} from '../../../store/actions/logActions.js';
import {
  InstantSearch,
  SearchBox,
  Hits,
  connectHits,
  Pagination,
  Highlight,
  ClearRefinements,
  RefinementList,
  Configure
} from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch/lite';
import Hit from './Hit.js';

const searchClient = algoliasearch(
  process.env.REACT_APP_ALGOLIA_APP_ID,
  process.env.REACT_APP_ALGOLIA_SEARCH_KEY
);

const SearchLogs = () => {
  return (
    <div className="container" style={{ marginTop: '30px' }}>
      <div className="row">
        <div className="col s12">
          <ul className="collection with-header">
            <li className="collection-header">
              <h4 className="center">Search Active Routes</h4>
            </li>
            <InstantSearch indexName="logs" searchClient={searchClient}>
              <ClearRefinements />
              <RefinementList attribute="locationFrom" />
              <Configure hitsPerPage={8} />
              <RefinementList attribute="locationTo" />
              <Configure hitsPerPage={8} />
              <SearchBox
                translations={{
                  placeholder: 'Search Active Routes..'
                }}
                submit={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 18 18"
                  >
                    <g
                      fill="none"
                      fillRule="evenodd"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.67"
                      transform="translate(1 1)"
                    >
                      <circle cx="7.11" cy="7.11" r="7.11" />
                      <path d="M16 16l-3.87-3.87" />
                    </g>
                  </svg>
                }
              />
              <Hits hitComponent={Hit} />
            </InstantSearch>
          </ul>
        </div>
      </div>
    </div>
  );
};

// const Hits = connectHits(({ hits, logs }) => (
//   <ul className="collection">
//     {hits.map(hit => (
//       <div key={hit.objectID}>
//         <li className="collection-item">
//           <a className="modal-trigger green-text" href="#edit-log-modal">
//             <Highlight attribute="locationFrom" hit={hit} /> -{' '}
//             <Highlight attribute="locationTo" hit={hit} /> :{' '}
//             <Highlight attribute="price" hit={hit} />
//             {'$'}
//           </a>
//           <br />
//           <span className="grey-text">
//             Last updated by{' '}
//             <span className="black-text">
//               <Highlight attribute="driver" hit={hit} />
//             </span>{' '}
//             <Highlight attribute="date" hit={hit} />
//           </span>
//           <a
//             className="tooltipped secondary-content"
//             data-position="top"
//             data-tooltip="Delete"
//             href="#!"
//           >
//             <i className="material-icons grey-text">delete</i>
//           </a>
//           <a
//             className="tooltipped secondary-content"
//             data-position="bottom"
//             data-tooltip="Archive"
//             href="#!"
//           >
//             <i className="material-icons grey-text">archive</i>
//           </a>
//         </li>
//       </div>
//     ))}
//   </ul>
// ));

// const mapStateToProps = state => ({
//   logs: state.firestore.ordered.logs
// });

// export default connect(mapStateToProps, { setCurrentLog, getLogsForDashboard })(
//   firestoreConnect([{ collection: 'logs' }])(SearchLogs)
// );

export default SearchLogs;
