import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addRoute } from "../../store/actions/routeActions";
import PropTypes from "prop-types";
import M from "materialize-css/dist/js/materialize.min.js";

const FindRoutesModal = ({ currentRoute }) => {
  const [locationFrom, setLocationFrom] = useState("");
  const [locationTo, setLocationTo] = useState("");
  const [distance, setDistance] = useState(false);
  const [postedOn, setPostedOn] = useState(false);
  const [postedBy, setPostedBy] = useState(false);
  const [id, setId] = useState(false);

  useEffect(() => {
    if (currentRoute) {
      setLocationFrom(currentRoute.locationFrom);
      setLocationTo(currentRoute.locationTo);
      setDistance(currentRoute.distance);
      setPostedOn(currentRoute.postedOn);
      setPostedBy(currentRoute.postedBy);
      setId(currentRoute.id);
    }
  }, [currentRoute]);

  const onSubmit = () => {
    const newRoute = {
      id: currentRoute.id,
      locationFrom,
      locationTo,
      distance,
      postedOn,
      postedBy,
      date: new Date()
    };

    addRoute(newRoute);

    M.toast({ html: "Route confirmed" });
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
            />
          </div>
        </div>

        <div className="modal-footer">
          <a
            href="#!"
            onClick={onSubmit}
            className="modal-close waves-effect blue darken-3 btn"
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
  currentRoute: PropTypes.object
};

const mapStateToProps = state => ({
  currentRoute: state.route.currentRoute
});

export default connect(mapStateToProps)(FindRoutesModal);
