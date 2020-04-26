import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addDriver } from '../../store/actions/driverActions.js';
import firebase from '../../wFirebase/firebaseConfig.js';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize';

class AddDriverModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: '',
      firstName: '',
      lastName: '',
      address: '',
      email: '',
      phoneNumber: '',
      birthYear: 0,
      hourlyRate: 0,
      license: '',
      available: true,
      completedRoutes: [],
      incompleteRoutes: []
    };

    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handlePhoneNumber = this.handlePhoneNumber.bind(this);
    this.handleBirthYear = this.handleBirthYear.bind(this);
    this.handleHourlyRate = this.handleHourlyRate.bind(this);
    this.handleLicense = this.handleLicense.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleLicense = e => {
    const license = e.target.value;
    this.setState(() => ({ license }));
  };
  handleHourlyRate = e => {
    const hourlyRate = e.target.value;
    this.setState(() => ({ hourlyRate }));
  };
  handleBirthYear = e => {
    const birthYear = e.target.value;
    this.setState(() => ({ birthYear }));
  };
  handlePhoneNumber = e => {
    const phoneNumber = e.target.value;
    this.setState(() => ({ phoneNumber }));
  };
  handleEmail = e => {
    const email = e.target.value;
    this.setState(() => ({ email }));
  };
  handleAddress = e => {
    const address = e.target.value;
    this.setState(() => ({ address }));
  };
  handleLastName = e => {
    const lastName = e.target.value;
    this.setState(() => ({ lastName }));
  };
  handleFirstName = e => {
    const firstName = e.target.value;
    this.setState(() => ({ firstName }));
  };
  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };
  handleUpload = () => {
    const image = this.state.image;
    const uploadTask = firebase
      .storage()
      .ref(`images/${image.name}`)
      .put(image);
    uploadTask.on(
      'state_changed',
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        console.log('Upload is ' + progress + '% done');
        this.setState({ progress });
      },
      error => {
        console.log(error);
      },
      () => {
        // firebase
        //   .storage()
        //   .ref('images')
        //   .child(image.name)
        //   .getDownloadURL()
        //   .then((url) => {
        //     this.setState({ imageUrl: url });
        //   });
        uploadTask.snapshot.ref.getDownloadURL().then(downloadUrl => {
          this.setState({ imageUrl: downloadUrl });
        });
      }
    );
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.firstName === '' || this.state.lastName === '') {
      M.toast({ html: 'Please enter the first and last name' });
    } else {
      this.props.addDriver(this.state);
      console.log('Driver added');
      M.toast({
        html: `${this.state.firstName} ${this.state.lastName} was added as a driver`
      });
    }

    this.setState({
      imageUrl: '',
      firstName: '',
      lastName: '',
      address: '',
      email: '',
      phoneNumber: '',
      birthYear: '',
      hourlyRate: '',
      license: '',
      available: true,
      completedRoutes: [],
      incompleteRoutes: []
    });
  };

  render() {
    return (
      <div id="add-drivers-modal" className="modal">
        <div className="modal-content">
          <div className="row">
            <div className="col s12">
              <h4>Add Driver</h4>
              <br />

              <div className="input-field col s6">
                <i className="material-icons prefix">account_box</i>
                <input
                  type="text"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.handleFirstName}
                />
                <label htmlFor="firstName" className="active">
                  First Name
                </label>
              </div>

              <div className="input-field col s6">
                <i className="material-icons prefix">account_circle</i>
                <input
                  type="text"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.handleLastName}
                />
                <label htmlFor="lastName" className="active">
                  Last Name
                </label>
              </div>

              <div className="input-field col s6">
                <i className="material-icons prefix">email</i>
                <input
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleEmail}
                />
                <label htmlFor="email" className="active">
                  Email
                </label>
              </div>

              <div className="input-field col s6">
                <i className="material-icons prefix">home</i>
                <input
                  type="text"
                  name="address"
                  value={this.state.address}
                  onChange={this.handleAddress}
                />
                <label htmlFor="address" className="active">
                  Address
                </label>
              </div>

              <div className="input-field col s6">
                <i className="material-icons prefix">phone_iphone</i>
                <input
                  type="text"
                  name="phoneNumber"
                  value={this.state.phoneNumber}
                  onChange={this.handlePhoneNumber}
                />
                <label htmlFor="phoneNumber" className="active">
                  Phone Number
                </label>
              </div>

              <div className="input-field col s6">
                <i className="material-icons prefix">cake</i>
                <input
                  type="number"
                  name="birthYear"
                  value={this.state.birthYear}
                  onChange={this.handleBirthYear}
                />
                <label htmlFor="birthYear" className="active">
                  Birth Year
                </label>
              </div>

              <div className="input-field col s6">
                <i className="material-icons prefix">attach_money</i>
                <input
                  type="number"
                  name="hourlyRate"
                  value={this.state.hourlyRate}
                  onChange={this.handleHourlyRate}
                />
                <label htmlFor="hourlyRate" className="active">
                  Hourly Rate
                </label>
              </div>

              <div className="input-field col s6">
                <i className="material-icons prefix">short_text</i>
                <input
                  type="text"
                  name="license"
                  value={this.state.license}
                  onChange={this.handleLicense}
                />
                <label htmlFor="license" className="active">
                  License
                </label>
              </div>

              <div className="row">
                <br />
              </div>

              <div className="row">
                <div className="col s12">
                  <div className="file-field input-field">
                    <a
                      href="#!"
                      className="waves-effect waves-light btn-small green accent-4"
                    >
                      <span>Pick Image</span>
                      <input type="file" onChange={this.handleChange} />
                    </a>
                    <div className="file-path-wrapper col s8">
                      <input className="file-path validate" type="text" />
                    </div>
                    <a
                      href="#!"
                      className="waves-effect waves-light btn-small green accent-4"
                      onClick={this.handleUpload}
                    >
                      Upload
                    </a>
                  </div>
                  <img
                    src={this.state.imageUrl}
                    alt=""
                    height="300"
                    width="300"
                  />
                </div>
              </div>
              <div className="col s12 modal-footer">
                <div className="col s3 right modal-footer">
                  <a
                    href="#!"
                    onClick={this.handleSubmit}
                    className="modal-close waves-effect blue darken-2 btn"
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
  }
}

AddDriverModal.propTypes = {
  addDriver: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    drivers: state.firestore.ordered.drivers
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addDriver: (driver) => {
//       dispatch(addDriver(driver));
//     }
//   };
// };

export default connect(mapStateToProps, { addDriver })(AddDriverModal);
