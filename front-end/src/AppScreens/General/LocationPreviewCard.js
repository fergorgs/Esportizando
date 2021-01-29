import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight, View, Image } from "react-native";
import { Icon } from 'react-native-elements'
import { WebView } from 'react-native-webview';

const LocationPreviewCard = (props) => {

    return (
    
        <View style={styles.card}>
            <View style={{flexDirection: 'row', height: 50}}>
                <View style={{height: 50, width: 50}}>
                    <WebView 
                        style={{ minHeight: 50, maxWidth: 50, }}
                        source={{
                            uri: 'https://mrconfeccoes.com.br/wp-content/uploads/2018/03/default.jpg'
                        }}
                    />
                </View>
                <Text style={{marginLeft: 7}}>{props.locationObject.name}</Text>
            </View>
            <Text style={{marginTop: 7}}>
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
        padding: 7
    }
})

export default LocationPreviewCard