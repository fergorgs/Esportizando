import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import EventPreviewCard from '../General/EventPreviewCard'
import SportPreviewCard from '../General/SportPreviewCard'
import { Header } from 'react-native-elements';
// import LocationPreviewCard from '../General/LocationPreviewCard'

class Timeline extends Component {
  
    constructor(props) {
        super(props)
    }

    posts = [
    {
        type: 'event',
        title: 'Titulo do evento',
        address: 'Rua dos Bobos, 0, Cachoeira Paulista',
        date: '30/02/2022',
        owned: false,
        subCount: 7,
        id: 3694513521542
    },
    {
        type: 'sport',
        name: 'Futebol',
        benefits: [
            'aeróbico',
            'fortalece o quadril',
        ],
        id: 3694756241542
    },
    {
        type: 'sport',
        name: 'Basquete',
        benefits: [
            'aeróbico',
            'trabalha o superior',
            'melhora o condicionamento',
            'baixo impacto'
        ],
        id: 3641556241542
    },
    {
        type: 'event',
        title: 'Titulo do evento 2',
        address: 'Rua Jacinto Favoreto, 433, São Carlos',
        date: '01/03/2022',
        owned: false,
        subCount: 6,
        id: 4515513521542
    },
    {
        type: 'event',
        title: 'Titulo do evento 3',
        address: 'Avenida República Dominicana, 733, São Paulo',
        date: '03/04/2021',
        owned: false,
        subCount: 6,
        id: 4515513578134
    },]

    render(){
        return (
            <View>
                <Header
                    backgroundColor="white"
                    leftComponent={{ text: 'Timeline', style: { color: '#000', fontSize: 20 }}}
                    leftContainerStyle={{margin: 5, flex: 3}}
                />
                <FlatList
                    data={this.posts}
                    renderItem={({item}) => {
                        if(item.type == 'event'){
                            return  <EventPreviewCard 
                                        eventObject={item} 
                                        navigation={this.props.navigation}
                                    />
                        }
                        else if(item.type == 'sport'){
                            return  <SportPreviewCard 
                                        sportObject={item} 
                                        navigation={this.props.navigation}
                                    />
                        }
                    }}
                    keyExtractor={item => item.id}
                    style={{marginBottom: 80}}
                />
            </View>
        );
  }
}

export default Timeline
