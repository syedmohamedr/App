
import React, { Component } from 'react';
import { View, Text, StyleSheet,ScrollView,Image,Button } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";

const Images = [
    require('../../assets/model2.jpg'),
    require('../../assets/model3.jpg'),
    require('../../assets/model4.jpg'),
   ];
const offer = [
    require('../../assets/pic/offer1.jpg'),
    require('../../assets/pic/offer2.jpg'),
    require('../../assets/pic/offer3.jpg'),
    require('../../assets/pic/offer5.png'),
    require('../../assets/pic/offer6.png'),
    require('../../assets/pic/offer7.jpg'),
    require('../../assets/pic/offer8.jpg'),
    
    
   ];
const Home = ({navigation}) => {
    return (
        <ScrollView>
            <ScrollView  horizontal={true} style={styles.image2} >  
            <Image source={require('../../assets/kid.png')}/>
            <Image source={require('../../assets/kid.png')}/>
              </ScrollView>
                <View style={styles.container}>
            <View  style={{marginTop:10,width:"100%",marginBottom:10,}}>
            <SliderBox 

                images={offer}
                sliderBoxHeight={120}
                onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                dotColor="#FFF"
                inactiveDotColor="#90A4AE"
                circleLoop
            />
            </View>
                
                
                    <Image
                    style={styles.image1}
                    source={require('../../assets/pic/kid.jpg')}/>

            <View  style={styles.first}>
                <Text style={{fontWeight:"bold",alignItems:"center",padding:4,fontSize:15}}> Trending Offers </Text>
               
                 <SliderBox 
                    images={Images}
                    onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                    dotColor="#FFF"
                    inactiveDotColor="#f4f6f6"
                    autoplay
                    circleLoop
                    />
                     <Text style={styles.text1}> Off</Text>
                 <Text style={styles.text1}> 10%-70% </Text>
                <Text style={styles.text1}> UP To</Text>
                    
                </View>
                <View style={{padding:10,backgroundColor:"white",marginTop:5,backgroundColor:"#f2f3f4",}}>
                <Text> "Fashion is the armor to survive the reality of everyday life"</Text>
                <Text style={{left:"30%",fontStyle:"italic",color:"gray"}}> Bill Cunningham</Text>
                </View>

        </View>
        </ScrollView>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor:"#ecf0f1", 
        alignContent:"center",
        justifyContent:"center",
        height:"100%",
    },
    first:{
        height:250,
        width:"100%",
        position:'relative',
        marginTop:5,
        backgroundColor:"white",
        
        

    },
    image1:{
        marginBottom:1,
        height:250,
        width:"100%",
        borderTopWidth:5,
        borderColor:"#f8f9f9",
      
    },
    image2:{
        
        height:200,
    },
    text1:{
        fontWeight:"bold",
        alignItems:"center",
        marginTop:-70,
        left:"70%",
        top:-40,
        fontSize:25,
        color:"white",
        marginBottom:10,

    },
});


export default Home;
