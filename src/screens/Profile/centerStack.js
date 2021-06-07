import React ,{ useState }  from 'react';
import { View, Text,Image,ScrollView,Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {List} from 'react-native-paper';
const Stack = createStackNavigator();

const CenterStack = (navigation) => {
  const [expanded, setExpanded] =React.useState(false);
  const handlePress = () => setExpanded(!expanded)
    return (
      <ScrollView>
        <View style={{height:"100%"}}>
          <View style={{backgroundColor:"#fff",marginBottom:5,padding:20}}>
            <Text style={{fontSize:20,fontWeight:"bold",top:30,marginBottom:10,color:"#4a4f51"}}>Help Center</Text>
            <Text style={{top:30,color:"grey"}}>Please get in touch and we will be</Text>
            <Text style={{top:35,color:"grey"}}>happy to help you.</Text>
            <Image
            style={{borderRadius:10,height:150,width:100,left:"73%",top:"-60%",marginBottom:"-25%"}}
            source={require('../../assets/call1.png')}></Image>
            </View>
            <View style={{backgroundColor:"#fff",padding:1}}>
            
                <Text style={{left:4,fontSize:13,color:"grey",marginBottom:30}}>
                    Please Log In, if you have queries related to your recent purchases.
                </Text>
                <TouchableOpacity style={{left:"30%",padding:16,borderRadius:10,borderWidth:1,height:50,width:"40%",
                alignItems:"center",justifyContent:"center",marginBottom:10,borderColor:"#07f5d1"}}
                >
                    <Text style={{color:"#07f5d1",fontWeight:"bold"}}>LOG IN</Text>
                </TouchableOpacity>
            </View>
            <View  style={{backgroundColor:"#fff",marginTop:5,padding:2}}>
            <Text style={{fontWeight:"bold",left:15,marginBottom:10}}>MORE QUERIES RELATED TO YOUR EXPERIENCE</Text>
          
            <List.Section >
      <List.Accordion       
        title="Payment/Refund"
        style={{height:40,justifyContent:"center",padding:5,backgroundColor:"#fff",marginBottom:2,marginTop:2,width:"100%"}}
        
        right={props => <List.Icon {...props}  />} 
        onPress={handlePress}>

        <List.Accordion title="My return was picked up but i have't recived my  refund yet" titleNumberOfLines={2} style={{borderBottomWidth:0.5,borderBottomColor:"grey"}} onPress={handlePress} 
           right={props => <List.Icon {...props}  />} 
           onPress={handlePress}>
             <View style={{padding:15,}}>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Refund will be initiated after we recive the iteams and it passes the quality</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Refund time is dippend on the mod</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>Bank Account:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>Online Refund:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>PhonePe wallet:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:60 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
                <Text style={{fontWeight:"bold",fontSize:15,marginBottom:10}}>Still need help?</Text>       
                <Text style={{color:"grey",marginBottom:20}}>Have queries? plese get in touch and well be happy to help you</Text>      
                <Text style={{fontWeight:"bold",fontSize:20,marginBottom:10,color:"#fc0259"}}>CONTACT US</Text>              
             </View>
          </List.Accordion>
          <List.Accordion title="My payment has been debited multiple times" titleNumberOfLines={2} style={{borderBottomWidth:0.5,borderBottomColor:"grey"}} onPress={handlePress} 
           right={props => <List.Icon {...props}  />} 
           onPress={handlePress}>
               <View style={{padding:15,}}>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Refund will be initiated after we recive the iteams and it passes the quality</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Refund time is dippend on the mod</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>Bank Account:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>Online Refund:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>PhonePe wallet:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:60 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
                <Text style={{fontWeight:"bold",fontSize:15,marginBottom:10}}>Still need help?</Text>       
                <Text style={{color:"grey",marginBottom:20}}>Have queries? plese get in touch and well be happy to help you</Text>      
                <Text style={{fontWeight:"bold",fontSize:20,marginBottom:10,color:"#fc0259"}}>CONTACT US</Text>              
             </View>
          </List.Accordion>
          <List.Accordion title="My bank account details for refund" titleNumberOfLines={2} style={{borderBottomWidth:0.5,borderBottomColor:"grey"}} onPress={handlePress} 
           right={props => <List.Icon {...props}  />} 
           onPress={handlePress}>
               <View style={{padding:15,}}>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Refund will be initiated after we recive the iteams and it passes the quality</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Refund time is dippend on the mod</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>Bank Account:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>Online Refund:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>PhonePe wallet:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:60 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
                <Text style={{fontWeight:"bold",fontSize:15,marginBottom:10}}>Still need help?</Text>       
                <Text style={{color:"grey",marginBottom:20}}>Have queries? plese get in touch and well be happy to help you</Text>      
                <Text style={{fontWeight:"bold",fontSize:20,marginBottom:10,color:"#fc0259"}}>CONTACT US</Text>              
             </View>
          </List.Accordion>
          <List.Accordion title="I am unable to pay using wallet" titleNumberOfLines={2} style={{borderBottomWidth:0.5,borderBottomColor:"grey"}} onPress={handlePress} 
           right={props => <List.Icon {...props}  />} 
           onPress={handlePress}>
               <View style={{padding:15,}}>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Refund will be initiated after we recive the iteams and it passes the quality</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Refund time is dippend on the mod</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>Bank Account:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>Online Refund:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>PhonePe wallet:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:60 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
                <Text style={{fontWeight:"bold",fontSize:15,marginBottom:10}}>Still need help?</Text>       
                <Text style={{color:"grey",marginBottom:20}}>Have queries? plese get in touch and well be happy to help you</Text>      
                <Text style={{fontWeight:"bold",fontSize:20,marginBottom:10,color:"#fc0259"}}>CONTACT US</Text>              
             </View>
          </List.Accordion>
          
          <List.Accordion title="I am unable to use gift card" titleNumberOfLines={2} style={{borderBottomWidth:0.5,borderBottomColor:"grey"}} onPress={handlePress} 
           right={props => <List.Icon {...props}  />} 
           onPress={handlePress}>
               <View style={{padding:15,}}>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Refund will be initiated after we recive the iteams and it passes the quality</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Refund time is dippend on the mod</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>Bank Account:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>Online Refund:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>PhonePe wallet:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:60 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
                <Text style={{fontWeight:"bold",fontSize:15,marginBottom:10}}>Still need help?</Text>       
                <Text style={{color:"grey",marginBottom:20}}>Have queries? plese get in touch and well be happy to help you</Text>      
                <Text style={{fontWeight:"bold",fontSize:20,marginBottom:10,color:"#fc0259"}}>CONTACT US</Text>              
             </View>
          </List.Accordion>
          <List.Accordion title="I self shipped my return but haven't recived my refund yet" titleNumberOfLines={2} style={{borderBottomWidth:0.5,borderBottomColor:"grey"}} onPress={handlePress} 
           right={props => <List.Icon {...props}  />} 
           onPress={handlePress}>
               <View style={{padding:15,}}>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Refund will be initiated after we recive the iteams and it passes the quality</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Refund time is dippend on the mod</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>Bank Account:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>Online Refund:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>PhonePe wallet:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:60 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
                <Text style={{fontWeight:"bold",fontSize:15,marginBottom:10}}>Still need help?</Text>       
                <Text style={{color:"grey",marginBottom:20}}>Have queries? plese get in touch and well be happy to help you</Text>      
                <Text style={{fontWeight:"bold",fontSize:20,marginBottom:10,color:"#fc0259"}}>CONTACT US</Text>              
             </View>
          </List.Accordion>
          <List.Accordion title="My order didn't get placed,but payment got debited" titleNumberOfLines={2} style={{borderBottomWidth:0.5,borderBottomColor:"grey"}} onPress={handlePress} 
           right={props => <List.Icon {...props}  />} 
           onPress={handlePress}>
               <View style={{padding:15,}}>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Refund will be initiated after we recive the iteams and it passes the quality</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Refund time is dippend on the mod</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>Bank Account:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>Online Refund:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>PhonePe wallet:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:60 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
                <Text style={{fontWeight:"bold",fontSize:15,marginBottom:10}}>Still need help?</Text>       
                <Text style={{color:"grey",marginBottom:20}}>Have queries? plese get in touch and well be happy to help you</Text>      
                <Text style={{fontWeight:"bold",fontSize:20,marginBottom:10,color:"#fc0259"}}>CONTACT US</Text>              
             </View>
          </List.Accordion>
      </List.Accordion>
      </List.Section>
      <List.Section >
      <List.Accordion       
        title="Offers,Discounts,Coupons"
        style={{height:25,justifyContent:"center",alignContent:"center",alignItems:"center" ,padding:5,backgroundColor:"#fff",marginBottom:2}}
        right={props => <List.Icon {...props} />}
        onPress={handlePress}>
           <List.Accordion title="My return was picked up but i have't recived my  refund yet" titleNumberOfLines={2} style={{borderBottomWidth:0.5,borderBottomColor:"grey"}} onPress={handlePress} 
           right={props => <List.Icon {...props}  />} 
           onPress={handlePress}>
               <View style={{padding:15,}}>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Refund will be initiated after we recive the iteams and it passes the quality</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Refund time is dippend on the mod</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>Bank Account:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>Online Refund:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>PhonePe wallet:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:60 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
                <Text style={{fontWeight:"bold",fontSize:15,marginBottom:10}}>Still need help?</Text>       
                <Text style={{color:"grey",marginBottom:20}}>Have queries? plese get in touch and well be happy to help you</Text>      
                <Text style={{fontWeight:"bold",fontSize:20,marginBottom:10,color:"#fc0259"}}>CONTACT US</Text>              
             </View>
          </List.Accordion>
          <List.Accordion title="My payment has been debited multiple times" titleNumberOfLines={2} style={{borderBottomWidth:0.5,borderBottomColor:"grey"}} onPress={handlePress} 
           right={props => <List.Icon {...props}  />} 
           onPress={handlePress}>
               <View style={{padding:15,}}>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Refund will be initiated after we recive the iteams and it passes the quality</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Refund time is dippend on the mod</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>Bank Account:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>Online Refund:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>PhonePe wallet:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:60 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
                <Text style={{fontWeight:"bold",fontSize:15,marginBottom:10}}>Still need help?</Text>       
                <Text style={{color:"grey",marginBottom:20}}>Have queries? plese get in touch and well be happy to help you</Text>      
                <Text style={{fontWeight:"bold",fontSize:20,marginBottom:10,color:"#fc0259"}}>CONTACT US</Text>              
             </View>
          </List.Accordion>
          <List.Accordion title="My bank account details for refund" titleNumberOfLines={2} style={{borderBottomWidth:0.5,borderBottomColor:"grey"}} onPress={handlePress} 
           right={props => <List.Icon {...props}  />} 
           onPress={handlePress}>
               <View style={{padding:15,}}>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Refund will be initiated after we recive the iteams and it passes the quality</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Refund time is dippend on the mod</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>Bank Account:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>Online Refund:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>PhonePe wallet:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:60 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
                <Text style={{fontWeight:"bold",fontSize:15,marginBottom:10}}>Still need help?</Text>       
                <Text style={{color:"grey",marginBottom:20}}>Have queries? plese get in touch and well be happy to help you</Text>      
                <Text style={{fontWeight:"bold",fontSize:20,marginBottom:10,color:"#fc0259"}}>CONTACT US</Text>              
             </View>
          </List.Accordion>

          <List.Accordion title="I am unable to pay using wallet" titleNumberOfLines={2} style={{borderBottomWidth:0.5,borderBottomColor:"grey"}} onPress={handlePress} 
           right={props => <List.Icon {...props}  />} 
           onPress={handlePress}>
               <View style={{padding:15,}}>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Refund will be initiated after we recive the iteams and it passes the quality</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Refund time is dippend on the mod</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>Bank Account:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>Online Refund:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>PhonePe wallet:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:60 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
                <Text style={{fontWeight:"bold",fontSize:15,marginBottom:10}}>Still need help?</Text>       
                <Text style={{color:"grey",marginBottom:20}}>Have queries? plese get in touch and well be happy to help you</Text>      
                <Text style={{fontWeight:"bold",fontSize:20,marginBottom:10,color:"#fc0259"}}>CONTACT US</Text>              
             </View>
          </List.Accordion>

          <List.Accordion title="I am unable to use gift card" titleNumberOfLines={2} style={{borderBottomWidth:0.5,borderBottomColor:"grey"}} onPress={handlePress} 
           right={props => <List.Icon {...props}  />} 
           onPress={handlePress}>
               <View style={{padding:15,}}>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Refund will be initiated after we recive the iteams and it passes the quality</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Refund time is dippend on the mod</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>Bank Account:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>Online Refund:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>PhonePe wallet:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:60 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
                <Text style={{fontWeight:"bold",fontSize:15,marginBottom:10}}>Still need help?</Text>       
                <Text style={{color:"grey",marginBottom:20}}>Have queries? plese get in touch and well be happy to help you</Text>      
                <Text style={{fontWeight:"bold",fontSize:20,marginBottom:10,color:"#fc0259"}}>CONTACT US</Text>              
             </View>
          </List.Accordion>
          <List.Accordion title="I self shipped my return but haven't recived my refund yet" titleNumberOfLines={2} style={{borderBottomWidth:0.5,borderBottomColor:"grey"}} onPress={handlePress} 
           right={props => <List.Icon {...props}  />} 
           onPress={handlePress}>
               <View style={{padding:15,}}>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Refund will be initiated after we recive the iteams and it passes the quality</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Refund time is dippend on the mod</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>Bank Account:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>Online Refund:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>PhonePe wallet:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:60 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
                <Text style={{fontWeight:"bold",fontSize:15,marginBottom:10}}>Still need help?</Text>       
                <Text style={{color:"grey",marginBottom:20}}>Have queries? plese get in touch and well be happy to help you</Text>      
                <Text style={{fontWeight:"bold",fontSize:20,marginBottom:10,color:"#fc0259"}}>CONTACT US</Text>              
             </View>
          </List.Accordion>
          <List.Accordion title="My order didn't get placed,but payment got debited" titleNumberOfLines={2} style={{borderBottomWidth:0.5,borderBottomColor:"grey"}} onPress={handlePress} 
           right={props => <List.Icon {...props}  />} 
           onPress={handlePress}>
               <View style={{padding:15,}}>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Refund will be initiated after we recive the iteams and it passes the quality</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Refund time is dippend on the mod</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>Bank Account:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>Online Refund:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>PhonePe wallet:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:60 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
                <Text style={{fontWeight:"bold",fontSize:15,marginBottom:10}}>Still need help?</Text>       
                <Text style={{color:"grey",marginBottom:20}}>Have queries? plese get in touch and well be happy to help you</Text>      
                <Text style={{fontWeight:"bold",fontSize:20,marginBottom:10,color:"#fc0259"}}>CONTACT US</Text>              
             </View>
          </List.Accordion>
      </List.Accordion>
      </List.Section>
      <List.Section >
      <List.Accordion       
        title="Manage Your Account"
        style={{height:30,justifyContent:"center",padding:5,backgroundColor:"#fff",marginBottom:2}}
        right={props => <List.Icon {...props}  />} 
        onPress={handlePress}>
           <List.Accordion title="My return was picked up but i have't recived my  refund yet" titleNumberOfLines={2} style={{borderBottomWidth:0.5,borderBottomColor:"grey"}} onPress={handlePress} 
           right={props => <List.Icon {...props}  />} 
           onPress={handlePress}>
               <View style={{padding:15,}}>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Refund will be initiated after we recive the iteams and it passes the quality</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Refund time is dippend on the mod</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>Bank Account:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>Online Refund:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>PhonePe wallet:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:60 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
                <Text style={{fontWeight:"bold",fontSize:15,marginBottom:10}}>Still need help?</Text>       
                <Text style={{color:"grey",marginBottom:20}}>Have queries? plese get in touch and well be happy to help you</Text>      
                <Text style={{fontWeight:"bold",fontSize:20,marginBottom:10,color:"#fc0259"}}>CONTACT US</Text>              
             </View>
          </List.Accordion>
          <List.Accordion title="My payment has been debited multiple times" titleNumberOfLines={2} style={{borderBottomWidth:0.5,borderBottomColor:"grey"}} onPress={handlePress} 
           right={props => <List.Icon {...props}  />} 
           onPress={handlePress}>
               <View style={{padding:15,}}>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Refund will be initiated after we recive the iteams and it passes the quality</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Refund time is dippend on the mod</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>Bank Account:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>Online Refund:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>PhonePe wallet:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:60 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
                <Text style={{fontWeight:"bold",fontSize:15,marginBottom:10}}>Still need help?</Text>       
                <Text style={{color:"grey",marginBottom:20}}>Have queries? plese get in touch and well be happy to help you</Text>      
                <Text style={{fontWeight:"bold",fontSize:20,marginBottom:10,color:"#fc0259"}}>CONTACT US</Text>              
             </View>
          </List.Accordion>
          <List.Accordion title="My bank account details for refund" titleNumberOfLines={2} style={{borderBottomWidth:0.5,borderBottomColor:"grey"}} onPress={handlePress} 
           right={props => <List.Icon {...props}  />} 
           onPress={handlePress}>
               <View style={{padding:15,}}>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Refund will be initiated after we recive the iteams and it passes the quality</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Refund time is dippend on the mod</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>Bank Account:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>Online Refund:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>PhonePe wallet:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:60 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
                <Text style={{fontWeight:"bold",fontSize:15,marginBottom:10}}>Still need help?</Text>       
                <Text style={{color:"grey",marginBottom:20}}>Have queries? plese get in touch and well be happy to help you</Text>      
                <Text style={{fontWeight:"bold",fontSize:20,marginBottom:10,color:"#fc0259"}}>CONTACT US</Text>              
             </View>
          </List.Accordion>

          <List.Accordion title="I am unable to pay using wallet" titleNumberOfLines={2} style={{borderBottomWidth:0.5,borderBottomColor:"grey"}} onPress={handlePress} 
           right={props => <List.Icon {...props}  />} 
           onPress={handlePress}>
               <View style={{padding:15,}}>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Refund will be initiated after we recive the iteams and it passes the quality</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Refund time is dippend on the mod</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>Bank Account:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>Online Refund:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>PhonePe wallet:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:60 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
                <Text style={{fontWeight:"bold",fontSize:15,marginBottom:10}}>Still need help?</Text>       
                <Text style={{color:"grey",marginBottom:20}}>Have queries? plese get in touch and well be happy to help you</Text>      
                <Text style={{fontWeight:"bold",fontSize:20,marginBottom:10,color:"#fc0259"}}>CONTACT US</Text>              
             </View>
          </List.Accordion>
          <List.Accordion title="I am unable to use gift card" titleNumberOfLines={2} style={{borderBottomWidth:0.5,borderBottomColor:"grey"}} onPress={handlePress} 
           right={props => <List.Icon {...props}  />} 
           onPress={handlePress}>
               <View style={{padding:15,}}>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Refund will be initiated after we recive the iteams and it passes the quality</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Refund time is dippend on the mod</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>Bank Account:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>Online Refund:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>PhonePe wallet:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:60 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
                <Text style={{fontWeight:"bold",fontSize:15,marginBottom:10}}>Still need help?</Text>       
                <Text style={{color:"grey",marginBottom:20}}>Have queries? plese get in touch and well be happy to help you</Text>      
                <Text style={{fontWeight:"bold",fontSize:20,marginBottom:10,color:"#fc0259"}}>CONTACT US</Text>              
             </View>
          </List.Accordion>
          <List.Accordion title="I self shipped my return but haven't recived my refund yet" titleNumberOfLines={2} style={{borderBottomWidth:0.5,borderBottomColor:"grey"}} onPress={handlePress} 
           right={props => <List.Icon {...props}  />} 
           onPress={handlePress}>
               <View style={{padding:15,}}>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Refund will be initiated after we recive the iteams and it passes the quality</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Refund time is dippend on the mod</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>Bank Account:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>Online Refund:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>PhonePe wallet:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:60 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
                <Text style={{fontWeight:"bold",fontSize:15,marginBottom:10}}>Still need help?</Text>       
                <Text style={{color:"grey",marginBottom:20}}>Have queries? plese get in touch and well be happy to help you</Text>      
                <Text style={{fontWeight:"bold",fontSize:20,marginBottom:10,color:"#fc0259"}}>CONTACT US</Text>              
             </View>
          </List.Accordion>
          <List.Accordion title="My order didn't get placed,but payment got debited" titleNumberOfLines={2} style={{borderBottomWidth:0.5,borderBottomColor:"grey"}} onPress={handlePress} 
           right={props => <List.Icon {...props}  />} 
           onPress={handlePress}>
               <View style={{padding:15,}}>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Refund will be initiated after we recive the iteams and it passes the quality</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Refund time is dippend on the mod</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>Bank Account:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>Online Refund:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>PhonePe wallet:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:60 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
                <Text style={{fontWeight:"bold",fontSize:15,marginBottom:10}}>Still need help?</Text>       
                <Text style={{color:"grey",marginBottom:20}}>Have queries? plese get in touch and well be happy to help you</Text>      
                <Text style={{fontWeight:"bold",fontSize:20,marginBottom:10,color:"#fc0259"}}>CONTACT US</Text>              
             </View>
          </List.Accordion>
      </List.Accordion>
      </List.Section>
      <List.Section >
      <List.Accordion       
        title="Others"
        style={{height:30,justifyContent:"center",padding:5,backgroundColor:"#fff",marginBottom:2}}
        right={props => <List.Icon {...props}  />} 
        onPress={handlePress}>
           <List.Accordion title="My return was picked up but i have't recived my  refund yet" titleNumberOfLines={2} style={{borderBottomWidth:0.5,borderBottomColor:"grey"}} onPress={handlePress} 
           right={props => <List.Icon {...props}  />} 
           onPress={handlePress}>
               <View style={{padding:15,}}>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Refund will be initiated after we recive the iteams and it passes the quality</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Refund time is dippend on the mod</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>Bank Account:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>Online Refund:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>PhonePe wallet:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:60 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
                <Text style={{fontWeight:"bold",fontSize:15,marginBottom:10}}>Still need help?</Text>       
                <Text style={{color:"grey",marginBottom:20}}>Have queries? plese get in touch and well be happy to help you</Text>      
                <Text style={{fontWeight:"bold",fontSize:20,marginBottom:10,color:"#fc0259"}}>CONTACT US</Text>              
             </View>
          </List.Accordion>
          <List.Accordion title="My payment has been debited multiple times" titleNumberOfLines={2} style={{borderBottomWidth:0.5,borderBottomColor:"grey"}} onPress={handlePress} 
           right={props => <List.Icon {...props}  />} 
           onPress={handlePress}>
               <View style={{padding:15,}}>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Refund will be initiated after we recive the iteams and it passes the quality</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Refund time is dippend on the mod</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>Bank Account:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>Online Refund:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>PhonePe wallet:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:60 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
                <Text style={{fontWeight:"bold",fontSize:15,marginBottom:10}}>Still need help?</Text>       
                <Text style={{color:"grey",marginBottom:20}}>Have queries? plese get in touch and well be happy to help you</Text>      
                <Text style={{fontWeight:"bold",fontSize:20,marginBottom:10,color:"#fc0259"}}>CONTACT US</Text>              
             </View>
          </List.Accordion>
          <List.Accordion title="My bank account details for refund" titleNumberOfLines={2} style={{borderBottomWidth:0.5,borderBottomColor:"grey"}} onPress={handlePress} 
           right={props => <List.Icon {...props}  />} 
           onPress={handlePress}>
               <View style={{padding:15,}}>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Refund will be initiated after we recive the iteams and it passes the quality</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Refund time is dippend on the mod</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>Bank Account:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>Online Refund:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>PhonePe wallet:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:60 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
                <Text style={{fontWeight:"bold",fontSize:15,marginBottom:10}}>Still need help?</Text>       
                <Text style={{color:"grey",marginBottom:20}}>Have queries? plese get in touch and well be happy to help you</Text>      
                <Text style={{fontWeight:"bold",fontSize:20,marginBottom:10,color:"#fc0259"}}>CONTACT US</Text>              
             </View>
          </List.Accordion>
          <List.Accordion title="I am unable to pay using wallet" titleNumberOfLines={2} style={{borderBottomWidth:0.5,borderBottomColor:"grey"}} onPress={handlePress} 
           right={props => <List.Icon {...props}  />} 
           onPress={handlePress}>
               <View style={{padding:15,}}>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Refund will be initiated after we recive the iteams and it passes the quality</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Refund time is dippend on the mod</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>Bank Account:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>Online Refund:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>PhonePe wallet:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:60 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
                <Text style={{fontWeight:"bold",fontSize:15,marginBottom:10}}>Still need help?</Text>       
                <Text style={{color:"grey",marginBottom:20}}>Have queries? plese get in touch and well be happy to help you</Text>      
                <Text style={{fontWeight:"bold",fontSize:20,marginBottom:10,color:"#fc0259"}}>CONTACT US</Text>              
             </View>
          </List.Accordion>
          <List.Accordion title="I am unable to use gift card" titleNumberOfLines={2} style={{borderBottomWidth:0.5,borderBottomColor:"grey"}} onPress={handlePress} 
           right={props => <List.Icon {...props}  />} 
           onPress={handlePress}>
               <View style={{padding:15,}}>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Refund will be initiated after we recive the iteams and it passes the quality</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Refund time is dippend on the mod</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>Bank Account:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>Online Refund:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>PhonePe wallet:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:60 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
                <Text style={{fontWeight:"bold",fontSize:15,marginBottom:10}}>Still need help?</Text>       
                <Text style={{color:"grey",marginBottom:20}}>Have queries? plese get in touch and well be happy to help you</Text>      
                <Text style={{fontWeight:"bold",fontSize:20,marginBottom:10,color:"#fc0259"}}>CONTACT US</Text>              
             </View>
          </List.Accordion>
          <List.Accordion title="I self shipped my return but haven't recived my refund yet" titleNumberOfLines={2} style={{borderBottomWidth:0.5,borderBottomColor:"grey"}} onPress={handlePress} 
           right={props => <List.Icon {...props}  />} 
           onPress={handlePress}>
               <View style={{padding:15,}}>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Refund will be initiated after we recive the iteams and it passes the quality</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Refund time is dippend on the mod</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>Bank Account:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>Online Refund:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>PhonePe wallet:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:60 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
                <Text style={{fontWeight:"bold",fontSize:15,marginBottom:10}}>Still need help?</Text>       
                <Text style={{color:"grey",marginBottom:20}}>Have queries? plese get in touch and well be happy to help you</Text>      
                <Text style={{fontWeight:"bold",fontSize:20,marginBottom:10,color:"#fc0259"}}>CONTACT US</Text>              
             </View>
          </List.Accordion>
          <List.Accordion title="My order didn't get placed,but payment got debited" titleNumberOfLines={2} style={{borderBottomWidth:0.5,borderBottomColor:"grey"}} onPress={handlePress} 
           right={props => <List.Icon {...props}  />} 
           onPress={handlePress}>
               <View style={{padding:15,}}>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Refund will be initiated after we recive the iteams and it passes the quality</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Refund time is dippend on the mod</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>Bank Account:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>Online Refund:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:30 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
               <Text style={{color:"grey",fontSize:13,fontWeight:"bold" }}>PhonePe wallet:</Text>
               <Text style={{color:"grey",fontSize:13,marginBottom:60 }}>Time the iteam takes to reach us +1 to 3 business days.</Text>
                <Text style={{fontWeight:"bold",fontSize:15,marginBottom:10}}>Still need help?</Text>       
                <Text style={{color:"grey",marginBottom:20}}>Have queries? plese get in touch and well be happy to help you</Text>      
                <Text style={{fontWeight:"bold",fontSize:20,marginBottom:10,color:"#fc0259"}}>CONTACT US</Text>              
             </View>
          </List.Accordion>
      </List.Accordion>
      </List.Section>
        
      </View>
        </View>
        </ScrollView>
    );
}

export default CenterStack;