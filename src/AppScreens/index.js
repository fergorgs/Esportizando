import { createDrawerNavigator} from 'react-navigation-drawer';
import { Text } from 'react-native';
import React from 'react';


//Index for all the main screens of the App
//Defines the Drawer Navigator
/*Screens:
  Profile Screen
  Achievements Screen
  Activities Screen
  Ranking Screen
  Statistics Screen
  Settings Screen
*/


const AppScreen = () => {
  return (
    <Text style={{
      height:45,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:30,
      marginBottom:20,
      width:250,
      borderRadius:30,
      backgroundColor: "#e93766",
    }}>
      Hello, welcome to the app's main screen
    </Text>
  );
}

export default AppScreen;
// export default createDrawerNavigator({
  
  // this is where the views from "student", "teacher" and "property owner" must be added

// },
// {

// });