const initialState = {
  archs: [],
  current: null,
  error: null
};

const archReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ARCH_SUCCESS':
      return {
        ...state,
        archs: [...state.archs, action.payload],
        error: null
      };
    case 'GET_ARCHS_SUCCESS':
      return {
        ...state,
        archs: action.payload,
        error: null
      };
    case 'DELETE_ARCH_SUCCESS':
      return {
        ...state,
        archs: state.archs.filter(arch => arch.id !== action.payload),
        error: null
      };
    case 'DELETE_ARCH_FAIL':
      return {
        ...state,
        error: action.payload
      };
    case 'SET_CURRENT_ARCH':
      return {
        ...state,
        current: action.payload
      };
    case 'CLEAR_CURRENT_ARCH':
      return {
        ...state,
        current: null
      };
    default:
      return state;
  }
};

export default archReducer;
