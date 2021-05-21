import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View,Text,StyleSheet } from 'react-native';



const Stack = createStackNavigator();

const MyntraScreen=()=> <View style={style.one}>
<Text>Myntra Mall</Text>
<Text> HOUSE OF BRANDS</Text>
<Text> Brand Store In Focus</Text>

    </View>

const MyntraStack =() => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Myntra" component={MyntraScreen} />
    </Stack.Navigator>
  );
}
const style=StyleSheet.create({
    one:{
        color:"#EB6346",
        fontSize:30,
        justifyContent:"center"
    }
})
export default MyntraStack;