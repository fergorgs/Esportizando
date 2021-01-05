import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from './Login';
import AppScreen from './AppScreens';
import LoadingScreen from './Loading'

//Switch Navigator for the 3 mains screens of the app
//Defines the inital screen to be displayed and the app containers
const AppNavigator = createSwitchNavigator({
  LoginScreen,
  AppScreen,
  LoadingScreen
},
{
  initialRouteName: 'LoadingScreen',
});

export default createAppContainer(AppNavigator);