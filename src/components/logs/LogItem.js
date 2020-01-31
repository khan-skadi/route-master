import React from "react";
import { connect } from "react-redux";
import { deleteLog, setCurrent } from "../../store/actions/logActions";
import { addArch } from "../../store/actions/archActions";
import PropTypes from "prop-types";
import Moment from "react-moment";
import M from "materialize-css/dist/js/materialize.min.js";

const LogItem = ({ log, deleteLog, setCurrent, addArch }) => {
  // const [archive, setArchive] = useState(null);
  // console.log(archive);

  const onDelete = () => {
    deleteLog(log.id);
    M.toast({ html: "Route Deleted" });
  };

  // Add the same log in archive and remove from main page
  const onArchive = () => {
    const newArchive = {
      ...log
    };
    addArch(newArchive);
    deleteLog(log.id);
  };
  // const addArchive = () => setArchive(log);

  const ArchiveOnClick = () => {
    onArchive();
    // addArchive();
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
            <span className="black-text">{log.driver}</span> on{" "}
            <Moment format="MMMM Do YYYY, h:mm:ss a">{log.date}</Moment>
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

export default connect(null, { deleteLog, setCurrent, addArch })(LogItem);
