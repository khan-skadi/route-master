// Add log
export const addLog = (log) => (
  dispatch,
  _getState,
  { getFirebase, getFirestore }
) => {
  const firestore = getFirestore();
  const newLog = {
    locationFrom: log.locationFrom,
    locationTo: log.locationTo,
    distance: log.distance,
    postedOn: log.postedOn,
    postedBy: log.postedBy,
    attention: log.attention,
    progress: log.progress,
    driver: log.driver,
    price: log.price,
    date: log.date
  };
  firestore
    .doc(`/logs/${newLog.locationFrom} ${newLog.locationTo}`)
    .get()
    .then((doc) => {
      if (doc.exists) {
        return console.log('This log already exists');
      } else {
        return firestore
          .doc(`/logs/${newLog.locationFrom} ${newLog.locationTo}`)
          .set(newLog);
      }
    })
    .then(() => {
      dispatch({
        type: 'ADD_LOG',
        payload: newLog
      });
      console.log('log added to firestore and redux');
    })
    .catch((err) => {
      console.error('failed to add log to firestore ', err);
    });

  // firestore
  //   .collection('logs')
  //   .add({ ...log })
  //   .then((docRef) => {
  //     console.log('Document written with ID: ', docRef.id);
  //     console.log(docRef);
  //     dispatch({
  //       type: 'ADD_LOG',
  //       payload: log
  //     });
  //   })
  //   .catch((err) => {
  //     console.error('Error adding document: ', err);
  //   });
};

// Get logs
export const getLogs = () => (
  dispatch,
  _getState,
  { getFirebase, getFirestore }
) => {
  const firestore = getFirestore();

  firestore
    .collection('logs')
    .get()
    .then(function (querySnapshot) {
      let logs = [];
      querySnapshot.forEach(function (doc) {
        // console.log(doc.id, ' => ', doc.data());
        logs.push(doc.data());
        dispatch({ type: 'GET_LOGS_SUCCESS', payload: logs });
      });
    })
    .catch((err) => {
      console.err('Error getting document: ', err);
    });
};

// Delete log
export const deleteLog = (id) => (
  dispatch,
  _getState,
  { getFirebase, getFirestore }
) => {
  const firestore = getFirestore();

  firestore
    .collection('logs')
    .doc(id)
    .delete()
    .then(() => {
      dispatch({ type: 'DELETE_LOG_SUCCESS', payload: id });
      console.log(`Log document ${id} deleted`);
    })
    .catch((err) => {
      console.error('Failed deleting log document ', err);
      dispatch({ type: 'DELETE_LOG_FAIL', payload: err });
    });
};
