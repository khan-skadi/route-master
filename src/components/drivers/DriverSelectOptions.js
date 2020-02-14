import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getDrivers } from "../../store/actions/driverActions";
import PropTypes from "prop-types";

const DriverSelectOptions = ({ getDrivers, driver: { drivers, loading } }) => {
  useEffect(() => {
    getDrivers();

    // eslint-disable-next-line
  }, []);

  return (
    !loading &&
    drivers !== null &&
    drivers.map(d => (
      <option key={d.id} value={`${d.firstName} ${d.lastName}`}>
        {d.firstName} {d.lastName}
      </option>
    ))
  );
};

DriverSelectOptions.propTypes = {
  driver: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  driver: state.driver
});

const mapDispatchToProps = dispatch => {
  return {
    getDrivers: () => dispatch(getDrivers(dispatch))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DriverSelectOptions);
