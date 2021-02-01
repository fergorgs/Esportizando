import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native'

import LabeledCheckbox from '../LabeledCheckbox'


const MainObjectivesSlide = ({ update }) => {

    const [checked1, setChecked1] = React.useState(false);
    const [checked2, setChecked2] = React.useState(false);
    const [checked3, setChecked3] = React.useState(false);
    const [checked4, setChecked4] = React.useState(false);
    const [checked5, setChecked5] = React.useState(false);
    const [checked6, setChecked6] = React.useState(false);

    useEffect(() => {
        update('physicalCondition', checked1);
    }, [ checked1 ]);

    useEffect(() => {
        update('loseWeight', checked2);
    }, [ checked2 ]);

    useEffect(() => {
        update('gainMass', checked3);
    }, [ checked3 ]);

    useEffect(() => {
        update('relax', checked4);
    }, [ checked4 ]);

    useEffect(() => {
        update('socialize', checked5);
    }, [ checked5 ]);

    useEffect(() => {
        update('compete', checked6);
    }, [ checked6 ]);

    return (
        <View style={styles.slide1}>
            <Text style={styles.text}>
                Agora nos diga quais são os seus objetivos principais
            </Text>
            <View style={{margin: 50, justifyContent: 'space-between', height: 400}}>
                <LabeledCheckbox
                    status={checked1 ? 'checked' : 'unchecked'}
                    onPress={() => {
                      setChecked1(!checked1);
                    }}
                    label='Melhorar o condicionamento físico'
                    color='red'
                />
                <LabeledCheckbox
                    status={checked2 ? 'checked' : 'unchecked'}
                    onPress={() => {
                      setChecked2(!checked2);
                    }}
                    label='Emagrecer / Queimar gordura'
                    color='red'
                />
                <LabeledCheckbox
                    status={checked3 ? 'checked' : 'unchecked'}
                    onPress={() => {
                      setChecked3(!checked3);
                    }}
                    label='Aumentar a força e a massa muscular'
                    color='red'
                />
                <LabeledCheckbox
                    status={checked4 ? 'checked' : 'unchecked'}
                    onPress={() => {
                      setChecked4(!checked4);
                    }}
                    label='Relaxar e aliviar o estresse'
                    color='red'
                />
                <LabeledCheckbox
                    status={checked5 ? 'checked' : 'unchecked'}
                    onPress={() => {
                      setChecked5(!checked5);
                    }}
                    label='Interagir com os outros e socializar'
                    color='red'
                />
                <LabeledCheckbox
                    status={checked6 ? 'checked' : 'unchecked'}
                    onPress={() => {
                      setChecked6(!checked6);
                    }}
                    label='Participar de competições'
                    color='red'
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

export default MainObjectivesSlide
