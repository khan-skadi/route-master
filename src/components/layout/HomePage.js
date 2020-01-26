import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getLogs } from "../../store/actions/logActions";
import { getDrivers } from "../../store/actions/driverActions";
import Logs from "../logs/Logs";
import AdminPanel from "./AdminPanel";
import OurStaff from "./OurStaff";
import PropTypes from "prop-types";

const HomePage = ({ log, driver, getLogs, getDrivers }) => {
  useEffect(() => {
    getLogs();
    getDrivers();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col s8">
          <ul className="collection with-header">
            <li className="collection-header">
              <h4 className="center">All Routes</h4>
            </li>
            <Logs log={log} />
          </ul>
          <div>
            <OurStaff driver={driver} />
          </div>
        </div>

        <div className="col s4">
          <AdminPanel driver={driver} />
        </div>
      </div>
    </div>
  );
};

HomePage.propTypes = {
  log: PropTypes.object.isRequired,
  driver: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired,
  getDrivers: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  log: state.log,
  driver: state.driver
});

export default connect(mapStateToProps, { getLogs, getDrivers })(HomePage);
