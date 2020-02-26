import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { storage } from "../../index";
import { updateDriver } from "../../store/actions/driverActions";
import PropTypes from "prop-types";
import M from "materialize-css/dist/js/materialize.min.js";

const EditDriverProfile = ({ current, updateDriver }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [hourlyRate, setHourlyRate] = useState("");
  const [license, setLicense] = useState("");
  const [completedRoutes, setCompletedRoutes] = useState(0);
  const [incompleteRoutes, setIncompleteRoutes] = useState(0);
  const [url, setUrl] = useState("");
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(null);

  useEffect(() => {
    if (current) {
      setFirstName(current.firstName);
      setLastName(current.lastName);
      setAddress(current.address);
      setEmail(current.email);
      setPhoneNumber(current.phoneNumber);
      setBirthYear(current.birthYear);
      setHourlyRate(current.hourlyRate);
      setLicense(current.license);
      setCompletedRoutes(current.completedRoutes);
      setIncompleteRoutes(current.incompleteRoutes);
      setUrl(current.url);
    }
  }, [current]);

  const handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      setImage(image);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            setUrl(url);
          });
      }
    );
  };

  const onSubmit = () => {
    const updatedDriver = {
      firstName,
      lastName,
      address,
      email,
      phoneNumber,
      birthYear,
      hourlyRate,
      license,
      completedRoutes,
      incompleteRoutes,
      url,
      id: current.id,
      date: new Date()
    };

    updateDriver(updatedDriver);

    M.toast({ html: "Driver info edited" });

    setFirstName("");
    setLastName("");
    setAddress("");
    setEmail("");
    setPhoneNumber("");
    setBirthYear("");
    setHourlyRate("");
    setLicense("");
    setCompletedRoutes(0);
    setIncompleteRoutes(0);
    setUrl("");
  };

  const completedRoutesNum = Object.keys(completedRoutes).length;
  const incompleteRoutesNum = Object.keys(incompleteRoutes).length;

  return (
    <div id="edit-driver-profile" className="modal" style={modalStyle}>
      <div className="modal-content">
        <div className="row">
          <h4 className="center">Edit Driver</h4>
          <br />

          <div className="col s6">
            <div className="section center">
              <img
                src={url}
                alt=""
                width="200px"
                className="circle responsive-img"
              />
            </div>
          </div>

          <div className="col s6">
            <div className="input-field">
              <i className="material-icons prefix">keyboard_arrow_left</i>
              <input
                type="text"
                name="firstName"
                value={firstName || ""}
                onChange={e => setFirstName(e.target.value)}
              />
              <label htmlFor="firstName" className="active">
                First Name
              </label>
            </div>
          </div>

          <div className="col s6">
            <div className="input-field">
              <i className="material-icons prefix">keyboard_arrow_right</i>
              <input
                type="text"
                name="lastName"
                value={lastName || ""}
                onChange={e => setLastName(e.target.value)}
              />
              <label htmlFor="lastName" className="active">
                Last Name
              </label>
            </div>
          </div>

          <div className="col s6">
            <div className="input-field">
              <i className="material-icons prefix">swap_horiz</i>
              <input
                type="text"
                name="address"
                value={address || ""}
                onChange={e => setAddress(e.target.value)}
              />
              <label htmlFor="address" className="active">
                Address
              </label>
            </div>
          </div>

          <div className="col s6">
            <div className="file-field input-field">
              <a
                href="#!"
                className="waves-effect waves-light btn-small green accent-4"
              >
                <span>Change Image</span>
                <input type="file" onChange={handleChange} />
              </a>
              {/* <div className="file-path-wrapper col s4">
                <input className="file-path validate" type="text" />
              </div> */}
              <a
                href="#!"
                className="right waves-effect waves-light btn-small green accent-4"
                onClick={handleUpload}
              >
                Upload
              </a>
            </div>
          </div>

          <div className="col s6">
            <div className="input-field">
              <i className="material-icons prefix">date_range</i>
              <input
                type="text"
                name="email"
                value={email || ""}
                onChange={e => setEmail(e.target.value)}
              />
              <label htmlFor="email" className="active">
                Email
              </label>
            </div>
          </div>

          <div className="col s6">
            <div className="input-field">
              <i className="material-icons prefix">account_box</i>
              <input
                type="text"
                name="phoneNumber"
                value={phoneNumber || ""}
                onChange={e => setPhoneNumber(e.target.value)}
              />
              <label htmlFor="phoneNumber" className="active">
                Phone Number
              </label>
            </div>
          </div>

          <div className="col s6">
            <div className="input-field">
              <i className="material-icons prefix">cake</i>
              <input
                type="text"
                name="birthYear"
                value={birthYear || ""}
                onChange={e => setBirthYear(e.target.value)}
              />
              <label htmlFor="birthYear" className="active">
                Birth Year
              </label>
            </div>
          </div>

          <div className="col s6">
            <div className="input-field">
              <i className="material-icons prefix">attach_money</i>
              <input
                type="number"
                name="hourlyRate"
                value={hourlyRate || ""}
                onChange={e => setHourlyRate(e.target.value)}
              />
              <label htmlFor="hourlyRate" className="active">
                Hourly Rate
              </label>
            </div>
          </div>

          <div className="col s6">
            <div className="input-field">
              <i className="material-icons prefix">short_text</i>
              <input
                type="text"
                name="license"
                value={license || ""}
                onChange={e => setLicense(e.target.value)}
              />
              <label htmlFor="license" className="active">
                License
              </label>
            </div>
          </div>

          <div className="col s6">
            <div className="input-field">
              <i className="material-icons prefix">short_text</i>
              <input
                type="text"
                name="completedRoutes"
                value={completedRoutesNum || ""}
                readOnly
              />
              <label htmlFor="completedRoutes" className="active">
                Completed Routes
              </label>
            </div>
          </div>

          <div className="col s6">
            <div className="input-field">
              <i className="material-icons prefix">short_text</i>
              <input
                type="text"
                name="incompleteRoutes"
                value={incompleteRoutesNum || 0}
                readOnly
              />
              <label htmlFor="incompleteRoutes" className="active">
                Incomplete Routes
              </label>
            </div>
          </div>

          <div className="col s12">
            <div className="modal-footer">
              <a
                href="#!"
                onClick={onSubmit}
                className="modal-close waves-effect blue darken-2 btn"
              >
                Submit
                <i className="material-icons right">send</i>
              </a>
            </div>
          </div>
        </div>
        <br></br>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "100%",
  height: "100%"
};

EditDriverProfile.propTypes = {
  current: PropTypes.object,
  updateDriver: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  current: state.driver.current
});

const mapDispatchToProps = dispatch => {
  return {
    updateDriver: driver => dispatch(updateDriver(driver))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditDriverProfile);
