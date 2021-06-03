import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { View,Text } from 'react-native';
import HomeScreen from '../screens/home';


const Stack = createStackNavigator();



const HomeStack =({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerTitleAlign:"center", headerLeft: () => (
            <Icon.Button name="ios-menu" size={30} width={60} height={60} color="black" backgroundColor="#fff" onPress={() => navigation.openDrawer()}></Icon.Button>
         )   }}  />

    </Stack.Navigator>
    
  );
}
// const DrawerStack = () => {
//   return (
//       <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={Home} />
//         <Drawer.Screen name="Notifications" component={Explore} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

export default HomeStack;