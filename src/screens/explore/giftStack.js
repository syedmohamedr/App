import React from 'react';
import { View, Text,Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';

const CardStack = () => {
    return (
        <ScrollView>
        <View style={{height:1000}}>
                <Image 
                sourcre={require('../../assets/slider/bg.jpg')}></Image>
        </View>
        </ScrollView>
    );
}

export default CardStack;