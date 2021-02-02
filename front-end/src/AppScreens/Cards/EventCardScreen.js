import React, { Component } from 'react'
import { Image, View, Text, StyleSheet, KeyboardAvoidingView, TextInput, Button, ScrollView, Dimensions } from 'react-native'
import {Picker} from '@react-native-community/picker';
import ImagePicker from 'react-native-image-picker'
import { Header } from 'react-native-elements';
import { Icon } from 'react-native-elements'

import { useNavigation, useRoute } from '@react-navigation/native';

import Event from '../../api/controllers/Event';

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
                backgroundColor="white"
                leftComponent={
                    <Icon
                      name='chevron-left'
                      onPress={() => navigation.goBack()}
                    />
                }
                centerComponent={{ text: 'Evento', style: { color: '#000', fontSize: 20 } }}
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
                    <Text style={{...styles.singleLineInput, ...{fontSize: 25}}}>
                        { event.name }
                    </Text>
                    <Text style={styles.singleLineInput}>
                        { event.sport }
                    </Text>
                    <Text style={styles.multiLineInput}>
                        { event.description }
                    </Text>
                    <View style={styles.singleLineInput}>
                        <Text style={{fontSize: 20}}>Endereço:</Text>
                        <Text style={{fontSize: 15, marginTop: 5}}>
                            { event.address }
                        </Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{width: '50%', paddingRight: 7}}>
                            <Text style={{...styles.singleLineInput, ...{fontSize: 15}}}>
                                { event.maxCap }
                            </Text>
                        </View>
                        <View style={{width: '50%', paddingLeft: 7}}>
                            <Text style={{...styles.singleLineInput, ...{fontSize: 15}}}>
                                { event.price && event.price !== "0" ? 
                                    `R$ ${ event.price } por pessoa` :
                                    "Gratis"
                                }
                            </Text>
                        </View>
                    </View>
                    <View style={{marginTop: 20}}>
                        { 
                            !event.status &&
                            <Button
                                onPress={ submitSubscription } 
                                title="Inscrever-se"/>
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
    }
})
