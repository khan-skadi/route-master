import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateLog } from "../../store/actions/logActions";
import DriverSelectOptions from "../drivers/DriverSelectOptions";
import PropTypes from "prop-types";
import M from "materialize-css/dist/js/materialize.min.js";

const FindRoutesModal = ({ currentRoute }) => {
  console.log(currentRoute);
  const [message, setMessage] = useState("");
  const [driver, setDriver] = useState("");
  const [attention, setAttention] = useState(false);
  const [progress, setProgress] = useState(false);

  useEffect(() => {
    if (currentRoute) {
      setMessage(currentRoute.message);
      setAttention(currentRoute.attention);
      setDriver(currentRoute.driver);
      setProgress(currentRoute.progress);
    }
  }, [currentRoute]);

  return (
    <div id="find-routes-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>View Route</h4>
        <div className="row">
          <div className="col s12">1234</div>
        </div>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "75%",
  height: "75%"
};

FindRoutesModal.propTypes = {
  currentRoute: PropTypes.object
};

const mapStateToProps = state => ({
  currentRoute: state.route.currentRoute
});

export default connect(mapStateToProps)(FindRoutesModal);
