import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase/app";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { useSelector } from "react-redux";
import { isLoaded } from "react-redux-firebase";
import Footer from "./components/layout/Footer";
import createReduxStore from "./createReduxStore";
import Preloader from "./components/layout/Preloader";
import App from "./App";

import "./App.css";
import "./fonts/LeelawUI.ttf";
import "./fonts/malgun.ttf";
import "./fonts/LittlePat.ttf";

import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth);
  if (!isLoaded(auth)) return <Preloader />;
  return children;
}

const fbConfig = {
  apiKey: "AIzaSyA4y8VjlODcq48s79crUx1eypGJ0o0L7pI",
  authDomain: "truck-dispatcher-6050d.firebaseapp.com",
  databaseURL: "https://truck-dispatcher-6050d.firebaseio.com",
  projectId: "truck-dispatcher-6050d",
  storageBucket: "truck-dispatcher-6050d.appspot.com",
  messagingSenderId: "399693021654",
  appId: "1:399693021654:web:1d74ce0279116e79e0a477",
  measurementId: "G-D21MTX0DNK"
}; // object containing Firebase config

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true
}; // react-redux-firebase config

firebase.initializeApp(fbConfig);
const db = firebase.firestore();
const storage = firebase.storage();

export { db, storage, firebase as default };

const store = createReduxStore();

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <BrowserRouter>
        <AuthIsLoaded>
          <App key="1" />, <Footer key="2" />
        </AuthIsLoaded>
      </BrowserRouter>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);
