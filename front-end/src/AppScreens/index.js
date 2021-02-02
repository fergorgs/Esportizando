import React, { useState, useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import TabsScreen from './Tabs'
import QuestionnaireScreen from './Questionnaire'
import NewEventScreen from './Cards/NewEventScreen'
import NewEventCard from './Cards/NewEventCard';
import EventCardScreen from './Cards/EventCardScreen'
import SportCardScreen from './Cards/SportCardScreen'
import LocationCardScreen from './Cards/LocationCardScreen'

import { useSelector } from "react-redux";

const Stack = createStackNavigator();

function BaseStack() {

    return (
        <NavigationContainer>
            <Stack.Navigator 
                //initialRouteName={ route } 
                headerMode="none"
            >
                <Stack.Screen name="Tabs" component={TabsScreen} headerMode="none"/>
                <Stack.Screen name="Questionario" component={QuestionnaireScreen} headerMode="none"/>
                <Stack.Screen name="Novo Evento" component={NewEventCard} />
                <Stack.Screen name="Evento" component={EventCardScreen} />
                <Stack.Screen name="Esporte" component={SportCardScreen} />
                <Stack.Screen name="Local" component={LocationCardScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default BaseStack;
