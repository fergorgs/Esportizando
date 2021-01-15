import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

const Questionnaire = () => {

    return (
        <View style={styles.container}>
            <Text>
                Tabs Screen
            </Text>
            <Text>
                Here will be located the tabs of the app (map, profile, events, timeline...)   
            </Text>
        </View>
    )
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