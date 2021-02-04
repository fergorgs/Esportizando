import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import EventPreviewCard from '../../General/EventPreviewCard'
import { FloatingAction } from "react-native-floating-action";
import Icon from "react-native-vector-icons/Ionicons";

import Event from '../../../api/controllers/Event';

function OwnEventsScreen({ navigation }) {
    const [ events, setEvents ] = useState([]);
    const [ fetching, setFetching ] = useState(false);
    const [ reRender, setReRender ] = useState(true);
    //constructor(props) {
    //    super(props)
    //}
    
    useEffect(() => {
        const fetch = async () => {
            setFetching(true);
            const { data } = await Event.getAllCreated();
            setEvents(data);
            //setReRender(!reRender);
            setFetching(false);
        };

        fetch();
    }, []);

    //events = [
    //{
    //    title: 'Titulo do evento',
    //    address: 'Rua dos Bobos, 0, Cachoeira Paulista',
    //    date: '30/02/2022',
    //    owned: true,
    //    subCount: 7,
    //    id: 3694513521542
    //},
    //{
    //    title: 'Titulo do evento 2',
    //    address: 'Rua Jacinto Favoreto, 433, São Carlos',
    //    date: '01/03/2022',
    //    owned: true,
    //    subCount: 6,
    //    id: 4515513521542
    //},]
    
    //renderItem({item}) {
    //    return <EventPreviewCard eventObject={item}/>
    //}

    //action = null
    const fetchData = async () => {
        setFetching(true);
        const { data } = await Event.getAllCreated();
        console.log(data);
        setEvents(data);
        //setReRender(!reRender);
        setFetching(false);
    };

    //console.log(events);
    //render () {
    return (
        <View>
            <View style={{minHeight: '100%'}}>
                <FlatList
                    data={ events }
                    //extraData={ reRender }
                    //renderItem={this.renderItem}
                    renderItem={({ item }) => {
                        return <EventPreviewCard 
                            eventObject={ item } 
                            navigation={ navigation }
                        />
                    }}
                    keyExtractor={ item => item.id }
                    refreshing={ fetching }
                    onRefresh={ fetchData }
                    ListFooterComponent={ 
                        <View style={{ height: 10 }}></View> 
                    }
                />
            </View>
            <TouchableOpacity
                style={{
                    alignItems:'center',
                    justifyContent:'center',
                    width:60,
                    position: 'absolute',                                          
                    bottom: 20,                                                    
                    right: 20,
                    height:60,
                    backgroundColor:'#3E618E',
                    borderRadius:100,
                }}
                onPress={ () => {
                    navigation.navigate('Novo Evento', {
                        refresh: fetchData
                    });
                }}
            >
                <Icon name="add" size={30} color="#ffffff" />
            </TouchableOpacity> 
                {/* <FloatingAction
                color="#3E618E"
              onPressMain={() => {
                //   console.log(this.props.navigation)
                navigation.navigate('Novo Evento', {
                    refresh: fetchData
                });
                //this.action.reset()
                // this.props.navigation.goBack()
              }}
              //ref={ref => {
              //  this.action = ref;
              //}}
              showBackground={false}
            />
            */ }
        </View>
    )
    //}
}

export default OwnEventsScreen;
