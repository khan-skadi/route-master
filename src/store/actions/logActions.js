// import firebase from '../../wFirebase/firebaseConfig.js';

// Add log
export const addLog = log => (
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
    .collection('logs')
    .add({ ...log })
    // .doc(`/logs/${newLog.locationFrom} ${newLog.locationTo}`)
    // .get()
    // .then(doc => {
    //   if (doc.exists) {
    //     return console.log('This log already exists');
    //   } else {
    //     return firestore
    //       .doc(`/logs/${newLog.locationFrom} ${newLog.locationTo}`)
    //       .set(newLog);
    //   }
    // })
    .then(() => {
      dispatch({
        type: 'ADD_LOG',
        payload: newLog
      });
      console.log('log added to firestore and redux');
    })
    .catch(err => {
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
    .orderBy('price', 'desc')
    .get()
    .then(function (querySnapshot) {
      let logs = [];
      querySnapshot.forEach(function (doc) {
        // console.log(doc.id, ' => ', doc.data());
        logs.push(doc.data());
      });
      return logs;
    })
    .then(logs => {
      dispatch({ type: 'GET_LOGS_SUCCESS', payload: logs });
    })
    .catch(err => {
      console.err('Error getting document: ', err);
    });
};

// Update log
export const updateLog = log => (
  dispatch,
  _getState,
  { getFirebase, getFirestore }
) => {
  const firestore = getFirestore();

  firestore
    .collection('logs')
    .doc(log.id)
    .update({
      ...log
    })
    .then(() => {
      dispatch({ type: 'UPDATE_LOG_SUCCESS', payload: log });
    })
    .catch(err => {
      console.error('Error updating Log: ', err);
    });
};

// Search logs
export const searchLogs = text => (
  dispatch,
  _getState,
  { getFirebase, getFirestore }
) => {
  const firestore = getFirestore();

  firestore
    .collection('logs')
    // .where('id', '==', text)
    .orderBy('price')
    .get()
    .then(data => {
      data.docs.forEach(doc => {
        console.log(doc);
      });
      // dispatch({
      //   type: 'SEARCH_LOGS',
      //   payload: doc
      // });
    });
  // .catch(err => {
  //   console.error('Something went wrong: ', err);
  // });
};

// Delete log
export const deleteLog = id => (
  dispatch,
  _getState,
  { getFirebase, getFirestore }
) => {
  const firestore = getFirestore();
  // const document = firestore.doc(`/logs/${id.locationFrom} ${id.locationTo}`);

  // document
  //   .get()
  //   .then(doc => {
  //     if (!doc.exists) {
  //       return 'Log not found';
  //     }
  //     return document.delete();
  //   })
  //   .then(() => {
  //     dispatch({ type: 'DELETE_LOG_SUCCESS', payload: id });
  //     console.log(`Log document ${id} deleted`);
  //   })
  //   .catch(err => {
  //     console.error('Failed deleting log document ', err);
  //     dispatch({ type: 'DELETE_LOG_FAIL', payload: err });
  //   });

  firestore
    .collection('logs')
    .doc(id)
    .delete()
    .then(() => {
      dispatch({ type: 'DELETE_LOG_SUCCESS', payload: id });
      console.log(`Log document ${id} deleted`);
    })
    .catch(err => {
      console.error('Failed deleting log document ', err);
      dispatch({ type: 'DELETE_LOG_FAIL', payload: err });
    });
};

// Set current log
export const setCurrentLog = log => {
  return {
    type: 'SET_CURRENT_LOG',
    payload: log
  };
};

// Clear current log
export const clearCurrentLog = () => {
  return {
    type: 'CLEAR_CURRENT_LOG'
  };
};
