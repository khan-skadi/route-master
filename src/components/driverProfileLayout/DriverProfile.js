import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getDrivers } from "../../store/actions/driverActions";
import { getArchs } from "../../store/actions/archActions";
import { withRouter } from "react-router";
import DriverProfileList from "./DriverProfileList";
import Preloader from "../layout/Preloader";
import PropTypes from "prop-types";

const DriverProfile = props => {
  const { driver, arch, currentId } = props;

  useEffect(() => {
    props.getDrivers();
    props.getArchs();
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, []);

  if (
    driver.loading ||
    driver.drivers === null ||
    arch.archs === null ||
    arch.loading
  ) {
    return <Preloader />;
  }

  const driverInfo = driver.drivers.find(
    item => item.id === parseInt(currentId)
  );

  const archProps = arch.archs.filter(
    arch =>
      arch.driver === driverInfo.firstName.concat(` ${driverInfo.lastName}`)
  );

  return (
    <div className="col s12">
      <ul className="with-header">
        {!arch.loading && arch.length === 0 ? (
          <p className="center">Loading...</p>
        ) : (
          <DriverProfileList
            driver={driverInfo}
            arch={arch}
            archItems={archProps}
          />
        )}
      </ul>
    </div>
  );
};

DriverProfile.propTypes = {
  driver: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  let id = ownProps.match.params.driver_id;
  return {
    driver: state.driver,
    currentId: id,
    arch: state.arch
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getArchs: () => dispatch(getArchs(dispatch)),
    getDrivers: () => dispatch(getDrivers(dispatch))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DriverProfile)
);
