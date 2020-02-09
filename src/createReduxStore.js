import { createStore, applyMiddleware } from "redux";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { composeWithDevTools } from "redux-devtools-extension";
import { getFirebase } from "react-redux-firebase";
import firebase from "firebase/app";
import reducer from "./store/reducers/index";
import thunk from "redux-thunk";

const initialState = {};

export default () => {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
      reduxFirestore(firebase)
    )
  );
};
