import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View,Text } from 'react-native';

const Stack = createStackNavigator();

const CategoryScreen=()=> <View><Text>Category</Text></View>

const CategoryStack =() => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Category" component={CategoryScreen} />
    </Stack.Navigator>
  );
}

export default CategoryStack;