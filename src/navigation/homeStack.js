import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { View,Text } from 'react-native';
import HomeScreen from '../screens/home';


const Stack = createStackNavigator();



const HomeStack =({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerTitleAlign:"center", headerLeft: () => (
           <View style={{justifyContent:"space-between",flexDirection:"row"}}>
             <AntDesign name="menu-unfold" size={30} color="#ADADA9" style={{left:2,}} onPress={() => navigation.openDrawer()} />
             <AntDesign name="folder1" size={25} color="#ADADA9" style={{left:240,}} onPress={() => navigation.openDrawer()} />
             <AntDesign name="bells" size={25} color="#ADADA9" style={{left:250}} onPress={() => navigation.openDrawer()}/>
             <AntDesign name="heart" size={25} color="#ADADA9" style={{left:255,}} onPress={() => navigation.openDrawer()} />
             <AntDesign name="shoppingcart" size={25} color="#ADADA9" style={{left:265,}} onPress={() => navigation.openDrawer()} />
           </View>
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