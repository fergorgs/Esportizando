import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, ScrollView } from 'react-native';
import EventPreviewCard from '../../General/EventPreviewCard'

import Event from '../../../api/controllers/Event';

function SubscribedEventsScreen({ navigation }) {
    const [ events, setEvents ] = useState([]);
    const [ fetching, setFetching ] = useState(false);
    const [ reRender, setReRender ] = useState(true);
    //constructor(props) {
    //    super(props)
    //}
    
    useEffect(() => {
        const fetch = async () => {
            setFetching(true);
            const { data } = await Event.getAllSubscribed();
            setEvents(data);
            //setReRender(!reRender);
            setFetching(false);
        };

        fetch();
    }, []);

    const fetchData = async () => {
        setFetching(true);
        const { data } = await Event.getAllSubscribed();
        //console.log(data);
        setEvents(data);
        //setReRender(!reRender);
        setFetching(false);
    };

    //console.log(events);
    //render () {

    //events = [
    //{
    //    title: 'Titulo do evento',
    //    address: 'Rua dos Bobos, 0, Cachoeira Paulista',
    //    date: '30/02/2022',
    //    owned: false,
    //    subCount: 7,
    //    id: 3694513521542
    //},
    //{
    //    title: 'Titulo do evento 2',
    //    address: 'Rua Jacinto Favoreto, 433, São Carlos',
    //    date: '01/03/2022',
    //    owned: false,
    //    subCount: 4,
    //    id: 4515513521542
    //},
    //{
    //    title: 'Titulo do evento 3',
    //    address: 'Rua Deodoro da Fonseca, 57, São Paulo',
    //    date: '03/03/2022',
    //    owned: false,
    //    subCount: 5,
    //    id: 4515513525698
    //},]

    //render () {

    return (
        <FlatList
            style={{
                backgroundColor: '#f2f2f2'
            }}
            data={events}
            renderItem={({item}) => {
                return <EventPreviewCard 
                    eventObject={item} 
                    navigation={navigation}
                />
            }}
            keyExtractor={item => item.id}
            refreshing={ fetching }
            onRefresh={ fetchData }
            ListFooterComponent={ 
                <View style={{ height: 10 }}></View> 
            }
        />
    )
    //}
}

export default SubscribedEventsScreen;
