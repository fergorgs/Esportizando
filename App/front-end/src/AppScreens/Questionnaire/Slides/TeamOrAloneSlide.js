import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native'

import LabeledCheckbox from '../LabeledCheckbox'


const TeamOrAloneSlide = ({ update }) => {
    const [checked1, setChecked1] = React.useState(false);
    const [checked2, setChecked2] = React.useState(false);

    useEffect(() => {
        update('alone', checked1);
    }, [ checked1 ]);
    
    useEffect(() => {
        update('team', checked2);
    }, [ checked2 ]);

    return (
        <View style={styles.slide1}>
            <Text style={styles.text}>
                Primeiro, você gosta de esportes:
            </Text>
            <View style={{padding: 40, width: '100%'}}>
                <LabeledCheckbox
                    status={checked1 ? 'checked' : 'unchecked'}
                    onPress={() => {
                      setChecked1(!checked1);
                    }}
                    label='individuais (tênis, natação, musculação)'
                    color='#D4DFEC'
                    textStyle={{ color: '#eee' }}
                />
                <LabeledCheckbox
                    status={checked2 ? 'checked' : 'unchecked'}
                    onPress={() => {
                      setChecked2(!checked2);
                    }}
                    label='coletivos (futebol, basquete, vôlei)'
                    color='#D4DFEC'
                    textStyle={{ color: '#eee' }}
                />
            </View>
            <Text style={styles.text2}>
                Pode marcar mais de um!
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

export default TeamOrAloneSlide
