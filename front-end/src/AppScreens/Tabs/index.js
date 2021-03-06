import React, { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-vector-icons/Ionicons";

import { useSelector } from "react-redux";

import AppointmentsScreen from './Appointments'
import ProfileScreen from './Profile';
import TimelineScreen from './Timeline'
import MapScreen from './Map'
import EventsScreen from './Events'



const Tab = createBottomTabNavigator()

function App() {
    const tookTest = useSelector(state => state.user.tookTest);
    const { push } = useNavigation();

    useEffect(() => {
        if (!tookTest) 
            push("Questionario");
    }, [ tookTest ]);


    console.log({ tookTest });

  //render(){
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarLabel: () => {
            const names = {
              Timeline: 'Linha do tempo',
              Events: 'Eventos',
              Map: 'Mapa',
              Appointments: 'Compromissos',
              Profile: 'Perfil',
            }

            return <Text style={styles.menuLabels}>{names[route.name]}</Text>
          },
          tabBarIcon: ({ color, size }) => {
            const icons = {
              Timeline: 'home',
              Events: 'barbell-outline',
              Map: 'map-outline',
              Appointments: 'book-outline',
              Profile: 'menu',
            };
      
            return (
              <Icon
                name={icons[route.name]}
                color={color}
                size={size}
              />
            );
          },
        })}
        tabBarOptions={{
            activeTintColor: "#446A9C",
            inactiveTintColor: '#dddddd'
        }}
      >
          <Tab.Screen name="Timeline" component={TimelineScreen} />
          <Tab.Screen name="Events" component={EventsScreen} />
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="Appointments" component={AppointmentsScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
  //}
}

export default App;

const styles = StyleSheet.create({
  menuLabels: {
    fontSize: 10,
    color: 'gray'
  }
})
