import React from "react";
import { connect } from "react-redux";
import { deleteDriver } from "../../store/actions/driverActions";
import PropTypes from "prop-types";
import M from "materialize-css/dist/js/materialize.min.js";

const DriverItem = ({
  driver: { id, firstName, lastName, address, email },
  deleteDriver
}) => {
  const onDelete = () => {
    deleteDriver(id);
    M.toast({ html: "Driver removed" });
  };

  return (
    <li className="collection-item">
      <div className="z-depth-2" style={{ height: "60px" }}>
        <a href="#!" className={"blue-text valign-wrapper"}>
          {firstName} {lastName} {address} {email}
        </a>
        <span className="grey-text">
          <span className="black-text">ID #{id}</span> last updated by{" "}
          <span className="black-text">{firstName}</span> on{" "}
        </span>
        <a href="#!" onClick={onDelete} className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
      <br />
    </li>
  );
};

DriverItem.propTypes = {
  driver: PropTypes.object.isRequired,
  deleteDriver: PropTypes.func.isRequired
};

export default connect(null, { deleteDriver })(DriverItem);
