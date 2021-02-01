import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native'

import LabeledRadioButton from '../LabeledRadioButton'


const TimeSlide = () => {

    const [checked, setChecked] = React.useState(false);

    return (
        <View style={styles.slide1}>
            <Text style={styles.text}>
                Quanto tempo você gostaria de dedicar por sessão de treino?
            </Text>
            <View style={{margin: 50, justifyContent: 'space-between', height: 240}}>
              <LabeledRadioButton
                label="Até 30 minutos"
                status={ checked === 'first' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('first')}
              />
              <LabeledRadioButton
                label="Até 1 hora"
                status={ checked === 'second' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('second')}
              />
              <LabeledRadioButton
                label="Até 2 horas"
                status={ checked === 'third' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('third')}
              />
              <LabeledRadioButton
                label="Mais de 2 horas"
                status={ checked === 'fourth' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('fouth')}
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