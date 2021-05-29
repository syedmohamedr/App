import React from 'react';
import { View, Text,Image, Pressable, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';

const CardStack = () => {
    return (
        <ScrollView>
        <View style={{height:2100}}>
             <Text style={{color:"#F609C0",left:110,top:80,fontSize:18}}>Popular Gift Cards</Text>
             <Text style={{left:100,top:84,fontSize:14}}>Make each thought Count</Text>
             <Pressable><Image
             style={{height:200,width:200,top:100,left:80,borderWidth:2,borderColor:"pink",borderRadius:20}}
             source={require('../../assets/icons/birthday.jpg')}></Image></Pressable>
             <Text style={{color:"violet",left:150,top:50}}>Birthday</Text>
             <Text style={{color:"black",left:150,top:50}}>+Explore</Text>
             <Image
             style={{height:200,width:200,top:100,left:80,borderWidth:2,borderColor:"pink",borderRadius:20}}
             source={require('../../assets/icons/gifts.jpg')}></Image>
              <Text style={{color:"red",left:150,top:60}}>Best Wishes</Text>
             <Text style={{color:"black",left:150,top:62}}>+Explore</Text>
             <Text style={{color:"#F609C0",fontWeight:"bold",top:105,left:60,fontSize:20}}>Recieved A Myntra Gift Card?</Text>
             <TouchableOpacity style={{backgroundColor:"pink",width:100,left:140,top:110,borderRadius:30,borderWidth:1,borderColor:"red"}}>
                 <Text>Redeem it now</Text>
             </TouchableOpacity>
             <Text style={{left:120,top:140,color:"orange",fontSize:16}}>Shop By Price Range</Text>
             <Text style={{left:120,top:140,color:"black",fontSize:14}}>A gift for every budget</Text>
            <Image style={{borderRadius:300,top:150,width:100,height:100,left:5}}
            source={require('../../assets/icons/circle.jpg')}></Image>
           <Image style={{borderRadius:300,top:150,width:100,height:100,left:150,top:50}}
            source={require('../../assets/icons/circle.jpg')}></Image>
          <Image style={{borderRadius:300,top:150,width:100,height:100,left:290,top:-52}}
            source={require('../../assets/icons/circle.jpg')}></Image>
                        <Text style={{top:-105,left:20,color:"red"}}>Rs. 500</Text>
                        <Text style={{top:-125,left:170,color:"red"}}>Rs. 1,000</Text>
                        <Text style={{top:-145,left:310,color:"red"}}>Rs. 2,000</Text>
                        <Image style={{borderRadius:300,top:-50,width:100,height:100,left:5}}
            source={require('../../assets/icons/circle.jpg')}></Image>
           <Image style={{borderRadius:300,top:150,width:100,height:100,left:150,top:-150}}
            source={require('../../assets/icons/circle.jpg')}></Image>
          <Image style={{borderRadius:300,top:150,width:100,height:100,left:290,top:-250}}
            source={require('../../assets/icons/circle.jpg')}></Image>
              <Text style={{top:-305,left:20,color:"red"}}>Rs. 3,000</Text>
                        <Text style={{top:-322,left:170,color:"red"}}>Rs. 4,000</Text>
                        <Text style={{top:-340,left:310,color:"red"}}>Rs. 5,000</Text>
                        <Text style={{color:"#F609C0",left:150,top:-180,fontWeight:"bold"}}>Shop By Occasion</Text>
                        <Text style={{left:110,top:-170}}>Gift cards for every celebration</Text>
                        <Image
             style={{height:150,width:150,top:-145,left:20,borderWidth:3,borderColor:"pink"}}
             source={require('../../assets/icons/birthday.jpg')}></Image>
             <Text style={{color:"#F609C0",top:-180,left:60}}>Birthday</Text>
             <Text style={{top:-184,left:25}}>Make their day special</Text>
             <Image
             style={{height:150,width:150,top:-330,left:220,borderWidth:3,borderColor:"pink"}}
             source={require('../../assets/icons/anniversary.jpg')}></Image>
                          <Text style={{color:"#F609C0",top:-365,left:255}}>Anniversary</Text>
                          <Text style={{top:-370,left:224}}>Celebrate togetherness</Text>
                          <Image
             style={{height:150,width:150,top:-310,left:20,borderWidth:3,borderColor:"pink"}}
             source={require('../../assets/icons/wedding.jpg')}></Image>
             <Text style={{color:"#B466A3",top:-350,left:60}}>Wedding</Text>
             <Text style={{top:-350,left:28}}>For stylish moments</Text>
             <Image
             style={{height:150,width:150,top:-500,left:220,borderWidth:3,borderColor:"pink"}}
             source={require('../../assets/icons/engagement.png')}></Image>
                                       <Text style={{color:"#F609C0",top:-535,left:255}}>Engagement</Text>
                                       <Text style={{top:-538,left:222}}>For celebrations & more</Text>
                                       <Image
             style={{height:150,width:150,top:-500,left:20,borderWidth:3,borderColor:"pink"}}
             source={require('../../assets/icons/farewell.png')}></Image>
             <Text style={{color:"#B466A3",top:-540,left:60}}>Farewell</Text>
             <Text style={{top:-540,left:28,color:"red"}}>The best 'thank you!'</Text>
<Image
             style={{height:150,width:150,top:-690,left:220,borderWidth:3,borderColor:"pink"}}
             source={require('../../assets/icons/house.jpg')}></Image>
                                                    <Text style={{color:"black",top:-725,left:250}}>House Warming</Text>
                                                    <Text style={{top:-726,left:222}}>For home sweet home</Text>
        <Text style={{top:-600,color:"orange",left:105,fontSize:15}}>Season's Special Gift Cards</Text>
        <Text style={{top:-600,left:110}}>Give them the gift of choice</Text>
        <Image style={{borderRadius:300,top:-600,width:100,height:100,left:5}}
            source={require('../../assets/icons/circle.jpg')}></Image> 
             <Image style={{borderRadius:300,top:-697,width:100,height:100,left:160}}
            source={require('../../assets/icons/circle.jpg')}></Image> 
             <Image style={{borderRadius:300,top:-797,width:100,height:100,left:290}}
            source={require('../../assets/icons/circle.jpg')}></Image>
            <Text style={{top:-880,left:30}}>Check</Text>
            <Text style={{top:-880,left:30}}>your</Text>
            <Text style={{top:-880,left:30}}>balance</Text>
            <Text style={{top:-940,left:180}}>Corporate</Text>
            <Text style={{top:-940,left:180}}>&Bulk</Text>
            <Text style={{top:-940,left:180}}>Purchases</Text>
            <Text style={{top:-970,left:320}}>FAQ's</Text>
        </View>
        </ScrollView>
    );
}

export default CardStack;