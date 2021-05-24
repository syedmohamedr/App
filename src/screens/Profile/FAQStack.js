import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';
const Stack = createStackNavigator();

const QuestionStack = () => {
    return (
        <View>
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
            </View>
        </View>
    );
}

export default QuestionStack;