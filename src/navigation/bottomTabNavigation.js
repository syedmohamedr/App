import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {View,Text} from 'react-native'
import ExploreStack from './exploreStack';
import ProfileStack from './profileStack'
import CategoryStack from './categoryStack';
import StudioStack from './studioStack';
const Tab = createBottomTabNavigator();

const HomeScreen = () => {
    return <View><Text>HomeSCreen</Text></View>
}


const BottomTabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Category" component={CategoryStack} />
      <Tab.Screen name="Studio" component={StudioStack} />
      <Tab.Screen name="Explore" component={ExploreStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />

    </Tab.Navigator>
  );
}

export default BottomTabNavigation;