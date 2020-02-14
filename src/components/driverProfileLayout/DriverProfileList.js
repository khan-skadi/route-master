import React from "react";
import DriverItem from "./DriverItem";

const DriverProfileList = ({ driver, archItems }) => {
  return (
    <div>
      <div className="row" style={{ backgroundColor: "light-blue accent-1" }}>
        <div className="col s8">
          <span className="flow-text" style={{ fontWeight: "bold" }}>
            {" "}
            Driver > {driver.firstName} {driver.lastName}
          </span>
        </div>
        <div className="col s4 push-s1">
          <span className="flow-text" style={{ fontWeight: "bold" }}>
            Status >{" "}
            <a
              href="#!"
              className={`waves-effect waves-light btn ${
                driver.available ? "green accent-4" : "red accent-4"
              }`}
            >
              <i className="material-icons right">
                {driver.available ? "check_circle" : "clear"}
              </i>
              {driver.available ? "Available" : "En Route"}
            </a>
          </span>
        </div>
        <br />
        <br />
        <br />
        {/* Main left side */}
        <div
          className="col s4 card-panel grey lighten-3"
          style={{ padding: "0.2em 1em 1em 1em" }}
        >
          <div className="row">
            <div className="col s12 center">
              <div className="col s12">
                <img
                  style={{ borderRadius: "5px" }}
                  width="180em"
                  src={driver.url}
                  alt="profile_picture"
                />
              </div>

              <div className="col s12 center">
                <span className="flow-text">
                  {driver.firstName} {driver.lastName}
                </span>
              </div>
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
                <a href={`mailto:${driver.email}`}>{driver.email}</a>
              </span>
            </span>
          </div>
          <br />
          <div className="row">
            <span>
              <span className="grey-text">PHONE NUMBER</span>
              <br />
              <span className="flow-text">
                <a href={`callto:${driver.phoneNumber}`}>
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
                  {driver.completedRoutes || "-/-"}
                </span>
              </span>
            </span>
          </div>
        </div>

        {/* Main right side */}
        <div className="col s8">
          <div className="col s12">
            <ul className="with-header">
              <li
                className="collection-header"
                style={{ paddingBottom: "50px" }}
              >
                <h4 className="center" style={{ fontWeight: "bold" }}>
                  {driver.firstName}'s Logs
                </h4>
                <div className="col s12" style={{ marginTop: "20px" }}>
                  <div className="col s2">
                    <span
                      className="grey-text"
                      style={{
                        fontSize: "1.2em",
                        fontFamily: "League Spartan"
                      }}
                    >
                      From
                    </span>
                  </div>
                  <div className="col s2">
                    <span
                      className="grey-text"
                      style={{
                        fontSize: "1.2em",
                        fontFamily: "League Spartan"
                      }}
                    >
                      To
                    </span>
                  </div>
                  <div className="col s2">
                    <span
                      className="grey-text"
                      style={{
                        fontSize: "1.2em",
                        fontFamily: "League Spartan"
                      }}
                    >
                      Distance
                    </span>
                  </div>
                  <div className="col s2">
                    <span
                      className="grey-text"
                      style={{
                        fontSize: "1.2em",
                        fontFamily: "League Spartan"
                      }}
                    >
                      Date
                    </span>
                  </div>
                  <div className="col s2">
                    <span
                      className="grey-text"
                      style={{
                        fontSize: "1.2em",
                        fontFamily: "League Spartan"
                      }}
                    >
                      Price
                    </span>
                  </div>
                  <div className="col s2">
                    <span
                      className="grey-text"
                      style={{
                        fontSize: "1.2em",
                        fontFamily: "League Spartan"
                      }}
                    >
                      Form Issues
                    </span>
                  </div>
                </div>
              </li>
              <div>
                <ul>
                  {!archItems.length === 0 ? (
                    <p className="center">No logs to show...</p>
                  ) : (
                    archItems.map(arch => (
                      <DriverItem arch={arch} key={arch.id} />
                    ))
                  )}
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverProfileList;
