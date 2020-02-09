import React from "react";
import { connect } from "react-redux";
import { setCurrentRoute, deleteRoute } from "../../store/actions/routeActions";
import PropTypes from "prop-types";
import Moment from "react-moment";
import M from "materialize-css/dist/js/materialize.min.js";

const FindRoutesItem = ({ route, setCurrentRoute, deleteRoute }) => {
  const onDelete = () => {
    deleteRoute(route.id);
    M.toast({ html: "Route removed" });
  };

  return (
    <li className="collection-item">
      <div>
        <a
          href="#find-routes-modal"
          className={`modal-trigger text-accent-4 blue-text`}
          onClick={() => setCurrentRoute(route)}
        >
          Route: {route.locationFrom} - {route.locationTo}{" "}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{route.id}</span> posted by{" "}
          <span className="black-text">{route.postedBy}</span> on{" "}
          <Moment format="MMMM Do YYYY, h:mm:ss a">{route.date}</Moment>
        </span>
        <a href="#!" onClick={onDelete} className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

FindRoutesItem.propTypes = {
  route: PropTypes.object.isRequired,
  setCurrentRoute: PropTypes.func.isRequired,
  deleteRoute: PropTypes.func.isRequired
};

export default connect(null, { setCurrentRoute, deleteRoute })(FindRoutesItem);
