import React from 'react';
import { Text, TouchableOpacity, Button, View, ScrollView, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';

import { useNavigation } from '@react-navigation/native';
import { auth } from '../../auth/fire';

import SportPreviewCard from '../General/SportPreviewCard'

const mainColor = '#446A9C';
const textColor = '#ffffff';

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

    const onLogout = () => { auth.signOut()
            .catch(error => console.log(error));
    };
    
    return (
      <View style={styles.container}>
        <Header
            statusBarProps={{
                backgroundColor: mainColor,
                translucent: true,
                hidden: false
            }}
            containerStyle={{
                borderBottomWidth: 0,
            }}
            backgroundColor={ mainColor }
            leftComponent={{ 
                text: 'Perfil', 
                style: { 
                    color: textColor, 
                    fontSize: 20,
                }
            }}
            leftContainerStyle={{margin: 5, flex: 3}}
        />
        <ScrollView style={{flex: 1}}>

          { /* <Header
              backgroundColor="white"
              leftComponent={{ text: 'Perfil', style: { color: '#000', fontSize: 20 }}}
              leftContainerStyle={{margin: 5, flex: 3}}
          /> */ }
          <View style={styles.searchMenu}>
                <Text
                    style={styles.singleLineInput}
                    //onChangeText={(val) => {setTitleKey(val)}}
                >
                    Esportes que vocês segue:
                </Text>
              
              {/* <Icon name="list"/> */}
          </View>
          { /*<Text style={styles.singleLineText}>Esportes que você segue</Text>*/}
          {sportCards}
          <View style={{
              marginVertical: 10,
              backgroundColor: 'white',
              marginHorizontal: 10,
              padding: 20,
              borderRadius: 10,
              elevation: 2
          }}>
            
            <TouchableOpacity
                style={{ 
                    borderRadius: 10,
                    backgroundColor: '#3E618E',
                    flex: 1,
                    height: 48,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onPress={ () => navigation.navigate('Questionario') }
            >
                <Text
                    style={{
                        color: '#fff',
                        fontSize: 16
                    }}
                > Refazer o teste de Esportes </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{ 
                    marginTop:10,
                    borderRadius: 10,
                    backgroundColor: '#E94F37',
                    flex: 1,
                    height: 48,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onPress={ onLogout }
            >
                <Text
                    style={{
                        color: '#fff',
                        fontSize: 16
                    }}
                > Logout </Text>
            </TouchableOpacity>
          </View>
          { /**
          <View style={styles.button}>
            <Button 
              title='Refazer o teste de esportes'
              color='orange' 
              onPress={ () => {navigation.navigate('Questionario')} } 
            />
          </View>
          */}
          { /**
          <View style={styles.button}>
            <Button 
              title='Logout' 
              onPress={ onLogout } 
            />
          </View>
          */ }
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
  spacer: {
      marginVertical: 10,
  },
  //singleLineText: {
  //  marginTop: 20,
  //  marginHorizontal: 15,
  //  padding: 8,
  //  backgroundColor: "white",
  //  borderColor: "black",
  //  borderWidth: 1,
  //  borderRadius: 10,
  //  fontSize: 20
  //},
  button: {
    marginHorizontal: 15,
  },
    searchMenu: {
        backgroundColor: '#557EB4', 
        //borderColor: 'black', 
        //borderTopWidth: 1,
        // flexDirection: 'row'
    },
    singleLineInput: {
        //margin: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 6,
        marginBottom: 6,
        padding: 8,
        backgroundColor: "#557EB4",
        color: 'white',
        fontSize: 16
        //borderColor: "black",
        //borderWidth: 1,
        //borderRadius: 1,
        // width: '100%'
    }
})

export default Profile;
