import React, { Component } from 'react';
import { View, Text, Header, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SubscribedEventsScreen from './SubscribedEventsScreen'
import OwnEventsScreen from './OwnEventsScreen';

const Tab = createMaterialTopTabNavigator();

export default class Appointments extends Component {
  
  render(){
    return (
      <Tab.Navigator>
        <Tab.Screen name="Eventos Inscritos" component={SubscribedEventsScreen} />
        <Tab.Screen name="Meus Eventos" component={OwnEventsScreen}/>
      </Tab.Navigator>
    );
  }
}



//const Stack = createStackNavigator();
//
//export default class MyStack extends Component {
//  
//  render(){
//    return (
//      <Stack.Navigator>
//        <Stack.Screen name="Compromissos" component={Appointments} />
//      </Stack.Navigator>
//    );
//  }
//}
