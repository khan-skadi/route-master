import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import { reducer as toastrReducer } from 'react-redux-toastr';
import archReducer from './archReducer.js';
import logReducer from './logReducer.js';
import driverReducer from './driverReducer.js';
import authReducer from './authReducer.js';
import asyncReducer from './asyncReducer.js';

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  arch: archReducer,
  log: logReducer,
  driver: driverReducer,
  auth: authReducer,
  async: asyncReducer,
  toastr: toastrReducer
});

export default rootReducer;
