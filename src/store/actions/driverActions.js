export const getDrivers = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch("/drivers");
    const data = await res.json();

    dispatch({
      type: "GET_DRIVERS",
      payload: data
    });
  } catch (err) {
    dispatch({
      type: "DRIVERS_ERROR",
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
      type: "ADD_DRIVER",
      payload: data
    });
    console.log(driver);
  } catch (err) {
    console.log("err response", err);
    dispatch({
      type: "DRIVERS_ERROR",
      payload: err.response.statusText
    });
  }
};

// export const createDriver = driver => {
//   return (dispatch, getState, { getFirebase, getFirestore }) => {
//     const firestore = getFirestore();
//     firestore
//       .collection("drivers")
//       .add({
//         ...driver,
//         authorFirstName: "Net",
//         authorLastName: "Ninja",
//         authorId: 12345,
//         createdAt: new Date()
//       })
//       .then(() => {
//         dispatch({ type: "CREATE_DRIVER", driver });
//       })
//       .catch(err => {
//         dispatch({ type: "CREATE_DRIVER_ERROR", err });
//       });
//   };
// };

export const deleteDriver = id => async dispatch => {
  try {
    setLoading();

    await fetch(`/drivers/${id}`, {
      method: "DELETE"
    });

    dispatch({
      type: "DELETE_DRIVER",
      payload: id
    });
  } catch (err) {
    console.log("err response", err);
    dispatch({
      type: "DRIVERS_ERROR",
      payload: err.response.statusText
    });
  }
};

export const setLoading = () => {
  return {
    type: "SET_LOADING"
  };
};
