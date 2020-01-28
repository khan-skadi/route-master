import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import FindRoutesModalList from "./FindRoutesModalList";
import M from "materialize-css/dist/js/materialize.min.js";

const FindRoutesModal = ({ route, currentRoute }) => {
  return (
    <div id="find-routes-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Route Info</h4>
        <FindRoutesModalList route={route} key={route.id} />
      </div>
    </div>
  );
};

const modalStyle = {
  width: "75%",
  height: "75%"
};

FindRoutesModal.propTypes = {
  current: PropTypes.object
};

const mapStateToProps = state => {
  return {
    route: state.route,
    currentRoute: state.route.currentRoutes
  };
};

export default connect(mapStateToProps)(FindRoutesModal);
