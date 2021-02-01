import React from 'react';
import { Text, Button, View, ScrollView, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';

import { useNavigation } from '@react-navigation/native';
import { auth } from '../../auth/fire';

import SportPreviewCard from '../General/SportPreviewCard'

function Profile(props) {
    
  const sports = [
    {
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
        name: 'Pilates',
        benefits: [
            'melhora a flexibilidade',
            'trabalha o corpo todo',
            'melhora a concentração'
        ],
        id: 3641964541542
    }]

    const navigation = useNavigation();

    let sportCards = sports.map((item) => {

      return (<SportPreviewCard 
          sportObject={item} 
          navigation={navigation}
      />)
  })

    const onLogout = () => {
        auth.signOut()
            .catch(error => console.log(error));
    };
    
    return (
      <View style={styles.container}>
        <ScrollView style={{flex: 1}}>
          <Header
              backgroundColor="white"
              leftComponent={{ text: 'Perfil', style: { color: '#000', fontSize: 20 }}}
              leftContainerStyle={{margin: 5, flex: 3}}
          />
          <Text style={styles.singleLineText}>Esportes que você segue</Text>
          {sportCards}
          <View style={styles.button}>
            <Button 
              title='Refazer o teste de esportes'
              color='orange' 
              onPress={ () => {navigation.navigate('Questionario')} } 
            />
          </View>
          <View style={styles.button}>
            <Button 
              title='Logout' 
              onPress={ onLogout } 
            />
          </View>
        </ScrollView>
      </View>
    );
}

const styles = StyleSheet.create({

  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  singleLineText: {
    marginTop: 20,
    marginHorizontal: 15,
    padding: 8,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 20
  },
  button: {
    marginHorizontal: 15,
    marginVertical: 20
  },
})

export default Profile;
