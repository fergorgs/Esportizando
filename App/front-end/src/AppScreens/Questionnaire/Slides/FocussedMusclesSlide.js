import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native'

import LabeledCheckbox from '../LabeledCheckbox'


const FocussedMusclesSlide = ({ update }) => {

    const [checked1, setChecked1] = React.useState(false);
    const [checked2, setChecked2] = React.useState(false);
    const [checked3, setChecked3] = React.useState(false);

    useEffect(() => {
        update('upper', checked1);
    }, [ checked1 ]);

    useEffect(() => {
        update('abdomen', checked2);
    }, [ checked2 ]);

    useEffect(() => {
        update('lower', checked3);
    }, [ checked3 ]);

    return (
        <View style={styles.slide1}>
            <Text style={styles.text}>
                Quais músculos você gostaria de desenvolver?
            </Text>
            <View style={{padding: 50, width: '100%'}}>
                <LabeledCheckbox
                    status={checked1 ? 'checked' : 'unchecked'}
                    onPress={() => {
                      setChecked1(!checked1);
                    }}
                    label='Membros superiores e costas'
                    color='#D4DFEC'
                    textStyle={{ color: '#fff' }}
                />
                <LabeledCheckbox
                    status={checked2 ? 'checked' : 'unchecked'}
                    onPress={() => {
                      setChecked2(!checked2);
                    }}
                    label='Abdômen'
                    color='#D4DFEC'
                    textStyle={{ color: '#fff' }}
                />
                <LabeledCheckbox
                    status={checked3 ? 'checked' : 'unchecked'}
                    onPress={() => {
                      setChecked3(!checked3);
                    }}
                    label='Membros inferiores e glúteos'
                    color='#D4DFEC'
                    textStyle={{ color: '#fff' }}
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

export default FocussedMusclesSlide
