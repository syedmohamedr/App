import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import {List} from 'react-native-paper';
const Stack = createStackNavigator();

const PolicyStack = (navigation) => {
    const [expanded, setExpanded] =React.useState(false);
  const handlePress = () => setExpanded(!expanded);
    return (
        <ScrollView>
        <View style={{padding:5,backgroundColor:"white",marginBottom:1}}>
            <Text style={{fontSize:23,margin:10,marginBottom:40,marginTop:30}}> Privacy policy</Text>
        <List.AccordionGroup>
    <List.Accordion style={{backgroundColor:"white",marginBottom:1,fontSize:40}} title="Introduction:" id="1">
    <View>
      <Text style={{padding:10,color:"grey"}}>
      We value the trust you place in us. That's why we insist upon the highest
            standards for secure transactions and customer information privacy. Please read the following statement to 
        learn about our information gathering and dissemination practices.{"\n"} {"\n"}
        Note: Our privacy policy is subject to change at any time without notice. 
        To make sure you are aware of any changes, please review this policy periodically.
        By visiting this Website or mobile application you agree to be bound by the terms and conditions
         of this Privacy Policy. If you do not agree please do not use or access our Website.
         By mere use of the Website, you expressly consent to our use and disclosure of your personal information
         in accordance with this Privacy Policy. This Privacy Policy is incorporated into and subject to the Terms of Use.
      </Text>
      </View>
    </List.Accordion>
    
    <List.Accordion style={{backgroundColor:"white",marginBottom:1}} title="Collection of Personal Information:" id="2">
    <View>
      <Text style={{padding:10,color:"grey"}}>
      When you use our Website, we collect and store your personal information which is
        provided by you from time to time. Our primary goal in doing so is to provide you a safe, efficient, smooth
        and customized experience. This allows us to provide services and features that most likely meet your needs, 
        and to customize our Website to make your experience safer and easier. More importantly, while doing so we collect
        personal information from you that we consider necessary for achieving this purpose
      </Text>
      </View>
    </List.Accordion>
    
      <List.Accordion style={{backgroundColor:"white",marginBottom:1}} title="Use of Demography/profile Data" id="3">
      <View>
      <Text style={{padding:10,color:"grey"}}>
      We identify and use your IP address to help diagnose problems with our server,
             and to administer our Website. Your IP address is also used to help identify you and 
             to gather broad demographic information
      </Text>
      </View>  
      </List.Accordion>
      <List.Accordion style={{backgroundColor:"white",marginBottom:1}} title="Sharing of personal information" id="4">
      <View>
      <Text style={{padding:10,color:"grey"}}>
      We may disclose personal information to third parties. This disclosure may be
            required for us to provide you access to our Services, to comply with our legal obligations, 
            to enforce our User Agreement, to facilitate our marketing and advertising activities, or to prevent,
             detect, mitigate, and investigate fraudulent or illegal activities related to our Services. We do not
              disclose your personal information to third parties for their marketing and advertising purposes without
               your explicit consent.
      </Text>
      </View>  
      </List.Accordion>
      <List.Accordion style={{backgroundColor:"white",marginBottom:1}} title="Links to Other sites" id="5">
      <View>
      <Text style={{padding:10,color:"grey"}}>
      We may share personal information with our other corporate entities and affiliates. 
            These entities and affiliates may market to you as a result of such 
            sharing unless you explicitly opt-out List.Accordion can be wrapped  because implementation uses React.Context.
      </Text>
      </View>  
      </List.Accordion>
      <List.Accordion style={{backgroundColor:"white",marginBottom:1}} title="Security Precautions" id="6">
      <View>
      <Text style={{padding:10,color:"grey"}}>
      Our Website has stringent security measures in place to protect the
             loss, misuse, and alteration of the information under our control.
              Whenever you change or access your account information, we offer the use of a secure server.
               Once your information is in our possession we adhere to strict security guidelines, protecting it
                against unauthorized access
      </Text>
      </View>  
      </List.Accordion>
      <List.Accordion style={{backgroundColor:"white",marginBottom:1}} title="Choice/Opt-Out" id="7">
      <View>
      <Text style={{padding:10,color:"grey"}}>
      We provide all users with the opportunity to opt-out of receiving 
           non-essential (promotional, marketing-related) communications from us on behalf of
            our partners, and from us in general, after setting up an account.
      </Text>
      </View>  
      </List.Accordion>
      <List.Accordion style={{backgroundColor:"white",marginBottom:1}} title="Advertisments on www.myntra.com" id="8">
      <View>
      <Text style={{padding:10,color:"grey"}}>
      We identify and use your IP address to help diagnose problems with our server,
             and to administer our Website. Your IP address is also used to help identify you and 
             to gather broad demographic information
      </Text>
      </View>  
      </List.Accordion>
      <List.Accordion style={{backgroundColor:"white",marginBottom:1}} title="Your Consent" id="9">
      <View>
      <Text style={{padding:10,color:"grey"}}>
      We provide all users with the opportunity to opt-out of receiving 
           non-essential (promotional, marketing-related) communications from us on behalf of
            our partners, and from us in general, after setting up an account.
      </Text>
      </View>  
      </List.Accordion>
      <List.Accordion style={{backgroundColor:"white",marginBottom:1}} title="Grievance Officer" id="10">
      <View>
      <Text style={{padding:10,color:"grey"}}>
      In our efforts to continually improve our product and service
             offerings, we collect and analyse demographic and profile data about our users'
              activity on our Website
      </Text>
      </View>  
      </List.Accordion>
    
  </List.AccordionGroup>
        </View>
        </ScrollView>

    );
}

export default PolicyStack;