import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const InsiderStack = () => {
    return (
        <View>
            <Text>Myntra Insider</Text>
            <Text>Hi</Text>
        </View>
    );
}

export default InsiderStack;