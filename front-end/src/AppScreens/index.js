import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import TabsScreen from './Tabs'
import QuestionnaireScreen from './Questionnaire'
import NewEventScreen from './Cards/NewEventScreen'
import EventCardScreen from './Cards/EventCardScreen'


const Stack = createStackNavigator();

export default class BaseStack extends Component {
  
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Tabs" component={TabsScreen} headerMode="none"/>
          <Stack.Screen name="Questionário" component={QuestionnaireScreen} />
          <Stack.Screen name="Novo Evento" component={NewEventScreen} />
          <Stack.Screen name="Evento" component={EventCardScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}