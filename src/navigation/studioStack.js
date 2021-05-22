import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Studio from '../screens/studioScreen';

const Stack = createStackNavigator();

const StudioScreen=()=> <View><Text>studio</Text></View>

const studioScreen =() => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="StudioStack" component={Studio} />
    </Stack.Navigator>
  );
}

export default studioScreen;