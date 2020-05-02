import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Preloader from '../layout/Preloader.js';
import DriverProfileList from './DriverProfileList.js';

const DriverProfile = props => {
  const { drivers, currentId } = props;

  useEffect(() => {
    window.scrollTo(0, 0);

    // eslint-disable-next-line
  }, []);

  const driverInfo = drivers && drivers.find(driver => driver.id === currentId);

  if (!drivers) {
    return <Preloader />;
  }
  return (
    <React.Fragment>
      {drivers === null ? (
        <p className="center">Loading...</p>
      ) : (
        <DriverProfileList driver={driverInfo} />
      )}
    </React.Fragment>
  );
};

DriverProfile.propTypes = {
  drivers: PropTypes.array
};

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.driver_id;
  return {
    drivers: state.firestore.ordered.drivers,
    currentId: id
  };
};

export default withRouter(
  compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection: 'drivers' }])
  )(DriverProfile)
);
