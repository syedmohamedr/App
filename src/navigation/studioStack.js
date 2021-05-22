import React from 'react';
import { View, Text,Image,StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Studio from '../screens/studioScreen';

const Stack = createStackNavigator();



const studioScreen =() => {
  return (
    
    <Stack.Navigator>
      <Stack.Screen name="Studio" component={Studio} />
    </Stack.Navigator>
    

  );
}

const styles = StyleSheet.create({
  image:{
    left:20,

  }
});

export default studioScreen;