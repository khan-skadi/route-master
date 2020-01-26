import React from "react";
import { connect } from "react-redux";

const AdminPanelList = ({ driver }) => {
  return (
    <ul>
      <li>
        <div className="card-panel grey lighten-5 z-depth-1">
          <div className="row valign-wrapper">
            <div className="col s4">
              <img
                src={driver.url}
                alt=""
                className="circle responsive-img"
                width="100px"
              />
            </div>
            <div className="col s8">
              <p className="flow-text black-text">{driver.firstName}</p>
              <p className="flow-text black-text">{driver.lastName}</p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default connect()(AdminPanelList);
