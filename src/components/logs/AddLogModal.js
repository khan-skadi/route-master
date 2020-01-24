import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TechSelectOptions from "../techs/TechSelectOptions";
import { addLog } from "../../store/actions/logActions";
import M from "materialize-css/dist/js/materialize.min.js";

const AddLogModal = ({ addLog }) => {
  const [message, setMessage] = useState("");
  const [tech, setTech] = useState("");
  const [attention, setAttention] = useState(false);
  const [progress, setProgress] = useState(false);

  const onSubmit = () => {
    if (message === "" || tech === "") {
      M.toast({ html: "Please describe route and enter driver" });
    } else {
      const newRoute = {
        message,
        attention,
        progress,
        tech,
        date: new Date()
      };

      addLog(newRoute);

      M.toast({ html: `Route added by ${tech}` });

      // Clear Fields
      setMessage("");
      setTech("");
      setAttention(false);
      setProgress(false);
    }
  };

  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Submit Route</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
            <label htmlFor="message" className="active">
              Route info
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={e => setTech(e.target.value)}
            >
              <option value="" disabled>
                Driver
              </option>
              <TechSelectOptions />
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
                <span>Important - Time Sensitive</span>
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
          className="modal-close waves-effect blue btn"
        >
          Submit
        </a>
      </div>
    </div>
  );
};

AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired
};

const modalStyle = {
  width: "75%",
  height: "75%"
};

export default connect(null, { addLog })(AddLogModal);
