import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppointmentsScreen from './Appointments'
import ProfileScreen from './Profile';
import MapScreen from './Map'


// PLACE HOLDER FUNCTIONS
// To be replaced by separet components
function TimelineScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Timeline</Text>
    </View>
  );
}

function EventsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Events</Text>
    </View>
  );
}

// function MapsScreen() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Map</Text>
//       </View>
//     );
// }




const Tab = createBottomTabNavigator();

export default class App extends Component {

  render(){
    return (
        <Tab.Navigator>
          <Tab.Screen name="Timeline" component={TimelineScreen} />
          <Tab.Screen name="Events" component={EventsScreen} />
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="Appointments" component={AppointmentsScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
  }
}


// const styles = StyleSheet.create({
//     container: {
//         flex:1,
//         width:Dimensions.get("window").width,
//         alignItems:"center",
//         marginTop: 200,
//         marginLeft: 30,
//         marginRight: 30,
//     },
// })
