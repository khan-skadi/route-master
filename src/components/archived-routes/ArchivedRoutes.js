import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { getArchs, deleteArch } from '../../store/actions/archActions.js';
import PropTypes from 'prop-types';
import Preloader from '../layout/Preloader';
import ArchivedItem from './ArchivedItem';
import M from 'materialize-css/dist/js/materialize.min.js';

const ArchivedRoutes = props => {
  const { archs, getArchs, deleteArch } = props;

  useEffect(() => {
    getArchs();
  });

  const onDelete = id => {
    deleteArch(id);
    M.toast({ html: 'Archived route deleted' });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <ul className="collection with-header">
            <li className="collection-header">
              <h4 className="center">Archived Routes</h4>
            </li>
            {archs && archs.length === 0 ? (
              <Fragment>
                <Preloader />
                <p className="center">No archives to show...</p>
              </Fragment>
            ) : (
              archs &&
              archs.map(arch => (
                <ArchivedItem arch={arch} key={arch.id} onDelete={onDelete} />
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

ArchivedRoutes.propTypes = {
  getArchs: PropTypes.func.isRequired,
  deleteArch: PropTypes.func.isRequired,
  archs: PropTypes.array
};

const mapStateToProps = state => {
  console.log(state);
  return {
    archs: state.firestore.ordered.archs
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getArchs: () => {
      dispatch(getArchs());
    },
    deleteArch: id => {
      dispatch(deleteArch(id));
    }
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: 'archs' }])
)(ArchivedRoutes);
