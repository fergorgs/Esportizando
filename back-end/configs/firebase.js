const fadm = require("firebase-admin");
// const firebase = require("firebase");

let accKey;
let firebaseConfig;

if(!process.env.DATABASE_URL) {
    accKey = require("./credential/serviceAccountKey.json");
    firebaseConfig = require("./credential/firebaseConfig.json");
} else {
    accKey = {
        type: process.env.FIREBASE_TYPE,
        project_id: process.env.PROJECT_ID,
        private_key_id: process.env.PRIVATE_KEY_ID,
        private_key: process.env.PRIVATE_KEY,
        client_email: process.env.CLIENT_EMAIL,
        client_id: process.env.CLIENT_ID,
        auth_uri: process.env.AUTH_URI,
        token_uri: process.env.TOKEN_URI,
        auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_CERT_URL,
        client_x509_cert_url: process.env.CLIENT_CERT_URL
    };
    firebaseConfig = {
        databaseUrl: process.env.DATABASE_URL
    };
}

const app  = fadm.initializeApp({
    ...firebaseConfig,
    credential: fadm.credential.cert(accKey)
});

module.exports = app;