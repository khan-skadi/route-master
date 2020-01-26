import React from "react";
import { connect } from "react-redux";
import profile1Photo from "../../img/profile5.jpg";
import profile2Photo from "../../img/profile2.jpg";
import profile3Photo from "../../img/profile3.jpg";
import profile4Photo from "../../img/profile4.JPG";

const AdminPanel = () => {
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

        <div className="row">
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
        </div>

        <div className="row" style={{ width: "80%", margin: "0 auto" }}>
          <ul>
            <li>
              <div className="col s12">
                <div className="card-panel grey lighten-5 z-depth-1">
                  <div className="row valign-wrapper">
                    <img
                      src={profile2Photo}
                      alt=""
                      className="circle responsive-img"
                      width="60px"
                    />
                    <div className="col s10">
                      <span className="black-text">
                        This is a square image. Add the "circle" className to it
                        to make it appear circular.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="col s12">
                <div className="card-panel grey lighten-5 z-depth-1">
                  <div className="row valign-wrapper">
                    <img
                      src={profile3Photo}
                      alt=""
                      className="circle responsive-img"
                      width="60px"
                    />
                    <div className="col s10">
                      <span className="black-text">
                        This is a square image. Add the "circle" className to it
                        to make it appear circular.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div className="col s12">
                <div className="card-panel grey lighten-5 z-depth-1">
                  <div className="row valign-wrapper">
                    <img
                      src={profile4Photo}
                      alt=""
                      className="circle responsive-img"
                      width="60px"
                    />
                    <div className="col s10">
                      <span className="black-text">
                        This is a square image. Add the "circle" class to it to
                        make it appear circular.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="col s12">
                <div className="card-panel grey lighten-5 z-depth-1">
                  <div className="row valign-wrapper">
                    <img
                      src={profile1Photo}
                      alt=""
                      className="circle responsive-img"
                      width="60px"
                    />
                    <div className="col s10">
                      <span className="black-text">
                        This is a square image. Add the "circle" class to it to
                        make it appear circular.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default connect()(AdminPanel);
