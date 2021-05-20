import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Explore from '../screens/explore';

const Stack = createStackNavigator();

const ExploreStack =() => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Explore" component={Explore} />
    </Stack.Navigator>
  );
}

export default ExploreStack;