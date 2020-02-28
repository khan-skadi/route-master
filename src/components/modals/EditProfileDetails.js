import React, { useState, useEffect } from "react";
import { compose } from "redux";
import { connect, useSelector } from "react-redux";
import {
  firestoreConnect,
  useFirestoreConnect,
  withFirestore,
  isLoaded,
  isEmpty
} from "react-redux-firebase";
import { db } from "../../index";

const EditProfileDetails = ({ firestore, auth, profile, users }) => {
  const [adminFirstName, setAdminFirstName] = useState("");
  console.log(profile);

  useEffect(() => {
    firestore.get("users");
    if (profile) {
      setAdminFirstName(profile.firstName);
    }

    //eslint-disable-next-line
  }, [profile]);

  const user = !isLoaded(users)
    ? "Loading"
    : isEmpty(users)
    ? "Todo list is empty"
    : users
        .filter(g => g.firstName === profile.firstName)
        .map(e => e.id)
        .map(user => user);

  console.log(user);

  const onSubmit = () => {
    const userRef = db.collection("users").doc(user[0]);
    console.log(userRef);
    console.log(user[0]);
    return userRef
      .update({
        firstName: adminFirstName
      })
      .then(() => {
        console.log("Document successfully updated !");
      })
      .catch(error => {
        console.error("Error updating document ", error);
      });
  };

  return (
    <div id="edit-profile-details" className="modal">
      <div className="modal-content">
        <div className="col s6">
          <h4>Edit Admin Profile</h4>
        </div>
        <div className="input-field">
          <input
            type="text"
            name="adminFirstName"
            value={adminFirstName}
            onChange={e => setAdminFirstName(e.target.value)}
          />
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
  );
};

export default compose(
  withFirestore,
  connect(state => ({
    users: state.firestore.ordered.users
  }))
)(EditProfileDetails);
