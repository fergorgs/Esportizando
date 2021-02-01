import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import QuestionsScreen from './QuestionsScreen'
import ResultScreen from './ResultScreen'

const Stack = createStackNavigator();

const Questionnaire = () => {

    return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Questions" component={QuestionsScreen} headerMode="none"/>
      <Stack.Screen name="Result" component={ResultScreen} />
    </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        width:Dimensions.get("window").width,
        alignItems:"center",
        marginTop: 200,
        marginLeft: 30,
        marginRight: 30,
    },
})

export default Questionnaire


