const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   response.send("Hello, ninjas!");
// });

exports.onFileChange = functions.storage.object().onWrite(event => {
  console.log(event);
  return;
});
