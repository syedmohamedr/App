import React ,{ useState }  from 'react';
import { View, Text,Image,Picker } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Stack = createStackNavigator();

const CenterStack = () => {
    const [selectedValue, setSelectedValue] = useState("java");
    return (
        <View style={{backgroundColor:"#fff",height:"100%"}}>
            <Text style={{fontSize:20,left:20}}>Help Center</Text>
            <Text style={{left:20,top:12}}>Please get in touch and we will be</Text>
            <Text style={{left:20,top:15}}>happy to help you.</Text>
            <Image
            style={{borderRadius:20,height:150,width:100,left:280,top:-60}}
            source={require('../../assets/call.jpg')}></Image>
            <View>
                <Text style={{left:30,fontSize:15}}>
                    Please Log In, if you have queries related to your 
                </Text>
                <Text style={{left:130,marginBottom:20}}>recent purchases.</Text>
                <TouchableOpacity style={{left:130,padding:16,backgroundColor:"#09F62C",width:"30%",alignItems:"center"}}
                >
                    <Text style={{color:"black"}}>LOG IN</Text>
                </TouchableOpacity>
            </View>
            <Text style={{left:20,top:30,fontWeight:"bold"}}>MORE QUERIES RELATED TO YOUR EXPERIENCE</Text>
            <View style={{top:100,}}>
        <Picker
        selectedValue={selectedValue}
        style={{ height: 60, width: "100%" ,top:-60,color:"black",fontSize:20}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="PAYMENT/REFUND" value="java" />
        <Picker.Item label="My return was picked up but I haven't recieved my refund yet" value="js" />
        <Picker.Item label="My payment has been debited multiple times" value="js" />
        <Picker.Item label="My bank account details for refund" value="js" />
        <Picker.Item label="I am unable to pay using wallet" value="js" />
        <Picker.Item label="I am unable to use gift cards" value="js" />
        <Picker.Item label="I self shipped my return but haven't recieved my refund yet." value="js" />
        <Picker.Item label="My order didn't get placed, but payment got debited." value="js" />
        </Picker>
      </View>
      <View style={{top:100,}}>
        <Picker
        selectedValue={selectedValue}
        style={{ height: 60, width: "100%" ,top:-60,color:"black",fontSize:20}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Offers, Discounts, Coupons" value="java" />
        <Picker.Item label="My coupon got locked" value="js" />
        <Picker.Item label="I am unable to apply coupon" value="js" />
        <Picker.Item label="I did not recieve Instant Cashback (Credit/Debit Card)" value="js" />
        <Picker.Item label="I did not recieve complete discount" value="js" />
        <Picker.Item label="Other" value="js" />
        </Picker>
      </View>
      <View style={{top:100,}}>
        <Picker
        selectedValue={selectedValue}
        style={{ height: 60, width: "100%" ,top:-60,color:"black",fontSize:20}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Manage Your Account" value="java" />
        <Picker.Item label="I am unable to login my account" value="js" />
        <Picker.Item label="I want to unsubscribe from promotional emails and SMS" value="js" />
        <Picker.Item label="Something is wrong with my wishlist" value="js" />
        <Picker.Item label="I have an issue with my referal points" value="js" />
        </Picker>
      </View>
      <View style={{top:100,}}>
        <Picker
        selectedValue={selectedValue}
        style={{ height: 60, width: "100%" ,top:-60,color:"black",fontSize:20}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Other" value="java" />
        <Picker.Item label="I have an issue with the mobile app" value="js" />
        <Picker.Item label="I have a query of return/exchange process" value="js" />
        <Picker.Item label="Other" value="js" />
        <Picker.Item label="What is price reveal?" value="js" />
        <Picker.Item label="What can I do during price reveal?" value="js" />
        <Picker.Item label="For how long is your price reveal" value="js" />
        <Picker.Item label="Why can't I play games or buy coupons during Price reveal?" value="js" />
        <Picker.Item label="Why should I pay more to shop during Price reveal?" value="js" />
        <Picker.Item label="Will you refund extra charges if the product is returned?" value="js" />
        <Picker.Item label="Can I use the available coupons during Price reveal?" value="js" />
        <Picker.Item label="I am unable to add more products in to the cart. Why>" value="js" />
        <Picker.Item label="My order is not confirmed/ I have not got my order ID/My order status is not updated in My orders. What is happening to my order" value="js" />
        <Picker.Item label="Why is T&B not available for my pin code? Can you please  expedite the order delivery?" value="js" />
        <Picker.Item label="Can I use my gift card to make a purchase?" value="js" />
        </Picker>
      </View>
        </View>
    );
}

export default CenterStack;