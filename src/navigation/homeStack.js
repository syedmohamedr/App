import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View,Text } from 'react-native';
import Category from '../screens/home';

const Stack = createStackNavigator();

const CategoryScreen=()=> <View><Text>Category</Text></View>

const HomeStack =() => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Category" component={Category} />
    </Stack.Navigator>
  );
}

export default HomeStack;