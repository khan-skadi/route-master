import React from "react";
import { connect } from "react-redux";
import { setCurrent } from "../../store/actions/archActions";
import Moment from "react-moment";
import PropTypes from "prop-types";

const ArchivedItem = ({ arch, setCurrent }) => {
  return (
    <div>
      <li className="collection-item">
        <div>
          <a
            href="#edit-log-modal"
            className={`modal-trigger grey-text`}
            onClick={() => setCurrent(arch)}
          >
            {arch.message}
          </a>
          <br />
          <span className="grey-text">
            <span className="black-text">ID #{arch.id}</span> last updated by{" "}
            <span className="black-text">{arch.tech}</span> on{" "}
            <Moment format="MMMM Do YYYY, h:mm:ss a">{arch.date}</Moment>
          </span>
        </div>
      </li>
    </div>
  );
};

ArchivedItem.propTypes = {
  arch: PropTypes.object.isRequired,
  setCurrent: PropTypes.func.isRequired
};

export default connect(null, { setCurrent })(ArchivedItem);
