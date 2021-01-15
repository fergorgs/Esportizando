const fadm = require("firebase-admin");

const accKey = require("./credential/serviceAccountKey.json");

const app  = fadm.initializeApp({
    credential: fadm.credential.cert(accKey)
});

module.exports = app;