import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, StyleSheet, ScrollView, Text } from 'react-native';
import EventPreviewCard from '../General/EventPreviewCard'
import { Header } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements'

import Event from '../../api/controllers/Event';

function Events(props) {
  
    const [titleKey, setTitleKey] = useState("")
    const [paidEvents, setPaidEvents] = useState(true)
    const [allSports, setAllSports] = useState(false)

    const [ events, setEvents ] = useState([]);
    const [ search, setSearch ] = useState([]);
    const [ fetching, setFetching ] = useState(false);

    const navigation = useNavigation();

    //let data = [
    //{
    //    type: 'event',
    //    title: 'Titulo do evento',
    //    address: 'Rua dos Bobos, 0, Cachoeira Paulista',
    //    date: '30/02/2022',
    //    owned: false,
    //    subCount: 7,
    //    id: 3694513521542
    //},
    //{
    //    type: 'event',
    //    title: 'Titulo do evento 2',
    //    address: 'Rua Jacinto Favoreto, 433, São Carlos',
    //    date: '01/03/2022',
    //    owned: false,
    //    subCount: 6,
    //    id: 4515513521542
    //},
    //{
    //    type: 'event',
    //    title: 'Titulo do evento 3',
    //    address: 'Avenida República Dominicana, 733, São Paulo',
    //    date: '03/04/2021',
    //    owned: false,
    //    subCount: 6,
    //    id: 4515513578134
    //},]

    useEffect(() => {
        const fetch = async () => {
            setFetching(true);
            const { data } = await Event.getAll();
            setEvents(data);
            console.log(data);
            setFetching(false);
        };
        fetch();
    }, [ ]);

    const fetchData = async () => {
        setFetching(true);
        const { data } = await Event.getAll();
        setEvents(data);
        console.log(data);
        setFetching(false);
    };

    useEffect(() => {
        const filtered = events.filter(event => 
            event.name?.toLowerCase().includes(titleKey.toLowerCase()));
        setSearch(filtered);
    }, [ titleKey ]);
    //let eventCards = data.map((item) => {

    //    if(item.title.toLowerCase().includes(titleKey.toLowerCase()))
    //    return <EventPreviewCard 
    //        eventObject={item} 
    //        navigation={navigation}
    //    />
    //})

    return (
        <View style={{flex: 1}}>
            <Header
                backgroundColor="white"
                leftComponent={{ text: 'Eventos', style: { color: '#000', fontSize: 20 }}}
                leftContainerStyle={{margin: 5, flex: 3}}
            />
            <View style={styles.searchMenu}>
                <TextInput
                    placeholder="Pesquisa por nome"
                    style={styles.singleLineInput}
                    onChangeText={(val) => {setTitleKey(val)}}
                />
                
                {/* <Icon name="list"/> */}
            </View>
            <View style={{flex: 1}}>
                { titleKey ?
                
                <FlatList
                    data={ search }
                    renderItem={({ item }) => {
                        return <EventPreviewCard 
                            eventObject={ item } 
                            navigation={ navigation }
                            refresh={ fetchData }
                        />
                    }}
                    keyExtractor={ item => item.id }
                    //refreshing={ fetching }
                    //onRefresh={ fetchData }
                />
                : 
                <FlatList
                    data={ events }
                    renderItem={({ item }) => {
                        return <EventPreviewCard 
                            eventObject={ item } 
                            navigation={ navigation }
                            refresh={ fetchData }
                        />
                    }}
                    keyExtractor={ item => item.id }
                    refreshing={ fetching }
                    onRefresh={ fetchData }
                />
                }
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    searchMenu: {
        backgroundColor: 'white', 
        borderColor: 'black', 
        borderTopWidth: 1,
        // flexDirection: 'row'
    },
    singleLineInput: {
        margin: 10,
        padding: 8,
        backgroundColor: "white",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 1,
        // width: '100%'
    }
})

export default Events
