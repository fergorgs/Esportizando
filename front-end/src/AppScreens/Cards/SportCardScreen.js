import React, { Component } from 'react'
import { Image, TouchableOpacity, View, Text, StyleSheet, KeyboardAvoidingView, TextInput, Button, ScrollView, Dimensions } from 'react-native'
import {Picker} from '@react-native-community/picker';
import ImagePicker from 'react-native-image-picker'
import { Header } from 'react-native-elements';
import { Icon } from 'react-native-elements'
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import { useNavigation } from '@react-navigation/native';

import Tag from '../General/Tag';

const mainColor = '#446a9c';
const textColor = '#ffffff';

const SportCardScreen = (props) => {

    const navigation = useNavigation();

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
                temp.push(<Tag style={{ marginRight: 4, marginBottom: 6 }} text={ benefits[i] } />)
            
            return temp
        }

        return (
            <View style={{flex: 1}}>
                <Header
                    statusBarProps={{
                        backgroundColor: mainColor,
                        translucent: true,
                        hidden: false
                    }}
                    containerStyle={{
                        borderBottomWidth: 0
                    }}
                    backgroundColor={ mainColor }
                    leftComponent={ 
                        <Icon
                            name='chevron-left'
                            onPress={ () =>
                                navigation.goBack()
                            }
                            color='white'
                        />
                    }
                    centerComponent={{ 
                        text: 'Esporte', // TODO: trocar para o nome do esporte
                        style: { 
                            color: textColor, 
                            fontSize: 20,
                        }
                    }}
                    //leftContainerStyle={{margin: 5, flex: 3}}
                />
                { /*
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
                */ }
                <ScrollView 
                    contentContainerStyle={{justifyContent: 'space-around'}}
                >
                    <View style={styles.container}>
                        {/* {photo && ( */}
                        { /* <Image
                            style={{ width: '100%', height: 200 }}
                            source={{uri: 'https://mrconfeccoes.com.br/wp-content/uploads/2018/03/default.jpg'}}
                        /> */ }
                        <Text style={{...styles.singleLineInput, fontSize: 25, borderTopRightRadius: 10, borderTopLeftRadius: 10}}>
                            Nome do Esporte
                        </Text>
                        <View style={styles.multiLineInput}>
                            <Text style={{fontSize: 14, color: '#aaa'}}>Resumo</Text>
                            <Text style={{fontSize: 15}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore 
                                magna aliqua. Ut enim ad minim veniam, quis nostrud.
                            </Text>
                        </View>
                        <View style={styles.multiLineInput}>
                            <Text style={{fontSize: 14, color: '#aaa'}}>Descrição</Text>
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
                            <Text style={{fontSize: 14, color: '#aaa', marginBottom: 6}}>Benefícios</Text>
                            <View style={styles.benefits}>
                                {getMainBenefits()}
                            </View>
                        </View>
                        <View style={styles.multiLineInput}>
                            <Text style={{fontSize: 14, color: '#aaa'}}>Público recomendado</Text>
                            <Text style={{fontSize: 15}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore 
                                magna aliqua. Ut enim ad minim veniam, quis nostrud.
                            </Text>
                        </View>
                        <View 
                            style={{
                                backgroundColor: 'white',
                                padding: 20,
                                borderBottomRightRadius: 10,
                                borderBottomLeftRadius: 10
                            }}
                        >
                            { 
                                <TouchableOpacity
                                    style={{ 
                                        borderRadius: 10,
                                        backgroundColor: '#3E618E',
                                        flex: 1,
                                        height: 48,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                    //onPress={ submitSubscription }
                                >
                                    <Text
                                        style={{
                                            color: '#fff',
                                            fontSize: 16
                                        }}
                                    > Seguir Esporte </Text>
                                </TouchableOpacity>
                            }
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
        //marginTop: 20,
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "white",
        //borderColor: "black",
        //borderWidth: 1,
        //borderRadius: 10,
        fontSize: 20
    },
    multiLineInput: {
        //marginTop: 20,
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "white",
        //borderColor: "black",
        //borderWidth: 1,
        //borderRadius: 10,
        fontSize: 15,
        // height: 100,
        textAlignVertical: 'top'
    },
    numberInput: {
        //marginTop: 15,
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
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
        //justifyContent: 'space-between',
        flexWrap: 'wrap'
        // maxHeight: 65,
    }
})


export default SportCardScreen
