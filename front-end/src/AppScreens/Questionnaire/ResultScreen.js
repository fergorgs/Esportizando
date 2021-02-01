import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView, Button } from 'react-native';
import SportPreviewCard from '../General/SportPreviewCard'
import { Header } from 'react-native-elements';
import { useNavigation, useRoute } from '@react-navigation/native';


const ResultScreen = () => {

    //const sports = [
    //{
    //    name: 'Futebol',
    //    benefits: [
    //        'aeróbico',
    //        'fortalece o quadril',
    //    ],
    //    id: 3694756241542
    //},
    //{
    //    name: 'Basquete',
    //    benefits: [
    //        'aeróbico',
    //        'trabalha o superior',
    //        'melhora o condicionamento',
    //        'baixo impacto'
    //    ],
    //    id: 3641556241542
    //},
    //{
    //    name: 'Caminhada',
    //    benefits: [
    //        'aeróbico',
    //        'trabalha as pernas',
    //        'emagresse',
    //        'melhora o condicionamento'
    //    ],
    //    id: 3641556246582
    //},
    //{
    //    name: 'Pilates',
    //    benefits: [
    //        'melhora a flexibilidade',
    //        'trabalha o corpo todo',
    //        'melhora a concentração'
    //    ],
    //    id: 3641964541542
    //},]

    const navigation = useNavigation();
    const route = useRoute();

    const { data } = route.params;

    let sportCards = data.map((item) => {
        console.log(item);
        return (<SportPreviewCard 
            sportObject={item} 
            navigation={navigation}
        />)
    })


    return (
        <View style={{backgroundColor: 'lightblue', flex: 1}}>
            <ScrollView 
                contentContainerStyle={styles.container}
            >
                <Text style={styles.text}>
                    Estes são alguns esportes que 
                    achamos que podem te interessar!
                </Text>
                {sportCards}
                <View style={{backgroundColor: 'red', marginBottom: 80, marginTop: 20}}>
                    <Button 
                        title={'Voltar ao app'}
                        onPress={() => navigation.navigate('Timeline')}
                    />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginHorizontal: 20
      },
    container: {
        justifyContent: 'space-around',
        marginTop: 40,
    }
})

export default ResultScreen
