import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View,Text,StyleSheet,Image, ScrollView} from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from '../../config/color';
import Styles from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Images = [
    require(('../../assets/slider/H&m.jpg')),
    require(('../../assets/slider/traditonal.jpg')),
    require(('../../assets/slider/skechers.jpg')),
    require(('../../assets/slider/couples.jpg')),
    require(('../../assets/slider/sports.jpg')),
    require(('../../assets/slider/casual.jpg')),
    require(('../../assets/slider/elegant.jpg')),
    require(('../../assets/slider/denima.jpg')),
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
const MyntraScreen=()=> {
    return (
        <ScrollView>
        <View style={styles.container}>
            <View  style={{ height:100,width:"100%",position:'relative',marginTop:5,marginBottom:20,backgroundColor:"#F8F9F9"}}>
                <Text style={{left:150,fontSize:20,top:35}}>Myntra </Text>
                <Text style={{color:"brown",left:50,fontSize:50}}>Mall</Text>
                <Text style={{color:"red",left:50,top:-10}}>HOUSE OF BRANDS</Text>
                <Text style={{left:20,top:20}}>Brands In Focus</Text>
                    </View>
                <View>
            <SliderBox
                    images={Images}
                    onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                    dotColor="black"
                    inactiveDotColor="#F4F6F6"
                    autoplay
                    circleLoop
            />
            </View>
                <View style={{marginBottom:30,top:50}}>
                <Text style={{left:20,color:"red",left:150,fontWeight:"bold",fontStyle:"italic",marginBottom:10}}>Shop Essentials</Text>
                <Image style={{borderRadius:80,height:100,width:100,top:20,borderColor:"red",borderWidth:1}}
                source={require('../../assets/slider/kurta.jpg')}></Image>
                <Text style={{fontWeight:"bold",top:30,left:10}}>Printed Kurtas</Text>
                <Text style={{left:10,top:32}}>30-50% Off</Text>
                <Image style={{borderRadius:80,height:110,width:100,top:-122,left:130,borderColor:"red",borderWidth:1}}
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
                <Image style={{borderRadius:80,height:100,width:100,left:275,top:-480,borderColor:"red",borderWidth:1}}
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
                 <Image style={{borderRadius:80,height:100,width:100,left:295,top:-680,borderColor:"red",borderWidth:1}}
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
                <Image style={{borderRadius:80,height:100,width:100,left:295,top:-875,borderColor:"red",borderWidth:1}}
                source={require('../../assets/slider/trendy.jpg')}></Image>
                                <Text style={{fontWeight:"bold",left:295,top:-868}}>Trendy Tops</Text>
                                <Text style={{left:299,top:-862}}>Min 40% Off</Text>
                </View>
                <View style={{ height:"50%",top:-750,width:"100%"}}>
                    <Text>Hi</Text>
                    <Text style={{top:-10,marginBottom:10,fontWeight:"bold",left:150,color:"red",marginBottom:20}}>New Brand Store</Text>
                <SliderBox
images={New}
onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
dotColor="black"
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
        height:1800
    },
    view:{
        flex:1,
        justifyContent:"center",
        marginTop:10
    }
});
export default MyntraScreen;