import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import archivesReducer from './archivesReducer.js';
import logReducer from './logReducer.js';

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  archives: archivesReducer,
  log: logReducer
});

export default rootReducer;
