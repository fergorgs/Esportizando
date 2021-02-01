import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import Questionnaire from '../../../api/controllers/Questionnaire';

const EndSlide = ({ answers }) => {

    const navigation = useNavigation();

    const handleSubmit = async () => {
        const { data } = await Questionnaire.submit(answers);
        console.log("sports: ", data);
        navigation.navigate('Result', { data });
    }

    return (
        <View style={styles.slide1}>
            <Text style={styles.text}>
                Pronto pra conhecer alguns esportes?
            </Text>
            <Button 
              title={'Conhecer!'}
              onPress={ handleSubmit }
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
