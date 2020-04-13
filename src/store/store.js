import { applyMiddleware, compose, createStore } from 'redux';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import firebase from '../wFirebase/firebaseConfig.js';
import rootReducer from './rootReducer.js';
import thunk from 'redux-thunk';

const initialState = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [thunk.withExtraArgument({ getFirestore })];

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middlewares), reduxFirestore(firebase))
);

export default store;
