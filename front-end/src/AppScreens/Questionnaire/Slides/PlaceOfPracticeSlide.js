import * as React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native'

import LabeledRadioButton from '../LabeledRadioButton'


const PlaceOfPracticeSlide = () => {

    const [checked, setChecked] = React.useState(false);

    return (
        <View style={styles.slide1}>
            <Text style={styles.text}>
                Em quais ambientes você gostaria de praticar?
            </Text>
            <View style={{margin: 50, justifyContent: 'space-between', height: 210}}>
              <LabeledRadioButton
                label="Espaço aberto (praia, campo, ruas)"
                status={ checked === 'first' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('first')}
              />
              <LabeledRadioButton
                label="Espaço fechado (ginásio, academia, salão)"
                status={ checked === 'second' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('second')}
              />
              <LabeledRadioButton
                label="Tanto faz ¯\_(ツ)_/¯"
                status={ checked === 'third' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('third')}
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

export default PlaceOfPracticeSlide