import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

import Preloader from '../layout/Preloader';
import OurStaffList from './OurStaffList';

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

const mapStateToProps = state => ({
  drivers: state.firestore.ordered.drivers
});

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'drivers' }])
)(OurStaff);
