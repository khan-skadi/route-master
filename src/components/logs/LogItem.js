import React from "react";
import Moment from "react-moment";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteLog, setCurrent } from "../../store/actions/logActions";
import { addArch } from "../../store/actions/archActions";
import M from "materialize-css/dist/js/materialize.min.js";

const LogItem = ({ arch, log, deleteLog, setCurrent, addArch }) => {
  const onDelete = () => {
    deleteLog(log.id);
    M.toast({ html: "Route Deleted" });
  };

  const onArchive = () => {
    addArch(arch.id);
    // deleteLog(log.id);
  };

  return (
    <div>
      <li className="collection-item">
        <div>
          <a
            href="#edit-log-modal"
            className={`modal-trigger ${
              log.attention
                ? "red-text"
                : log.progress
                ? "green-text"
                : "blue-text"
            }`}
            onClick={() => setCurrent(log)}
          >
            {log.message}
          </a>
          <br />
          <span className="grey-text">
            <span className="black-text">ID #{log.id}</span> last updated by{" "}
            <span className="black-text">{log.tech}</span> on{" "}
            <Moment format="MMMM Do YYYY, h:mm:ss a">{log.date}</Moment>
          </span>
          <a href="#!" onClick={onDelete} className="secondary-content">
            <i className="material-icons grey-text">delete</i>
          </a>
          <a href="#!" onClick={onArchive} className="secondary-content">
            <i className="material-icons grey-text">archive</i>
          </a>
        </div>
      </li>
    </div>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired
};

export default connect(null, { deleteLog, setCurrent, addArch })(LogItem);
