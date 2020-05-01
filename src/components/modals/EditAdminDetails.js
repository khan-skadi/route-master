import React, { useState, useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withFirestore, isLoaded, isEmpty } from 'react-redux-firebase';
import firebase from '../../wFirebase/firebaseConfig.js';

const EditAdminDetails = ({ firestore, profile, users }) => {
  const [adminFirstName, setAdminFirstName] = useState('');
  const [adminLastName, setAdminLastName] = useState('');

  useEffect(() => {
    firestore.get('users');
    if (!profile.isEmpty) {
      setAdminFirstName(profile.firstName);
      setAdminLastName(profile.lastName);
    }

    //eslint-disable-next-line
  }, [profile]);

  const user = !isLoaded(users)
    ? 'Loading'
    : isEmpty(users)
    ? 'User collection is empty'
    : users.filter(g => g.firstName === profile.firstName);

  const onSubmit = () => {
    const userRef = firebase.firestore().collection('users').doc(user[0].id);

    return userRef
      .update({
        firstName: adminFirstName,
        lastName: adminLastName,
        initials: adminFirstName[0] + adminLastName[0]
      })
      .then(() => {
        console.log('Document successfully updated !');
      })
      .catch(error => {
        console.error('Error updating document ', error);
      });
  };

  return (
    <div id="edit-admin-details" className="modal">
      <div className="modal-content" style={modalStyle}>
        <div className="col s6">
          <h4>Edit Admin Profile</h4>
        </div>
        <br />
        <div className="input-field">
          <input
            id="adminFirstName"
            type="text"
            name="adminFirstName"
            value={adminFirstName}
            onChange={e => setAdminFirstName(e.target.value)}
          />
          <label className="focused" htmlFor="adminFirstName">
            First Name
          </label>
        </div>

        <div className="input-field">
          <input
            id="adminLastName"
            name="adminLastName"
            type="text"
            value={adminLastName}
            onChange={e => setAdminLastName(e.target.value)}
          />
          <label className="focused" htmlFor="adminLastName">
            Last Name
          </label>
        </div>
      </div>

      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect blue darken-3 btn"
        >
          Submit
          <i className="material-icons right">send</i>
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: '100%',
  height: '100%'
};

export default compose(
  withFirestore,
  connect(state => ({
    users: state.firestore.ordered.users,
    profile: state.firebase.profile
  }))
)(EditAdminDetails);
