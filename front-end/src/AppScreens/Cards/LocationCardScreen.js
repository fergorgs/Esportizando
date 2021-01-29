import React, { Component } from 'react'
import { Image, View, Text, StyleSheet, KeyboardAvoidingView, TextInput, Button, ScrollView, Dimensions } from 'react-native'
import {Picker} from '@react-native-community/picker';
import ImagePicker from 'react-native-image-picker'
import { Header } from 'react-native-elements';
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';


const LocationCardScreen = () => {

    const navigation = useNavigation();

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
                centerComponent={{ text: 'Local', style: { color: '#000', fontSize: 20 } }}
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
                        Nome do Local
                    </Text>
                    <View style={styles.multiLineInput}>
                        <Text style={{fontSize: 20}}>Descrição</Text>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna 
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Text>
                    </View>
                    <View style={styles.singleLineInput}>
                        <Text style={{fontSize: 20}}>Endereço:</Text>
                        <Text style={{fontSize: 15, marginTop: 5}}>
                            Avenida dos Bandeirantes, 1034, São Paulo
                        </Text>
                    </View>
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


export default LocationCardScreen