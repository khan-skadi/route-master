const initialState = {
  logs: [],
  error: null
};

export default function (state = initialState, action) {
  const { data } = action;
  switch (action.type) {
    case 'ADD_LOG':
      return {
        ...state,
        logs: [...state.logs, action.payload]
      };
    case 'GET_LOG_SUCCESS':
      return {
        ...state
      };
    case 'GET_LOG':
      return {
        ...state,
        data
      };
    default:
      return state;
  }
}
