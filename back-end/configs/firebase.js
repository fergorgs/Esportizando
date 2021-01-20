const fadm = require("firebase-admin");
// const firebase = require("firebase");

const accKey = require("./credential/serviceAccountKey.json");
const firebaseConfig = require("./credential/firebaseConfig.json");

const app  = fadm.initializeApp({
    ...firebaseConfig,
    credential: fadm.credential.cert(accKey)
});

module.exports = app;