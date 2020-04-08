import { applyMiddleware, compose, createStore } from "redux";
import { getFirebase } from "react-redux-firebase";
import rootReducer from "./rootReducer.js";
import thunk from "redux-thunk";

const initialState = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [thunk.withExtraArgument(getFirebase)];

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
