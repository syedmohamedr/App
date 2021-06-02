import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';
const Stack = createStackNavigator();

const QuestionStack = () => {
    return (
        
            <ScrollView>
                <View style={{height:"100%",width:"100%",padding:20}}>
            <Text style={{fontWeight:"bold",top:10,fontSize:20}}>Top Queries</Text>
            <Text style={{top:20}}>You can track your orders in 'My orders'</Text>
            <TouchableOpacity style={{top:40,left:250,marginBottom:20}}>
                <View  style={{color:"blue",marginBottom:50,borderWidth:1,borderRadius:10,width:115,height:40,borderColor:"gray"}}>
                <Text style={{left:5,top:10,color:"#09abd7",}}>TRACK ORDERS</Text>
                </View>
            </TouchableOpacity>
            
            <Text style={{fontWeight:"bold",marginBottom:10}}>What is Try and Buy Service?</Text>
            <Text style={{fontWeight:"bold",marginBottom:10}}>Why are there different prices for the same product? Is it legal?</Text>
            <Text style={{fontWeight:"bold",marginBottom:10}}>How will I detect fraudulent emails/calls seeking sensitive personal and confidential information?</Text>
            <Text style={{fontWeight:"bold",marginBottom:10}}>How do I cancel the order, I have placed?</Text>
            <Text style={{fontWeight:"bold",marginBottom:10}}>How do I create a cancel request?</Text>
            <Text style={{fontWeight:"bold",marginBottom:10}}>Where should I self-ship the Returns?</Text>
            <Text style={{fontWeight:"bold",marginBottom:10}}>I have accumulated Myntra Points in my account. How can I redeem them?</Text>
          <Text style={{fontWeight:"bold",top:20,fontSize:20,marginBottom:10}}>Terms and Conditions</Text>
          <Text style={{top:22,marginBottom:10}}>You can view the Terms and Conditions here.</Text>
          <TouchableOpacity style={{top:30,left:275,}}>
          <View  style={{color:"blue",marginBottom:50,borderWidth:1,borderRadius:10,width:90,height:40,borderColor:"gray"}}>
              <Text style={{color:"#09abd7",left:10,top:10,}}>VIEW T&C</Text>
               </View> 
               </TouchableOpacity>
              <Text style={{fontWeight:"bold",top:30,fontSize:20}}>Shipping,Order Tracking & Delivery</Text>
              <Text style={{top:40,marginBottom:10}}>You can track your orders in MyMyntra</Text>
              <TouchableOpacity style={{top:40,left:250}}>
              <View  style={{color:"blue",marginBottom:50,borderWidth:1,borderRadius:10,width:115,height:40,borderColor:"gray"}}>
                  <Text style={{color:"#09abd7",left:5,top:10,}}>TRACK ORDERS</Text>
                  </View>
              </TouchableOpacity>
              <Text style={{top:40,fontWeight:"bold",marginBottom:10}}>What is Myntra's Convenience fee?</Text>
              <Text style={{top:42,fontWeight:"bold",marginBottom:10}}>What is Myntra's Fair Usage Policy?</Text>
              <Text style={{top:45,fontWeight:"bold",marginBottom:10}}>How do I check the status of my order?</Text>
              <Text style={{top:50,fontWeight:"bold",marginBottom:10}}>How can I get my order delivered faster?</Text>
              <Text style={{top:52,fontWeight:"bold",marginBottom:30}}>How are orders placed on Myntra delivered to me?</Text>
                <Text style={{fontWeight:"bold",top:60,fontSize:20}}>Cancellations and Modifications</Text>
                <Text style={{top:80}}>You can cancel your orders under MyMyntra</Text>
                <TouchableOpacity style={{top:100,left:265,marginBottom:100}}>
                    <View  style={{color:"blue",marginBottom:50,borderWidth:1,borderRadius:10,width:100,height:40,borderColor:"gray"}}>
                    <Text style={{color:"#09abd7",left:5,top:10,}}>CANCEL ITEM</Text>
                    </View>
                </TouchableOpacity>
           
                </View>
        
            </ScrollView>
       
    );
}

export default QuestionStack;