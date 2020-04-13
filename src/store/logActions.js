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
      querySnapshot
        .forEach(function (doc) {
          console.log(doc.id, ' => ', doc.data());
          console.log(doc);
        })
        .then((log) => {
          dispatch({ type: 'GET_LOG_SUCCESS', payload: log });
        });
    })
    // .then(() => {
    //   dispatch({ type: 'GET_LOG_SUCCESS' });
    // })
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
