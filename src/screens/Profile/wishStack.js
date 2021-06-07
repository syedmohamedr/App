import React, {useState} from 'react';
import { View, Text,Modal,StyleSheet,Pressable, TextInput,Image,Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const WishStack = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(true);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
         
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Image
             style={{height:40,width:40,right:"42%",marginBottom:5,top:-5}}
            source={require('../../assets/myntra.png')}/>
              <Text style={{fontSize:20,fontWeight:"bold",right:"40%",marginBottom:10,color:"#022f45"}}>Login</Text>
              <Text style={{fontSize:20,right:"28%",color:"gray",top:-37}}>or</Text>
              <Text style={{fontSize:20,fontWeight:"bold",right:"15%",top:-63,color:"#022f45",marginBottom:-20}}>Signup</Text>
              <TextInput
              style={{borderWidth:1,borderColor:"gray", width:"100%",height:40,borderRadius:10,marginBottom:10}}
             placeholder="  +91 |   Enter phone number*"
              numeric value  
             maxLength={10}
                />
                <Text style={{right:"22%",color:"gray"}}>By continuing, I agree to the </Text>
                <Text style={{color:"#fc0259",left:"18%",top:"-6%",fontWeight:"bold"}}>Terms of use  </Text>
                <Text style={{color:"gray",left:"32%",bottom:"12%"}}>& </Text>
                <Text style={{color:"#fc0259",bottom:"18%",left:"40%",fontWeight:"bold"}}> Privacy</Text>
                <Text style={{color:"#fc0259",right:"43%",top:"-19%",fontWeight:"bold"}}> Policy</Text>
                <View style={{marginTop:-35,height:70,width:"100%"}}>
                <Button
                style={{width:"40%"}}
               title="CONTINUE"
                 color="#fc0259"
                 onPress={() =>navigation.navigate('Profile')}
                />
                </View>
                <Text style={{right:"22%",color:"gray"}}>Having trouble logging in?</Text>
                <Text style={{color:"#fc0259",fontWeight:"bold",left:"11%",top:"-6%"}}> Get help </Text>
         
          </View>
        </View>
      </Modal>
      
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 42
  },
  modalView: {
    margin: 10,
    bottom:-200,
    width:"100%",
    height:"50%",
    backgroundColor: "white",
    padding: 30,
    alignItems: "center",
 
    },
 
  

});


export default WishStack;