import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native'

import LabeledCheckbox from '../LabeledCheckbox'


const OtherGoalsSlide = ({ update }) => {

    const [checked1, setChecked1] = React.useState(false);
    const [checked2, setChecked2] = React.useState(false);
    const [checked3, setChecked3] = React.useState(false);
    const [checked4, setChecked4] = React.useState(false);
    const [checked5, setChecked5] = React.useState(false);
    const [checked6, setChecked6] = React.useState(false);
    const [checked7, setChecked7] = React.useState(false);
    const [checked8, setChecked8] = React.useState(false);
    const [checked9, setChecked9] = React.useState(false);
    const [checked10, setChecked10] = React.useState(false);
    const [checked11, setChecked11] = React.useState(false);

    useEffect(() => {
        update('reduceCholesterol', checked1);
    }, [ checked1 ]);

    useEffect(() => {
        update('balance', checked2);
    }, [ checked2 ]);

    useEffect(() => {
        update('concentration', checked3);
    }, [ checked3 ]);

    useEffect(() => {
        update('sleep', checked4);
    }, [ checked4 ]);

    useEffect(() => {
        update('immunity', checked5);
    }, [ checked5 ]);

    useEffect(() => {
        update('posture', checked6);
    }, [ checked6 ]);

    useEffect(() => {
        update('reduceSagging', checked7);
    }, [ checked7 ]);

    useEffect(() => {
        update('motorCoordination', checked8);
    }, [ checked8 ]);

    useEffect(() => {
        update('bloodCirculation', checked9);
    }, [ checked9 ]);

    useEffect(() => {
        update('flexibility', checked10);
    }, [ checked10 ]);

    useEffect(() => {
        update('breath', checked11);
    }, [ checked11 ]);

    return (
        <View style={styles.slide1}>
            <Text style={styles.text}>
                Que outras coisas você gostaria de trabalhar?
            </Text>
            <View style={{paddingHorizontal: 50, paddingTop: 10, width: '100%'}}>
                <LabeledCheckbox
                    status={checked1 ? 'checked' : 'unchecked'}
                    onPress={() => {
                      setChecked1(!checked1);
                    }}
                    label='Reduzir o colesterol'
                    color='#D4DFEC'
                    textStyle={{ color: '#eee' }}
                />
                <LabeledCheckbox
                    status={checked2 ? 'checked' : 'unchecked'}
                    onPress={() => {
                      setChecked2(!checked2);
                    }}
                    label='Desenvolver o equilíbrio'
                    color='#D4DFEC'
                    textStyle={{ color: '#eee' }}
                />
                <LabeledCheckbox
                    status={checked3 ? 'checked' : 'unchecked'}
                    onPress={() => {
                      setChecked3(!checked3);
                    }}
                    label='Desenvolver a concentração'
                    color='#D4DFEC'
                    textStyle={{ color: '#eee' }}
                />
                <LabeledCheckbox
                    status={checked4 ? 'checked' : 'unchecked'}
                    onPress={() => {
                      setChecked4(!checked4);
                    }}
                    label='Melhorar o sono'
                    color='#D4DFEC'
                    textStyle={{ color: '#eee' }}
                />
                <LabeledCheckbox
                    status={checked5 ? 'checked' : 'unchecked'}
                    onPress={() => {
                      setChecked5(!checked5);
                    }}
                    label='Melhorar a imunidade'
                    color='#D4DFEC'
                    textStyle={{ color: '#eee' }}
                />
                <LabeledCheckbox
                    status={checked6 ? 'checked' : 'unchecked'}
                    onPress={() => {
                      setChecked6(!checked6);
                    }}
                    label='Melhorar a postura'
                    color='#D4DFEC'
                    textStyle={{ color: '#eee' }}
                />
                <LabeledCheckbox
                    status={checked7 ? 'checked' : 'unchecked'}
                    onPress={() => {
                      setChecked7(!checked7);
                    }}
                    label='Reduzir a flacidez e a celulite'
                    color='#D4DFEC'
                    textStyle={{ color: '#eee' }}
                />
                <LabeledCheckbox
                    status={checked8 ? 'checked' : 'unchecked'}
                    onPress={() => {
                      setChecked8(!checked8);
                    }}
                    label='Melhorar a coordenação motora'
                    color='#D4DFEC'
                    textStyle={{ color: '#eee' }}
                />
                <LabeledCheckbox
                    status={checked9 ? 'checked' : 'unchecked'}
                    onPress={() => {
                      setChecked9(!checked9);
                    }}
                    label='Melhorar a circulação sanguínea'
                    color='#D4DFEC'
                    textStyle={{ color: '#eee' }}
                />
                <LabeledCheckbox
                    status={checked10 ? 'checked' : 'unchecked'}
                    onPress={() => {
                      setChecked10(!checked10);
                    }}
                    label='Aumentar a flexibilidade'
                    color='#D4DFEC'
                    textStyle={{ color: '#eee' }}
                />
                <LabeledCheckbox
                    status={checked11 ? 'checked' : 'unchecked'}
                    onPress={() => {
                      setChecked11(!checked11);
                    }}
                    label='Melhorar a respiração'
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

export default OtherGoalsSlide
