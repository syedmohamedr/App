import React from 'react';
import { View, Text,Image,StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Studio from '../screens/studioScreen';

const Stack = createStackNavigator();



const studioScreen =() => {
  return (
    
    <Stack.Navigator>
      <Stack.Screen name="Studio" component={Studio} options={{headerTitleAlign:"left", headerLeft: () => (
           <View style={{justifyContent:"space-between",flexDirection:"row"}}>
             <AntDesign name="save" size={25} color="#4a4f51" style={{left:280,}} onPress={() => navigation.openDrawer()} />
             <AntDesign name="setting" size={25} color="#4a4f51" style={{left:290,}} onPress={() => navigation.openDrawer()} />
             <AntDesign name="search1" size={25} color="#4a4f51" style={{left:300,}} onPress={() => navigation.openDrawer()} />
           </View>
         )   }}  />
    </Stack.Navigator>
    

  );
}

const styles = StyleSheet.create({
  image:{
    left:20,

  }
});

export default studioScreen;