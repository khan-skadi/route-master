import {
  GET_DRIVERS,
  ADD_DRIVER,
  DELETE_DRIVER,
  UPDATE_DRIVER,
  SET_CURRENT_DRIVER,
  CLEAR_CURRENT_DRIVER,
  SET_LOADING,
  DRIVERS_ERROR
} from "./types";

export const getDrivers = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch("/drivers");
    const data = await res.json();

    dispatch({
      type: GET_DRIVERS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: DRIVERS_ERROR,
      payload: err.response.statusText
    });
  }
};

export const addDriver = driver => async dispatch => {
  try {
    setLoading();

    const res = await fetch("/drivers", {
      method: "POST",
      body: JSON.stringify(driver),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();

    dispatch({
      type: ADD_DRIVER,
      payload: data
    });
    console.log(driver);
  } catch (err) {
    console.log("err response", err);
    dispatch({
      type: DRIVERS_ERROR,
      payload: err.response.statusText
    });
  }
};

export const deleteDriver = id => async dispatch => {
  try {
    setLoading();

    await fetch(`/drivers/${id}`, {
      method: "DELETE"
    });

    dispatch({
      type: DELETE_DRIVER,
      payload: id
    });
  } catch (err) {
    console.log("err response", err);
    dispatch({
      type: DRIVERS_ERROR,
      payload: err.response.statusText
    });
  }
};

export const updateDriver = driver => async dispatch => {
  try {
    setLoading();

    const res = await fetch(`/drivers/${driver.id}`, {
      method: "PUT",
      body: JSON.stringify(driver),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await res.json();

    dispatch({
      type: UPDATE_DRIVER,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: DRIVERS_ERROR,
      payload: err.response.statusText
    });
  }
};

export const setCurrentDriver = driver => {
  return {
    type: SET_CURRENT_DRIVER,
    payload: driver
  };
};

export const clearCurrentDriver = () => {
  return {
    type: CLEAR_CURRENT_DRIVER
  };
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
