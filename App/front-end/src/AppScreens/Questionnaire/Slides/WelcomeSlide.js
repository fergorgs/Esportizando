import * as React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native'


const WelcomeSlide = () => {

    return (
        <View style={styles.slide1}>
            <Text style={styles.text}>Olá e bem vindo ao Esportizando!!</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#446a9c',
      padding: 5
    },
    text: {
        marginHorizontal: 50,
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    text2: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
      },
  })

export default WelcomeSlide
