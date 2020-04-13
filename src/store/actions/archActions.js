import {
  SET_LOADING,
  GET_ARCHS,
  ADD_ARCH,
  ARCHS_ERROR,
  SET_CURRENT,
  CLEAR_CURRENT,
  DELETE_ARCH,
  ADD_ARCH_START,
  ADD_ARCH_SUCCESS,
  ADD_ARCH_FAIL
} from './types';

// Get archived logs from server
export const getArchs = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch('/archs');
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

// Add archs updated
export const addArchNew = (arch) => ({
  type: 'ADD_ARCH',
  arch
});

export const startAddArch = (archData = {}) => {
  return (dispatch) => {
    // const { title = "", body = "" } = archData;
    // const arch = { title, body };
    const {
      locationFrom = '',
      locationTo = '',
      distance = 0,
      postedOn = '',
      postedBy = '',
      attention = false,
      progress = false,
      driver = '',
      price = 0,
      date = ''
    } = archData;
    const arch = {
      locationFrom,
      locationTo,
      distance,
      postedOn,
      postedBy,
      attention,
      progress,
      driver,
      price,
      date
    };
  };
};

// Add new archive log to server
export const addArch = (arch) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch('/archs', {
      method: 'POST',
      body: JSON.stringify(arch),
      headers: {
        'Content-Type': 'application/json'
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

export const deleteArch = (id) => async (dispatch) => {
  try {
    setLoading();

    await fetch(`/archs/${id}`, {
      method: 'DELETE'
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
export const setCurrent = (arch) => {
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
