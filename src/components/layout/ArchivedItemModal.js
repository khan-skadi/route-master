// View Archived item
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import DriverSelectOptions from "../drivers/DriverSelectOptions";
import PropTypes from "prop-types";

const ArchivedLogModal = ({ current }) => {
  const [locationFrom, setLocationFrom] = useState("");
  const [locationTo, setLocationTo] = useState("");
  const [distance, setDistance] = useState("");
  const [postedOn, setPostedOn] = useState("");
  const [postedBy, setPostedBy] = useState("");
  const [attention, setAttention] = useState(false);
  const [progress, setProgress] = useState(false);
  const [driver, setDriver] = useState("");
  // const [message, setMessage] = useState("");
  // const [driver, setDriver] = useState("");
  // const [attention, setAttention] = useState(false);
  // const [progress, setProgress] = useState(false);
  // setMessage(current.message);
  useEffect(() => {
    if (current) {
      setAttention(current.attention);
      setDriver(current.driver);
      setProgress(current.progress);
      setLocationFrom(current.locationFrom);
      setLocationTo(current.locationTo);
      setDistance(current.distance);
      setPostedOn(current.postedOn);
      setPostedBy(current.postedBy);
    }
  }, [current]);

  return (
    <div id="archived-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>View Archived Route</h4>

        {/* <div className="row">
          <div className="input-field">
            <input type="text" name="message" value={message || ""} readOnly />
          </div>
        </div> */}

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="locationFrom"
              value={locationFrom || ""}
              readOnly
            />
            <label htmlFor="locationFrom" className="active">
              Location From
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="locationTo"
              value={locationTo || ""}
              readOnly
            />
            <label htmlFor="locationTo" className="active">
              Location To
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <select
              name="driver"
              value={driver || ""}
              className="browser-default"
              readOnly
            >
              <option value="" disabled>
                Select Driver
              </option>

              <DriverSelectOptions />
            </select>
            <label htmlFor="driver" className="active">
              Driver
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="distance"
              value={distance || ""}
              readOnly
            />
            <label htmlFor="distance" className="active">
              Distance
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="postedOn"
              value={postedOn || ""}
              readOnly
            />
            <label htmlFor="postedOn" className="active">
              Posted On
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="postedBy"
              value={postedBy || ""}
              readOnly
            />
            <label htmlFor="postedBy" className="active">
              Posted By
            </label>
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

const mapStateToProps = state => {
  return {
    current: state.arch.current
  };
};

export default connect(mapStateToProps)(ArchivedLogModal);
