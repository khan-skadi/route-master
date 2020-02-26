import React, { Component } from "react";
import { storage } from "../../index";

class AddProfileImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ""
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
          });
      }
    );
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div id="add-profile-image" className="modal" style={modalStyle}>
        <div className="modal-content">
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
              <img src={this.state.url} alt="" height="300" width="300" />
            </div>
          </div>
        </div>
        <div className="col s12 modal-footer">
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
    );
  }
}

const modalStyle = {
  width: "50%",
  height: "50%"
};

export default AddProfileImage;
