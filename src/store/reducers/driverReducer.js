const initialState = {
  drivers: [],
  current: null,
  error: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'ADD_DRIVER':
      return {
        ...state,
        drivers: [...state.drivers, action.payload]
      };
    case 'GET_DRIVERS_SUCCESS':
      return {
        ...state,
        drivers: action.payload
      };
    case 'SET_AVAILABLE_TRUE':
    case 'SET_AVAILABLE_FALSE':
      return {
        ...state,
        drivers: state.drivers.map(driver =>
          `${driver.firstName} ${driver.lastName}` === action.payload
            ? action.payload
            : driver
        )
      };
    case 'UPDATE_DRIVER_PROFILE':
      return {
        ...state,
        drivers: state.drivers.map(driver =>
          driver.id === action.payload.id ? action.payload : driver
        )
      };
    case 'DELETE_DRIVER_SUCCESS':
      return {
        ...state,
        drivers: state.drivers.filter(driver => driver.id !== action.payload),
        error: null
      };
    case 'DELETE_DRIVER_FAIL':
      return {
        ...state,
        error: action.payload
      };
    case 'SET_CURRENT_DRIVER':
      return {
        ...state,
        current: action.payload
      };
    case 'CLEAR_CURRENT_DRIVER':
      return {
        ...state,
        current: null
      };
    default:
      return state;
  }
}
