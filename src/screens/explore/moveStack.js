import React from 'react';
import { View, Text,Image, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const MoveStack = () => {
    return (
        <View>
            <Image
            style={{height:50,width:50,left:150,top:50}}
            source={require('../../assets/myntra.png')}></Image>
            <Text style={{left:210,top:15}}>Myntra</Text>
            <Text style={{top:30,fontSize:30,color:"orange",left:150,fontWeight:"bold"}}>MOVE</Text>
            <Text style={{top:120,left:145}}>Now's the time to</Text>
            <Text style={{fontWeight:"bold",top:120,left:105,fontSize:20}}>Walk more, Earn more</Text>
            <Image style={{height:120,width:120,top:170,left:10}}
            source={require('../../assets/icons/one.jpg')}></Image>
            <Image style={{height:120,width:120,top:50,left:140}}
            source={require('../../assets/icons/two.jpg')}></Image>
              <Image style={{height:120,width:120,top:-70,left:270}}
            source={require('../../assets/icons/three.jpg')}></Image>
            <Text style={{left:70}}>Walk and Earn Insider Points, Goodies from</Text>
            <Text style={{left:80,marginBottom:30}}>Brands you love and Exclusive Perks</Text>
            <Button style={{top:100,marginBottom:20,backgroundColor:"red",color:"black"}}
            title="JOIN NOW"></Button>
            <Text style={{left:8,top:10}}>By joining, you agree to the</Text>
            <Text style={{color:"red",left:185,top:-9}}>Terms & Conditions</Text>
        </View>
    );
}

export default MoveStack;