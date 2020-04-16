import firebase from '../../wFirebase/firebaseConfig.js';

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
      console.log('driver added to firestore and redux');
    })
    .catch(err => {
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
        // console.log(doc.id, ' => ', doc.data());
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
      dispatch({ type: 'SET_AVAILABLE_TRUE', payload: driver });
      console.log('Available status set to True');
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
      dispatch({ type: 'SET_AVAILABLE_FALSE', payload: driver });
      console.log('Available status set to False');
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
