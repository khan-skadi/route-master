import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getDrivers } from "../../store/actions/driverActions";
import PropTypes from "prop-types";
import DriverListItem from "./DriverListItem";

const DriverListModal = ({ getDrivers, driver: { drivers, loading } }) => {
  useEffect(() => {
    getDrivers();
    // eslint-disable-next-line
  }, []);

  return (
    <div id="driver-list-modal" className="modal">
      <div className="modal-content">
        <h4>Drivers List</h4>
        <ul className="collection">
          {!loading &&
            drivers !== null &&
            drivers.map(driver => (
              <DriverListItem driver={driver} key={driver.id} />
            ))}
        </ul>
      </div>
    </div>
  );
};

DriverListModal.propTypes = {
  driver: PropTypes.object.isRequired,
  getDrivers: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  driver: state.driver
});

const mapDispatchToProps = dispatch => {
  return {
    getDrivers: () => dispatch(getDrivers(dispatch))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DriverListModal);
