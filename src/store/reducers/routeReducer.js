import {
  GET_ROUTES,
  ADD_ROUTE,
  DELETE_ROUTE,
  UPDATE_ROUTE,
  ROUTES_ERROR
} from "../actions/types";

const initialState = {
  routes: null
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
