import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View,Text,StyleSheet,Image, ScrollView} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from '../../config/color';



const Stack = createStackNavigator();

const MyntraScreen=()=> <View>
    <ScrollView>
<Text>Myntra Mall</Text>
<Text style={{color: colors.home}}> HOUSE OF BRANDS</Text>
<Text> Brand Store In Focus</Text>
<Image
style={style.two}
source={require('../../assets/pic1.jpg')}/>
<Image
style={style.two}
source={require('../../assets/pic2.jpg')}/>
<Image
style={style.two}
source={require('../../assets/pic3.jpeg')}/>

</ScrollView>
    </View>

const MyntraStack =() => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Myntra Mall" component={MyntraScreen} />
    </Stack.Navigator>
  );
}
const style=StyleSheet.create({
    one:{
    justifyContent:"center",
    alignContent:"center",
    left:40,
    top:20,
    },
    two:{
        height:200,
        width:200
    }
})
export default MyntraStack;