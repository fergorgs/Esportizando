import React, { Component } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

export default class Loading extends Component {

  //componentDidMount() {

  //  this.props.navigation.navigate('LoginScreen')

  //}

    render() {
        return (
            <View style={styles.container}>
                  <View style={styles.bubble}>
                      <Text style={{color:'#44699c', marginBottom: 20, fontSize: 20}}>Carregando</Text>
                      <ActivityIndicator color='#44699c' size="large" />
                  </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#44699C'
  },
  bubble: {
      backgroundColor: 'white',
      paddingVertical: 20,
      paddingHorizontal: 30,
      elevation: 4,
      borderRadius: 10
  }
});
