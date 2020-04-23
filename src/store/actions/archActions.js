// Add arch
export const addArch = arch => (
  dispatch,
  _getState,
  { getFirebase, getFirestore }
) => {
  const firestore = getFirestore();
  const newArch = {
    locationFrom: arch.locationFrom,
    locationTo: arch.locationTo,
    distance: arch.distance,
    postedOn: arch.postedOn,
    postedBy: arch.postedBy,
    attention: arch.attention,
    progress: arch.progress,
    driver: arch.driver,
    price: arch.price,
    date: arch.date
  };
  firestore
    .doc(`/archs/${newArch.locationFrom} ${newArch.locationTo}`)
    .get()
    .then(doc => {
      if (doc.exists) {
        return console.log('This arch already exists');
      } else {
        return firestore
          .doc(`/archs/${newArch.locationFrom} ${newArch.locationTo}`)
          .set(newArch);
      }
    })
    .then(() => {
      dispatch({
        type: 'ADD_ARCH_SUCCESS',
        payload: newArch
      });
      console.log('arch added to firestore and redux');
    })
    .catch(err => {
      console.error('failed to add arch to firestore ', err);
    });
};

// Get archs
export const getArchs = () => (
  dispatch,
  _getState,
  { getFirebase, getFirestore }
) => {
  const firestore = getFirestore();

  firestore
    .collection('archs')
    .get()
    .then(function (querySnapshot) {
      let archs = [];
      querySnapshot.forEach(function (doc) {
        // console.log(doc.id, ' => ', doc.data());
        archs.push(doc.data());
        dispatch({ type: 'GET_ARCHS_SUCCESS', payload: archs });
      });
    })
    .catch(err => {
      console.err('Error getting document: ', err);
    });
};

// Delete arch
export const deleteArch = id => (
  dispatch,
  _getState,
  { getFirebase, getFirestore }
) => {
  const firestore = getFirestore();

  firestore
    .collection('archs')
    .doc(id)
    .delete()
    .then(() => {
      dispatch({ type: 'DELETE_ARCH_SUCCESS', payload: id });
      console.log(`Archived document ${id} deleted`);
    })
    .catch(err => {
      console.error('Failed deleting archived document ', err);
      dispatch({ type: 'DELETE_ARCH_FAIL', payload: err });
    });
};

// Set current arch
export const setCurrentArch = arch => {
  return {
    type: 'SET_CURRENT_ARCH',
    payload: arch
  };
};

// Clear current arch
export const clearCurrentArch = () => {
  return {
    type: 'CLEAR_CURRENT_ARCH'
  };
};

// Get latest archived route
// export const getLatestArch = () => (
//   dispatch,
//   _getState,
//   { getFirebase, getFirestore }
// ) => {
//   const firestore = getFirestore();

//   firestore
//     .collection('archs')
//     .orderBy('date', 'desc')
//     .limit(1)
//     .get()
//     .then(querySnapshot => {
//       let date = [];
//       querySnapshot.forEach(doc => {
//         date.push({
//           date: doc.data().date
//         });
//       });
//       return date;
//     })
//     .catch(err => {
//       console.error(err);
//     });
// };
