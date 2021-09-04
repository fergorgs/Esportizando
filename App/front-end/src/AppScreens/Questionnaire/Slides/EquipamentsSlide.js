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
            <View style={{padding: 50, width: '100%'}}>
              <LabeledRadioButton
                label="Quero só esportes que usam equipamento"
                status={ checked1 && !checked2 ? 'checked' : 'unchecked' }
                onPress={() => { 
                    setChecked1(true);
                    setChecked2(false);
                }}
                color='#D4DFEC'
                textStyle={{ color: '#eee' }}
              />
              <LabeledRadioButton
                label="Quero esportes que necessitam apenas do corpo"
                status={ checked2 && !checked1 ? 'checked' : 'unchecked' }
                //onPress={() => setChecked('second')}
                onPress={() => { 
                    setChecked2(true);
                    setChecked1(false);
                }}
                color='#D4DFEC'
                textStyle={{ color: '#eee' }}
              />
              <LabeledRadioButton
                label="Quero os dois tipos de esporte"
                status={ checked1 && checked2 ? 'checked' : 'unchecked' }
                //onPress={() => setChecked('third')}
                onPress={() => { 
                    setChecked1(true);
                    setChecked2(true);
                }}
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

export default EquipamentsSlide
