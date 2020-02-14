import React from "react";

const SearchbarDrivers = ({ driver }) => {
  return (
    <div>
      <li>
        <a href={"/drivers/" + driver.id}>
          {driver.firstName} {driver.lastName}
        </a>
      </li>
      <li className="divider" tabIndex="-1"></li>
    </div>
  );
};

export default SearchbarDrivers;
