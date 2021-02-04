import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SubscribedEventsScreen from './SubscribedEventsScreen'
import { Header } from 'react-native-elements';
import OwnEventsScreen from './OwnEventsScreen';

const Tab = createMaterialTopTabNavigator();

//export default class Appointments extends Component {
//  
//  render(){
//    return (
//
//    
//      <Tab.Navigator>
//        <Tab.Screen name="Eventos Inscritos" component={SubscribedEventsScreen} />
//        <Tab.Screen name="Meus Eventos" component={OwnEventsScreen}/>
//      </Tab.Navigator>
//    );
//  }
//}

const mainColor = '#446A9C';
const secondColor = '#557EB4';
const textColor = '#ffffff';

function Appointments(props) {
    return (
        <View style={{ flex: 1 }}>
            <Header
                statusBarProps={{
                    backgroundColor: mainColor,
                    translucent: true,
                    hidden: false
                }}
                containerStyle={{
                    borderBottomWidth: 0
                }}
                backgroundColor={ mainColor }
                leftComponent={{ 
                    text: 'Compromissos', 
                    style: { 
                        color: textColor, 
                        fontSize: 20,
                    }
                }}
                leftContainerStyle={{margin: 5, flex: 3}}
            />
            <Tab.Navigator
                tabBarOptions={{
                    labelStyle: { 
                        fontSize: 12, 
                        color: textColor 
                    },
                    style: { 
                        backgroundColor: secondColor,
                        elevation: 0
                    },
                    indicatorStyle: {
                        backgroundColor: textColor,
                        height: 5,
                        //marginLeft: 5,
                        //marginRight: 5,
                        borderTopRightRadius: 5,
                        borderTopLeftRadius: 5
                    }
                }}

            >
                <Tab.Screen name="Eventos Inscritos" component={SubscribedEventsScreen} />
                <Tab.Screen name="Meus Eventos" component={OwnEventsScreen}/>
            </Tab.Navigator>
        </View>
    );
}

export default Appointments;


//const Stack = createStackNavigator();
//
//export default class MyStack extends Component {
// 
//    render(){
//        return (
//            <Stack.Navigator>
//              <Stack.Screen name="Compromissos" component={Appointments} />
//            </Stack.Navigator>
//        );
//    }
//}
