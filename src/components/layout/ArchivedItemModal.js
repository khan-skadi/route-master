import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateLog } from "../../store/actions/logActions";
import DriverSelectOptions from "../drivers/DriverSelectOptions";
import PropTypes from "prop-types";

const ArchivedLogModal = ({ current }) => {
  const [message, setMessage] = useState("");
  const [driver, setDriver] = useState("");
  const [attention, setAttention] = useState(false);
  const [progress, setProgress] = useState(false);

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
      setDriver(current.driver);
      setProgress(current.progress);
    }
  }, [current]);

  return (
    <div id="archived-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>View Archived Route</h4>
        <div className="row">
          <div className="input-field">
            <input type="text" name="message" value={message} readOnly />
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <select
              name="driver"
              value={driver}
              className="browser-default"
              readOnly
            >
              <option value="" disabled>
                Select Driver
              </option>
              <DriverSelectOptions />
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  readOnly
                />
                <span>Needs Attention</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={progress}
                  value={progress}
                  readOnly
                />
                <span>In Progress</span>
              </label>
            </p>
          </div>
        </div>
      </div>

      <div className="modal-footer">
        <a href="#!" className="modal-close waves-effect blue btn">
          Close
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "75%",
  height: "75%"
};

ArchivedLogModal.propTypes = {
  current: PropTypes.object
};

const mapStateToProps = state => ({
  current: state.log.current
});

export default connect(mapStateToProps, { updateLog })(ArchivedLogModal);
