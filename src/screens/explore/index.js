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

const Explore = ({navigation}) => {
  return (
    <ScrollView>
    <SafeAreaView style={{flex: 1}}> 
      <View style={{flex: 1, padding: 16}}>
        <View style={Styles.container}>

          <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={() =>
              navigation.navigate(
                'Myntra',
              )
            }>     
            <Text>Myntra Mall</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={() => navigation.navigate('MyntraScreen')}>
            <Text>Myntra Insider</Text>
            <Text> ENROLL NOW</Text>
          </TouchableOpacity> 
          <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={() => navigation.navigate('Details')}>
           <Text>Gift Cards</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={() => navigation.navigate('Details')}>
            
            <Text>Play & Earn</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={() => navigation.navigate('Details')}>
            <Text>Myntra Move</Text>
            
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={() => navigation.navigate('Details')}>
            <Text>Refer & Earn</Text>
          </TouchableOpacity>
      
            <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={() => navigation.navigate('Details')}>
            <Text>Scan for Coupons</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={() => navigation.navigate('Details')}>
            <Text>Myntra Fashion Superstar</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={() => navigation.navigate('Details')}>
            <Text style={{color:colors.secondary}}>Myntra Masterclass</Text>
            </TouchableOpacity>
        </View>
        <Separator>
        </Separator>
      </View>
    </SafeAreaView>
    </ScrollView>
  );
};

export default Explore;

