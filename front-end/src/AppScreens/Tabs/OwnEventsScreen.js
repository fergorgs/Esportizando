import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import EventPreviewCard from '../General/EventPreviewCard'
import { FloatingAction } from "react-native-floating-action";

export default class OwnEventsScreen extends Component {
    
    constructor(props) {
        super(props)
    }

    events = [
    {
        title: 'Titulo do evento',
        address: 'Rua dos Bobos, 0, Cachoeira Paulista',
        date: '30/02/2022',
        owned: true,
        subCount: 7,
        id: 3694513521542
    },
    {
        title: 'Titulo do evento 2',
        address: 'Rua Jacinto Favoreto, 433, São Carlos',
        date: '01/03/2022',
        owned: true,
        subCount: 6,
        id: 4515513521542
    },]
    
    renderItem({item}) {
        return <EventPreviewCard eventObject={item}/>
    }

    action = null

    render () {
        return (
            <View>
                <View style={{minHeight: '100%'}}>
                    <FlatList
                        data={this.events}
                        renderItem={this.renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>
                <FloatingAction
                  onPressMain={() => {
                    //   console.log(this.props.navigation)
                    this.props.navigation.navigate('Novo Evento')
                    this.action.reset()
                    // this.props.navigation.goBack()
                  }}
                  ref={ref => {
                    this.action = ref;
                  }}
                  showBackground={false}
                />
            </View>
        )
    }
}