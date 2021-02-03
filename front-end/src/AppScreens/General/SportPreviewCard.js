import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight, View, Image } from "react-native";
import { withNavigation } from 'react-navigation';

import Tag from './Tag';

class SportPreviewCard extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            sportObject: this.props.sportObject
        }
    }

    getMainBenefits() {

        let temp = []
        
        let benefits = this.props.sportObject.benefits
        
        temp.push(<View style={{ width:  85, height: 30}}></View>);
        
        if (benefits && benefits.lenght !== 0)
            for(let i = 0; i < benefits.length; i++)
                temp.push(<Tag text={ benefits[i] } style={{marginTop: 5, marginRight: 5}} />)
        
        return temp
    }


    render () {

        const benefits = this.getMainBenefits()

        return (
            <TouchableHighlight 
                style={styles.container} 
                onPress={() => {this.props.navigation.navigate('Esporte')}}>
                <View style={styles.card}>
                    <View style={styles.upperStrip}>
                        <View
                            style={{
                                elevation: 2,
                                borderRadius: 35,
                                width: 70,
                                height: 70,
                                marginBottom: -40
                            }}
                        >
                        <Image 
                            resizeMode = "cover"
                            style={{
                                width: 70, 
                                height: 70, 
                                //marginBottom: -40, 
                                borderRadius: 35,
                                //borderWidth: 5,
                                //borderColor: "#446a9C"
                            }}
                            source={{uri: 'https://thumbs.dreamstime.com/z/menina-dos-desenhos-animados-que-joga-o-projeto-do-esporte-basquetebol-110224192.jpg'}}
                        />
                        </View>
                        <Text 
                            style={{
                                //paddingLeft: 10, 
                                //backgroundColor: '#446a9C',
                                //paddingRight: 40,
                                color: 'white',
                                paddingHorizontal: 20,
                                fontSize: 20,
                                flex: 1,
                                //paddingVertical: 10
                            }}
                        >
                            {this.state.sportObject.name}
                        </Text>
                    </View>
                    <View style={styles.middleStrip}>
                        {benefits}
                    </View>
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
        elevation: 2
    },
    
    card: {
        flex: 1,
        //borderColor: "black",
        //borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "#fff",
        //padding: 20
    },

    upperStrip: {
        flex: 1,
        flexDirection: 'row',
        //maxHeight: 73,
        alignItems: 'flex-start',
        backgroundColor: '#446a9C',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 10
    },

    middleStrip: {
        flex: 1,
        flexDirection: 'row',
        //justifyContent: 'space-between',
        marginTop: 10,
        marginHorizontal: 20,
        marginBottom: 20,
        flexWrap: 'wrap'
        // maxHeight: 65,
    }
})

export default SportPreviewCard
