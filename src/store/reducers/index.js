import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import logReducer from "./logReducer";
import archReducer from "./archReducer";
import authReducer from "./authReducer";
import driverReducer from "./driverReducer";
import routeReducer from "./routeReducer";

export default combineReducers({
  auth: authReducer,
  log: logReducer,
  arch: archReducer,
  driver: driverReducer,
  route: routeReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});
