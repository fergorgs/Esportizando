import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


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

function MapsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Map</Text>
      </View>
    );
}

function AppointmentsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Next appointments</Text>
      </View>
    );
}

function ProfileScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile</Text>
      </View>
    );
}


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Timeline" component={TimelineScreen} />
        <Tab.Screen name="Events" component={EventsScreen} />
        <Tab.Screen name="Map" component={MapsScreen} />
        <Tab.Screen name="Appointments" component={AppointmentsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
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