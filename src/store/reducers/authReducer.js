const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      return {
        ...state,
        authError: 'Login failed'
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        authError: null
      };
    case 'SIGNOUT_SUCCESS':
      return state;
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        authError: null
      };
    case 'SIGNUP_ERROR':
      return {
        ...state,
        authError: action.err.message
      };
    case 'CHANGE_IMAGE_SUCCESS':
      return {
        ...state,
        authError: null
      };
    case 'CHANGE_IMAGE_ERROR':
      return {
        ...state,
        authError: 'change image failed'
      };
    default:
      return state;
  }
};

export default authReducer;
