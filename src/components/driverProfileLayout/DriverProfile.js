import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getDrivers } from "../../store/actions/driverActions";
import { withRouter } from "react-router";
import DriverProfileList from "./DriverProfileList";
import Preloader from "../layout/Preloader";
import PropTypes from "prop-types";

const DriverProfile = ({
  driver: { drivers, loading },
  currentId,
  getDrivers
}) => {
  useEffect(() => {
    getDrivers();

    // eslint-disable-next-line
  }, []);

  if (loading || drivers === null) {
    return <Preloader />;
  }

  const driverInfo = drivers.find(item => item.id === parseInt(currentId));

  return (
    <div className="col s12">
      <ul className="with-header">
        {!loading && drivers.length === 0 ? (
          <p className="center">Loading...</p>
        ) : (
          <DriverProfileList driver={driverInfo} />
        )}
      </ul>
    </div>
  );
};

DriverProfile.propTypes = {
  driver: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.driver_id;
  return {
    driver: state.driver,
    currentId: id
  };
};

export default withRouter(
  connect(mapStateToProps, { getDrivers })(DriverProfile)
);
