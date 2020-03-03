import React from "react";
import { connect } from "react-redux";
import { deleteLog, setCurrent } from "../../store/actions/logActions";
import { updateDriver } from "../../store/actions/driverActions";
import { addArch } from "../../store/actions/archActions";
import PropTypes from "prop-types";
import Moment from "react-moment";
import M from "materialize-css/dist/js/materialize.min.js";

const LogItem = ({
  driver,
  log,
  deleteLog,
  updateDriver,
  setCurrent,
  addArch
}) => {
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
      attention: log.attention,
      progress: log.progress,
      driver: log.driver,
      price: log.price,
      date: new Date()
    };

    // Update driver completedRoutes
    const currentDriver = driver.drivers.find(driver =>
      newArchive.driver === driver.firstName.concat(` ${driver.lastName}`)
        ? driver
        : false
    );

    const updatedDriver = {
      ...currentDriver,
      completedRoutes: [...currentDriver.completedRoutes, newArchive]
    };

    updateDriver(updatedDriver);

    // Add Route to archives
    addArch(newArchive);
    deleteLog(log.id);
  };

  const ArchiveOnClick = e => {
    e.preventDefault();
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
            {log.locationFrom} - {log.locationTo} : {log.price + "$"}
          </a>
          <br />
          <span className="grey-text">
            <span className="black-text">ID #{log.id}</span> last updated by{" "}
            <span className="black-text">
              {log.driver ? log.driver : "Admin"}
            </span>{" "}
            on <Moment format="MMMM Do YYYY, h:mm:ss a">{log.date}</Moment>
          </span>
          <a
            className="tooltipped secondary-content"
            data-position="top"
            data-tooltip="Delete"
            href="#!"
            onClick={onDelete}
          >
            <i className="material-icons grey-text">delete</i>
          </a>
          <a
            className="tooltipped secondary-content"
            data-position="bottom"
            data-tooltip="Archive"
            href="#!"
            onClick={ArchiveOnClick}
          >
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
  setCurrent: PropTypes.func.isRequired,
  updateDriver: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    deleteLog: id => dispatch(deleteLog(id)),
    setCurrent: log => dispatch(setCurrent(log)),
    addArch: arch => dispatch(addArch(arch)),
    updateDriver: driver => dispatch(updateDriver(driver))
  };
};

// export default connect(null, { deleteLog, setCurrent, addArch })(LogItem);
export default connect(null, mapDispatchToProps)(LogItem);
