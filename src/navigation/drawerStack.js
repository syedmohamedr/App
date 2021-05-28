import React from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeStack from './homeStack';
import ProfileStack from './profileStack';
const Drawer = createDrawerNavigator();

const DrawerStack = () => {
    return (
        <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeStack} />
          <Drawer.Screen name="Notifications" component={ProfileStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }

export default DrawerStack;