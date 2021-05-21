import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../screens/';

const Stack = createStackNavigator();


const OrdersStack =() => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="orders" component={OrdersStack} />
    </Stack.Navigator>
  );
}

export default OrdersStack;