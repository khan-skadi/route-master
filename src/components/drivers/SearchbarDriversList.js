import React from 'react';
import SearchbarDrivers from './SearchbarDrivers';

const SearchbarDriversList = ({ drivers }) => {
  return (
    <ul id="driversListNavbar" className="dropdown-content">
      {drivers &&
        drivers.map(driver => (
          <SearchbarDrivers driver={driver} key={driver.id} />
        ))}
    </ul>
  );
};

export default SearchbarDriversList;
