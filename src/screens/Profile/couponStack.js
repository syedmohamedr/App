import React, {useState} from 'react';
import { View, Text,Modal,StyleSheet,Pressable, TextInput  } from 'react-native';
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
                <Text>Login or Signup</Text>
              <TextInput
                  placeholder="Phone number*"
                  maxLength={10}></TextInput>
                  <Text>By continuing, I agree to the </Text>
                  <Text style={{color:"red"}}>Terms of use & Privacy Policy</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => navigation.navigate('Profile')}
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