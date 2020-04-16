import React from 'react';
import { Link } from 'react-router-dom';

const SearchbarDrivers = ({ driver }) => {
  return (
    <div>
      <li>
        <Link to={`/drivers/${driver.id}`}>
          {driver.firstName} {driver.lastName}
        </Link>
      </li>
      <li className="divider" tabIndex="-1"></li>
    </div>
  );
};

export default SearchbarDrivers;
