import React, { Component } from 'react'
import { Image, View, Text, StyleSheet, KeyboardAvoidingView, TextInput, Button, ScrollView, Dimensions } from 'react-native'
import {Picker} from '@react-native-community/picker';
import ImagePicker from 'react-native-image-picker'
import { Header } from 'react-native-elements';
import { Icon } from 'react-native-elements'
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

const SportCardScreen = (props) => {

    

    // tutorial from:
    // https://heartbeat.fritz.ai/how-to-upload-images-in-a-react-native-app-4cca03ded855
    // state = {
    //     photo: null,
    //   }
    
    //   handleChoosePhoto = () => {
    //     const options = {
    //       noData: true,
    //     }
    //     ImagePicker.launchImageLibrary(options, response => {
    //       if (response.uri) {
    //         this.setState({ photo: response })
    //       }
    //     })
    //   }

    // render(){

        // const { photo } = this.state

        const benefits = ['benefício 1', 'benefício 2', 'benefício 3', 'benefício 4']

        let getMainBenefits = () => {

            let temp = []
    
            for(let i = 0; i < benefits.length; i++)
                temp.push(<Text style={{marginTop: 5}}>{'>> ' + benefits[i]}</Text>)
            
            return temp
        }

        return (
            <View style={{flex: 1}}>
                <Header
                    backgroundColor="white"
                    leftComponent={
                        <Icon
                          name='chevron-left'
                          onPress={() => props.navigation.goBack()}
                        />
                    }
                    centerComponent={{ text: 'Nome do esporte', style: { color: '#000', fontSize: 20 } }}
                />
                <ScrollView 
                    contentContainerStyle={{justifyContent: 'space-around'}}
                >
                    <View style={styles.container}>
                        {/* {photo && ( */}
                        <Image
                            style={{ width: '100%', height: 200 }}
                            source={{uri: 'https://mrconfeccoes.com.br/wp-content/uploads/2018/03/default.jpg'}}
                        />
                        <Text style={{...styles.singleLineInput, ...{fontSize: 25}}}>
                            Nome do Esporte
                        </Text>
                        <View style={styles.multiLineInput}>
                            <Text style={{fontSize: 20}}>Resumo</Text>
                            <Text style={{fontSize: 15}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore 
                                magna aliqua. Ut enim ad minim veniam, quis nostrud.
                            </Text>
                        </View>
                        <View style={styles.multiLineInput}>
                            <Text style={{fontSize: 20}}>Descrição</Text>
                            <Text style={{fontSize: 15}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore 
                                magna aliqua. Ut enim ad minim veniam, quis nostrud. 
                                Duis aute irure dolor in reprehenderit in voluptate 
                                velit esse cillum dolore eu fugiat nulla pariatur. 
                                Excepteur sint occaecat cupidatat non proident, sunt 
                                in culpa qui officia deserunt mollit anim id est laborum.
                            </Text>
                        </View>
                        <View style={styles.multiLineInput}>
                            <Text style={{fontSize: 20}}>Benefícios</Text>
                            <View style={styles.benefits}>
                                {getMainBenefits()}
                            </View>
                        </View>
                        <View style={styles.multiLineInput}>
                            <Text style={{fontSize: 20}}>Público recomendado</Text>
                            <Text style={{fontSize: 15}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore 
                                magna aliqua. Ut enim ad minim veniam, quis nostrud.
                            </Text>
                        </View>
                        <View style={{marginTop: 20}}>
                            <Button title="Começar a seguir"/>
                            {/*        LISTEN!        */}
                            {/* <Button title={() => {
                                if(usuario.segueOEsporte)
                                    return "Deixar de seguir"
                                else
                                    return "Começar a seguir"
                            }}/> */}
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    // }
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
        marginTop: 20,
        padding: 8,
        backgroundColor: "white",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 20
    },
    multiLineInput: {
        marginTop: 20,
        padding: 8,
        backgroundColor: "white",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 15,
        // height: 100,
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
    },
    benefits: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
        // maxHeight: 65,
    }
})


export default SportCardScreen