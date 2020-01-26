// Renders "Our Staff" section.
import React from "react";
import { connect } from "react-redux";
import OurStaffList from "./OurStaffList";
import Preloader from "./Preloader";
import "../../styles/ProfileModal.css";

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
          </ul>
          <div>
            {driver.drivers &&
              driver.drivers.map(driver => {
                return <OurStaffList driver={driver} key={driver.id} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect()(OurStaff);
