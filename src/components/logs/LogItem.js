import React from "react";
import { connect } from "react-redux";
import { deleteLog, setCurrent } from "../../store/actions/logActions";
import { addArch } from "../../store/actions/archActions";
import PropTypes from "prop-types";
import Moment from "react-moment";
import M from "materialize-css/dist/js/materialize.min.js";

const LogItem = ({ log, deleteLog, setCurrent, addArch }) => {
  const onDelete = () => {
    deleteLog(log.id);
    M.toast({ html: "Route Deleted" });
  };

  const onArchive = () => {
    const newArchive = {
      locationFrom: log.locationFrom,
      locationTo: log.locationTo,
      distance: log.distance,
      postedOn: log.postedOn,
      postedBy: log.postedBy,
      attention: log.Attention,
      progress: log.progress,
      driver: log.driver,
      date: new Date()
    };
    addArch(newArchive);
    deleteLog(log.id);
  };

  const ArchiveOnClick = () => {
    onArchive();
    M.toast({ html: "Route Archived" });
  };

  return (
    <div>
      <li className="collection-item">
        <div>
          <a
            className={`modal-trigger ${
              log.attention
                ? "red-text"
                : log.progress
                ? "green-text"
                : "blue-text"
            }`}
            href="#edit-log-modal"
            onClick={() => setCurrent(log)}
          >
            {log.locationFrom} - {log.locationTo}
          </a>
          <br />
          <span className="grey-text">
            <span className="black-text">ID #{log.id}</span> last updated by{" "}
            <span className="black-text">
              {log.driver ? log.driver : "Admin"}
            </span>{" "}
            on <Moment format="MMMM Do YYYY, h:mm:ss a">{log.date}</Moment>
          </span>
          <a href="#!" onClick={onDelete} className="secondary-content">
            <i className="material-icons grey-text">delete</i>
          </a>
          <a href="#!" onClick={ArchiveOnClick} className="secondary-content">
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

const mapDispatchToProps = dispatch => {
  return {
    deleteLog: id => dispatch(deleteLog(id)),
    setCurrent: log => dispatch(setCurrent(log)),
    addArch: arch => dispatch(addArch(arch))
  };
};

// export default connect(null, { deleteLog, setCurrent, addArch })(LogItem);
export default connect(null, mapDispatchToProps)(LogItem);
