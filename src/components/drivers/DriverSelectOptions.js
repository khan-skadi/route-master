import React from 'react';
import Preloader from '../layout/Preloader.js';

const DriverSelectOptions = (props) => {
  const { drivers } = props;

  const renderDrivers =
    drivers &&
    drivers.map((d) => (
      <option value={`${d.firstName} ${d.lastName}`} key={d.id}>
        {d.fistName} {d.lastName}
      </option>
    ));

  return { renderDrivers };
};

export default DriverSelectOptions;
