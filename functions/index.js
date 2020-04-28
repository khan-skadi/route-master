const functions = require('firebase-functions');
const algoliasearch = require('algoliasearch');
const ALGOLIA_ID = functions.config().algolia.app_id;
const ALGOLIA_ADMIN_KEY = functions.config().algolia.api_key;
const ALGOLIA_SEARCH_KEY = functions.config().algolia.search_key;
const ALGOLIA_INDEX_NAME = 'logs';
const client = algoliasearch(ALGOLIA_ID, ALGOLIA_ADMIN_KEY);

exports.onNoteCreated = functions.firestore
  .document('logs/{logId}')
  .onCreate((snap, context) => {
    // Get the log document
    const log = snap.data();

    // Add an 'objectID' field which Algolia requires
    log.objectID = context.params.logId;

    // Write to the algolia index
    const index = client.initIndex(ALGOLIA_INDEX_NAME);
    return index.saveObject(log);
  });
// [END update_index_function]

// [START get_firebase_user]
const admin = require('firebase-admin');
admin.initializeApp();
