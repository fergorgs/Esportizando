import firebase from "firebase/app";
import "firebase/auth";

import config from "./config.js";

const fire = firebase.initializeApp(config);
const auth = fire.auth();

export {
    fire,
    auth
}

