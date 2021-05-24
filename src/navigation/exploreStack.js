import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Explore from '../screens/explore';
import MyntraStack from '../screens/explore/mallStack';
import { View } from 'react-native';
import InsiderStack from '../screens/explore/insiderStack';
import CardStack from '../screens/explore/giftStack';
import EarnStack from '../screens/explore/earnStack';
import MoveStack from '../screens/explore/moveStack';
import referStack from '../screens/explore/referStack';
import CouponStack from '../screens/explore/couponStack';
import StarStack from '../screens/explore/starStack';
import StudioStack from '../screens/studioScreen';
const Stack = createStackNavigator();

const ExploreStack =() => {
  return (
    <Stack.Navigator initialRouteName="Home" 
    screenOptions={{
      headerStyle:{backgroundColor:"#fff"},
      headerTintColor:"grey",
      headerTitleStyle: {fontWeight:'bold'},
      headerTitle:"Explore"
    }}>
      <Stack.Screen name="Explore" component={Explore} />
      <Stack.Screen name="Myntra" component={MyntraStack} />
      <Stack.Screen name="Insider" component={InsiderStack} />
      <Stack.Screen name="Card" component={CardStack} />
      <Stack.Screen name="Earn" component={EarnStack} />
      <Stack.Screen name="Move" component={MoveStack} />
      <Stack.Screen name="Refer" component={referStack} />
      <Stack.Screen name="Coupons" component={CouponStack} />
      <Stack.Screen name="Studio" component={StudioStack} />



      

    </Stack.Navigator>
  );
}

export default ExploreStack;