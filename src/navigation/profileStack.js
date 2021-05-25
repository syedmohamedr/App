import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../screens/Profile';
import CenterStack from '../screens/Profile/centerStack';
import ModalStack from '../screens/Profile/modalStack';
import WishStack from '../screens/Profile/wishStack';
import EarnStack from '../screens/Profile/earnStack';
import QuestionStack from '../screens/Profile/FAQStack';
import AboutStack from '../screens/Profile/aboutStack';
import TermStack from '../screens/Profile/termsStack';
import Coupons from '../screens/Profile/couponStack';
import PolicyStack from '../screens/Profile/policyStack';

const Stack = createStackNavigator();


const ProfileStack =() => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Help" component={CenterStack} />
      <Stack.Screen name="Order" component={ModalStack} />
      <Stack.Screen name="Wishlist" component={WishStack} />
      <Stack.Screen name="Earn" component={EarnStack} />
      <Stack.Screen name="FAQ" component={QuestionStack} />
      <Stack.Screen name="About Us" component={AboutStack} />
      <Stack.Screen name="Terms" component={TermStack} />
      <Stack.Screen name="Coupons" component={Coupons} />
      <Stack.Screen name="Privacy" component={PolicyStack} />


    </Stack.Navigator>
  );
}

export default ProfileStack;