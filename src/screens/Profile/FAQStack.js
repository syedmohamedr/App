import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';
const Stack = createStackNavigator();

const QuestionStack = () => {
    return (
        <View style={{height:"100%"}}>
            <ScrollView>
            <Text style={{fontWeight:"bold",left:20,top:20,}}>Top Queries</Text>
            <Text style={{top:30,left:20}}>You can track your orders in 'My orders'</Text>
            <TouchableOpacity style={{top:40,left:270,}}>
                <Text style={{color:"blue",marginBottom:50}}>TRACK ORDERS</Text>
            </TouchableOpacity>
            <View style={{marginLeft:10}}>
            <Text style={{fontWeight:"bold"}}>What is Try and Buy Service</Text>
            <Text style={{fontWeight:"bold"}}>Why are there different prices for the same product? Is it legal?</Text>
            <Text style={{fontWeight:"bold"}}>How will I detect fraudulent emails/calls seeking sensitive personal and confidential information?</Text>
            <Text style={{fontWeight:"bold"}}>How do I cancel the order, I have placed?</Text>
            <Text style={{fontWeight:"bold"}}>How do I create a cancel request?</Text>
            <Text style={{fontWeight:"bold"}}>Where should I self-ship the Returns?</Text>
            <Text style={{fontWeight:"bold"}}>I have accumulated Myntra Points in my account. How can I redeem them?</Text>
          <Text style={{fontWeight:"bold",top:20}}>Terms and Conditions</Text>
          <Text style={{top:22}}>You can view the Terms and Conditions here.</Text>
          <TouchableOpacity style={{top:30,left:290}}>
              <Text style={{color:"blue"}}>VIEW T&C</Text></TouchableOpacity>
              <Text style={{fontWeight:"bold",top:30}}>Shipping,Order Tracking & Delivery</Text>
              <Text style={{top:40}}>You can track your orders in MyMyntra</Text>
              <TouchableOpacity style={{top:40,left:270}}>
                  <Text style={{color:"blue"}}>TRACK ORDERS</Text>
              </TouchableOpacity>
              <Text style={{top:41,fontWeight:"bold"}}>What is Myntra's Convenience fee?</Text>
              <Text style={{top:44,fontWeight:"bold"}}>What is Myntra's Fair Usage Policy?</Text>
              <Text style={{top:47,fontWeight:"bold"}}>How do I check the status of my order?</Text>
              <Text style={{top:50,fontWeight:"bold"}}>How can I get my order delivered faster?</Text>
              <Text style={{top:53,fontWeight:"bold"}}>How are orders placed on Myntra delivered to me?</Text>
                <Text style={{fontWeight:"bold",top:60,left:30}}>Cancellations and Modifications</Text>
                <Text style={{top:80}}>You can cancel your orders under MyMyntra</Text>
                <TouchableOpacity style={{top:90,left:280}}>
                    <Text style={{color:"blue"}}>CANCEL ITEM</Text>
                </TouchableOpacity>
           
                </View>
            </ScrollView>
        </View>
    );
}

export default QuestionStack;