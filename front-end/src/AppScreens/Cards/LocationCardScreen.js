import React, { Component } from 'react'
import { Image, View, Text, StyleSheet, KeyboardAvoidingView, TextInput, Button, ScrollView, Dimensions } from 'react-native'
import {Picker} from '@react-native-community/picker';
import ImagePicker from 'react-native-image-picker'
import { Header } from 'react-native-elements';
import { Icon } from 'react-native-elements'
import { useNavigation, useRoute } from '@react-navigation/native';

const mainColor = '#446a9c';
const textColor = '#ffffff';


const LocationCardScreen = () => {

    const navigation = useNavigation();
    const route = useRoute();

    const { location } = route.params;

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
                    text: 'Local', 
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
                centerComponent={{ text: 'Local', style: { color: '#000', fontSize: 20 } }}
            />*/}
            <ScrollView 
                contentContainerStyle={{justifyContent: 'space-around'}}
            >
                <View style={styles.container}>
                    {/* {photo && ( */}
                    <View style={{ ...styles.singleLineInput, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                    >
                        <Image
                            style={{ width: '100%', height: 200, resizeMode: 'cover'}}
                            source={{uri: location.image }}
                        />
                    </View>
                    <Text style={{...styles.singleLineInput, ...{fontSize: 25}}}>
                        { location.name }
                    </Text>
                    <View style={styles.multiLineInput}>
                        <Text style={{fontSize: 14, color: '#aaa'}}>Descrição</Text>
                        <Text>
                            { location.description }
                        </Text>
                    </View>
                    <View style={{ ...styles.singleLineInput, paddingBottom: 20, borderBottomRightRadius: 10, borderBottomLeftRadius: 10 }}>
                        <Text style={{fontSize: 14, color: '#aaa'}}>Endereço:</Text>
                        <Text style={{fontSize: 15, marginTop: 5}}>
                            { location.address }
                        </Text>
                    </View>
                    { /**
                    <View style={styles.multiLineInput}>
                        <Text style={{fontSize: 20}}>Horários de funcionamento</Text>
                        <Text>Seg: 08:00 - 18:00</Text>
                        <Text>Ter: 08:00 - 18:00</Text>
                        <Text>Qua: 08:00 - 18:00</Text>
                        <Text>Qui: 08:00 - 18:00</Text>
                        <Text>Sex: 08:00 - 18:00</Text>
                        <Text>Sab: 10:00 - 18:00</Text>
                        <Text>Dom: 12:00 - 16:00</Text>
                    </View>
                    {/* <View style={{marginTop: 20}}>
                        <Button title="Inscrever-se"/>
                    </View> */}
                </View>
            </ScrollView>
        </View>
    )
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
        paddingHorizontal: 20,
        backgroundColor: "white",
        //borderColor: "black",
        //borderWidth: 1,
        //borderRadius: 10,
        fontSize: 20
    },
    multiLineInput: {
        //marginTop: 20,
        //padding: 8,
        paddingTop: 20,
        paddingHorizontal: 20,
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


export default LocationCardScreen
