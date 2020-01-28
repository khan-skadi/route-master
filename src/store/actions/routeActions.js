import {
  GET_ROUTES,
  ADD_ROUTE,
  DELETE_ROUTE,
  UPDATE_ROUTE,
  ROUTES_ERROR
} from "./types";

export const getRoutes = () => async dispatch => {
  try {
    const res = await fetch("/routes");
    const data = await res.json();

    dispatch({
      type: GET_ROUTES,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: ROUTES_ERROR,
      payload: err.response.statusText
    });
  }
};

export const addRoute = route => async dispatch => {
  try {
    const res = await fetch("/routes", {
      method: "POST",
      body: JSON.stringify(route),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();

    dispatch({
      type: ADD_ROUTE,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: ROUTES_ERROR,
      payload: err.response.statusText
    });
  }
};

export const deleteRoute = id => async dispatch => {
  try {
    await fetch(`/routes/${id}`, {
      method: "DELETE"
    });

    dispatch({
      type: DELETE_ROUTE,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: ROUTES_ERROR,
      payload: err.response.data
    });
  }
};

export const updateRoute = route => async dispatch => {
  try {
    const res = await fetch(`/routes/${route.id}`, {
      method: "PUT",
      body: JSON.stringify(route),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await res.json();

    dispatch({
      type: UPDATE_ROUTE,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: ROUTES_ERROR,
      payload: err.response.statusText
    });
  }
};
