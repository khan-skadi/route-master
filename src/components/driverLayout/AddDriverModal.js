import React, { useState } from "react";
import { connect } from "react-redux";
import { addDriver } from "../../store/actions/driverActions";
import PropTypes from "prop-types";
import M from "materialize-css/dist/js/materialize.min.js";

const AddDriverModal = ({ addDriver }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [birthYear, setBirthYear] = useState("");
  // const [hourlyRate, setHourlyRate] = useState("");
  // const [license, setLicense] = useState("");
  // const [available, setAvailable] = useState(true);
  // const [completedRoutes, setCompletedRoutes] = useState(null);
  // const [incompleteRoutes, setIncompleteRoutes] = useState(null);

  const onSubmit = () => {
    if (firstName === "" || lastName === "") {
      M.toast({ html: "Please enter the first and last name" });
    } else {
      addDriver({
        firstName,
        lastName,
        address,
        email
      });

      // phoneNumber,
      // birthYear,
      // hourlyRate,
      // license,
      // available,
      // completedRoutes,
      // incompleteRoutes
      M.toast({ html: `${firstName} ${lastName} was added as a driver` });
      // Clear Fields
      setFirstName("");
      setLastName("");
      setAddress("");
      setEmail("");
      // setPhoneNumber("");
      // setBirthYear("");
      // setHourlyRate("");
      // setLicense("");
      // setAvailable(true);
      // setCompletedRoutes(null);
      // setIncompleteRoutes(null);
    }
  };

  return (
    <div id="add-driver-modal" className="modal">
      <div className="modal-content">
        <div className="row">
          <div className="col s12">
            <h4>Add driver</h4>
            <br />

            <div className="col s6">
              <div className="input-field">
                <input
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                />
                <label htmlFor="firstName" className="active">
                  First Name
                </label>
              </div>
            </div>

            <div className="col s6">
              <div className="input-field">
                <input
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                />
                <label htmlFor="lastName" className="active">
                  Last Name
                </label>
              </div>
            </div>

            <div className="col s6">
              <div className="input-field">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="email" className="active">
                  Email
                </label>
              </div>
            </div>

            <div className="col s6">
              <div className="input-field">
                <input
                  type="text"
                  name="address"
                  value={address}
                  onChange={e => setAddress(e.target.value)}
                />
                <label htmlFor="address" className="active">
                  Address
                </label>
              </div>
            </div>

            {/* <div className="col s6">
              <div className="input-field">
                <input
                  type="text"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={e => setPhoneNumber(e.target.value)}
                />
                <label htmlFor="phoneNumber" className="active">
                  Phone Number
                </label>
              </div>
            </div>

            <div className="col s6">
              <div className="input-field">
                <input
                  type="text"
                  name="birthYear"
                  value={birthYear}
                  onChange={e => setBirthYear(e.target.value)}
                />
                <label htmlFor="birthYear" className="active">
                  Birth Year
                </label>
              </div>
            </div>

            <div className="col s6">
              <div className="input-field">
                <input
                  type="number"
                  name="hourlyRate"
                  value={hourlyRate}
                  onChange={e => setHourlyRate(e.target.value)}
                />
                <label htmlFor="hourlyRate" className="active">
                  Hourly Rate
                </label>
              </div>
            </div>

            <div className="col s6">
              <div className="input-field">
                <input
                  type="text"
                  name="license"
                  value={license}
                  onChange={e => setLicense(e.target.value)}
                />
                <label htmlFor="license" className="active">
                  License
                </label>
              </div>
            </div> */}

            <div className="col s12">
              <div className="modal-footer">
                <a href="#!">
                  <button
                    className="btn waves-effect blue waves-light"
                    type="submit"
                    name="action"
                    onClick={onSubmit}
                  >
                    Submit
                    <i className="material-icons right">send</i>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AddDriverModal.propTypes = {
  addDriver: PropTypes.func.isRequired
};

export default connect(null, { addDriver })(AddDriverModal);
