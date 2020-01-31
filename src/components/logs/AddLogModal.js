import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import DriverSelectOptions from "../drivers/DriverSelectOptions";
import { addLog } from "../../store/actions/logActions";
import M from "materialize-css/dist/js/materialize.min.js";

const AddLogModal = ({ addLog }) => {
  const [locationFrom, setLocationFrom] = useState("");
  const [locationTo, setLocationTo] = useState("");
  const [distance, setDistance] = useState("");
  const [postedOn, setPostedOn] = useState("");
  const [postedBy, setPostedBy] = useState("");
  const [attention, setAttention] = useState(false);
  const [progress, setProgress] = useState(false);
  const [driver, setDriver] = useState("");

  // useEffect(() => {
  //   if (currentRoute) {
  //     setLocationFrom(currentRoute.locationFrom);
  //     setLocationTo(currentRoute.locationTo);
  //     setDistance(currentRoute.distance);
  //     setPostedOn(currentRoute.postedOn);
  //     setPostedBy(currentRoute.postedBy);
  //     setId(currentRoute.id);
  //   }
  // }, [currentRoute]);

  const onSubmit = () => {
    const newRoute = {
      locationFrom,
      locationTo,
      distance,
      postedOn,
      postedBy,
      attention,
      progress,
      driver,
      date: new Date()
    };

    addLog(newRoute);

    M.toast({ html: "Route added" });
  };

  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Submit Route</h4>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="locationFrom"
              value={locationFrom || ""}
              onChange={e => setLocationFrom(e.target.value)}
            />
            <label htmlFor="locationFrom" className="active">
              Location From
            </label>
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
            <label htmlFor="locationTo" className="active">
              Location To
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <select
              name="driver"
              value={driver}
              className="browser-default"
              onChange={e => setDriver(e.target.value)}
            >
              <option value="" disabled>
                Driver
              </option>
              <DriverSelectOptions />
            </select>
          </div>
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
          <label htmlFor="distance" className="active">
            Distance
          </label>
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
          <label htmlFor="postedOn" className="active">
            Posted On
          </label>
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
          <label htmlFor="postedBy" className="active">
            Posted By
          </label>
        </div>
      </div>

      <div className="row">
        <div className="input-field">
          <p>
            <label>
              <input
                type="checkbox"
                className="filled-in"
                checked={attention}
                value={attention}
                onChange={e => setAttention(!attention)}
              />
              <span>Important - Time Sensitive</span>
            </label>
          </p>
          <p>
            <label>
              <input
                type="checkbox"
                className="filled-in"
                checked={progress}
                value={progress}
                onChange={e => setProgress(!progress)}
              />
              <span>In Progress</span>
            </label>
          </p>

          <div className="modal-footer">
            <a
              href="#!"
              onClick={onSubmit}
              className="modal-close waves-effect blue darken-3 btn"
            >
              Add Route
              <i className="material-icons right">send</i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "75%",
  height: "75%"
};

AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired
};

export default connect(null, { addLog })(AddLogModal);

// const AddLogModal = ({ addLog }) => {
//   const [message, setMessage] = useState("");
//   const [driver, setDriver] = useState("");
//   const [attention, setAttention] = useState(false);
//   const [progress, setProgress] = useState(false);

//   const onSubmit = () => {
//     if (message === "" || driver === "") {
//       M.toast({ html: "Please describe route and enter driver" });
//     } else {
//       const newRoute = {
//         message,
//         attention,
//         progress,
//         driver,
//         date: new Date()
//       };

//       addLog(newRoute);

//       M.toast({ html: `Route added by ${driver}` });

//       // Clear Fields
//       setMessage("");
//       setDriver("");
//       setAttention(false);
//       setProgress(false);
//     }
//   };

//   return (
//     <div id="add-log-modal" className="modal" style={modalStyle}>
//       <div className="modal-content">
//         <h4>Submit Route</h4>
//         <div className="row">
//           <div className="input-field">
//             <input
//               type="text"
//               name="message"
//               value={message}
//               onChange={e => setMessage(e.target.value)}
//             />
//             <label htmlFor="message" className="active">
//               Route info
//             </label>
//           </div>
//         </div>

//         <div className="row">
//           <div className="input-field">
//             <select
//               name="driver"
//               value={driver}
//               className="browser-default"
//               onChange={e => setDriver(e.target.value)}
//             >
//               <option value="" disabled>
//                 Driver
//               </option>
//               <DriverSelectOptions />
//             </select>
//           </div>
//         </div>

//         <div className="row">
//           <div className="input-field">
//             <p>
//               <label>
//                 <input
//                   type="checkbox"
//                   className="filled-in"
//                   checked={attention}
//                   value={attention}
//                   onChange={e => setAttention(!attention)}
//                 />
//                 <span>Important - Time Sensitive</span>
//               </label>
//             </p>
//             <p>
//               <label>
//                 <input
//                   type="checkbox"
//                   className="filled-in"
//                   checked={progress}
//                   value={progress}
//                   onChange={e => setProgress(!progress)}
//                 />
//                 <span>In Progress</span>
//               </label>
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="modal-footer">
//         <a
//           href="#!"
//           onClick={onSubmit}
//           className="modal-close waves-effect blue darken-3 btn"
//         >
//           Submit
//           <i className="material-icons right">send</i>
//         </a>
//       </div>
//     </div>
//   );
// };

// AddLogModal.propTypes = {
//   addLog: PropTypes.func.isRequired
// };

// const modalStyle = {
//   width: "75%",
//   height: "75%"
// };

// export default connect(null, { addLog })(AddLogModal);
