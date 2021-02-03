import React from 'react';
import { View, Text } from 'react-native';


function Tag({ style, text }) {
    
    return (
        <View
            style={{
                ...style,
                paddingTop: 5,
                paddingBottom: 5,
                paddingLeft: 10,
                paddingRight: 10,
                borderRadius: 50,
                borderColor: '#44699C',
                borderWidth: 1
            }}
        >
            <Text
                style={{
                    color: '#44699C',
                    fontSize: 16
                }}
            >
                { text }
            </Text>
        </View>
    );
}

export default Tag;
