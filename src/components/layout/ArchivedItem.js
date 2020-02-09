import React from "react";
import { connect } from "react-redux";
import { setCurrent } from "../../store/actions/archActions";
import { deleteArch } from "../../store/actions/archActions";
import Moment from "react-moment";
import PropTypes from "prop-types";
import M from "materialize-css/dist/js/materialize.min.js";

const ArchivedItem = ({ arch, setCurrent, deleteArch }) => {
  const onDelete = () => {
    deleteArch(arch.id);
    M.toast({ html: "Archived Route Deleted" });
  };

  return (
    <div>
      <li className="collection-item">
        <div>
          <a
            href="#archived-log-modal"
            className={`modal-trigger grey-text`}
            onClick={() => setCurrent(arch)}
          >
            Route: {arch.locationFrom} - {arch.locationTo}
          </a>
          <br />
          <span className="grey-text">
            <span className="black-text">ID #{arch.id}</span> last updated by{" "}
            <span className="black-text">{arch.driver}</span> on{" "}
            <Moment format="MMMM Do YYYY, h:mm:ss a">{arch.date}</Moment>
          </span>
          <a href="#!" onClick={onDelete} className="secondary-content">
            <i className="material-icons grey-text">delete</i>
          </a>
        </div>
      </li>
    </div>
  );
};

ArchivedItem.propTypes = {
  arch: PropTypes.object.isRequired,
  setCurrent: PropTypes.func.isRequired,
  deleteArch: PropTypes.func.isRequired
};

export default connect(null, { setCurrent, deleteArch })(ArchivedItem);
