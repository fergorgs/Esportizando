import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native'

import LabeledCheckbox from '../LabeledCheckbox'


const SpecificitiesSlide = ({ update }) => {

    const [checked1, setChecked1] = React.useState(false);
    const [checked2, setChecked2] = React.useState(false);
    const [checked3, setChecked3] = React.useState(false);
    const [checked4, setChecked4] = React.useState(false);
    const [checked5, setChecked5] = React.useState(false);

    useEffect(() => {
        update('lowImpact', checked1);
    }, [ checked1 ]);

    useEffect(() => {
        update('nature', checked2);
    }, [ checked2 ]);

    useEffect(() => {
        update('competitiveness', checked3);
    }, [ checked3 ]);

    useEffect(() => {
        update('water', checked4);
    }, [ checked4 ]);

    useEffect(() => {
        update('radical', checked5);
    }, [ checked5 ]);

    return (
        <View style={styles.slide1}>
            <Text style={styles.text}>
                Tem alguma coisa específica que você gostaria que o seu esporte tivesse?
            </Text>
            <View style={{margin: 50, justifyContent: 'space-between', height: 380}}>
                <LabeledCheckbox
                    status={checked1 ? 'checked' : 'unchecked'}
                    onPress={() => {
                      setChecked1(!checked1);
                    }}
                    label='Baixo impacto (reduz a força aplicada sobre as articulações, como quadril e joelhos)'
                    color='red'
                />
                <LabeledCheckbox
                    status={checked2 ? 'checked' : 'unchecked'}
                    onPress={() => {
                      setChecked2(!checked2);
                    }}
                    label='Proporcionasse contato com a natureza'
                    color='red'
                />
                <LabeledCheckbox
                    status={checked3 ? 'checked' : 'unchecked'}
                    onPress={() => {
                      setChecked3(!checked3);
                    }}
                    label='Fosse bastante competitivo'
                    color='red'
                />
                <LabeledCheckbox
                    status={checked4 ? 'checked' : 'unchecked'}
                    onPress={() => {
                      setChecked4(!checked4);
                    }}
                    label='Fosse feito na água'
                    color='red'
                />
                <LabeledCheckbox
                    status={checked5 ? 'checked' : 'unchecked'}
                    onPress={() => {
                      setChecked5(!checked5);
                    }}
                    label='Fosse desafiador ou radical'
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

export default SpecificitiesSlide
