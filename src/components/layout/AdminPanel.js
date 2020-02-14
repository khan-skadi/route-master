import React from "react";
import { Link } from "react-router-dom";
import AdminPanelList from "./AdminPanelList";

const AdminPanel = props => {
  const { driver, log, arch } = props;

  const archsPrice = arch.archs && arch.archs.map(arch => parseInt(arch.price));
  const logsPrice = log.logs && log.logs.map(log => parseInt(log.price));

  const adminReducer = (accumulator, currentValue) =>
    Math.round(accumulator + currentValue);

  const currentActiveRoutes = logsPrice && logsPrice.reduce(adminReducer, 0);
  const finishedRoutesTotal = archsPrice && archsPrice.reduce(adminReducer, 0);

  return (
    <div
      style={{ backgroundColor: "#e0e0e0" }}
      className="hide-on-med-and-down"
    >
      <div className="row">
        <div className="col s12">
          <ul className="collection with-header">
            <li className="collection-header">
              <h4 className="center">Admin Panel</h4>
            </li>
          </ul>
        </div>

        <div className="col s12">
          <h5 className="center">Current Active Routes:</h5>
          <h5 className="center">${currentActiveRoutes}</h5>
          <hr style={{ width: "60%" }}></hr>
          <h5 className="center">Finished Routes Total:</h5>
          <h5 className="center">${finishedRoutesTotal}</h5>
          <hr style={{ width: "60%" }}></hr>
          <br />
          <h6
            className="flow-text"
            style={{ fontSize: "20px", marginLeft: "60px" }}
          >
            Available drivers:
          </h6>
        </div>

        <div className="row" style={{ width: "80%", margin: "0 auto" }}>
          <div className="col s12">
            {driver.drivers &&
              driver.drivers
                .filter(driver => driver.available === true)
                .map(driver => {
                  return (
                    <div key={driver.id}>
                      <Link to={"/drivers/" + driver.id} key={driver.id}>
                        <AdminPanelList driver={driver} />
                      </Link>
                    </div>
                  );
                })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
