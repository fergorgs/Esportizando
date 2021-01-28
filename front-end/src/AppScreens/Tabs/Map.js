import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import MapView from 'react-native-maps';
import LocationPreviewCard from '../General/LocationPreviewCard'
import { useNavigation } from '@react-navigation/native';
// import Marker from 'react-native-maps';

let location = {
    name: 'Nome do local',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    address: 'Endereço: rua 1, bairro 2, cidade 3',
    id: 3694513521542
}

const Map = (props) => {

    const navigation = useNavigation();

    return (
        <View>
            <Header
                backgroundColor="white"
                leftComponent={{ text: 'Mapa', style: { color: '#000', fontSize: 20 }}}
                leftContainerStyle={{margin: 5, flex: 3}}
            />
            <MapView
                style={styles.map}
                region={{
                  latitude: -22.020093,
                  longitude: -47.891254,
                  latitudeDelta: 0.1,
                  longitudeDelta: 0.0421,
                }}
            >
                <MapView.Marker
                    key={123}
                    coordinate={{ latitude : -22.016986, longitude : -47.8894043 }}
                >
                    <MapView.Callout
                        onPress={() => {
                            navigation.navigate('Local');
                        }}
                    >
                        <LocationPreviewCard locationObject={location}></LocationPreviewCard>
                    </MapView.Callout>

                </MapView.Marker>
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%'
    },
})

export default Map



                