import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View,Text } from 'react-native';

const Stack = createStackNavigator();

const StudioScreen=()=> <View><Text>Profile</Text></View>

const StudioStack =() => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Studio" component={StudioScreen} />
    </Stack.Navigator>
  );
}

export default StudioStack;