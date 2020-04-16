import {
  GET_ROUTES,
  ADD_ROUTE,
  DELETE_ROUTE,
  UPDATE_ROUTE,
  ROUTES_ERROR,
  SET_CURRENT_ROUTE,
  CLEAR_CURRENT_ROUTE,
  SET_LOADING
} from "../actions/types";

const initialState = {
  routes: null,
  currentRoute: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ROUTES:
      return {
        ...state,
        routes: action.payload,
        loading: false
      };
    case ADD_ROUTE:
      return {
        ...state,
        routes: [...state.routes, action.payload],
        loading: false
      };
    case DELETE_ROUTE:
      return {
        ...state,
        routes: state.routes.filter(route => route.id !== action.payload),
        loading: false
      };
    case UPDATE_ROUTE:
      return {
        ...state,
        routes: state.routes.map(route =>
          route.id === action.payload.id ? action.payload : route
        )
      };
    case SET_CURRENT_ROUTE:
      return {
        ...state,
        currentRoute: action.payload
      };
    case CLEAR_CURRENT_ROUTE:
      return {
        ...state,
        currentRoute: null
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case ROUTES_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};
