import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import logReducer from "./logReducer";
import techReducer from "./techReducer";
import archReducer from "./archReducer";
import authReducer from "./authReducer";
import driverReducer from "./driverReducer";

export default combineReducers({
  auth: authReducer,
  log: logReducer,
  tech: techReducer,
  arch: archReducer,
  driver: driverReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});
