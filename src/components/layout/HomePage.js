import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getLogs } from "../../store/actions/logActions";
import { getDrivers } from "../../store/actions/driverActions";
import { getArchs } from "../../store/actions/archActions";

import AdminPanel from "./AdminPanel";
import OurStaff from "./OurStaff";
import Logs from "../logs/Logs";
import PropTypes from "prop-types";

const HomePage = props => {
  // const HomePage = ({ arch, log, driver, getLogs, getDrivers, getArchs }) => {
  const { driver, arch, log } = props;
  useEffect(() => {
    props.getLogs();
    props.getDrivers();
    props.getArchs();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col s12">
          <a
            href="#add-log-modal"
            className="waves-effect waves-light btn modal-trigger blue darken-2"
          >
            <i className="material-icons left">drive_eta</i>Create Route
          </a>{" "}
          <a
            href="#add-drivers-modal"
            className="waves-effect waves-light btn modal-trigger blue darken-2"
          >
            <i className="material-icons left">group_add</i>Add Driver
          </a>
        </div>
        <div className="col s8">
          <ul className="collection with-header">
            <li className="collection-header">
              <h4 className="center">Active Routes</h4>
            </li>
            <Logs log={log} arch={arch} />
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
  arch: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired,
  getDrivers: PropTypes.func.isRequired,
  getArchs: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  console.log(state);
  return {
    log: state.log,
    driver: state.driver,
    arch: state.arch
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getLogs: () => dispatch(getLogs(dispatch)),
    getDrivers: () => dispatch(getDrivers(dispatch)),
    getArchs: () => dispatch(getArchs(dispatch))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
