import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';
const Stack = createStackNavigator();

const TermStack = () => {
    return (
        <View >
            <ScrollView style={{height:"100%",padding:10}}>
            <Text style={{top:30,fontSize:25,margin:10,marginBottom:30,color:"#363737"}}>MYNTRA: TERMS OF USE</Text>
            <Text style={{top:50,left:5,color:"gray",marginBottom:10}}>Welcome to Myntra. This document is an electronic record in terms of Information Technology Act, 2000 and published in accordance with the provisions of Rule 3 ) of the Information Technology (Intermediaries guidelines) Rules, 2011 that require publishing the rules and regulations, privacy policy and Terms of Use for access or usage of Myntra marketplace platform - www.myntra.com (hereinafter referred to as "Platform")</Text>


            <Text style={{top:50,left:5,color:"gray",marginBottom:10}}>The Platform is owned by Myntra Designs Private Limited, having its registered office at Buildings Alyssa,
             Begonia and Clover situated in Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village, Varthur
             Hobli, Bengaluru – 560103, India and its branch office at Plot 82 A - 2nd and 3rd Floor, Sector 18 Gurugram 
             Haryana, India.</Text>

            <Text style={{top:50,left:5,color:"gray",marginBottom:10}}>Your use of the Myntra and services and tools are governed by the following 
            terms and conditions ("Terms of Use") as applicable to the Myntra including the applicable policies which are incorporated herein by way of reference. By mere use of the Myntra,
             You shall be contracting with Myntra Designs Private Limited, the owner of the Platform. These
              terms and conditions including the policies constitute Your binding obligations, with Myntra.</Text>

            <Text style={{top:50,left:5,color:"gray",marginBottom:10}}>For the purpose of these Terms of Use, wherever the context so requires "You" or "User" shall mean any
             natural or legal person who has agreed to become a buyer on Platform by providing data while registering
              on the Platform as Registered User. The term "Myntra","We","Us","Our" shall mean Myntra Designs Private 
              Limited and its affiliates.</Text>

            <Text style={{top:50,left:5,color:"gray",marginBottom:70}} >When You use any of the services provided by Us through the Platform, including but 
            not limited to, (e.g. Product Reviews, Seller Reviews), You will be subject to the rules,
             guidelines, policies, terms, and conditions applicable to such service, and they shall be deemed
              to be incorporated into this Terms of Use and shall be considered as part and parcel of this Terms 
              of Use. We reserve the right, at Our sole discretion, to change, modify, add or remove portions of
               these Terms of Use, at any time without any prior written notice to You. You shall ensure to review 
               these Terms of Use periodically for updates/changes. Your continued use of the Platform following the posting 
               of changes will mean that You accept and agree to the revisions. As long as You comply with these Terms of Use,
                We grant You a personal, non-exclusive, non-transferable, limited privilege to enter and use the Platform. By 
                impliedly or expressly accepting these Terms of Use, You also accept and agree to be bound by Myntra Policies
                 including but not limited to Privacy Policy as amended from time to time.</Text>
     <Text style={{marginBottom:10,fontWeight:"bold",color:"#363737"}}>1. User Account, Password, and Security</Text>
     <Text style={{marginBottom:10,fontWeight:"bold",color:"#363737"}}>2. Services Offered:</Text>
     <Text style={{marginBottom:10,fontWeight:"bold",color:"#363737"}}>3. Platform for Transaction and Communication</Text>
     <Text style={{marginBottom:10,fontWeight:"bold",color:"#363737"}}>4. Selling</Text>
     <Text style={{marginBottom:10,fontWeight:"bold",color:"#363737"}}>5. E-Platform for Communication</Text>
     <Text style={{marginBottom:50,fontWeight:"bold",color:"#363737"}}>6. Indemnity</Text>
      </ScrollView>
        </View>
    );
}

export default TermStack;