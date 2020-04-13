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
    default:
      return state;
  }
}
