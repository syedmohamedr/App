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
import MasterStack from '../screens/explore/masterStack';
import Icon from 'react-native-vector-icons/FontAwesome'
const Stack = createStackNavigator();

const ExploreStack =({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Home" 
    screenOptions={{
      headerStyle:{backgroundColor:"#fff"},
      headerTintColor:"grey",
      headerTitleStyle: {fontWeight:'bold'},
      headerTitle:"Explore"
    }}>
      <Stack.Screen name="Explore" component={Explore} />
      <Stack.Screen name="Myntra" component={MyntraStack} options={{ headerRight: () => (
        <View style={{justifyContent:"center", flexDirection:"row"}}>
            <Icon.Button name="search" size={30} width={60} height={60}   color="#414141"  backgroundColor="#fff" onPress={() => navigation.openDrawer()}></Icon.Button>
             <Icon.Button name="heart" size={30} width={60} height={60}   color="#414141"  backgroundColor="#fff" onPress={() => navigation.openDrawer()}></Icon.Button>
             <Icon.Button name="cart-plus" size={30} width={60} height={60}   color="#414141"  backgroundColor="#fff" onPress={() => navigation.openDrawer()}></Icon.Button>
            </View>  )       }} />
      <Stack.Screen name="Insider" component={InsiderStack} />
      <Stack.Screen name="Card" component={CardStack} options={{ headerRight: () => (
        <View style={{justifyContent:"center", flexDirection:"row"}}>
            <Icon.Button name="search" size={30} width={60} height={60}   color="#414141"  backgroundColor="#fff" onPress={() => navigation.openDrawer()}></Icon.Button>
             <Icon.Button name="heart" size={30} width={60} height={60}   color="#414141"  backgroundColor="#fff" onPress={() => navigation.openDrawer()}></Icon.Button>
             <Icon.Button name="cart-plus" size={30} width={60} height={60}   color="#414141"  backgroundColor="#fff" onPress={() => navigation.openDrawer()}></Icon.Button>
            </View>  )       }}/>
      <Stack.Screen name="Earn" component={EarnStack} />
      <Stack.Screen name="Move" component={MoveStack} />
      <Stack.Screen name="Refer" component={referStack} />
      <Stack.Screen name="Coupons" component={CouponStack} />
      <Stack.Screen name="Studio" component={StudioStack} />
      <Stack.Screen name="Master" component={MasterStack} />




      

    </Stack.Navigator>
  );
}

export default ExploreStack;