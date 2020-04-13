import React from 'react';
import OurStaffList from './OurStaffList';
import Preloader from '../layout/Preloader';

const OurStaff = ({ driver }) => {
  if (driver.loading || driver.drivers === null) {
    return <Preloader />;
  }

  return (
    <div>
      <div className="row">
        <div className="col s12">
          <ul className="collection with-header">
            <li className="collection-header">
              <h4 className="center">Our Staff</h4>
            </li>
            {driver.drivers &&
              driver.drivers.map((driver) => {
                return (
                  <div key={driver.id}>
                    <OurStaffList driver={driver} />
                  </div>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OurStaff;
