import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { deleteRoute } from "../../store/actions/routeActions";
import { addLog } from "../../store/actions/logActions";
import PropTypes from "prop-types";
import M from "materialize-css/dist/js/materialize.min.js";

const FindRoutesModal = ({ currentRoute, addLog, deleteRoute }) => {
  const [locationFrom, setLocationFrom] = useState("");
  const [locationTo, setLocationTo] = useState("");
  const [distance, setDistance] = useState("");
  const [postedOn, setPostedOn] = useState("");
  const [postedBy, setPostedBy] = useState("");
  const [attention, setAttention] = useState(false);
  const [progress, setProgress] = useState(false);
  const [driver, setDriver] = useState("");

  useEffect(() => {
    if (currentRoute) {
      setLocationFrom(currentRoute.locationFrom);
      setLocationTo(currentRoute.locationTo);
      setDistance(currentRoute.distance);
      setPostedOn(currentRoute.postedOn);
      setPostedBy(currentRoute.postedBy);
      setAttention(currentRoute.attention);
      setProgress(currentRoute.progress);
      setDriver(currentRoute.driver);
    }
  }, [currentRoute]);

  const onAddRoute = () => {
    const newRoute = {
      // ...currentRoute
      locationFrom,
      locationTo,
      distance,
      postedOn,
      postedBy,
      attention,
      progress,
      driver,
      date: new Date()
    };
    addLog(newRoute);
    deleteRoute(currentRoute.id);
  };

  const addRouteRoute = () => {
    onAddRoute();
    M.toast({ html: "Route added to active" });
  };

  return (
    <div id="find-routes-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>View Route</h4>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="locationFrom"
              value={locationFrom || ""}
              onChange={e => setLocationFrom(e.target.value)}
              disabled
            />
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="locationTo"
              value={locationTo || ""}
              onChange={e => setLocationTo(e.target.value)}
              disabled
            />
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="distance"
              value={distance || ""}
              onChange={e => setDistance(e.target.value)}
              disabled
            />
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="postedOn"
              value={postedOn || ""}
              onChange={e => setPostedOn(e.target.value)}
              disabled
            />
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="postedBy"
              value={postedBy || ""}
              onChange={e => setPostedBy(e.target.value)}
              disabled
            />
          </div>
        </div>

        <div className="modal-footer">
          <a
            href="#!"
            onClick={addRouteRoute}
            className="modal-close waves-effect blue darken-2 btn"
          >
            Accept Route
            <i className="material-icons right">send</i>
          </a>
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
  currentRoute: PropTypes.object,
  addLog: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  currentRoute: state.route.currentRoute
});

export default connect(mapStateToProps, { addLog, deleteRoute })(
  FindRoutesModal
);
