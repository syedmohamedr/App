
import React, { Component } from 'react';
import { View, Text, StyleSheet,ScrollView,Image, } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const EarnStack = () => {
    return (
        <ScrollView>
            <View style={{backgroundColor:"#5d3eaf",height:130,width:"100%"}}>
            <Text style={{fontSize:50,fontWeight:"bold",color:"white",padding:20}}>Play</Text>
            <Text style={{fontSize:25,fontWeight:"bold",color:"white", left:20,top:-30}}>
                & Earn
            </Text>
            <Text style={{fontSize:20,color:"white", left:"60%",top:-62}}>View Rewards</Text>
            </View>
            <View style={{borderRadius:40,}}>
            <Image
            style={{height:40,width:40,left:"50%",top:-60,marginBottom:-30 }}
                source={require('../../assets/pic/gift1.gif')}></Image>
                </View>

            <View style={{margin:15,padding:20,backgroundColor:"#58d68d",borderTopLeftRadius:30,borderTopRightRadius:30,
                        borderBottomRightRadius:30,height:200    }}>
                <Text style={{fontSize:25,color:"white",marginBottom:-5}}> How Well </Text>
                <Text style={{fontSize:25,color:"white",marginBottom:-5}}> Do You </Text>
                <Text style={{fontSize:25,color:"white",marginBottom:-5}}> Know Your </Text>
                <Text style={{fontSize:25,color:"white",marginBottom:-5}}> Cricketers </Text>
                <Text style={{fontSize:15,color:"white",backgroundColor:"#5d3eaf",borderRadius:5,height:30,width:"35%",
                        top:5,}}> Featured Game </Text>
                        
                        <Image
                    style={{height:140,width:140,left:"60%",top:-140,marginBottom:-30 }}
                        source={require('../../assets/pic/cricket.png')}></Image> 
                        </View>
                        <View style={{margin:15,padding:20,backgroundColor:"#e74c3c",borderTopLeftRadius:30,borderTopRightRadius:30,
                        borderBottomRightRadius:30,height:160,width:150,    }}>
                             <Image
                    style={{height:130,width:130, top:10,left:-20 }}
                        source={require('../../assets/pic/cricket1.png')}></Image> 
                        </View>
                        <View style={{margin:15,padding:20,backgroundColor:"#fa0855",borderTopLeftRadius:30,borderTopRightRadius:30,
                        borderBottomRightRadius:30,height:160,width:150,left:"55%",top:-190, marginBottom:-180 }}>
                            <Image
                    style={{height:130,width:130,left:-10 }}
                        source={require('../../assets/pic/puzzle.png')}></Image> 
                        </View>
                        <View style={{margin:15,padding:20,backgroundColor:"#4f37d1",borderTopLeftRadius:30,borderTopRightRadius:30,
                        borderBottomRightRadius:30,height:160,width:150,    }}>
                            <Image
                    style={{height:130,width:130, top:10,left:-20 }}
                        source={require('../../assets/pic/avtar.png')}></Image> 
                        </View>
                        <View style={{margin:15,padding:20,backgroundColor:"#ebe841",borderTopLeftRadius:30,borderTopRightRadius:30,
                        borderBottomRightRadius:30,height:160,width:150,left:"55%",top:-190,  }}>
                            <Image
                    style={{height:130,width:130, top:10,left:10 }}
                        source={require('../../assets/pic/wallet.png')}></Image> 
                        </View>
                        <View>
                        <Image
                    style={{height:700,width:"100%",top:-130,marginTop:-50,borderRadius:10 ,marginBottom:-130}}
                        source={require('../../assets/pic/game1.jpg')}></Image> 
                        </View>
                        <View style={{backgroundColor:"white",height:250}}>
                            <View style={{backgroundColor:"#f7dc6f", height:150,width:300,
                            borderRadius:20,left:"20%" ,top:30}} >
                                <View style={{alignItems:"center",justifyContent:"center",padding:20}}>
                                 <Text style={{fontWeight:"bold",fontSize:24,color:"#154360"}}> SHARE</Text>
                                 <Text style={{fontWeight:"bold",fontSize:24,color:"#154360"}}> THE FUN</Text>
                                 <Text style={{fontWeight:"bold",fontSize:14,color:"#154360"}}>  +INVITE FRIENDS</Text>
                                 </View>

                            </View>
                        <Image
                    style={{height:200,width:140,borderRadius:10, top:-100,marginBottom:-100 }}
                        source={require('../../assets/pic/anno.png')}></Image> 
                        </View>



        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
});


export default EarnStack;


