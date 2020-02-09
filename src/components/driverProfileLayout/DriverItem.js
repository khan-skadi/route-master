import React from "react";
import { connect } from "react-redux";
import Moment from "react-moment";

const DriverItem = ({ arch }) => {
  const style = {
    fontWeight: "bold"
  };

  return (
    <div
      className="z-depth-2"
      style={{ marginBottom: "10px", padding: "20px" }}
    >
      <li className="collection-item">
        <div className="valign-wrapper">
          <div className="col s2">
            <a
              style={style}
              className={`modal-trigger ${
                arch.attention
                  ? "red-text"
                  : arch.progress
                  ? "green-text"
                  : "blue-text"
              }`}
              href="#archived-log-modal"
            >
              {arch.locationFrom}
            </a>
          </div>
          <div className="col s2">
            <a
              style={style}
              className={`modal-trigger ${
                arch.attention
                  ? "red-text"
                  : arch.progress
                  ? "green-text"
                  : "blue-text"
              }`}
              href="#archived-log-modal"
            >
              {arch.locationTo}
            </a>
          </div>
          <div className="col s2">
            <span style={style}>{arch.distance}</span>
          </div>
          <div className="col s2">
            <span style={style}>
              <Moment format="DD-MM-YYYY">{arch.date}</Moment>
            </span>
          </div>
          <div className="col s4 push-s2">
            <button
              className="btn waves-effect waves-light green accent-4"
              name="action"
            >
              Signed
              <i className="material-icons right">assignment_turned_in</i>
            </button>
          </div>
        </div>
      </li>
    </div>
  );
};

export default connect()(DriverItem);

/* <div>
<a
  className={`modal-trigger ${
    arch.attention
      ? "red-text"
      : arch.progress
      ? "green-text"
      : "blue-text"
  }`}
  href="#archived-log-modal"
>
  {arch.locationFrom} - {arch.locationTo}
  <button
    className="btn waves-effect waves-light right green accent-4"
    name="action"
  >
    Signed
    <i className="material-icons right">assignment_turned_in</i>
  </button>
</a>
<br />
<span className="grey-text">
  <span className="black-text">ID #{arch.id}</span> last updated by{" "}
  <span className="black-text">
    {arch.driver ? arch.driver : "Admin"}
  </span>{" "}
  on <Moment format="MMMM Do YYYY, h:mm:ss a">{arch.date}</Moment>
</span>
</div> */
// }

//
/* <div
className="z-depth-2"
style={{ marginBottom: "10px", padding: "25px" }}
>
<li className="collection-item">
  <div>
    <a
      className={`modal-trigger ${
        arch.attention
          ? "red-text"
          : arch.progress
          ? "green-text"
          : "blue-text"
      }`}
      href="#archived-log-modal"
    >
      {arch.locationFrom} - {arch.locationTo}
      <button
        className="btn waves-effect waves-light right green accent-4"
        name="action"
      >
        Signed
        <i className="material-icons right">assignment_turned_in</i>
      </button>
    </a>
    <span className="grey-text">
      {" "}
      Finished on{" "}
      <Moment format="MMMM Do YYYY, h:mm:ss a">
        {arch.date}
      </Moment> by {arch.driver}
    </span>
  </div>
</li>
</div> */
