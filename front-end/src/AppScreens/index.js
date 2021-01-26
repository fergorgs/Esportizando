import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import TabsScreen from './Tabs'
import QuestionnaireScreen from './Questionnaire'
import NewEventScreen from './Cards/NewEventScreen'
import NewEventCard from './Cards/NewEventCard';
import EventCardScreen from './Cards/EventCardScreen'
import SportCardScreen from './Cards/SportCardScreen'


const Stack = createStackNavigator();

export default class BaseStack extends Component {
  
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Tabs" component={TabsScreen} headerMode="none"/>
          <Stack.Screen name="Questionário" component={QuestionnaireScreen} />
          <Stack.Screen name="Novo Evento" component={NewEventCard} />
          <Stack.Screen name="Evento" component={EventCardScreen} />
          <Stack.Screen name="Esporte" component={SportCardScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
