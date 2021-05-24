
import React, { Component } from 'react';
import { View, Text, StyleSheet,ScrollView,Image } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";

const Images = [
    require('../../assets/model2.jpg'),
    require('../../assets/model3.jpg'),
    require('../../assets/modelm2.jpg'),
    require('../../assets/model4.jpg'),
   ];
const Home = ({navigation}) => {
    return (
        <ScrollView>
        <View style={styles.container}>
            

            <View  style={{ height:300,width:"100%",position:'relative',marginTop:10,marginBottom:20,backgroundColor:"#f8f9f9"}}>
                <Text style={{fontWeight:"bold",alignItems:"center",margin:10}}> Trending Offers </Text>

            <SliderBox 
                
                    images={Images}
                    sliderBoxHeight={400}
                    onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                    dotColor="#FFF"
                    inactiveDotColor="#f4f6f6"
                    autoplay
                    circleLoop
                    
            />
                </View>
                        <Image
                        style={{marginBottom:10,height:400,width:"100%",marginTop:30}}
                    source={require('../../assets/model2.jpg')}/>
                <View  style={{ height:400,position:'relative',marginTop:10}}>
            <SliderBox 

                images={Images}
                sliderBoxHeight={400}
                onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                dotColor="#FFF"
                inactiveDotColor="#90A4AE"
                autoplay
                circleLoop
            />
            </View>
                

        </View>
        </ScrollView>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,  
    },
});


export default Home;
