import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight, View, Image } from "react-native";
import { Icon } from 'react-native-elements'
//import { withNavigation } from 'react-navigation';

class EventPreviewCard extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            eventObject: this.props.eventObject
        }
    }

    getSubCount(){
        if(this.props.eventObject.owned)
            return <Text>Inscritos: {this.props.eventObject.subCount}</Text>
        else
            return null
    }


    render () {
        // console.log(this.props.navigation)
        return (
            <TouchableHighlight 
                style={styles.container} 
                onPress={() => {
                    if(this.state.eventObject.owned)
                    {
                        // Não ta funcionando :(
                        this.props.navigation.navigate('Novo Evento', {
                            id: 1
                        });
                    }
                    else
                    {
                        this.props.navigation.navigate('Evento')
                    }
                }}>
                <View style={styles.card}>
                    <View style={styles.upperStrip}>
                        <Image 
                            resizeMode = "cover"
                            style={{width: 130, height: 73}}
                            source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Football_iu_1996.jpg'}}
                        />
                        <Text style={{fontSize: 20, paddingLeft: 10, paddingRight: 40 }}>
                            {this.state.eventObject.title}
                        </Text>
                    </View>
                    <View style={styles.middleStrip}>
                        <Text>{this.state.eventObject.address}</Text>
                        <Text>{this.state.eventObject.date}</Text>
                        {this.getSubCount()}
                    </View>
                    <Icon name="info" style={{flexDirection: "row-reverse"}}/>
                </View>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        borderRadius: 20,
        margin: 15,
        minHeight: 200,
    },
    
    card: {
        flex: 1,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: "#fff",
        paddingTop: 20,
        paddingHorizontal: 20,
        minHeight: 200,
    },

    upperStrip: {
        flex: 1,
        flexDirection: 'row',
        maxHeight: 73,
    },

    middleStrip: {
        flex: 1,
        justifyContent: "space-evenly",
        marginTop: 5,
        maxHeight: 65,
    }
})

export default EventPreviewCard;
