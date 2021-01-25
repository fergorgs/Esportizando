import React, { Component } from 'react';
import { Text, View, FlatList, ScrollView } from 'react-native';
import EventPreviewCard from '../General/EventPreviewCard'

export default class SubscribedEventsScreen extends Component {
    
    constructor(props) {
        super(props)
    }

    events = [
    {
        title: 'Titulo do evento',
        address: 'Rua dos Bobos, 0, Cachoeira Paulista',
        date: '30/02/2022',
        owned: false,
        subCount: 7,
        id: 3694513521542
    },
    {
        title: 'Titulo do evento 2',
        address: 'Rua Jacinto Favoreto, 433, São Carlos',
        date: '01/03/2022',
        owned: false,
        subCount: 4,
        id: 4515513521542
    },
    {
        title: 'Titulo do evento 3',
        address: 'Rua Deodoro da Fonseca, 57, São Paulo',
        date: '03/03/2022',
        owned: false,
        subCount: 5,
        id: 4515513525698
    },]

    render () {

        return (
                <FlatList
                    data={this.events}
                    renderItem={({item}) => {
                        return <EventPreviewCard 
                            eventObject={item} 
                            navigation={this.props.navigation}
                        />
                    }}
                    keyExtractor={item => item.id}
                />
        )
    }
}
