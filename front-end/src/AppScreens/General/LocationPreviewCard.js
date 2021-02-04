import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight, View, Image } from "react-native";
import { Icon } from 'react-native-elements'
import { WebView } from 'react-native-webview';

const LocationPreviewCard = (props) => {

    return (
        
        <View style={styles.card}>
            <View style={{flexDirection: 'row', height: 60, backgroundColor: '#446a9c', paddingTop: 5, paddingHorizontal: 5}}>
                <View style={{height: 50, width: 50, elevation: 2, backgroundColor: 'white'}}>
                    <WebView 
                        style={{ minHeight: 50, maxWidth: 50, }}
                        source={{
                            uri: props.locationObject.image
                        }}
                    />
                </View>
                <Text style={{marginLeft: 7, color: "#fff"}}>{props.locationObject.name}</Text>
            </View>
            <Text style={{marginTop: 7, color: '#777'}}>
                {props.locationObject.description}
            </Text>
            <Text style={{marginTop: 7}}>
                {props.locationObject.address}
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({

    card: {
        width: 200,
        //padding: 7
    }
})

export default LocationPreviewCard
