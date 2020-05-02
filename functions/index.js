const functions = require('firebase-functions');
const algoliasearch = require('algoliasearch');
const ALGOLIA_ID = functions.config().algolia.app_id;
const ALGOLIA_ADMIN_KEY = functions.config().algolia.api_key;
const ALGOLIA_INDEX_NAME = 'logs';
const client = algoliasearch(ALGOLIA_ID, ALGOLIA_ADMIN_KEY);

exports.onNoteCreated = functions.firestore
  .document('logs/{logId}')
  .onCreate((snap, context) => {
    const log = snap.data();

    log.objectID = context.params.logId;

    const index = client.initIndex(ALGOLIA_INDEX_NAME);
    return index.saveObject(log);
  });

const admin = require('firebase-admin');
admin.initializeApp();
