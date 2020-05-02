import firebase from '../../wFirebase/firebaseConfig.js';
import { toastr } from 'react-redux-toastr';

// Add driver
export const addDriver = driver => (
  dispatch,
  _getState,
  { getFirebase, getFirestore }
) => {
  const firestore = getFirestore();
  const newDriver = {
    firstName: driver.firstName,
    lastName: driver.lastName,
    email: driver.email,
    address: driver.address,
    phoneNumber: driver.phoneNumber,
    birthYear: driver.birthYear,
    hourlyRate: driver.hourlyRate,
    license: driver.license,
    available: driver.available,
    completedRoutes: driver.completedRoutes,
    incompleteRoutes: driver.incompleteRoutes,
    imageUrl: driver.imageUrl
  };

  firestore
    .doc(`/drivers/${newDriver.firstName} ${newDriver.lastName}`)
    .get()
    .then(doc => {
      if (doc.exists) {
        return console.log('This name already exists');
      } else {
        return firestore
          .doc(`/drivers/${newDriver.firstName} ${newDriver.lastName}`)
          .set(newDriver);
      }
    })
    .then(() => {
      dispatch({
        type: 'ADD_DRIVER',
        payload: newDriver
      });
      toastr.success('Success!', 'Driver added successfully!');
    })
    .catch(err => {
      toastr.error('Oops!', 'Something went wrong.');
      console.error('failed to add driver to firestore ', err);
    });
};

// Get drivers
export const getDrivers = () => (
  dispatch,
  _getState,
  { getFirebase, getFirestore }
) => {
  const firestore = getFirestore();

  firestore
    .collection('drivers')
    .get()
    .then(function (querySnapshot) {
      let drivers = [];
      querySnapshot.forEach(function (doc) {
        drivers.push(doc.data());
        dispatch({ type: 'GET_DRIVERS_SUCCESS', payload: drivers });
      });
    })
    .catch(err => {
      console.err('Error getting document: ', err);
    });
};

// Set available = true
export const setAvailableTrue = driver => (
  dispatch,
  _getState,
  { getFirebase, getFirestore }
) => {
  const firestore = getFirestore();
  const driverRefFS = driver.firstName.concat(` ${driver.lastName}`);
  const driverRef = firestore.collection('drivers').doc(driverRefFS);

  driverRef
    .update({
      available: true
    })
    .then(() => {
      toastr.info(`${driverRefFS} is now available`);
      dispatch({ type: 'SET_AVAILABLE_TRUE', payload: driver });
    })
    .catch(err => {
      console.error('Failed to change available status ', err);
    });
};

// Set available = false
export const setAvailableFalse = driver => (
  dispatch,
  _getState,
  { getFirebase, getFirestore }
) => {
  const firestore = getFirestore();
  const driverRefFS = driver.firstName.concat(` ${driver.lastName}`);
  const driverRef = firestore.collection('drivers').doc(driverRefFS);

  driverRef
    .update({
      available: false
    })
    .then(() => {
      toastr.info(`${driverRefFS} is now En Route`);
      dispatch({ type: 'SET_AVAILABLE_FALSE', payload: driver });
    })
    .catch(err => {
      console.error('Failed to change available status ', err);
    });
};

// Add completed log
export const addCompletedRoute = (driver, log) => (
  dispatch,
  _getState,
  { getFirebase, getFirestore }
) => {
  const firestore = getFirestore();
  const driverRef = driver.firstName.concat(` ${driver.lastName}`);

  firestore
    .collection('drivers')
    .doc(driverRef)
    .update({
      completedRoutes: firebase.firestore.FieldValue.arrayUnion(log)
    })
    .catch(err => {
      console.error('Error adding completedRoute: ', err);
    });
};

// Set current driver
export const setCurrentDriver = driver => {
  return {
    type: 'SET_CURRENT_DRIVER',
    payload: driver
  };
};

// Clear current driver
export const clearCurrentDriver = () => {
  return {
    type: 'CLEAR_CURRENT_DRIVER'
  };
};

// Update driver profile info
export const updateDriverProfile = driver => (
  dispatch,
  _getState,
  { getFirebase, getFirestore }
) => {
  const firestore = getFirestore();

  firestore
    .collection('drivers')
    .doc(driver.id)
    .update({
      ...driver
    })
    .then(() => {
      toastr.success('Success!', 'Driver profile updated.');
      dispatch({ type: 'UPDATE_DRIVER_PROFILE', payload: driver });
    })
    .catch(err => {
      toastr.error('Oops', 'Something went wrong.');
      console.error('Error updating driver profile: ', err);
    });
};

// Delete driver
export const deleteDriver = driver => (
  dispatch,
  _getState,
  { getFirebase, getFirestore }
) => {
  const firestore = getFirestore();
  const id = driver.firstName + ' ' + driver.lastName;

  firestore
    .collection('drivers')
    .doc(id)
    .delete()
    .then(() => {
      dispatch({ type: 'ASYNC_ACTION_START' });
      toastr.success('Success!', 'Driver deleted!');
      dispatch({ type: 'DELETE_DRIVER_SUCCESS', payload: driver.id });
      dispatch({ type: 'ASYNC_ACTION_FINISH' });
    })
    .catch(err => {
      toastr.error('Oops!', 'Something went wrong.');
      console.error('Failed deleting driver.', err);
      dispatch({ type: 'DELETE_DRIVER_FAIL', payload: err });
    });
};
