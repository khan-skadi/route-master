import React from "react";
import { connect } from "react-redux";

const DriverEmailModal = ({ driver }) => {
  return (
    <div id="driver-email-modal" className="modal">
      <div className="modal-content">
        <h4>{driver.email}</h4>
        <p>{driver.email}</p>
      </div>
      <div className="modal-footer">
        <a href="#!" className="modal-close waves-effect waves-green btn-flat">
          Close
        </a>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    driver: state.driver
  };
};

export default connect(mapStateToProps)(DriverEmailModal);
