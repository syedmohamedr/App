import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const PolicyStack = () => {
    return (
        <ScrollView>
        <View style={{padding:10}}>
            <Text style={{fontWeight:"bold",marginBottom:20}}>Introduction:</Text>
                <Text style={{color:"gray",marginBottom:5}}>We value the trust you place in us. That's why we insist upon the highest
            standards for secure transactions and customer information privacy. Please read the following statement to 
        learn about our information gathering and dissemination practices.
            Note: Our privacy policy is subject to change at any time without notice. 
        To make sure you are aware of any changes, please review this policy periodically.
        By visiting this Website or mobile application you agree to be bound by the terms and conditions
         of this Privacy Policy. If you do not agree please do not use or access our Website.
         By mere use of the Website, you expressly consent to our use and disclosure of your personal information
         in accordance with this Privacy Policy. This Privacy Policy is incorporated into and subject to the Terms of Use.</Text>

       <Text style={{fontWeight:"bold",marginBottom:20}}>Collection of Personally Identifiable Information and other
        Information:
            </Text>
        <Text style={{color:"gray",marginBottom:10}}>When you use our Website, we collect and store your personal information which is
        provided by you from time to time. Our primary goal in doing so is to provide you a safe, efficient, smooth
        and customized experience. This allows us to provide services and features that most likely meet your needs, 
        and to customize our Website to make your experience safer and easier. More importantly, while doing so we collect
        personal information from you that we consider necessary for achieving this purpose.</Text>

       <Text style={{color:"gray",marginBottom:10}}>Additionally, you may encounter "cookies" or other similar devices on 
       certain pages of the Website that are placed by third parties. We do not control the use of cookies
        by third parties.</Text>
       
       <Text style={{fontWeight:"bold",marginBottom:20}}>Use of Demographic / Profile Data / Your Information:</Text>
        <Text style={{color:"gray",marginBottom:10}}>We use personal information to provide the services you request. To the extent we use your personal
             information to market to you, we will provide you the ability to opt-out of such uses. We use your personal
              information to resolve disputes; troubleshoot problems; help promote a safe service; collect money; measure
               consumer interest in our products and services, inform you about online and offline offers, products, 
               services, and updates; customize your experience; detect and protect us against error, fraud and other 
               criminal activity; enforce our terms and conditions; and as otherwise described to you at the time of
                collection.</Text>

        <Text style={{color:"gray",marginBottom:10}}>We identify and use your IP address to help diagnose problems with our server,
             and to administer our Website. Your IP address is also used to help identify you and 
             to gather broad demographic information.</Text>

        <Text style={{color:"gray",marginBottom:10}}>In our efforts to continually improve our product and service
             offerings, we collect and analyse demographic and profile data about our users'
              activity on our Website.</Text>

        <Text style={{fontWeight:"bold",marginBottom:20}}>Sharing of personal information</Text>

       <Text style={{color:"gray",marginBottom:10}}>We may disclose personal information to third parties. This disclosure may be
            required for us to provide you access to our Services, to comply with our legal obligations, 
            to enforce our User Agreement, to facilitate our marketing and advertising activities, or to prevent,
             detect, mitigate, and investigate fraudulent or illegal activities related to our Services. We do not
              disclose your personal information to third parties for their marketing and advertising purposes without
               your explicit consent.</Text>
        <Text style={{color:"gray",marginBottom:10}}>We may share personal information with our other corporate entities and affiliates. 
            These entities and affiliates may market to you as a result of such 
            sharing unless you explicitly opt-out.</Text>

        <Text style={{fontWeight:"bold",marginBottom:20}}>Links to Other Sites</Text>

        <Text style={{color:"gray",marginBottom:10}}>Our Website links to other websites that may collect personally identifiable
             information about you. Myntra is not responsible for the privacy practices or the
              content of those linked websites.</Text>

        <Text style={{fontWeight:"bold",marginBottom:20}}>Security Precautions</Text>

        <Text style={{color:"gray",marginBottom:10}}>Our Website has stringent security measures in place to protect the
             loss, misuse, and alteration of the information under our control.
              Whenever you change or access your account information, we offer the use of a secure server.
               Once your information is in our possession we adhere to strict security guidelines, protecting it
                against unauthorized access.</Text>

        <Text style={{fontWeight:"bold",marginBottom:20}}>Choice/Opt-Out</Text>
       <Text style={{color:"gray",marginBottom:10}}>We provide all users with the opportunity to opt-out of receiving 
           non-essential (promotional, marketing-related) communications from us on behalf of
            our partners, and from us in general, after setting up an account.</Text>
        </View>
        </ScrollView>

    );
}

export default PolicyStack;