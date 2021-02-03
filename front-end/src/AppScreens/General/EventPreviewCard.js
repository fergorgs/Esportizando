import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight, View, Image } from "react-native";
import { Icon } from 'react-native-elements'
//import { withNavigation } from 'react-navigation';

import Tag from './Tag';

class EventPreviewCard extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            eventObject: this.props.eventObject
        }
    }

    getSubCount(){
        console.log(this.props.eventObject);
        if (this.props.eventObject.participants)
            return "Inscritos: " + 
                Object.keys(this.props.eventObject.participants).length;

        return null;
        //if(this.props.eventObject.owned)
        //else
           // return null
    }


    render () {
        // console.log(this.props.navigation)
        return (
            <TouchableHighlight 
                style={styles.container} 
                onPress={() => {
                    if(this.state.eventObject.status === 'creator')
                    {
                        // Não ta funcionando :(
                        this.props.navigation.navigate('Novo Evento', {
                            event: this.props.eventObject,
                            refresh: this.props.refresh
                        });
                    }
                    else
                    {
                        this.props.navigation.navigate('Evento', {
                            event: this.state.eventObject,
                            refresh: this.props.refresh
                        });
                    }
                }}>
                <View style={styles.card}>
                    <View style={styles.upperStrip}>
                        { /*<Image 
                            resizeMode = "cover"
                            style={{width: 130, height: 73}}
                            source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Football_iu_1996.jpg'}}
                        /> */}
                        <Text style={{fontSize: 20, paddingLeft: 10, paddingRight: 40, color: 'white'}}>
                            {this.state.eventObject.name}
                        </Text>
                    </View>
                    <View style={styles.middleStrip}>
                        <View style={{ flexDirection: 'row', ...styles.info }}>
                            <Tag text={ this.state.eventObject.sport } />
                        </View>
                        <Text
                            style={styles.info}
                        >
                            {this.state.eventObject.address}
                        </Text>
                        <View style={{ ...styles.info, flexDirection: 'row'}}>
                            <Text
                                style={{ ...styles.info, marginRight: 10 }}
                            >
                                {this.state.eventObject.date}
                            </Text>
                            <Text
                                style={styles.info}
                            >
                                {this.state.eventObject.time}
                            </Text>
                        </View>
                        { this.getSubCount() && 
                        <Text
                            style={{ ...styles.info, color: '#444' }}
                        > 
                            { this.getSubCount() } 
                        </Text>
                        }
                    </View>
                    { /*<Icon name="info" style={{flexDirection: "row-reverse"}}/>*/}
                </View>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        borderRadius: 10,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        //margin: 10,
        //minHeight: 200,
        elevation: 2
    },
    
    card: {
        flex: 1,
        //borderColor: "black",
        //borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "#fff",
        paddingBottom: 10,
        //paddingTop: 20,
        //paddingHorizontal: 20,
        //minHeight: 200,
    },

    upperStrip: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 15,
        //maxHeight: 73,
        backgroundColor: '#446a9c'
    },

    middleStrip: {
        flex: 1,
        flexDirection: 'column',
        //justifyContent: "space-evenly",
        marginTop: 20,
        marginHorizontal: 20
        //maxHeight: 65,
    },

    info: {
        marginBottom: 10,
        fontSize: 16,
        color: '#777'
    }
})

export default EventPreviewCard;
