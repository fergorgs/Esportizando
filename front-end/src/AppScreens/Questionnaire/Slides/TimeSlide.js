import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native'

import LabeledRadioButton from '../LabeledRadioButton'


const TimeSlide = ({ update }) => {

    const [checked1, setChecked1] = React.useState(true);
    const [checked2, setChecked2] = React.useState(false);
    const [checked3, setChecked3] = React.useState(false);
    const [checked4, setChecked4] = React.useState(false);

    useEffect(() => {
        update('halfAnHour', checked1);
    }, [ checked1 ]);

    useEffect(() => {
        update('oneHour', checked2);
    }, [ checked2 ]);

    useEffect(() => {
        update('twoHours', checked3);
    }, [ checked3 ]);

    useEffect(() => {
        update('moreThanTwoHours', checked4);
    }, [ checked4 ]);

    return (
        <View style={styles.slide1}>
            <Text style={styles.text}>
                Quanto tempo você gostaria de dedicar por sessão de treino?
            </Text>
            <View style={{margin: 50, justifyContent: 'space-between', height: 240}}>
              <LabeledRadioButton
                label="Até 30 minutos"
                status={ checked1 ? 'checked' : 'unchecked' }
                onPress={() => {
                    setChecked1(true);
                    setChecked2(false);
                    setChecked3(false);
                    setChecked4(false);
                }}
              />
              <LabeledRadioButton
                label="Até 1 hora"
                status={ checked2 ? 'checked' : 'unchecked' }
                //onPress={() => setChecked('second')}
                onPress={() => {
                    setChecked2(true);
                    setChecked1(false);
                    setChecked3(false);
                    setChecked4(false);
                }}
              />
              <LabeledRadioButton
                label="Até 2 horas"
                status={ checked3 ? 'checked' : 'unchecked' }
                //onPress={() => setChecked('third')}
                onPress={() => {
                    setChecked3(true);
                    setChecked2(false);
                    setChecked1(false);
                    setChecked4(false);
                }}
              />
              <LabeledRadioButton
                label="Mais de 2 horas"
                status={ checked4 ? 'checked' : 'unchecked' }
                //onPress={() => setChecked('fouth')}
                onPress={() => {
                    setChecked4(true);
                    setChecked2(false);
                    setChecked3(false);
                    setChecked1(false);
                }}
              />
            </View>
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

export default TimeSlide
