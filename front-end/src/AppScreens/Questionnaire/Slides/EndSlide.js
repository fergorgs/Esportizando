import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const EndSlide = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.slide1}>
            <Text style={styles.text}>
                Pronto pra conhecer alguns esportes?
            </Text>
            <Button 
              title={'Conhecer!'}
              onPress={() => {navigation.navigate('Result')}}
            />
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
      marginBottom: 50
    },
  })

export default EndSlide