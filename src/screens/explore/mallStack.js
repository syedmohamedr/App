import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View,Text,StyleSheet,Image, ScrollView} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from '../../config/color';
import Styles from './style';


const Stack = createStackNavigator();

const MyntraScreen=()=> <View style={style.one}>
    <ScrollView>
<Text style={{color: colors.home}}> HOUSE OF BRANDS</Text>
<Text> Brand Store In Focus</Text>
<Image
style={style.two}
source={require('../../assets/pic1.jpg')}/>
<Text style={{color:"red",fontSize:20,fontFamily:"italic"}}>Best Of Summer Styles</Text>
<Image
style={style.two}
source={require('../../assets/pic2.jpg')}/>
<Image
style={style.two}
source={require('../../assets/pic3.jpeg')}/>
<Image
style={style.two}
source={require('../../assets/pic4.jpg')}/>

</ScrollView>
    </View>

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
export default MyntraScreen;