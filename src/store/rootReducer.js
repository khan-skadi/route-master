import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import archReducer from './archReducer.js';
import logReducer from './logReducer.js';
import driverReducer from './driverReducer.js';

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  arch: archReducer,
  log: logReducer,
  driver: driverReducer
});

export default rootReducer;
