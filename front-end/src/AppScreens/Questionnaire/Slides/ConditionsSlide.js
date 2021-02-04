import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native'

import LabeledCheckbox from '../LabeledCheckbox'


const ConditionsSlide = ({ update }) => {

    const [checked1, setChecked1] = React.useState(false);
    const [checked2, setChecked2] = React.useState(false);
    const [checked3, setChecked3] = React.useState(false);
    const [checked4, setChecked4] = React.useState(false);
    const [checked5, setChecked5] = React.useState(false);
    const [checked6, setChecked6] = React.useState(false);
    const [checked7, setChecked7] = React.useState(false);

    useEffect(() => {
        update('diabetes', checked1);
    }, [ checked1 ]);

    useEffect(() => {
        update('highBloodPressure', checked2);
    }, [ checked2 ]);

    useEffect(() => {
        update('lowBloodPressure', checked3);
    }, [ checked3 ]);

    useEffect(() => {
        update('heartDiseases', checked4);
    }, [ checked4 ]);

    useEffect(() => {
        update('osteoporosis', checked5);
    }, [ checked5 ]);

    useEffect(() => {
        update('frequentDizziness', checked6);
    }, [ checked6 ]);

    useEffect(() => {
        update('boneOrJointProblems', checked7);
    }, [ checked7 ]);

    return (
        <View style={styles.slide1}>
            <Text style={styles.text}>
                Pra terminar, você tem alguma dessas doenças preexistentes?
            </Text>
            <View style={{padding: 50, width: '100%'}}>
                <LabeledCheckbox
                    status={checked1 ? 'checked' : 'unchecked'}
                    onPress={() => {
                      setChecked1(!checked1);
                    }}
                    label='Diabetes'
                    color='#D4DFEC'
                    textStyle={{ color: '#eee' }}
                />
                <LabeledCheckbox
                    status={checked2 ? 'checked' : 'unchecked'}
                    onPress={() => {
                      setChecked2(!checked2);
                    }}
                    label='Pressão alta'
                    color='#D4DFEC'
                    textStyle={{ color: '#eee' }}
                />
                <LabeledCheckbox
                    status={checked3 ? 'checked' : 'unchecked'}
                    onPress={() => {
                      setChecked3(!checked3);
                    }}
                    label='Pressão baixa'
                    color='#D4DFEC'
                    textStyle={{ color: '#eee' }}
                />
                <LabeledCheckbox
                    status={checked4 ? 'checked' : 'unchecked'}
                    onPress={() => {
                      setChecked4(!checked4);
                    }}
                    label='Doenças cardíacas'
                    color='#D4DFEC'
                    textStyle={{ color: '#eee' }}
                />
                <LabeledCheckbox
                    status={checked5 ? 'checked' : 'unchecked'}
                    onPress={() => {
                      setChecked5(!checked5);
                    }}
                    label='Osteoporose'
                    color='#D4DFEC'
                    textStyle={{ color: '#eee' }}
                />
                <LabeledCheckbox
                    status={checked6 ? 'checked' : 'unchecked'}
                    onPress={() => {
                      setChecked6(!checked6);
                    }}
                    label='Tonturas frequentes'
                    color='#D4DFEC'
                    textStyle={{ color: '#eee' }}
                />
                <LabeledCheckbox
                    status={checked7 ? 'checked' : 'unchecked'}
                    onPress={() => {
                      setChecked7(!checked7);
                    }}
                    label='Problemas ósseos ou articulares'
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

export default ConditionsSlide
