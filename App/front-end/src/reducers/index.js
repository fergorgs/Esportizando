import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { AsyncStorage } from "react-native";

//import storage from 'redux-persist/lib/storage';

import authReducer from "./auth.js";
import userReducer from "./user.js";

const config = {
    key: "auth",
    storage: AsyncStorage,
    whitelist: [ "auth" ]
}

const reducer = combineReducers({
    auth: authReducer,
    user: userReducer
});

export default persistReducer(config, reducer);
