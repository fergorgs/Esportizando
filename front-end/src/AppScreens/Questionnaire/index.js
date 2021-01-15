import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

const Questionnaire = () => {

    return (
        <View style={styles.container}>
            <Text>
                Questionnaire Screen!!
            </Text>
            <Text>
                Here people will answers questions so we can determine 
                which sports are best suited for them
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


