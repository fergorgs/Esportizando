import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import AuthNavigator from './Login';
import AppNavigator from './AppScreens';
import Loading from './Loading';

import { auth } from './auth/fire';

//Switch Navigator for the 3 mains screens of the app
//Defines the inital screen to be displayed and the app containers
//const AppNavigator = createSwitchNavigator({
//  LoginScreen,
//  AppScreen,
//  LoadingScreen
//},
//{
//  initialRouteName: 'LoadingScreen',
//});

//export default createAppContainer(AppNavigator);
function Switch(props) {
    const token = useSelector(state => state.auth.token);
    const dispatch = useDispatch();
    
    const [ loading, setLoading ] = useState(true);

    auth.onAuthStateChanged(async (user) => {
        const token = await user?.getIdToken();

        if (token)
            dispatch({
                type: 'SIGN_IN',
                payload: token
            });
        else
            dispatch({
                type: 'SIGN_OUT'
            });

        setLoading(false);
    });

    if (loading) 
        return <Loading />

    if (!token)
        return <AuthNavigator />
    
    return <AppNavigator />


}

export default Switch;
