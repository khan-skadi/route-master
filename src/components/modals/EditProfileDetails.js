import React, { useState, useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withFirestore, isLoaded, isEmpty } from "react-redux-firebase";
import { db } from "../../index";

const EditProfileDetails = ({ firestore, profile, users }) => {
  const [adminFirstName, setAdminFirstName] = useState("");
  const [adminLastName, setAdminLastName] = useState("");
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    firestore.get("users");
    setAdminFirstName(profile.firstName);
    setAdminLastName(profile.lastName);
    //eslint-disable-next-line
  }, [profile]);

  const user = !isLoaded(users)
    ? "Loading"
    : isEmpty(users)
    ? "Todo list is empty"
    : users.filter(g => g.firstName === firestore.ordered.users.);
  console.log(user);
  console.log(currentUser);
  console.log(profile);

  const onSubmit = () => {
    const userRef = db.collection("users").doc(user[0]);

    return userRef
      .update({
        firstName: adminFirstName,
        lastName: adminLastName,
        initials: adminFirstName[0] + adminLastName[0]
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
            value={adminFirstName || ""}
            onChange={e => setAdminFirstName(e.target.value)}
          />
        </div>

        <div className="input-field">
          <input
            type="text"
            name="adminLastName"
            value={adminLastName || ""}
            onChange={e => setAdminLastName(e.target.value)}
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
