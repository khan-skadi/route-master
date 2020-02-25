import React from "react";
import DriverLogItem from "./DriverLogItem";
import DriverProfileLogList from "./DriverProfileLogList";
import DriverNavbar from "./DriverNavbar";

const DriverProfileList = ({ driver, archItems }) => {
  let completedCount = driver.completedRoutes.length;
  console.log(driver);
  console.log(completedCount);
  console.log(typeof completedCount);

  return (
    <div>
      <DriverNavbar driver={driver} />
      <div className="container">
        {/* Main left side - INFO */}
        <div className="row">
          <div
            className="col s4 card-panel grey lighten-3 center"
            style={{ padding: "0.7em 1em 1em 1em" }}
          >
            <div className="row">
              <img
                className="material-boxed circle"
                width="160em"
                src={driver.url}
                alt="profile_picture"
              />
            </div>
            <div className="row">
              <h5 style={{ fontWeight: "bold" }}>
                {driver.firstName} {driver.lastName}
              </h5>
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
                  <a className="black-text" href={`mailto:${driver.email}`}>
                    {driver.email}
                  </a>
                </span>
              </span>
            </div>
            <br />
            <div className="row">
              <span>
                <span className="grey-text">PHONE NUMBER</span>
                <br />
                <span className="flow-text">
                  <a
                    className="black-text"
                    href={`callto:${driver.phoneNumber}`}
                  >
                    {driver.phoneNumber}
                  </a>
                </span>
              </span>
            </div>
            <div className="row">
              <span>
                <span className="grey-text">HOURLY RATE</span>
                <br />
                <span className="flow-text">
                  <span className="flow-text">{driver.hourlyRate + "$"}</span>
                </span>
              </span>
            </div>
            <div className="row">
              <span>
                <span className="grey-text">COMPLETED ROUTES</span>
                <br />
                <span className="flow-text">
                  <span className="flow-text">
                    {driver.completedRoutes === null ? "-/-" : completedCount}
                  </span>
                </span>
              </span>
            </div>
          </div>

          {/* Main right side - LOGS */}
          <div className="col s8">
            <ul>
              <li>
                <h4 className="center" style={{ fontWeight: "bold" }}>
                  {driver.firstName}'s Logs
                </h4>
              </li>
              <div className="col s12">
                <DriverProfileLogList driver={driver} key={driver.id} />
              </div>
              {/* <ul> */}
              {/* {!archItems.length === 0 ? (
                  <p className="center">No logs to show...</p>
                ) : (
                  archItems.map(arch => (
                    <DriverLogItem arch={arch} key={arch.id} />
                  ))
                )} */}
              {/* </ul> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverProfileList;
