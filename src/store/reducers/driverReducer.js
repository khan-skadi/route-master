import {
  GET_DRIVERS,
  ADD_DRIVER,
  UPDATE_DRIVER,
  DELETE_DRIVER,
  SET_CURRENT_DRIVER,
  CLEAR_CURRENT_DRIVER,
  SET_LOADING,
  DRIVERS_ERROR
} from "../actions/types";

const initialState = {
  drivers: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DRIVERS:
      return {
        ...state,
        drivers: action.payload,
        loading: false
      };
    case ADD_DRIVER:
      return {
        ...state,
        drivers: [...state.drivers, action.payload],
        loading: false
      };
    case DELETE_DRIVER:
      return {
        ...state,
        drivers: state.drivers.filter(driver => driver.id !== action.payload),
        loading: false
      };
    case UPDATE_DRIVER:
      return {
        ...state,
        drivers: state.drivers.map(driver =>
          driver.id === action.payload.id ? action.payload : driver
        )
      };
    case SET_CURRENT_DRIVER:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT_DRIVER:
      return {
        ...state,
        current: null
      };
    case DRIVERS_ERROR:
      console.log(action.payload);
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
