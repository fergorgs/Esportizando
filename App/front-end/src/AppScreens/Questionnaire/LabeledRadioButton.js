import * as React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native'

import { RadioButton } from 'react-native-paper';


const LabeledRadioButton = (props) => {

    const textStyle = {...{textAlignVertical: 'center', 
                            fontSize: 20, 
                            color: 'gray',
                            flexWrap: 'wrap',
                            flex: 1}, 
                        ...props.textStyle}
    return (<View style={{marginBottom: 10, flexDirection: 'row'}}>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <RadioButton
                status={props.status}
                onPress={props.onPress}
                uncheckedColor={props.uncheckedColor}
                color={props.color}
                disabled={props.disabled}
            />
        </View>
        <Text 
            style={textStyle}
            onPress={props.onPress}
        >
            {props.label}
        </Text>

    </View>)
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

export default LabeledRadioButton
