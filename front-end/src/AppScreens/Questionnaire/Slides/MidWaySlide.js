import * as React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native'


const MidWaySlide = () => {

    return (
        <View style={styles.slide1}>
            <Text style={styles.text}>
                Estamos quase terminando! Só mais algumas coisinhas!!
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB',
      padding: 5
    },
    text: {
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

export default MidWaySlide