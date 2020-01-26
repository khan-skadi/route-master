import React from "react";
import { connect } from "react-redux";

const AdminPanelList = ({ driver }) => {
  return (
    <div>
      <li>
        <div className="col s12">
          <div className="card-panel grey lighten-5 z-depth-1">
            <div className="row valign-wrapper">
              <img
                src={driver.url}
                alt=""
                className="circle responsive-img"
                width="60px"
              />
              <div className="col s10">
                <span className="black-text">{driver.name}</span>
                <span className="black-text">{driver.license}</span>
              </div>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};

export default connect()(AdminPanelList);
