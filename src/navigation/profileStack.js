import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View,Text } from 'react-native';

const Stack = createStackNavigator();

const ProfileScreen=()=> <View><Text>Profile</Text></View>

const ProfileStack =() => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

export default ProfileStack;