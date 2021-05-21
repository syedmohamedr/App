import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Explore from '../screens/explore';
import MyntraStack from '../screens/explore/mallStack';
import { View } from 'react-native';
const Stack = createStackNavigator();

const ExploreStack =() => {
  return (
    <Stack.Navigator initialRouteName="Myntra Mall" headerMode={false}>
      <Stack.Screen name="Explore" component={Explore} />
      <Stack.Screen name="Myntra" component={MyntraStack} />
    </Stack.Navigator>
  );
}

export default ExploreStack;