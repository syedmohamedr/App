import React, {useState} from 'react';
import { View, Text,Modal,StyleSheet,Pressable, TextInput,Image  } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Coupons = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
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
                  <Text>By continuing, I agree to the </Text>
                  <Text style={{color:"red"}}>Terms of use & Privacy Policy</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => navigation.navigate('Home')}
              >
                <Text style={styles.textStyle}>CONTINUE</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>LOGIN/SIGNUP</Text>
        </Pressable>
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
      margin: 20,
      bottom:-187,
      width:"100%",
      backgroundColor: "white",
      marginTop:40,
      padding: 45,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 15
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "red",
    },
    buttonClose: {
      backgroundColor: "red",
      width:"50%"
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor:"red"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });
export default Coupons;