import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native'

import LabeledCheckbox from '../LabeledCheckbox'


const OpponentsSlide = ({ update }) => {

    const [checked1, setChecked1] = React.useState(false);
    const [checked2, setChecked2] = React.useState(false);
    const [checked3, setChecked3] = React.useState(false);
    
    useEffect(() => {
        update('noContact', checked1);
    }, [ checked1 ]);

    useEffect(() => {
        update('contact', checked2);
    }, [ checked2 ]);

    useEffect(() => {
        update('noOpponent', checked3);
    }, [ checked3 ]);

    return (
        <View style={styles.slide1}>
            <Text style={styles.text}>
                Você prefere
            </Text>
            <View style={{padding: 40, width: '100%', flexDirection: 'column' }}>
                <LabeledCheckbox
                    status={checked1 ? 'checked' : 'unchecked'}
                    onPress={() => {
                      setChecked1(!checked1);
                    }}
                    label='não ter contato com o adversário (natação, corrida)'
                    color='#D4DFEC'
                    textStyle={{ color: '#eee' }}
                />
                <LabeledCheckbox
                    status={checked2 ? 'checked' : 'unchecked'}
                    onPress={() => {
                      setChecked2(!checked2);
                    }}
                    label='ter contato com o adversário (futebol, basquete)'
                    color='#D4DFEC'
                    textStyle={{ color: '#eee' }}
                />
                <LabeledCheckbox
                    status={checked3 ? 'checked' : 'unchecked'}
                    onPress={() => {
                      setChecked3(!checked3);
                    }}
                    label='não ter adversário (pilates, yoga)'
                    color='#D4DFEC'
                    textStyle={{ color: '#eee' }}
                />
            </View>
            {/* <Text style={styles.text2}>
                Pode marcar mais de um!
            </Text> */}
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

export default OpponentsSlide
