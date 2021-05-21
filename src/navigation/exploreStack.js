import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Explore from '../screens/explore';
import MyntraStack from '../screens/explore/mallStack';
const Stack = createStackNavigator();

const ExploreStack =() => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Explore" component={Explore} />
      <Stack.Screen name="Myntra" component={MyntraStack} />
    </Stack.Navigator>
  );
}

export default ExploreStack;