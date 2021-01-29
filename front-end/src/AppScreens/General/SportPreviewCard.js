import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight, View, Image } from "react-native";
import { withNavigation } from 'react-navigation';

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

        for(let i = 0; i < benefits.length; i++)
            temp.push(<Text style={{marginTop: 5}}>{'>> ' + benefits[i]}</Text>)
        
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
                        <Image 
                            resizeMode = "cover"
                            style={{width: 70, height: 70, borderRadius: 35}}
                            source={{uri: 'https://thumbs.dreamstime.com/z/menina-dos-desenhos-animados-que-joga-o-projeto-do-esporte-basquetebol-110224192.jpg'}}
                        />
                        <Text style={{fontSize: 20, paddingLeft: 10, paddingRight: 40 }}>
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
        borderRadius: 20,
        margin: 15,
    },
    
    card: {
        flex: 1,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: "#fff",
        padding: 20
    },

    upperStrip: {
        flex: 1,
        flexDirection: 'row',
        maxHeight: 73,
    },

    middleStrip: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        flexWrap: 'wrap'
        // maxHeight: 65,
    }
})

export default SportPreviewCard