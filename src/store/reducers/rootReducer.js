import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import archReducer from './archReducer.js';
import logReducer from './logReducer.js';
import driverReducer from './driverReducer.js';
import authReducer from './authReducer.js';

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  arch: archReducer,
  log: logReducer,
  driver: driverReducer,
  auth: authReducer
});

export default rootReducer;
