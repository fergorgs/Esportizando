import React from 'react';
import { Text, Button, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { auth } from '../../auth/fire';

function Profile(props) {
    
    const onLogout = () => {
        auth.signOut()
            .catch(error => console.log(error));
    };

    const navigation = useNavigation();
    
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile</Text>
        <Button title='Logout' onPress={ onLogout } />
        <Button title='Take test' onPress={ () => {navigation.navigate('Questionario')} } />
      </View>
    );
}

export default Profile;
