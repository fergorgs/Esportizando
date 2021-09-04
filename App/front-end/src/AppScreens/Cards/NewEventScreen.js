import React, { Component } from 'react'
import { Image, View, Text, StyleSheet, KeyboardAvoidingView, TextInput, Button, ScrollView, Dimensions } from 'react-native'
import {Picker} from '@react-native-community/picker';
import ImagePicker from 'react-native-image-picker'
import { Header } from 'react-native-elements';
import { Icon } from 'react-native-elements'

export default class NewEventScreen extends Component{

    // tutorial from:
    // https://heartbeat.fritz.ai/how-to-upload-images-in-a-react-native-app-4cca03ded855
    state = {
        photo: null,
      }
    
      handleChoosePhoto = () => {
        const options = {
          noData: true,
        }
        ImagePicker.launchImageLibrary(options, response => {
          if (response.uri) {
            this.setState({ photo: response })
          }
        })
      }

    render(){

        const { photo } = this.state

        return (
            <View style={{flex: 1}}>
                <Header
                    backgroundColor="white"
                    leftComponent={
                        <Icon
                          name='chevron-left'
                          onPress={() => this.props.navigation.goBack()}
                        />
                    }
                    centerComponent={{ text: 'Criar novo evento', style: { color: '#000', fontSize: 20 } }}
                />
                <ScrollView 
                    contentContainerStyle={{justifyContent: 'space-around'}}
                >
                    <View style={styles.container}>
                        {/* {photo && ( */}
                        <Image
                            style={{ width: 150, height: 150 }}
                            source={{uri: 'https://mrconfeccoes.com.br/wp-content/uploads/2018/03/default.jpg'}}
                        />
                        {/* )} */}
                        <View style={styles.imageButton}>
                            <Button 
                                title="Escolher imagem" 
                                onPress={this.handleChoosePhoto}  
                            />
                        </View>
                        <TextInput
                            placeholder="Nome do evento"
                            style={styles.singleLineInput}
                        />
                        <TextInput
                            placeholder="Descrição"
                            style={styles.multiLineInput}
                            multiline={true}
                        />
                        <Text>Insira uma descrição breve, conte o que será feito, pipipi popopo</Text>
                        <TextInput
                            placeholder="Endereço"
                            style={styles.singleLineInput}
                        />
                        <View style={{flexDirection: 'row'}}>
                            <View style={{width: '50%', paddingRight: 7}}>
                                <TextInput
                                    keyboardType="numeric"
                                    style={styles.numberInput}
                                    defaultValue='0'
                                />
                                <Text>Máximo de pessoas</Text>
                            </View>
                            <View style={{width: '50%', paddingLeft: 7}}>
                                <TextInput
                                    keyboardType="numeric"
                                    style={styles.numberInput}
                                    defaultValue='0'
                                />
                                <Text>Preço por pessoa</Text>
                            </View>
                        </View>
                        <View style={{
                                borderColor: "black",
                                borderWidth: 1,
                                borderRadius: 1,
                                marginTop: 15
                            }}
                        >
                            <Picker style={styles.picker}>
                                <Picker.Item label="Esporte" value="none"/>
                                <Picker.Item label="Futebol" value="futebol"/>
                                <Picker.Item label="Volei" value="volei"/>
                                <Picker.Item label="Basquete" value="basquete"/>
                                <Picker.Item label="Handbol" value="handbol"/>
                            </Picker>
                        </View>
                        <View style={{marginTop: 15}}>
                            <Button title="Criar evento"/>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding:25,
        flex: 1,
    },
    imageButton: {
        marginTop: 15,
        width: 150,
    },
    singleLineInput: {
        marginTop: 15,
        padding: 8,
        backgroundColor: "white",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 1
    },
    multiLineInput: {
        marginTop: 15,
        padding: 8,
        backgroundColor: "white",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 1,
        height: 100,
        textAlignVertical: 'top'
    },
    numberInput: {
        marginTop: 15,
        padding: 8,
        backgroundColor: "white",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 1,
        // width: '45%'
    },
    picker: {
        padding: 7,
        backgroundColor: "white",
    }
})