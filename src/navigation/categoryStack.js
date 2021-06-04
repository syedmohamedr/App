import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View,Text } from 'react-native';
import Category from '../screens/category';

import Icon from 'react-native-vector-icons/FontAwesome'
const Stack = createStackNavigator();

const CategoryScreen=()=> <View><Text>Category</Text></View>

const CategoryStack =({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Category" component={Category} options={{ headerRight: () => (
         <View style={{justifyContent:"center", flexDirection:"row"}}>
          <Icon.Button name="heart" size={30} width={60} height={60}   color="#414141"  backgroundColor="#fff" onPress={() => navigation.openDrawer()}></Icon.Button>
          <Icon.Button name="cart-plus" size={30} width={60} height={60}   color="#414141"  backgroundColor="#fff" onPress={() => navigation.openDrawer()}></Icon.Button>
         </View>  )       }}  />
    </Stack.Navigator>
  );
}

export default CategoryStack;