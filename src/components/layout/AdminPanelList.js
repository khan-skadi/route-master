import React from "react";

const AdminPanelList = ({ driver }) => {
  return (
    <ul className="hide-on-med-and-down">
      <li>
        <div className="card-panel grey lighten-5 z-depth-0.2">
          <div className="row valign-wrapper">
            <div className="col s4">
              <img src={driver.url} alt="" className="circle responsive-img" />
            </div>
            <div className="col s8">
              <span className="flow-text black-text">{driver.firstName}</span>{" "}
              <span className="flow-text black-text">{driver.lastName}</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default AdminPanelList;
