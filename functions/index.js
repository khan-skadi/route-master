const functions = require('firebase-functions');
const admin = require('firebase-admin');
let Promise = require('promise');
const algoliasearch = require('algoliasearch');
admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

exports.addEquipmentToAlgolia = functions.firestore
  .document('logs/{document}')
  .onCreate(event => {
    const data = {
      objectID: event.params.document,
      locationFrom: event.data.data().locationFrom,
      locationTo: event.data.data().locationTo,
      distance: event.data.data().distance,
      driver: event.data.data().driver,
      price: event.data.data().price,
      postedBy: event.data.data().postedBy,
      postedOn: event.data.data().postedOn
    };
    return addToAlgolia(data, 'logs')
      .then(res => console.log('SUCCESS ALGOLIA logs ADD', res))
      .catch(err => console.log('ERROR ALGOLIA logs ADD', err));
  });
// listen for editing a piece of logs in Firestore
exports.editEquipmentToAlgolia = functions.firestore
  .document('logs/{document}')
  .onUpdate(event => {
    console.log('edit event', event.data.data());
    const data = {
      objectID: event.params.document,
      locationFrom: event.data.data().locationFrom,
      locationTo: event.data.data().locationTo,
      distance: event.data.data().distance,
      driver: event.data.data().driver,
      price: event.data.data().price,
      postedBy: event.data.data().postedBy,
      postedOn: event.data.data().postedOn
    };
    console.log('DATA in is', data);
    return editToAlgolia(data, 'logs')
      .then(res => console.log('SUCCESS ALGOLIA logs EDIT', res))
      .catch(err => console.log('ERROR ALGOLIA logs EDIT', err));
  });
// listen for a delete of a piece of logs in Firestore
exports.removeEquipmentFromAlgolia = functions.firestore
  .document('logs/{document}')
  .onDelete(event => {
    const objectID = event.params.document;
    return removeFromAlgolia(objectID, 'logs')
      .then(res => console.log('SUCCESS ALGOLIA logs ADD', res))
      .catch(err => console.log('ERROR ALGOLIA logs ADD', err));
  });
// helper functions for create, edit and delete in Firestore to replicate this in Algolia
const addToAlgolia = (object, indexName) => {
  console.log('GETS IN addToAlgolia');
  console.log('object', object);
  console.log('indexName', indexName);
  const ALGOLIA_ID = functions.config().algolia.app_id;
  const ALGOLIA_ADMIN_KEY = functions.config().algolia.api_key;
  const client = algoliasearch(ALGOLIA_ID, ALGOLIA_ADMIN_KEY);
  const index = client.initIndex(indexName);
  return new Promise((resolve, reject) => {
    index
      .addObject(object)
      .then(res => {
        console.log('res GOOD', res);
        resolve(res);
      })
      .catch(err => {
        console.log('err BAD', err);
        reject(err);
      });
  });
};
const editToAlgolia = (object, indexName) => {
  const ALGOLIA_ID = functions.config().algolia.app_id;
  const ALGOLIA_ADMIN_KEY = functions.config().algolia.api_key;
  const client = algoliasearch(ALGOLIA_ID, ALGOLIA_ADMIN_KEY);
  const index = client.initIndex(indexName);
  return new Promise((resolve, reject) => {
    index
      .saveObject(object)
      .then(res => {
        console.log('res GOOD', res);
        resolve(res);
      })
      .catch(err => {
        console.log('err BAD', err);
        reject(err);
      });
  });
};
const removeFromAlgolia = (objectID, indexName) => {
  const ALGOLIA_ID = functions.config().algolia.app_id;
  const ALGOLIA_ADMIN_KEY = functions.config().algolia.api_key;
  const client = algoliasearch(ALGOLIA_ID, ALGOLIA_ADMIN_KEY);
  const index = client.initIndex(indexName);
  return new Promise((resolve, reject) => {
    index
      .deleteObject(objectID)
      .then(res => {
        console.log('res GOOD', res);
        resolve(res);
      })
      .catch(err => {
        console.log('err BAD', err);
        reject(err);
      });
  });
};
