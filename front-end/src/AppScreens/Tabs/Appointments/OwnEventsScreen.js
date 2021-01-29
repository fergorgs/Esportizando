import React, { useState, useEffect } from 'react';
import { Text, View, FlatList } from 'react-native';
import EventPreviewCard from '../../General/EventPreviewCard'
import { FloatingAction } from "react-native-floating-action";

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
                />
            </View>
            <FloatingAction
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
        </View>
    )
    //}
}

export default OwnEventsScreen;
