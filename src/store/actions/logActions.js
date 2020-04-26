import firebase from '../../wFirebase/firebaseConfig.js';
import algoliasearch from 'algoliasearch';

const PROJECT_ID = 'truck-dispatcher-6050d'; // Firebase project ID
const ALGOLIA_APP_ID = 'R5EXCHKAF7'; // Algolia app ID
const ALGOLIA_SEARCH_KEY = 'c85e3316e75c5aaecf474076b02144cb'; // Search key for unauth users

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
  try {
    let createdLog = firestore.collection('logs').add(newLog);

    return createdLog;
  } catch (error) {
    console.log(error);
  }
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
export const searchLogs = query => dispatch => {
  const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_SEARCH_KEY);
  const index = client.initIndex('logs');

  let arr = [];

  return index
    .search({
      query
    })
    .then(res => {
      console.log(res);

      arr.push(res.hits);
      dispatch({ type: 'SEARCH_LOGS', payload: arr });
    });
};

// Delete log
export const deleteLog = id => (
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

export const getLogsForDashboard = lastLog => async (dispatch, getState) => {
  let today = new Date();
  const firestore = firebase.firestore();
  const eventsRef = firestore.collection('logs');
  try {
    let querySnap = await eventsRef
      .where('date', '<=', today)
      .orderBy('date')
      .get();

    let logs = [];

    for (let i = 0; i < querySnap.docs.length; i++) {
      let evt = { ...querySnap.docs[i].data(), id: querySnap.docs[i].id };
      logs.push(evt);
    }
    dispatch({ type: 'FETCH_LOGS', payload: logs });

    return querySnap;
  } catch (error) {
    console.log(error);
  }
};
