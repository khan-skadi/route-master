// Add log
export const addLog = (log) => (
  dispatch,
  _getState,
  { getFirebase, getFirestore }
) => {
  const firestore = getFirestore();

  firestore
    .collection('logs')
    .add({ ...log })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
      console.log(docRef);
    })
    .catch((err) => {
      console.error('Error adding document: ', err);
    });

  dispatch({
    type: 'ADD_LOG',
    payload: log
  });
};

// Get logs
export const getLogs = () => (
  dispatch,
  _getState,
  { getFirebase, getFirestore }
) => {
  const firestore = getFirestore();
  console.log(firestore);

  firestore
    .collection('logs')
    .get()
    .then(function (querySnapshot) {
      let logs = [];
      querySnapshot.forEach(function (doc) {
        console.log(doc.id, ' => ', doc.data());
        logs.push(doc.data());
        dispatch({ type: 'GET_LOG_SUCCESS', payload: logs });
      });
    })
    .catch((err) => {
      console.err('Error getting document: ', err);
    });
};

// Get log success
export const getLogSuccess = (log) => (dispatch) => {
  dispatch({
    type: 'GET_LOG_SUCCESS',
    payload: log
  });
};

// Get log failure
export const getLogFailure = (log) => (dispatch) => {
  dispatch({
    type: 'GET_LOG_FAIL',
    payload: log
  });
};
