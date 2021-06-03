import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View,Text,StyleSheet,Image, ScrollView} from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from '../../config/color';
import Styles from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
const Images = [
    require(('../../assets/slider/H&m.jpg')),
    require(('../../assets/slider/traditonal.jpg')),
    require(('../../assets/slider/skechers.jpg')),
    require(('../../assets/slider/couples.jpg')),
    require(('../../assets/slider/casual.jpg')),
    require(('../../assets/slider/elegant.jpg')),
   ];
   const New = [
    require(('../../assets/slider/one.jpg')),
    require(('../../assets/slider/casual.jpg')),
    require(('../../assets/slider/crop.jpg')),
    require(('../../assets/slider/kurta.jpg')),
    require(('../../assets/slider/watch.jpg')),
    require(('../../assets/slider/workout.jpg')),
    require(('../../assets/slider/trendy.jpg')),
    require(('../../assets/slider/summer.jpg')),
   ];
const MyntraScreen=({navigation})=> {
    return (
        <ScrollView>
        <View style={styles.container}>
            <View  style={{ height:100,width:"100%",position:'relative',marginTop:1,marginBottom:20,}}>
                <Text style={{left:"48%",fontSize:15,top:20,color:"#4c4647"}}>MYNTRA </Text>
                <Text style={{color:"#d35400",left:"30%",fontSize:80,top:-30}}>M</Text>
                <Text style={{color:"#d35400",left:"47%",fontSize:45,top:-94,marginBottom:-40}}>all</Text>
                <Text style={{left:"30%",top:-60,color:"black"}}>HOUSE OF BRANDS</Text>
                    </View>
                <View style={{width:"100%",backgroundColor:"#fff",height:500}}>
                <Text style={{left:"25%",top:40,color:"#2a2a2a",fontSize:20,fontWeight:"bold"}}>Brand Stores</Text>
                <Text style={{left:"56%",top:13,color:"#d35400",fontSize:20,fontStyle:"italic",marginBottom:-30}}>In Focus</Text>
                <View style={{top:50,border:1,borderColor:"gray"}}>
            <SliderBox
                    images={Images}
                    onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                    dotColor="white"
                    height={420}
                    inactiveDotColor="#F03232"
                    autoplay
                    circleLoop
            />
            </View>
            </View>
                <View style={{marginBottom:-800,top:10,backgroundColor:"#fff",width:"100%"}}>
                <Text style={{left:20,color:"#d35400",left:"34%",fontWeight:"bold",top:27,
                   fontStyle:"italic",fontSize:20,textDecorationLine:"underline"}}>Shop </Text>
                    <Text style={{left:"45%",color:"#2a2a2a",fontWeight:"bold",
                marginBottom:30,fontSize:20,textDecorationLine:"underline"}}> Essentials</Text>
                <Image style={{borderRadius:80,height:100,width:100,top:20,borderColor:"red",borderWidth:1,left:10}}
                source={require('../../assets/slider/kurta.jpg')}></Image>
                <Text style={{fontWeight:"bold",top:30,left:10}}>Printed Kurtas</Text>
                <Text style={{left:10,top:32}}>30-50% Off</Text>
                <Image style={{borderRadius:100,height:110,width:100,top:-122,left:140,borderColor:"red",borderWidth:1}}
                source={require('../../assets/slider/kids.jpg')}></Image>
                <Text style={{left:135,top:-117,fontWeight:"bold"}}>Everyday Tees</Text>
                <Text style={{left:132,top:-115}}>Starting @ Rs.149</Text>
                <Image style={{borderRadius:80,height:100,width:100,top:-262,left:270,borderColor:"red",borderWidth:1}}
                source={require('../../assets/slider/summer.jpg')}></Image>
                 <Text style={{left:275,top:-255,fontWeight:"bold"}}>Summer Tees</Text>
                <Text style={{left:275,top:-253}}>Starting @ Rs.399</Text>
                <Image style={{borderRadius:80,height:100,width:100,left:5,top:-200,borderColor:"red",borderWidth:1}}
                source={require('../../assets/slider/activewear.jpg')}></Image>
                <Text style={{fontWeight:"bold",left:20,top:-190}}>Activewear</Text>
                <Text style={{left:20,top:-190}}>Upto 40% Off</Text>
                <Image style={{borderRadius:80,height:105,width:100,left:145,top:-340,borderColor:"red",borderWidth:1}}
                source={require('../../assets/slider/kurta2.jpg')}></Image>
                <Text style={{fontWeight:"bold",left:135,top:-332}}>Comfy Kurta Sets</Text>
                <Text style={{left:135,top:-332}}>Starting @ Rs. 849</Text>
                <Image style={{borderRadius:80,height:100,width:100,left:290,top:-480,borderColor:"red",borderWidth:1}}
                source={require('../../assets/slider/crop.jpg')}></Image>
                <Text style={{fontWeight:"bold",left:275,top:-470}}>Stylish Crop Tops</Text>
                <Text style={{left:275,top:-470}}>Starting @ Rs. 399</Text>
                <Image style={{borderRadius:80,height:100,width:100,left:5,top:-400,borderColor:"red",borderWidth:1}}
                source={require('../../assets/slider/kurta1.jpg')}></Image>
                <Text style={{fontWeight:"bold",left:8,top:-390}}>Celebrity Faves</Text>
                <Text style={{left:8,top:-390}}>Starting @ Rs. 799</Text>
                <Image style={{borderRadius:80,height:100,width:100,left:145,top:-540,borderColor:"red",borderWidth:1}}
                source={require('../../assets/slider/marks.jpg')}></Image>
                 <Text style={{fontWeight:"bold",left:155,top:-526}}>WFH Populars</Text>
                <Text style={{left:155,top:-528}}>Starting @ Rs. 399</Text>
                 <Image style={{borderRadius:80,height:100,width:100,left:290,top:-680,borderColor:"red",borderWidth:1}}
                source={require('../../assets/slider/workout.jpg')}></Image>
                <Text style={{fontWeight:"bold",left:298,top:-663}}>Workout Wear</Text>
                 <Text style={{left:298,top:-666}}>Min 40% Off</Text>
                 <Image style={{borderRadius:80,height:100,width:100,left:5,top:-600,borderColor:"red",borderWidth:1}}
                source={require('../../assets/slider/casual1.jpg')}></Image>
                <Text style={{fontWeight:"bold",left:15,top:-590}}>Casual Tees</Text>
                <Text style={{left:15,top:-585}}>Starting @ Rs. 399</Text>
                <Image style={{borderRadius:80,height:100,width:100,left:155,top:-740,borderColor:"red",borderWidth:1}}
                source={require('../../assets/slider/watch.jpg')}></Image>
                <Text style={{fontWeight:"bold",left:155,top:-730}}>Styles For All</Text>
                <Text style={{left:155,top:-723}}>Starting @ Rs. 4250</Text>
                <Image style={{borderRadius:80,height:100,width:100,left:290,top:-875,borderColor:"red",borderWidth:1}}
                source={require('../../assets/slider/trendy.jpg')}></Image>
                                <Text style={{fontWeight:"bold",left:295,top:-868}}>Trendy Tops</Text>
                                <Text style={{left:299,top:-862}}>Min 40% Off</Text>
                </View>
                <View style={{width:"100%",borderTopWidth:50,borderColor:"#fff",}}>
                <Text style={{top:-30,marginBottom:20,fontWeight:"bold",left:"30%",
                    color:"#d35400",fontSize:20,textDecorationLine:"underline"}}>New Brand Store</Text>
                <SliderBox
                    images={New}
                    onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                    dotColor="white"
                    inactiveDotColor="#F03232"
                    height={400}
                    width={390}
                    autoplay
                    circleLoop
                    />
                <Image style={{height:100,top:50}}
                    source={require('../../assets/slider/bg.jpg')}></Image>
                    <Text style={{top:-20,color:"black",left:"17%",fontSize:20}}>"The joy of dressing is an art"</Text>
                    <Text style={{top:-20,color:"black",left:150,fontSize:20,fontStyle:"italic"}}>--John Galliano</Text>
                  
                
                    </View>
                    <View style={{bottom:-10}}>
                  
                    </View>
        </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height:"100%",
        backgroundColor:"#f4f6f7",
    },
    view:{
        flex:1,
        justifyContent:"center",
        marginTop:10
    }
});
export default MyntraScreen;