import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getDrivers } from "../../store/actions/driverActions";
import { withRouter } from "react-router";
import DriverProfileList from "./DriverProfileList";
import Preloader from "../layout/Preloader";
import PropTypes from "prop-types";

// const DriverProfile = props => {
const DriverProfile = ({ driver: { drivers, loading }, getDrivers }) => {
  useEffect(() => {
    getDrivers();

    // eslint-disable-next-line
  }, []);

  if (loading || drivers === null) {
    return <Preloader />;
  }

  return (
    <div className="col s12">
      <ul className="with-header">
        {/* {props.driver.drivers &&
          props.driver.drivers.map(driver => {
            return <DriverProfileList driver={driver} key={driver.id} />;
          })} */}
        {!loading && drivers.length === 0 ? (
          <p className="center">Loading...</p>
        ) : (
          drivers.map(driver => (
            <DriverProfileList driver={driver} key={driver.id} />
          ))
        )}
      </ul>
    </div>
  );
};

DriverProfile.propTypes = {
  driver: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  // let id = ownProps.match.params.driver_id;
  // const drivers = state.driver.drivers;
  // const driver = drivers ? drivers[id] : null;
  // console.log(id);
  // console.log(driver);
  return {
    driver: state.driver
  };
};
//.find(driver => driver.id === id)
// .filter(driver => driver.id === id)
export default withRouter(
  connect(mapStateToProps, { getDrivers })(DriverProfile)
);
