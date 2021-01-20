import React from 'react';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./src/store";
import SwitchNavigator from './src';

export default class App extends React.Component {

    render() {
        return (
            <Provider store={ store }>
                <PersistGate //loading={ <Text>Loading</Text> } 
                    persistor={ persistor }
                >
                    <SwitchNavigator />
                </PersistGate>
            </Provider>
        );
    }
}
