import { createStackNavigator} from 'react-navigation-stack';
import SignInScreen from './SignIn';
// import SignUpScreen from './SignUp';
// import RecoverScreen from './Recover';

//Defines the navigation inside Login
//It's a stack navigator with 3 main screens
export default createStackNavigator({
  SignInScreen,
  // SignUpScreen,
  // RecoverScreen
},
{
  initialRouteName: 'SignInScreen',
});