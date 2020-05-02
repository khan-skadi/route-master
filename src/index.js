import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';
import store from './store/store.js';
import firebase from './wFirebase/firebaseConfig.js';

import PreloadPage from './components/layout/PreloadPage.js';
import Footer from './components/layout/Footer.js';
import App from './App';
import './App.css';

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
  attachAuthIsReady: true
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth);
  if (!isLoaded(auth)) return <PreloadPage />;
  return children;
}

ReactDOM.render(
  [
    <Provider store={store} key="3">
      <ReactReduxFirebaseProvider {...rrfProps} key="4">
        <BrowserRouter key="5">
          <AuthIsLoaded>
            <App key="1" />, <Footer key="2" />
          </AuthIsLoaded>
        </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </Provider>
  ],
  document.getElementById('root')
);
