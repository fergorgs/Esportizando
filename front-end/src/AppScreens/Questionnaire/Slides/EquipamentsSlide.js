import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native'

import LabeledRadioButton from '../LabeledRadioButton'


const EquipamentsSlide = ({ update }) => {

    const [checked1, setChecked1] = React.useState(true);
    const [checked2, setChecked2] = React.useState(false);

    useEffect(() => {
        update('equip', checked1);
    }, [ checked1 ]);

    useEffect(() => {
        update('body', checked2);
    }, [ checked2 ]);

    return (
        <View style={styles.slide1}>
            <Text style={styles.text}>
                Quanto ao uso de equipamentos
            </Text>
            <View style={{margin: 50, justifyContent: 'space-between', height: 210}}>
              <LabeledRadioButton
                label="Quero só esportes que usam equipamento"
                status={ checked1 && !checked2 ? 'checked' : 'unchecked' }
                onPress={() => { 
                    setChecked1(true);
                    setChecked2(false);
                }}
              />
              <LabeledRadioButton
                label="Quero esportes que necessitam apenas do corpo"
                status={ checked2 && !checked1 ? 'checked' : 'unchecked' }
                //onPress={() => setChecked('second')}
                onPress={() => { 
                    setChecked2(true);
                    setChecked1(false);
                }}
              />
              <LabeledRadioButton
                label="Quero os dois tipos de esporte"
                status={ checked1 && checked2 ? 'checked' : 'unchecked' }
                //onPress={() => setChecked('third')}
                onPress={() => { 
                    setChecked1(true);
                    setChecked2(true);
                }}
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

export default EquipamentsSlide
