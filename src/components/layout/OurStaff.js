import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import OurStaffList from "./OurStaffList";
import Preloader from "./Preloader";

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
              driver.drivers.map(driver => {
                return (
                  <div key={driver.id}>
                    <Link to={"/drivers/" + driver.id}>
                      <OurStaffList driver={driver} />
                    </Link>
                  </div>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default connect()(OurStaff);
