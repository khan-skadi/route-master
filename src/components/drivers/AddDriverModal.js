import React, { Component } from "react";
import { connect } from "react-redux";
import { storage } from "../../index";
import { addDriver } from "../../store/actions/driverActions";
import PropTypes from "prop-types";
import M from "materialize-css/dist/js/materialize.min.js";

export class AddDriverModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: "",
      progress: 0,
      firstName: "",
      lastName: "",
      address: "",
      email: "",
      phoneNumber: "",
      birthYear: "",
      hourlyRate: "",
      license: "",
      available: true,
      completedRoutes: null,
      incompleteRoutes: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.handleLicense = this.handleLicense.bind(this);
    this.handleHourlyRate = this.handleHourlyRate.bind(this);
    this.handleBirthYear = this.handleBirthYear.bind(this);
    this.handlePhoneNumber = this.handlePhoneNumber.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleFirstName = this.handleFirstName.bind(this);
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
    // const { image } = this.state;
    const image = this.state.image;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        // progress function
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      error => {
        console.log(error);
      },
      () => {
        // complete function
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            console.log(url);
            this.setState({ url });
          });
      }
    );
  };
  handleSubmit = e => {
    if (this.firstName === "" || this.lastName === "") {
      M.toast({ html: "Please enter the first and last name" });
    } else {
      this.props.addDriver(this.state);

      M.toast({
        html: `${this.firstName} ${this.lastName} was added as a driver`
      });
    }
  };

  render() {
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
                    value={this.state.firstName}
                    onChange={this.handleFirstName}
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
                    value={this.state.lastName}
                    onChange={this.handleLastName}
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
                    value={this.state.email}
                    onChange={this.handleEmail}
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
                    value={this.state.address}
                    onChange={this.handleAddress}
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
                    value={this.state.phoneNumber}
                    onChange={this.handlePhoneNumber}
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
                    value={this.state.birthYear}
                    onChange={this.handleBirthYear}
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
                    value={this.state.hourlyRate}
                    onChange={this.handleHourlyRate}
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
                    value={this.state.license}
                    onChange={this.handleLicense}
                  />
                  <label htmlFor="license" className="active">
                    License
                  </label>
                </div>
              </div>

              <div className="col s12">
                <div className="modal-footer">
                  <a href="/">
                    <button
                      className="btn waves-effect blue waves-light"
                      type="submit"
                      name="action"
                      onClick={this.handleSubmit}
                    >
                      Submit
                      <i className="material-icons right">send</i>
                    </button>
                  </a>
                </div>
              </div>
              <div>
                <progress value={this.state.progress} max="100" />
                <br />
                <input type="file" onChange={this.handleChange} />
                <button onClick={this.handleUpload}>Upload</button>
                <br />
                <img src={this.state.url} alt="" height="300" width="400" />
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

const mapDispatchToProps = dispatch => {
  return {
    addDriver: driver => dispatch(addDriver(driver))
  };
};

export default connect(null, mapDispatchToProps)(AddDriverModal);
