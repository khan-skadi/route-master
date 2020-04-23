import React from 'react';

const DriverSelectOptions = props => {
  const { driver } = props;

  return (
    <option value={`${driver.firstName} ${driver.lastName}`} key={driver.id}>
      {driver.fistName} {driver.lastName}
    </option>
  );
};

export default DriverSelectOptions;
