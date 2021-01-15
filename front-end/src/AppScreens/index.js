import React from 'react'
import { createStackNavigator} from 'react-navigation-stack';
import TabsScreen from './Tabs'
import QuestionnaireScreen from './Questionnaire'


export default createStackNavigator({
  Tabs: {
    screen: TabsScreen,
    navigationOptions: {
      title: "Tabs"
    }
  },
  Questionnaire: {
    screen: QuestionnaireScreen,
    navigationOptions: {
      title: "Questionnaire"
    }
  },
},
{
  initialRouteName: 'Tabs',
  headerMode: 'none'
})