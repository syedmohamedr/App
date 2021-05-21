import * as React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import Styles from './style';
import colors from '../../config/color';


const Separator = () => (
  <View style={Styles.separator} />
);

const Profile = ({navigation}) => {
  return (
    <ScrollView>
    <SafeAreaView style={{flex: 1}}> 
      <View style={{flex: 1, padding: 1}}>
          <View>
              
          </View>
        <View style={Styles.container}>

          <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={() =>
              navigation.navigate(
                'Myntra',
              )
            }>     
            <Text>Orders</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={() => navigation.navigate('MyntraScreen')}>
            <Text>Help Center</Text>
            <Text> ENROLL NOW</Text>
          </TouchableOpacity> 
          <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={() => navigation.navigate('Details')}>
           <Text>Wishlist</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={() => navigation.navigate('Details')}>
            
            <Text>Scan for coupon</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={() => navigation.navigate('Details')}>
            <Text>Refer & Earn</Text>
            
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={() => navigation.navigate('Details')}>
            <Text>FAQs</Text>
          </TouchableOpacity>
      
            <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={() => navigation.navigate('Details')}>
            <Text>ABOUT US</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={() => navigation.navigate('Details')}>
            <Text>TEARMS OF USE</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={() => navigation.navigate('Details')}>
            <Text style={{color:colors.secondary}}>PRIVACY POLICY</Text>
            </TouchableOpacity>
        </View>
        <Separator>
        </Separator>
      </View>
    </SafeAreaView>
    </ScrollView>
  );
};

export default Profile;

