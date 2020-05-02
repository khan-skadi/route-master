import firebase from '../../wFirebase/firebaseConfig.js';
import { toastr } from 'react-redux-toastr';

export const signIn = credentials => {
  return (dispatch, getState, { getFirebase }) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        toastr.success('Welcome!', 'Signed in successfully!');
        dispatch({ type: 'LOGIN_SUCCESS' });
      })
      .catch(err => {
        dispatch({ type: 'LOGIN_ERROR', err });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        toastr.success('See you soon!', 'Signed out successfully!');
        dispatch({ type: 'SIGNOUT_SUCCESS' });
      });
  };
};

export const signUp = newUser => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(resp => {
        return firebase
          .firestore()
          .collection('users')
          .doc(resp.user.uid)
          .set({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            initials: newUser.firstName[0] + newUser.lastName[0],
            photoURL:
              'https://firebasestorage.googleapis.com/v0/b/truck-dispatcher-6050d.appspot.com/o/profile-images%2Fno-img.png?alt=media&token=1832d449-a479-49ca-b857-1ccd7536d905'
          });
      })
      .then(() => {
        toastr.success('Welcome!', 'Signed up successfully!');
        dispatch({ type: 'SIGNUP_SUCCESS' });
      })
      .catch(err => {
        dispatch({ type: 'SIGNUP_ERROR', err });
      });
  };
};

export const changeImage = currentUser => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    firebase
      .auth()
      .currentUser.then(res => {
        return firebase
          .firestore()
          .collection('users')
          .doc(res.user.id)
          .update({
            photoURL: currentUser
          });
      })
      .then(() => {
        toastr.success('Success!', 'Image changed successfully!');
        dispatch({ type: 'IMAGE_CHANGE_SUCCESS' });
      })
      .catch(err => {
        toastr.error('Oops!', 'Something went wrong.');
        dispatch({ type: 'IMAGE_CHANGE_ERROR' });
      });
  };
};
