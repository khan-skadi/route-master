import React, { useState } from "react";
import { connect } from "react-redux";
import { storage } from "../../index";
import firebase from "../../index";

const EditProfileDetails = () => {
  const [url, setUrl] = useState("");
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(null);

  const profileData = {
    photoURL: url
  };
  const user = firebase.auth().currentUser;

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
    user.updateProfile({
      photoURL: profileData.photoURL || user.photoURL
    });
  };

  return (
    <div id="edit-profile-details" className="modal">
      <div className="modal-content">
        <div className="col s12">
          <div className="file-field input-field">
            <a
              href="#!"
              className="waves-effect waves-light btn-small green accent-4"
            >
              <span>Pick Image</span>
              <input type="file" onChange={handleChange} />
            </a>
            <div className="file-path-wrapper col s8">
              <input className="file-path validate" type="text" />
            </div>
            <a
              href="#!"
              className="right waves-effect waves-light btn-small green accent-4"
              onClick={handleUpload}
            >
              Upload
            </a>
          </div>
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
  );
};

export default connect()(EditProfileDetails);
