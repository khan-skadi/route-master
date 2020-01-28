import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getDrivers } from "../../store/actions/driverActions";
// import DriverProfileButton from "./DriverProfileButton";
import DriverProfileList from "./DriverProfileList";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

// const DriverProfile = ({ driver: { drivers }, getDrivers }) => {
const DriverProfile = ({ driver, getDrivers }, props) => {
  // const [id, setId] = useState(null);

  useEffect(() => {
    getDrivers();

    // eslint-disable-next-line
  }, []);

  // const { match, location, history } = props;
  // console.log(props);
  // let routeId = props.match.params.driver_id;
  // console.log(routeId);
  return (
    <div className="col s12">
      <ul className="with-header" key={driver.id}>
        {<DriverProfileList driver={driver} />}
        {/* {driver.drivers &&
          driver.drivers.map(driver => {
            return <DriverProfileList driver={driver} key={driver.id} />;
          })} */}
      </ul>
    </div>
  );
};

DriverProfile.propTypes = {
  driver: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  // let id = ownProps.match.params.driver_id;
  // console.log(ownProps);
  return {
    driver: state.driver
  };
};
//.find(driver => driver.id === id)

export default withRouter(
  connect(mapStateToProps, { getDrivers })(DriverProfile)
);
