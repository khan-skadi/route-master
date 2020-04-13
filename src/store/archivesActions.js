export const addArchive = (arch) => ({
  type: 'ADD_ARCH',
  arch
});

export const createArchive = (archive) => {
  return (dispatch, getState, getFirestore) => {
    const firestore = getFirestore;

    firestore
      .collection('archs')
      .add({
        ...archive,
        locationFrom: archive.locationFrom,
        locationTo: archive.locationTo,
        distance: archive.distance,
        postedBy: archive.postedBy
      })
      .then(() => {
        dispatch({ type: 'CREATE_ARCHIVE_SUCCESS', payload: archive });
      })
      .catch((err) => {
        dispatch({ type: 'CREATE_ARCHIVE_ERROR' }, err);
      });
  };
};
