import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AdminPanelList from "./AdminPanelList";

const AdminPanel = ({ driver }) => {
  return (
    <div style={{ backgroundColor: "#e0e0e0" }}>
      <div className="row">
        <div className="col s12">
          <ul className="collection with-header">
            <li className="collection-header">
              <h4 className="center">Admin Panel</h4>
            </li>
          </ul>
        </div>

        {/* <div className="row"> */}
        <div className="col s12">
          <h5 className="center">Total Bruto Income:</h5>
          <h5 className="center">$20.000</h5>
          <hr style={{ width: "60%" }}></hr>
          <h5 className="center">Total Neto Income:</h5>
          <h5 className="center">$10.000</h5>
          <hr style={{ width: "60%" }}></hr>
          <br />
          <h6
            className="flow-text"
            style={{ fontSize: "20px", marginLeft: "60px" }}
          >
            Available drivers:
          </h6>
        </div>
        {/* </div> */}

        <div className="row" style={{ width: "80%", margin: "0 auto" }}>
          <div className="col s12">
            {driver.drivers &&
              driver.drivers.map(driver => {
                return (
                  <Link to={"/driver/" + driver.id} key={driver.id}>
                    <AdminPanelList driver={driver} />
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect()(AdminPanel);
