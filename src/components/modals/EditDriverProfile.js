import React, { useState, useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import {
  updateDriverProfile,
  clearCurrentDriver
} from '../../store/actions/driverActions.js';
import firebase from '../../wFirebase/firebaseConfig.js';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';

const EditDriverProfile = ({
  current,
  updateDriverProfile,
  clearCurrentDriver
}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [birthYear, setBirthYear] = useState(0);
  const [hourlyRate, setHourlyRate] = useState(0);
  const [license, setLicense] = useState('');
  const [completedRoutes, setCompletedRoutes] = useState([]);
  const [incompleteRoutes, setIncompleteRoutes] = useState([]);
  const [imageUrl, setImageUrl] = useState('');
  const [image, setImage] = useState(null);
  let [progress, setProgress] = useState(null);

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
      setImageUrl(current.imageUrl);
    }
  }, [current]);

  const handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      setImage(image);
    }
  };

  const handleUpload = () => {
    const uploadTask = firebase
      .storage()
      .ref(`images/${image.name}`)
      .put(image);
    uploadTask.on(
      'state_changed',
      snapshot => {
        progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      error => {
        console.log(error);
      },
      () => {
        firebase
          .storage()
          .ref('images')
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            setImageUrl(url);
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
      imageUrl,
      id: current.id
    };

    updateDriverProfile(updatedDriver);
    clearCurrentDriver();

    M.toast({ html: 'Driver info edited' });

    setFirstName('');
    setLastName('');
    setAddress('');
    setEmail('');
    setPhoneNumber('');
    setBirthYear(0);
    setHourlyRate(0);
    setLicense('');
    setCompletedRoutes([]);
    setIncompleteRoutes([]);
    setImageUrl('');
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
                src={imageUrl}
                alt="driver profile"
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
                value={firstName || 0}
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
                value={lastName || 0}
                onChange={e => setLastName(e.target.value)}
              />
              <label htmlFor="lastName" className="active">
                Last Name
              </label>
            </div>
          </div>

          <div className="col s6">
            <div className="input-field">
              <i className="material-icons prefix">house</i>
              <input
                type="text"
                name="address"
                value={address || 0}
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
              <i className="material-icons prefix">email</i>
              <input
                type="email"
                name="email"
                value={email || 0}
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
                value={phoneNumber || 0}
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
                type="number"
                name="birthYear"
                value={birthYear || 0}
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
                value={hourlyRate || 0}
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
                value={license || 0}
                onChange={e => setLicense(e.target.value)}
              />
              <label htmlFor="license" className="active">
                License
              </label>
            </div>
          </div>

          <div className="col s6">
            <div className="input-field">
              <i className="material-icons prefix">check</i>
              <input
                type="text"
                name="completedRoutes"
                value={completedRoutesNum || 0}
                readOnly
              />
              <label htmlFor="completedRoutes" className="active">
                Completed Routes
              </label>
            </div>
          </div>

          <div className="col s6">
            <div className="input-field">
              <i className="material-icons prefix">close</i>
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
        <br></br>
      </div>
    </div>
  );
};

const modalStyle = {
  width: '1000px',
  minHeight: '82%'
};

EditDriverProfile.propTypes = {
  current: PropTypes.object,
  updateDriverProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  current: state.driver.current
});

const mapDispatchToProps = dispatch => {
  return {
    updateDriverProfile: driver => {
      dispatch(updateDriverProfile(driver));
    },
    clearCurrentDriver: () => {
      dispatch(clearCurrentDriver());
    }
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: 'drivers' }])
)(EditDriverProfile);
