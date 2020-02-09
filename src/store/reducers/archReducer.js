import {
  SET_LOADING,
  GET_ARCHS,
  ADD_ARCH,
  ARCHS_ERROR,
  SET_CURRENT,
  CLEAR_CURRENT,
  DELETE_ARCH
} from "../actions/types";

const initialState = {
  archs: null,
  current: null,
  error: null,
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_ARCHS:
      return {
        ...state,
        archs: action.payload,
        loading: false
      };
    case ADD_ARCH:
      return {
        ...state,
        archs: [...state.archs, action.payload],
        loading: false
      };
    case DELETE_ARCH:
      return {
        ...state,
        archs: state.archs.filter(arch => arch.id !== action.payload),
        loading: false
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    case ARCHS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
