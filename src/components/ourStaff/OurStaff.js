import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import OurStaffList from './OurStaffList';
import Preloader from '../layout/Preloader';

const OurStaff = props => {
  const { drivers } = props;

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

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'drivers' }])
)(OurStaff);
