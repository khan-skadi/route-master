import React, { useState } from "react";
import { connect } from "react-redux";
// import { Redirect } from "react-router-dom";
// import { storage } from "../../index";
import { addDriver } from "../../store/actions/driverActions";
import PropTypes from "prop-types";
import M from "materialize-css/dist/js/materialize.min.js";

const AddDriverModalTest = ({ addDriver }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [hourlyRate, setHourlyRate] = useState(0);
  const [license, setLicense] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  //   const [available, setAvailable] = useState(true);
  // const [completedRoutes, setCompletedRoutes] = useState(null);
  // const [incompleteRoutes, setIncompleteRoutes] = useState(null);

  const handleSubmit = () => {
    if (firstName === "" || lastName === "") {
      M.toast({ html: "Please enter the first and last name" });
    } else {
      const newDriver = {
        firstName,
        lastName,
        email,
        address,
        birthYear,
        hourlyRate,
        license,
        phoneNumber
        // available
      };

      addDriver(newDriver);

      M.toast({
        html: `${firstName} ${lastName} was added as a driver`
      });

      //
      setFirstName("");
      setLastName("");
      setAddress("");
      setEmail("");
      setBirthYear("");
      setHourlyRate("");
      setLicense("");
      setPhoneNumber("");
    }
  };

  return (
    <div id="add-driver-modal" className="modal" style={modalStyle}>
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

            <div className="col s6">
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
            </div>

            {/* <div>
              <progress value={this.state.progress} max="100" />
              <br />
              <input type="file" onChange={this.handleChange} />
              <button onClick={this.handleUpload}>Upload</button>
              <br />
              <img src={this.state.url} alt="" height="300" width="300" />
            </div> */}

            <div className="col s12">
              <div className="modal-footer">
                <a
                  href="#!"
                  className="btn waves-effect blue waves-light"
                  onClick={handleSubmit}
                >
                  Submit
                  <i className="material-icons right">send</i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AddDriverModalTest.propTypes = {
  addDriver: PropTypes.func.isRequired
};

const modalStyle = {
  width: "75%",
  height: "75%"
};

// const mapStateToProps = state => {
//   return {
//     driver: state.driver
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     addDriver: driver => dispatch(addDriver(driver))
//   };
// };

export default connect(null, { addDriver })(AddDriverModalTest);
