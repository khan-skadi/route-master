// Renders "Our Staff" section.
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { getDrivers } from "../../store/actions/driverActions";
import ProfileModalList from "./ProfileModalList";
import Preloader from "../layout/Preloader";
import "../../styles/ProfileModal.css";

const ProfileModal = ({ driver: { drivers, loading }, getDrivers }) => {
  useEffect(() => {
    getDrivers();
    // eslint-disable-next-line
  }, []);

  if (loading || drivers === null) {
    return <Preloader />;
  }

  return (
    <div>
      <div className="row">
        <div className="col s12">
          <ul className="collection with-header">
            <li className="collection-header">
              <h4 className="center">Our Staff</h4>
            </li>
          </ul>
          <div>
            {drivers &&
              drivers.map(driver => {
                return (
                  <Link to={"/driver/" + driver.id} key={driver.id}>
                    <ProfileModalList driver={driver} />
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  driver: state.driver
});

export default connect(mapStateToProps, { getDrivers })(ProfileModal);
