const initialState = {
  logs: [],
  current: null,
  error: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'FETCH_LOGS':
      return {
        ...state,
        logs: action.payload
      };
    case 'ADD_LOG':
      return {
        ...state,
        logs: [...state.logs, action.payload]
      };
    case 'GET_LOGS_SUCCESS':
      return {
        ...state,
        logs: action.payload
      };
    case 'DELETE_LOG_SUCCESS':
      return {
        ...state,
        logs: state.logs.filter(log => log.id !== action.payload),
        error: null
      };
    case 'UPDATE_LOG_SUCCESS':
      return {
        ...state,
        logs: state.logs.map(log =>
          log.id === action.payload.id ? action.payload : log
        )
      };
    case 'DELETE_LOG_FAIL':
      return {
        ...state,
        error: action.payload
      };
    case 'SET_CURRENT_LOG':
      return {
        ...state,
        current: action.payload
      };
    case 'CLEAR_CURRENT_LOG':
      return {
        ...state,
        current: null
      };
    case 'SEARCH_LOGS':
      return {
        ...state,
        logs: action.payload
      };
    default:
      return state;
  }
}
