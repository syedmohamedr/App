import * as React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  Alert,
  Button,
} from 'react-native';
import Styles from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../config/color';

const Separator = () => (
  <View style={Styles.separator} />
);

const Profile = ({navigation}) => {
  return (
    <ScrollView>
      <View>
        
            <View style={styles.one}>
          
            </View>
        <View style={{height:80,marginBottom:15,backgroundColor:"white"}}>
          <View style={{width:"50%",left:"43%",height:60,top:25,marginBottom:10}}>
        <Button
        title="LOGIN/SIGN UP"
        color="#fc0259"
        onPress={() => Alert.alert('You are trying to log in...')}
      />
      </View>
      <Image
      style={styles.image}
      source={require('../../assets/profile.jpg')}/>
      </View>
      <View style={{marginBottom:15,justifyContent:"space-between"}}>
        <View style={{flexDirection:"row",alignItems:"center"}}>
          <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={() =>
              navigation.navigate(
                'Order',)
            }>   
             
            <Image style={{height:30, width:30,top:40, marginTop:-40}}
            source={require('../../assets/cart.png')}/>
            <Text style={{left:40,fontWeight:"bold",top:10}}>Orders</Text>
            <Text style={{left:40,top: 10,color:"black",fontSize:12}}>Check your order status</Text>
            <AntDesign name="right" size={10} color="#615557" style={{left:"99%",top:"-80%",marginBottom:-15}} />  
           
          </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={() => navigation.navigate('Help')}>
              <Image style={{height:30, width:30,top:40,marginTop:-40}}
            source={require('../../assets/help.png')}/>
            <Text style={{left:40,fontWeight:"bold",top:10,height:20}}>Help Center</Text>
            <Text style={{left:37,top: 7,color:"black",fontSize:12}}> Help regarding your recent purchase</Text>
            <AntDesign name="right" size={10} color="#615557" style={{left:"99%",top:"-80%",marginBottom:-15}} />  
          </TouchableOpacity> 
          <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={() => navigation.navigate('Wishlist')}>
              <Image style={{height:30, width:30,top:35,marginTop:-40}}
            source={require('../../assets/heart.png')}/>
           <Text style={{left:40,fontWeight:"bold",top:5}}>Wishlist</Text>
           <Text style={{left:41,fontSize:12,top:5}}>Your most loved styles</Text>
           <AntDesign name="right" size={10} color="#615557" style={{left:"99%",top:"-80%",marginBottom:-15}} />  
          </TouchableOpacity>
          </View>
          <View style={{marginBottom:15}}>
          <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={() => navigation.navigate('Coupons')}>
             <Image style={{height:35, width:30,top:30,marginTop:-40}}
            source={require('../../assets/icon7.png')}/>
            <Text style={{left:40,fontWeight:"bold",height:20,top:5}}>Scan for Coupons</Text>
            <AntDesign name="right" size={10} color="#615557" style={{left:"99%",top:"-80%",marginBottom:-15}} />  
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={() => navigation.navigate('Earn')}>
               <Image style={{height:35, width:35,top:20,marginTop:-30}}
            source={require('../../assets/icon3.png')}/>
            <Text style={{left:40,fontWeight:"bold",top:-5,}}>Refer & Earn</Text>
            <AntDesign name="right" size={10} color="#615557" style={{left:"99%",top:"-80%",marginBottom:-15}} />  
          </TouchableOpacity>
          </View>
          <View style={{backgroundColor:"white",padding:20}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('FAQ')}>
            <Text style={{left:40,color:"gray",marginBottom:10}}>FAQs</Text>
          </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate('About Us')}>
            <Text style={{left:40,color:"gray",marginBottom:10 }}>About Us</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate('Terms')}>
            <Text style={{left:40,color:"gray",marginBottom:10}}>TERMS OF USE</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate('Privacy')}>
            <Text style={{left:40,color:"gray",marginBottom:10,}}>PRIVACY POLICY</Text>
            </TouchableOpacity>
            </View>


            <View style={{justifyContent:"center",alignContent:"center",alignItems:"center",marginTop:10,height:100,}}>
              <Text style={{color:"gray",}}>App VERSION 4.2104.1</Text>
            </View>
        
       
      </View>
  
    </ScrollView>
  );
};
const styles=StyleSheet.create({
  text:{
    left:40,
    top:10,
  },
  text1:{
    
  },
  one:{
    backgroundColor:"#154360",
    height:100,
    width:"100%",
  },
      two:{
      backgroundColor:"white",
        width:"100%",
        },
  image:{
    height:140,
    width:130,
    left:20,
    top: -150,
    borderRadius:5,
    borderWidth:1,
    borderColor:"#ffeef4",
    marginBottom:-100

  }

})

export default Profile;

