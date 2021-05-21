import * as React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  Button,
  Alert,
  StyleSheet
} from 'react-native';
import Styles from './style';
import colors from '../../config/color';


const Separator = () => (
  <View style={Styles.separator} />
);

const Profile = ({navigation}) => {
  return (
    <ScrollView>
    <SafeAreaView style={{flex: 4}}> 
      <View style={{flex: 1, padding: 1}}>
          <View>
              <View style={Styles.view}>
                  

              </View>
                <View>
                <Button
                style={Styles.btn}
                title="Login/signup"
                onPress={() => Alert.alert('Button with adjusted color pressed')}
                />
                </View>
            </View>
        <View style={Styles.container}>

          <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={() =>
              navigation.navigate('Orders')
            }>     
            <Text>Orders</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={() => navigation.navigate('Help')}>
            <Text>Help Center</Text>
            <Text> ENROLL NOW</Text>
          </TouchableOpacity> 
          <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={() => navigation.navigate('Wishlist')}>
           <Text>Wishlist</Text>
          </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={() => navigation.navigate('Scan')}>
            
            <Text>Scan for coupon</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={() => navigation.navigate('Refer')}>
            <Text>Refer & Earn</Text>
            
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={() => navigation.navigate('FAQs')}>
            <Text style={{color:colors.secondary}}>FAQs</Text>
          </TouchableOpacity>
      
            <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={() => navigation.navigate('ABOUT')}>
            <Text style={{color:colors.secondary}}>ABOUT US</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={() => navigation.navigate('TEARMS')}>
            <Text style={{color:colors.secondary}}>TEARMS OF USE</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={() => navigation.navigate('PRIVACY')}>
            <Text style={{color:colors.secondary}}>PRIVACY POLICY</Text>
            </TouchableOpacity>
        
        <Separator>
        </Separator>
      </View>
    </SafeAreaView>
    </ScrollView>
  );
};

export default Profile;

