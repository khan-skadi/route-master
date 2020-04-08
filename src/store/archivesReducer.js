const initialState = {};

const archivesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ARCH":
      return [...state, { ...action.arch }];
    case "CREATE_ARCHIVE_SUCCESS":
      console.log("create archive success");
      return {
        ...state,
        archives: [...state.archives, action.payload],
      };
    case "CREATE_ARCHIVE_ERROR":
      console.log("create archive error");
      return state;
    default:
      return state;
  }
};

export default archivesReducer;
