import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

const DriverProfileList = props => {
  const { driver } = props;
  const { match, location, history } = props;
  return (
    <div>
      <div className="row" style={{ backgroundColor: "light-blue accent-1" }}>
        <div className="col s12 z-depth-1">
          <span className="flow-text">
            {" "}
            DRIVERS > {driver.firstName} {driver.lastName}
          </span>
        </div>
        <br />
        <br />
        <br />
        {/* Main left side */}
        <div className="col s4">
          <div className="row">
            <div className="col s10 center">
              <img
                style={{ marginLeft: "80px" }}
                className="responsive-img materialboxed circle"
                width="120px"
                src={driver.url}
                alt="profile_picture"
              />
              <span className="flow-text center">
                {driver.firstName} {driver.lastName}
              </span>
            </div>
            <div className="col s2">
              <span>
                <i className="fas fa-user-edit small"></i>
                <span style={{ fontWeight: "bold" }}>EDIT</span>
              </span>
            </div>
          </div>

          <div className="row">
            <span>
              <span className="grey-text">LICENSE NUMBER</span>
              <br />
              <span className="flow-text">{driver.license}</span>
            </span>
          </div>
          <br />
          <div className="row">
            <span>
              <span className="grey-text">EMAIL/USERNAME</span>
              <br />
              <span className="flow-text">
                <a href="#!">{driver.email}</a>
              </span>
            </span>
          </div>
          <br />
          <div className="row">
            <span>
              <span className="grey-text">PHONE NUMBER</span>
              <br />
              <span className="flow-text">
                <a href="#!">{driver.phoneNumber}</a>
              </span>
            </span>
          </div>
        </div>
        {/* Main right side */}
        <div className="col s8">
          <ul className="right">
            <li>
              <img src="#!" alt="" />
            </li>
            {/* <DriverProfileButton /> */}
          </ul>
          <div className="col s12">
            <ul className="with-header">
              <li className="collection-header">
                <h4 className="center">{driver.firstName}'s Logs</h4>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// const mapStateToProps = (state, ownProps) => {
//   let id = ownProps.match.params.driver_id;
//   console.log(id);
//   return {
//     driver: state.driver.find(driver => driver.id === id)
//   };
// };

export default withRouter(connect()(DriverProfileList));
