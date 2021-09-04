import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import MapView from 'react-native-maps';
import LocationPreviewCard from '../General/LocationPreviewCard'
import { useNavigation } from '@react-navigation/native';
import Location from '../../api/controllers/Location';
// import Marker from 'react-native-maps';

let location = {
    name: 'Nome do local',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    address: 'Endereço: rua 1, bairro 2, cidade 3',
    id: 3694513521542
}

const mainColor = '#446A9C';
const textColor = '#ffffff';

const Map = (props) => {

    const navigation = useNavigation();
    const [ locations, setLocations ] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            const { data } = await Location.getAll();
            setLocations(data);
        }

        fetch();
    }, [ ]);

    const markers = locations.map(location => 
        <MapView.Marker
            key={ location.id }
            coordinate={{ latitude : Number(location.lat), longitude : Number(location.long) }}
        >
            <MapView.Callout
                onPress={() => {
                    navigation.navigate('Local');
                }}
            >
                <LocationPreviewCard locationObject={location}></LocationPreviewCard>
            </MapView.Callout>

        </MapView.Marker>
    );

    return (
        <View>
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
                leftComponent={{ 
                    text: 'Mapa', 
                    style: { 
                        color: textColor, 
                        fontSize: 20,
                    }
                }}
                leftContainerStyle={{margin: 5, flex: 3}}
            />
            { /* <Header
                backgroundColor="white"
                leftComponent={{ text: 'Mapa', style: { color: '#000', fontSize: 20 }}}
                leftContainerStyle={{margin: 5, flex: 3}}
            /> */ }
            <MapView
                style={styles.map}
                region={{
                  latitude: -22.020093,
                  longitude: -47.891254,
                  latitudeDelta: 0.1,
                  longitudeDelta: 0.0421,
                }}
                showsUserLocation={true}
            >
                { /*
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
                */ }
                
   { locations.map(location => 
        <MapView.Marker
            key={ location.id }
            coordinate={{ latitude : Number(location.lat), longitude : Number(location.long) }}
        >
            <MapView.Callout
                onPress={() => {
                    navigation.navigate('Local', { location });
                }}
            >
                <LocationPreviewCard locationObject={location}></LocationPreviewCard>
            </MapView.Callout>

        </MapView.Marker>
    )}
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



                
