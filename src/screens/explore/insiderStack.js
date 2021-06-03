import React from 'react';
import { View, Text, ScrollView,Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const InsiderStack = () => {
    return (           
          <View style={{backgroundColor:"black",height:"100%"}}>
                    <ScrollView style={{height:"100%"}}>
              <View style={{height:400}}>
                  <Image style={{height:29,width:29,left:"80%",top:10}}
              source={require('../../assets/myntra.png')}></Image>
              <Text style={{color:"yellow",left:"75%",fontSize:20,fontWeight:"bold",top:5}}>iNSIDER</Text>
              <Image style={{top:10,width:"100%",height:300}}
              source={require('../../assets/thumbs.jpg')}></Image>
              <Text style={{top:-40,left:"28%"}}>NOTHING IS AS REWARDING</Text>
              <Text style={{color:"yellow",top:-38,left:"30%"}}>as being a Myntra Insider!</Text>
              </View>
              <View style={{height:400}}>
                  <Text style={{color:"gold",left:30,top:20}}>Fashion</Text>
                  <Text style={{color:"#fff",left:30,top:20}}>ADVICE</Text>
            <Image style={{borderRadius:300,height:50,width:50,left:100,top:-21,borderWidth:1,borderColor:"gold"}}
            source={require('../../assets/icons/icon1.jpg')}></Image>
            <Text style={{left:200,color:"#fff",top:-75}}>Get fashion tips &</Text>
            <Text style={{left:200,color:"#fff",top:-71}}>advice from India's top</Text>
            <Text style={{left:200,color:"#fff",top:-71}}>celeb stylists</Text>
            <Text style={{color:"gold",left:50,top:2}}>VIP</Text>
            <Text style={{color:"#fff",left:30,top:8}}>ACCESS</Text>
            <Image style={{borderRadius:300,height:50,width:50,left:100,top:-40,borderWidth:1,borderColor:"gold"}}
            source={require('../../assets/icons/icon2.jpg')}></Image>
            <Text style={{left:200,color:"#fff",top:-95}}>Get early access to</Text>
            <Text style={{left:200,color:"#fff",top:-95}}>all Myntra sale events</Text>
            <Text style={{left:200,color:"#fff",top:-95}}>& all launches</Text>
            <Text style={{color:"gold",left:30,top:-10}}>Extra</Text>
            <Text style={{color:"#fff",left:30,top:-10}}>Savings</Text>
               <Image style={{borderRadius:300,height:50,width:50,left:102,top:-52,borderWidth:1,borderColor:"gold"}}
            source={require('../../assets/icons/icon3.png')}></Image>
            <Text style={{left:200,color:"#fff",top:-95}}>Get Extra Savings &</Text>
            <Text style={{left:200,color:"#fff",top:-95}}>Offers on your purchasesa</Text>
            <View style={{backgroundColor:"#E2F032", height:100,width:"100%"}}>
                <Text>Its's easy to</Text>
                <Text>become an Insider!</Text>
            </View>
              </View>
                </ScrollView>
          </View>

    );
}

export default InsiderStack;