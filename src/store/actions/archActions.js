import {
  SET_LOADING,
  GET_ARCHS,
  ADD_ARCH,
  ARCHS_ERROR,
  SET_CURRENT,
  CLEAR_CURRENT,
  DELETE_ARCH
} from "./types";

// Get archived logs from server
export const getArchs = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch("/archs");
    const data = await res.json();

    dispatch({
      type: GET_ARCHS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: ARCHS_ERROR,
      payload: err.response.statusText
    });
  }
};

// Add new archive log to server
export const addArch = arch => async dispatch => {
  try {
    setLoading();

    const res = await fetch("/archs", {
      method: "POST",
      body: JSON.stringify(arch),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();

    dispatch({
      type: ADD_ARCH,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: ARCHS_ERROR,
      payload: err.response.statusText
    });
  }
};

export const deleteArch = id => async dispatch => {
  try {
    setLoading();

    await fetch(`/archs/${id}`, {
      method: "DELETE"
    });

    dispatch({
      type: DELETE_ARCH,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: ARCHS_ERROR,
      payload: err.response.data
    });
  }
};

// Set current archive
export const setCurrent = arch => {
  return {
    type: SET_CURRENT,
    payload: arch
  };
};

export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT
  };
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
