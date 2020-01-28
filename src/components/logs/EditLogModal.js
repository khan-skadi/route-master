import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateLog } from "../../store/actions/logActions";
import DriverSelectOptions from "../drivers/DriverSelectOptions";
import PropTypes from "prop-types";
import M from "materialize-css/dist/js/materialize.min.js";

const EditLogModal = ({ current, updateLog }) => {
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

  const onSubmit = () => {
    if (message === "" || driver === "") {
      M.toast({ html: "Please submit a message and a driver" });
    } else {
      const updLog = {
        id: current.id,
        message,
        attention,
        progress,
        driver,
        date: new Date()
      };

      updateLog(updLog);
      M.toast({ html: `Route updated by ${driver}` });

      // Clear Fields
      setMessage("");
      setDriver("");
      setAttention(false);
      setProgress(false);
    }
  };

  return (
    <div id="edit-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Edit Route</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message || ""}
              onChange={e => setMessage(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <select
              name="driver"
              value={driver || ""}
              className="browser-default"
              onChange={e => setDriver(e.target.value)}
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
                  onChange={e => setAttention(!attention)}
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
                  onChange={e => setProgress(!progress)}
                />
                <span>In Progress</span>
              </label>
            </p>
          </div>
        </div>
      </div>

      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect blue darken-3 btn"
        >
          Submit
          <i className="material-icons right">send</i>
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "75%",
  height: "75%"
};

EditLogModal.propTypes = {
  current: PropTypes.object,
  updateLog: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  current: state.log.current
});

export default connect(mapStateToProps, { updateLog })(EditLogModal);
