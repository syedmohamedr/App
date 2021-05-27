import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View,Text } from 'react-native';
import HomeScreen from '../screens/home';

const Stack = createStackNavigator();



const HomeStack =() => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
    
  );
}
const DrawerStack = () => {
  return (
      <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Notifications" component={Explore} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default HomeStack;