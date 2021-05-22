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
import colors from '../../config/color';

const Separator = () => (
  <View style={Styles.separator} />
);

const Explore = ({navigation}) => {
  return (
    <ScrollView>
        <View>
            <View style={styles.one}>
            <Text />
            </View>
            <View >
            </View>
          </View>
    <SafeAreaView style={{flex: 1}}> 
      <View style={{flex: 1, padding: 1}}>
        <View style={Styles.container}>
        <Button
            style={styles.two}
        title="LOGIN/SIGN UP"
        color="#f194ff"
        onPress={() => Alert.alert('You are trying to log in...')}
      />
      <Image
      style={styles.image}
      source={require('../../assets/profile.png')}/>
          <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={() =>
              navigation.navigate(
                'Myntra',)
            }>     
            <Image style={{height:30, width:30,top:40,}}
            source={require('../../assets/order.png')}/>
            <Text style={styles.text}>Orders</Text>
            <Text style={styles.text}>Check your order status</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={() => navigation.navigate('MyntraScreen')}>
              <Image style={{height:30, width:30,top:40,}}
            source={require('../../assets/help.png')}/>
            <Text style={{left:40}}>Help Center</Text>
            <Text style={styles.text1}> Help regarding your recent purchase</Text>
          </TouchableOpacity> 
          <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={() => navigation.navigate('Details')}>
              <Image style={{height:30, width:30,top:30,}}
            source={require('../../assets/heart.png')}/>
           <Text style={{left:50}}>Wishlist</Text>
           <Text style={{left:50,fontSize:12,}}>Your most loved styles</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={() => navigation.navigate('Details')}>
             <Image style={{height:40, width:30,top:20,}}
            source={require('../../assets/qr.png')}/>
            <Text style={{left:50}}>Scan for Coupons</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={() => navigation.navigate('Details')}>
               <Image style={{height:30, width:30,top:30,}}
            source={require('../../assets/icon3.png')}/>
            <Text style={{left:50}}>Refer & Earn</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={() => navigation.navigate('Details')}>
            
            <Text style={{left:50}}>FAQs</Text>
          </TouchableOpacity>
      
            <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={() => navigation.navigate('Details')}>
              
            <Text style={{left:50}}>About Us</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={() => navigation.navigate('Details')}>
              
            <Text style={{left:50}}>TERMS OF USE</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={() => navigation.navigate('Details')}>
               
            <Text style={{left:50}}>PRIVACY POLICY</Text>
            </TouchableOpacity>
        </View>
        <Separator>
        </Separator>
      </View>
    </SafeAreaView>
    </ScrollView>
  );
};
const styles=StyleSheet.create({
  text:{
    left:40,
    top:10,
  },
  text1:{
    left:37,
    top: 18,
    color:"black",
    marginBottom:20,
  },
  one:{
    backgroundColor:"grey",
    height:100,
    marginBottom:10,
    width:"100%",
  },
  two:{
    width:"60%",
    marginLeft:400
  },
  image:{
    height:120,
    width:120,
    left:-142,
    top: -80,
  }

})

export default Explore;

