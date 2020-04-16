const initialState = {
  drivers: [],
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
    default:
      return state;
  }
}
