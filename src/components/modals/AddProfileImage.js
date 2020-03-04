import React, { Component } from "react";
import firebase, { storage } from "../../index";
import background from "../../img/truck6.2.png";
import { db } from "../../index";
import { compose } from "redux";
import { connect } from "react-redux";
import { withFirestore, isLoaded, isEmpty } from "react-redux-firebase";

class AddProfileImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      adminPhotoURL: "",
      myUser: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };
  handleUpload = () => {
    const image = this.state.image;
    const uploadTask = storage.ref(`profile-images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("profile-images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            this.setState({ url });
            this.setState({
              adminPhotoURL: url
            });
          });
      }
    );
  };

  handleSubmit = () => {
    // const user = firebase.auth().currentUser;
    // user.updateProfile({
    //   photoURL: this.state.url
    // });
    const user = !isLoaded(this.props.users)
      ? "Loading"
      : isEmpty(this.props.users)
      ? "User collection is empty"
      : this.props.users
          .filter(g => g.firstName === this.props.profile.firstName)
          .map(e => e.id)
          .map(user => user);
    console.log(this.state.users);
    console.log(this.props.profile.firstName);

    const userRef = db.collection("users").doc(user[0]);

    userRef
      .update({
        photoURL: this.state.adminPhotoURL
      })
      .then(() => {
        console.log("Document successfully updated !");
      })
      .catch(error => {
        console.error("Error updating document ", error);
      });
  };

  render() {
    console.log(this.state.myUser);
    // const user2 = !isLoaded(this.props.users)
    //   ? "Loading"
    //   : isEmpty(this.props.users)
    //   ? "User collection is empty"
    //   : this.props.users.filter(
    //       u => u.firstName === this.props.profile.firstName
    //     );
    // console.log(this.props.users);
    // console.log(user2);
    return (
      <div id="add-profile-image" className="modal">
        <div
          style={{
            overflow: "hidden",
            position: "absolute",
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
            zIndex: "-1"
          }}
        >
          <img src={background} alt="" />
        </div>
        <div className="modal-content">
          <div className="row" style={modalStyle}>
            <div className="col s6">
              <img
                src={this.state.adminPhotoURL}
                className="circle responsive-img"
                height="160"
                width="160"
                alt=""
                style={{
                  border: "1px solid white"
                }}
              />
            </div>
            <div className="col s6">
              <img
                src={this.state.adminPhotoURL}
                className="right circle responsive-img"
                height="160"
                width="160"
                alt=""
                style={{
                  border: "1px solid white"
                }}
              />
            </div>
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
                <div className="file-path-wrapper col s8 center">
                  <input
                    className="file-path validate white-text"
                    type="text"
                  />
                </div>
                <a
                  href="#!"
                  className="waves-effect waves-light btn-small green accent-4 right"
                  onClick={this.handleUpload}
                >
                  Upload
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col s12">
            <a
              href="#!"
              onClick={this.handleSubmit}
              className="right modal-close waves-effect blue darken-2 btn"
            >
              Submit
              <i className="material-icons right">send</i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const modalStyle = {
  width: "100%",
  height: "100%"
};

export default compose(
  withFirestore,
  connect(state => ({
    users: state.firestore.ordered.users
  }))
)(AddProfileImage);
