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
          <Icon.Button name="heart-o" size={23}  style={{top:1}}   color="#414141"  backgroundColor="#fff" onPress={() => navigation.openDrawer()}></Icon.Button>
          <Icon.Button name="shopping-bag" size={25} style={{left:-2}} color="#414141"  backgroundColor="#fff" onPress={() => navigation.openDrawer()}></Icon.Button>
         </View>  )       }}  />
    </Stack.Navigator>
  );
}

export default CategoryStack;