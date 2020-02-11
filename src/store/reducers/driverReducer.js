import {
  SET_LOADING,
  GET_DRIVERS,
  ADD_DRIVER,
  UPDATE_DRIVER,
  DELETE_DRIVER,
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
    // case UPDATE_DRIVER:
    //   return {
    //     ...state,
    //     drivers: state.drivers.map(driver => {
    //       if (driver.id === action.payload.id) {
    //         return [...driver, action.payload];
    //       } else {
    //         return driver;
    //       }
    //     })
    //   };
    case UPDATE_DRIVER:
      return {
        ...state,
        drivers: state.drivers.map(driver =>
          driver.id === action.payload.id ? action.payload : driver
        )
      };
    case "CREATE_DRIVER":
      console.log("created driver", action.driver);
      return state;
    case "CREATE_DRIVER_ERROR":
      console.log("create driver error", action.err);
      return state;
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case DRIVERS_ERROR:
      console.log(action.payload);
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
