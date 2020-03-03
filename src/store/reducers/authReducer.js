const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("login error");
      return {
        ...state,
        authError: "Login failed"
      };
    case "LOGIN_SUCCESS":
      console.log("login success");
      return {
        ...state,
        authError: null
      };
    case "SIGNOUT_SUCCESS":
      console.log("signout success");
      return state;
    case "SIGNUP_SUCCESS":
      console.log("signup success");
      return {
        ...state,
        authError: null
      };
    case "SIGNUP_ERROR":
      console.log("signup error");
      return {
        ...state,
        authError: action.err.message
      };
    case "CHANGE_IMAGE_SUCCESS":
      console.log("change image success");
      return {
        ...state,
        authError: null
      };
    case "CHANGE_IMAGE_ERROR":
      console.log("change image error");
      return {
        ...state,
        authError: "change image failed"
      };
    default:
      return state;
  }
};

export default authReducer;
