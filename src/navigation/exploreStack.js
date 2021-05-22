import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Explore from '../screens/explore';
import MyntraStack from '../screens/explore/mallStack';
import { View } from 'react-native';
const Stack = createStackNavigator();

const ExploreStack =() => {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="false"
    screenOptions={{
      headerStyle:{backgroundColor:"#fff"},
      headerTintColor:"grey",
      headerTitleStyle: {fontWeight:'bold'},
      headerTitle:"Explore"
    }}>
      <Stack.Screen name="Explore" component={Explore} />
      <Stack.Screen name="Myntra" component={MyntraStack} />
    </Stack.Navigator>
  );
}

export default ExploreStack;