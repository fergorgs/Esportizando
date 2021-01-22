import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
//import SignInScreen from './SignIn';
//import SignUpScreen from './SignUp';
// import RecoverScreen from './Recover';
import Login from './Login';
import Register from './Register';

//Defines the navigation inside Login
//It's a stack navigator with 3 main screens
//export default createStackNavigator({
//  SignInScreen,
//  // SignUpScreen,
//  // RecoverScreen
//},
//{
//  initialRouteName: 'SignInScreen',
//});

const Stack = createStackNavigator();


function AuthStack(props) {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode='screen'>
                <Stack.Screen 
                    name='Login' 
                    component={ Login } 
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen 
                    name='Register' 
                    component={ Register } 
                    options={{
                        headerStyle: {
                            backgroundColor: '#FF800'
                        }
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AuthStack;
            
