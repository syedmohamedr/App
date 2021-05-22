import * as React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet
} from 'react-native';
import Styles from './style';
import colors from '../../config/color';

const Separator = () => (
  <View style={Styles.separator} />
);

const Explore = ({navigation}) => {
  return (
    <ScrollView>
    <SafeAreaView style={{flex: 1}}> 
      <View style={{flex: 1, padding: 1}}>
        <View style={Styles.container}>

          <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={() =>
              navigation.navigate(
                'Myntra')
            }>     
            <Image style={{height:30, width:30,top:30,}}
            source={require('../../assets/icon1.jpg')}/>
            <Text style={styles.text}>Myntra Mall</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={() => navigation.navigate('MyntraScreen')}>
              <Image style={{height:20, width:30,top:20,}}
            source={require('../../assets/icon2.png')}/>
            <Text style={{left:40}}>Myntra Insider</Text>
            <Text style={styles.text1}> ENROLL NOW</Text>
          </TouchableOpacity> 
          <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={() => navigation.navigate('Details')}>
              <Image style={{height:20, width:30,top:20,}}
            source={require('../../assets/icon3.png')}/>
           <Text style={{left:50}}>Gift Cards</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={() => navigation.navigate('Details')}>
             <Image style={{height:20, width:30,top:20,}}
            source={require('../../assets/icon4.png')}/>
            <Text style={{left:50}}>Play & Earn</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={() => navigation.navigate('Details')}>
               <Image style={{height:20, width:40,top:20,}}
            source={require('../../assets/icon5.png')}/>
            <Text style={{left:50}}>Myntra Move</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={() => navigation.navigate('Details')}>
               <Image style={{height:20, width:30,top:20,}}
            source={require('../../assets/icon6.png')}/>
            <Text style={{left:50}}>Refer & Earn</Text>
          </TouchableOpacity>
      
            <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={() => navigation.navigate('Details')}>
               <Image style={{height:20, width:30,top:20,}}
            source={require('../../assets/icon7.png')}/>
            <Text style={{left:50}}>Scan for Coupons</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={() => navigation.navigate('Details')}>
               <Image style={{height:20, width:30,top:20,}}
            source={require('../../assets/icon8.png')}/>
            <Text style={{left:50}}>Myntra Fashion Superstar</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={() => navigation.navigate('Details')}>
               <Image style={{height:20, width:30,top:20,}}
            source={require('../../assets/icon9.jpg')}/>
            <Text style={{left:50}}>Myntra Masterclass</Text>
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
    left:210,
    top: -18,
    color:"red"
  }
})

export default Explore;

