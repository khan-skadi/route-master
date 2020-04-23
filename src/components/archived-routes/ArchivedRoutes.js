import React, { Fragment } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { setCurrentArch, deleteArch } from '../../store/actions/archActions.js';
import PropTypes from 'prop-types';
import Preloader from '../layout/Preloader';
import ArchivedItem from './ArchivedItem';
import M from 'materialize-css/dist/js/materialize.min.js';

const ArchivedRoutes = props => {
  const { archs, deleteArch, setCurrentArch } = props;

  const onDelete = id => {
    deleteArch(id);
    M.toast({ html: 'Archived route deleted' });
  };

  return (
    <div className="container" style={{ marginTop: '30px' }}>
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
                <ArchivedItem
                  key={arch.id}
                  arch={arch}
                  setCurrentArch={setCurrentArch}
                  onDelete={onDelete}
                />
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

ArchivedRoutes.propTypes = {
  deleteArch: PropTypes.func.isRequired,
  archs: PropTypes.array
};

const mapStateToProps = state => {
  return {
    current: state.arch.current,
    archs: state.firestore.ordered.archs
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteArch: id => {
      dispatch(deleteArch(id));
    },
    setCurrentArch: arch => dispatch(setCurrentArch(arch))
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: 'archs' }])
)(ArchivedRoutes);
