import React from 'react';
import { Text, Button, View } from 'react-native';

import { auth } from '../../auth/fire';

function Profile(props) {
    
    const onLogout = () => {
        auth.signOut()
            .catch(error => console.log(error));
    };
    
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile</Text>
        <Button title='Logout' onPress={ onLogout } />
      </View>
    );
}

export default Profile;
