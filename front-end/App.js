import React from 'react';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./src/store";
import SwitchNavigator from './src';
import Loading from './src/Loading';
import { setup } from './src/api';

setup(store);

export default class App extends React.Component {

    render() {
        return (
            <Provider store={ store }>
                <PersistGate loading= { <Loading /> } 
                    persistor={ persistor }
                >
                    <SwitchNavigator />
                </PersistGate>
            </Provider>
        );
    }
}
