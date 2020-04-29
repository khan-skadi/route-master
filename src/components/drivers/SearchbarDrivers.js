import React from 'react';
import { Link } from 'react-router-dom';

const SearchbarDrivers = ({ driver }) => {
  return (
    <li>
      <Link to={`/drivers/${driver.id}`}>
        {driver.firstName} {driver.lastName}
      </Link>
    </li>
  );
};

export default SearchbarDrivers;
