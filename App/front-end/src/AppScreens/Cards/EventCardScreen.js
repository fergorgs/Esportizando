import React, { Component } from 'react'
import { Image, View, Text, StyleSheet, KeyboardAvoidingView, TextInput, Button, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import {Picker} from '@react-native-community/picker';
import ImagePicker from 'react-native-image-picker'
import { Header } from 'react-native-elements';
import { Icon } from 'react-native-elements'

import { useNavigation, useRoute } from '@react-navigation/native';

import Tag from '../General/Tag';
import Event from '../../api/controllers/Event';

const mainColor = '#446a9c';
const textColor = '#ffffff';

function EventCardScreen(props) {

    const navigation = useNavigation();
    const route = useRoute();

    const { event, refresh } = route.params;


    const submitSubscription = async () => {
        try {
            console.log(event);
            const res = await Event.subscribe({ event });

            refresh();
            navigation.goBack();
        } catch(err) {
            console.log(err);
        }
    };
    // tutorial from:
    // https://heartbeat.fritz.ai/how-to-upload-images-in-a-react-native-app-4cca03ded855
    //state = {
    //    photo: null,
    //  }
    //
    //  handleChoosePhoto = () => {
    //    const options = {
    //      noData: true,
    //    }
    //    ImagePicker.launchImageLibrary(options, response => {
    //      if (response.uri) {
    //        this.setState({ photo: response })
    //      }
    //    })
    //  }

    //render(){

        //const { photo } = this.state

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
                    text: 'Evento', 
                    style: { 
                        color: textColor, 
                        fontSize: 20,
                    }
                }}
                //leftContainerStyle={{margin: 5, flex: 3}}
            />
            { /*<Header
                backgroundColor="white"
                leftComponent={
                    <Icon
                      name='chevron-left'
                      onPress={() => navigation.goBack()}
                    />
                }
                centerComponent={{ text: 'Evento', style: { color: '#000', fontSize: 20 } }}
            /> */ }
            <ScrollView 
                contentContainerStyle={{justifyContent: 'space-around'}}
            >
                <View style={styles.container}>
                    {/* {photo && ( */}
                    { /*<Image
                        style={{ width: 150, height: 150 }}
                        source={{uri: 'https://mrconfeccoes.com.br/wp-content/uploads/2018/03/default.jpg'}}
                    />*/ }
                    <Text style={{
                        ...styles.singleLineInput, 
                        fontSize: 25, 
                        borderTopRightRadius: 10, 
                        borderTopLeftRadius: 10}}>
                        { event.name }
                    </Text>
                    <Text style={{ ...styles.singleLineInput}}>
                        <Tag text={ event.sport }/>
                    </Text>
                    <View style={styles.singleLineInput}>
                        <Text style={{fontSize: 14, color: '#aaa'}}>Descrição:</Text>
                        <Text style={{fontSize: 15, marginTop: 5}}>
                            { event.description }
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ ...styles.singleLineInput, flex: 1 }}>
                            { event.date }
                        </Text>
                        <Text style={{ ...styles.singleLineInput, flex: 1 }}>
                            { event.time }
                        </Text>
                    </View>
                    <View style={styles.singleLineInput}>
                        <Text style={{fontSize: 14, color: '#aaa'}}>Endereço:</Text>
                        <Text style={{fontSize: 15, marginTop: 5}}>
                            { event.address }
                        </Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{flex: 1}}>
                            <Text style={{...styles.singleLineInput, fontSize: 15, textAlign: 'center', textAlignVertical: 'center'}}>
                                { event.maxCap } pessoas no máximo
                            </Text>
                        </View>
                        <View style={{flex: 1}}>
                            <Text style={{...styles.singleLineInput, fontSize: 15, textAlign: 'center', textAlignVertical: 'center'}}>
                                { event.price && event.price !== "0" ? 
                                    `R$ ${ event.price } por pessoa` :
                                    "Grátis"
                                }
                            </Text>
                        </View>
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
                            !event.status &&
                            <TouchableOpacity
                                style={{ 
                                    borderRadius: 10,
                                    backgroundColor: '#3E618E',
                                    flex: 1,
                                    height: 48,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                                onPress={ submitSubscription }
                            >
                                <Text
                                    style={{
                                        color: '#fff',
                                        fontSize: 16
                                    }}
                                > Inscrever-se </Text>
                            </TouchableOpacity>
                        }
                    </View>
                </View>
            </ScrollView>
        </View>
    )
    //}
}

export default EventCardScreen;

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
        //paddingTop: 10,
        //paddingBottom: 10,
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "white",
        //borderColor: "black",
        //borderWidth: 1,
        //borderRadius: 10,
        fontSize: 20,
        flex: 1
    },
    multiLineInput: {
        //marginTop: 20,
        paddingTop: 20,
        paddingRight: 20,
        paddingLeft: 20,
        backgroundColor: "white",
        //borderColor: "black",
        //borderWidth: 1,
        //borderRadius: 10,
        fontSize: 15,
        // height: 100,
        textAlignVertical: 'top'
    },
    numberInput: {
        marginTop: 15,
        padding: 20,
        backgroundColor: "white",
        //borderColor: "black",
        //borderWidth: 1,
        //borderRadius: 1,
        // width: '45%'
    },
    picker: {
        padding: 7,
        backgroundColor: "white",
    }
})
