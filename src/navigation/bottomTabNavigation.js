import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View,Text,Image} from 'react-native'
import ExploreStack from './exploreStack';
import ProfileStack from './profileStack'
import CategoryStack from './categoryStack';
import StudioStack from './studioStack';
import HomeStack from './homeStack';
const Tab = createBottomTabNavigator();

const HomeScreen = () => {
    return <View><Text>HomeSCreen</Text></View>
}


const BottomTabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} options={{
        tabBarLabel: "Home",
        tabBarIcon: ({focused,color,size})=>(
          <Image 
          source={
            focused
            ?require('../assets/myntra.png')
            : require('../assets/myntra.png')
          }
          style={{
            width:size,
            height:size,
          }}
          />
            ),
        }}
        />
      <Tab.Screen name="Category" component={CategoryStack} options={{
        tabBarLabel:"Category",
        tabBarIcon: ({focused,color,size})=>(
          <Image
          source={
            focused
            ? require('../assets/category.jpg')
            : require('../assets/category.jpg')
          }
          style={{
            width:size,
            height:size,
            borderRadius:size,
          }}
        />)
      }} />
      <Tab.Screen name="Studio" component={StudioStack} options={{
        tabBarLabel:"Studio",
        tabBarIcon: ({focused,color,size})=>(
          <Image
          source={
            focused
            ? require('../assets/studio.png')
            : require('../assets/studio.png')
          }
          style={{
            width:size,
            height:size,
            borderRadius:size,
          }}
        />)
      }} /> 
      <Tab.Screen name="Explore" component={ExploreStack} options={{
        tabBarLabel:"Explore",
        tabBarIcon: ({focused,color,size})=>(
          <Image
          source={
            focused
            ? require('../assets/explore.png')
            : require('../assets/explore.png')
          }
          style={{
            width:size,
            height:size,
            borderRadius:size,
          }}
        />)
      }} /> 
      <Tab.Screen name="Profile" component={ProfileStack} options={{
        tabBarLabel:"Profile",
        tabBarIcon: ({focused,color,size})=>(
          <Image
          source={
            focused
            ? require('../assets/profile.jpg')
            : require('../assets/profile.jpg')
          }
          style={{
            width:30,
            height:45,
            borderRadius:size,
          }}
        />)
      }} /> 
    </Tab.Navigator>
  );
}

export default BottomTabNavigation;