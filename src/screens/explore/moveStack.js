import React from 'react';
import { View, Text,Image, Button,Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const MoveStack = () => {
    return (
        <View style={{backgroundColor:"white"}}>
            <Image
            style={{height:20,width:20,left:"42%",top:20}}
            source={require('../../assets/myntra.png')}></Image>
            <Text style={{left:"48%",top:5,fontSize:10,fontWeight:"bold",}}>Myntra</Text>
            <Text style={{top:3,fontSize:35,color:"orange",left:"38%",fontWeight:"bold"}}>MOVE</Text>
            <Text style={{top:120,left:145,marginTop:50}}>Now's the time to</Text>
            <Text style={{fontWeight:"bold",top:120,left:105,fontSize:20}}>Walk more, Earn more</Text>
            <Image style={{height:120,width:120,top:170,left:10}}
            source={require('../../assets/icons/one.jpg')}></Image>
            <Image style={{height:120,width:120,top:50,left:140}}
            source={require('../../assets/icons/two.jpg')}></Image>
              <Image style={{height:120,width:120,top:-70,left:270}}
            source={require('../../assets/icons/three.jpg')}></Image>
            <Text style={{left:70,top:-50}}>Walk and Earn Insider Points, Goodies from</Text>
            <Text style={{left:90,marginBottom:65,top:-50}}>Brands you love and Exclusive Perks</Text>
            <View style={{width:"95%",left:10,borderRadius:10}}>
            <Button
        title="JOIN NOW"
        color="#ff224a"
        onPress={() => Alert.alert('You Try To Join')}
      />
      </View>
            <Text style={{left:40,top:10}}>By joining, you agree to the</Text>
            <Text style={{color:"red",left:220,top:-9}}>Terms & Conditions</Text>
        </View>
    );
}

export default MoveStack;