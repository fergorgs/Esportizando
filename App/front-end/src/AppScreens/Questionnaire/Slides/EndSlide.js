import * as React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import { useDispatch } from "react-redux";

import Questionnaire from '../../../api/controllers/Questionnaire';

const EndSlide = ({ answers }) => {

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const handleSubmit = async () => {
        const { data } = await Questionnaire.submit(answers);
        //console.log("sports: ", data);
        dispatch({
            type: "TEST_UPDATE",
            payload: true
        });

        navigation.navigate('Result', { data });
    }

    return (
        <View style={styles.slide1}>
            <Text style={styles.text}>
                Pronto pra conhecer alguns esportes?
            </Text>
            <TouchableOpacity
                onPress={ handleSubmit }
                style={{
                    backgroundColor: '#D4DFEC',
                    paddingVertical: 15,
                    paddingHorizontal: 30,
                    borderRadius: 10,
                    elevation: 2
                }}
            >   
                <Text
                    style={{
                        color: '#3E628E',
                        fontSize: 16,
                        fontWeight: 'bold'
                    }}
                >
                    Conhecer!
                </Text>
            </TouchableOpacity>
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
      marginBottom: 50
    },
  })

export default EndSlide
