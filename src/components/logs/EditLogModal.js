import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateLog } from "../../store/actions/logActions";
import DriverSelectOptions from "../drivers/DriverSelectOptions";
import PropTypes from "prop-types";
import M from "materialize-css/dist/js/materialize.min.js";

const EditLogModal = ({ current, updateLog }) => {
  const [locationFrom, setLocationFrom] = useState("");
  const [locationTo, setLocationTo] = useState("");
  const [distance, setDistance] = useState("");
  const [postedOn, setPostedOn] = useState("");
  const [postedBy, setPostedBy] = useState("");
  const [attention, setAttention] = useState(false);
  const [progress, setProgress] = useState(false);
  const [driver, setDriver] = useState("");
  const [price, setPrice] = useState(0);

  useEffect(() => {
    if (current) {
      setLocationFrom(current.locationFrom);
      setLocationTo(current.locationTo);
      setDistance(current.distance);
      setPostedOn(current.postedOn);
      setPostedBy(current.postedBy);
      setAttention(current.attention);
      setProgress(current.progress);
      setDriver(current.driver);
      setPrice(current.price);
    }
  }, [current]);

  const onSubmit = () => {
    const updatedLog = {
      id: current.id,
      locationFrom,
      locationTo,
      distance,
      postedOn,
      postedBy,
      attention,
      progress,
      driver,
      price,
      date: new Date()
    };

    updateLog(updatedLog);

    M.toast({ html: "Route edited" });

    setLocationFrom("");
    setLocationTo("");
    setDistance("");
    setPostedOn("");
    setPostedBy("");
    setAttention(false);
    setProgress(false);
    setDriver("");
    setPrice(0);
  };

  return (
    <div id="edit-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Edit Route</h4>
        <br />
        <div className="row">
          <div className="input-field">
            <i className="material-icons prefix">keyboard_arrow_left</i>
            <input
              type="text"
              name="locationFrom"
              value={locationFrom || ""}
              onChange={e => setLocationFrom(e.target.value)}
            />
            <label htmlFor="locationFrom" className="active">
              Location From
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <i className="material-icons prefix">keyboard_arrow_right</i>
            <input
              type="text"
              name="locationTo"
              value={locationTo || ""}
              onChange={e => setLocationTo(e.target.value)}
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
              value={driver}
              className="browser-default"
              onChange={e => setDriver(e.target.value)}
            >
              <option value="" disabled>
                Driver
              </option>
              <DriverSelectOptions />
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <i className="material-icons prefix">swap_horiz</i>
            <input
              type="text"
              name="distance"
              value={distance || ""}
              onChange={e => setDistance(e.target.value)}
            />
            <label htmlFor="distance" className="active">
              Distance
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <i className="material-icons prefix">date_range</i>
            <input
              type="text"
              name="postedOn"
              value={postedOn || ""}
              onChange={e => setPostedOn(e.target.value)}
            />
            <label htmlFor="postedOn" className="active">
              Posted On
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <i className="material-icons prefix">account_box</i>
            <input
              type="text"
              name="postedBy"
              value={postedBy || ""}
              onChange={e => setPostedBy(e.target.value)}
            />
            <label htmlFor="postedBy" className="active">
              Posted By
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <i className="material-icons prefix">attach_money</i>
            <input
              type="number"
              name="price"
              value={price || ""}
              onChange={e => setPrice(e.target.value)}
            />
            <label htmlFor="price" className="active">
              Price
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
            <div className="modal-footer">
              <a
                href="#!"
                onClick={onSubmit}
                className="modal-close waves-effect blue darken-2 btn"
              >
                Submit
                <i className="material-icons right">send</i>
              </a>
            </div>
          </div>
        </div>
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

const mapDispatchToProps = dispatch => {
  return {
    updateLog: log => dispatch(updateLog(log))
  };
};

// export default connect(mapStateToProps, { updateLog })(EditLogModal);
export default connect(mapStateToProps, mapDispatchToProps)(EditLogModal);
