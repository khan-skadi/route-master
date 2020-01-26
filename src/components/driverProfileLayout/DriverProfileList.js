import React from "react";
import { connect } from "react-redux";

const DriverProfileList = ({ driver }) => {
  return <div>Hello {driver.firstName}</div>;
};

export default connect()(DriverProfileList);
