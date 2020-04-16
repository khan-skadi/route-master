import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { getDrivers } from '../../store/actions/driverActions.js';
import OurStaffList from './OurStaffList';
import Preloader from '../layout/Preloader';

const OurStaff = props => {
  const { drivers, getDrivers } = props;

  useEffect(() => {
    getDrivers();
  });

  // if (driver.loading || driver.drivers === null) {
  //   return <Preloader />;
  // }

  return (
    <div className="row">
      <div className="col s12">
        <ul className="collection with-header">
          <li className="collection-header">
            <h4 className="center">Our Staff</h4>
          </li>
          {drivers && drivers.length === 0 ? (
            <Preloader />
          ) : (
            drivers &&
            drivers.map(driver => (
              <OurStaffList driver={driver} key={driver.id} />
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    drivers: state.firestore.ordered.drivers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDrivers: () => {
      dispatch(getDrivers());
    }
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: 'drivers' }])
)(OurStaff);
