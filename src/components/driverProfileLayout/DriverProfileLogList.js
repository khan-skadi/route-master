import React from "react";

const DriverProfileLogList = ({ driver }) => {
  return (
    <div className="col s12">
      <ul className="list-inline">
        <li>From</li>
        <li>To</li>
        <li>Distance</li>
        <li>Date</li>
        <li>Price</li>
        <li>Form Issues</li>
      </ul>
    </div>
  );
};

export default DriverProfileLogList;
