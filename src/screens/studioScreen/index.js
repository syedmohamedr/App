import React from 'react';
import { View, Text, ScrollView,Image ,StyleSheet} from 'react-native';

const StudioStack = () => {
    return (
        <ScrollView>
            <View style={styles.header}>
               
            <Image
                style={styles.logo}
                source={require('../../assets/stud.jpg')}></Image>
                 <Text style={styles.stdtxt}>studio</Text>
                 <Text style={{bottom:20, fontSize:10,left:"20%"}}>Expert fashion tips from your favourite influencers</Text>
            </View>
            <View style={styles.box}>
            <Image
                 style={{height:700, width:"100%",}}
                source={require('../../assets/modelm1.jpg')}></Image>
                <Text style={styles.text}>Fashion Ipsum Quote Version contains 200 quotesfrom 20 world-renowned fashion designers.</Text>
            </View>


            <View style={styles.box}>
                <Image
                style={styles.image}
                source={require('../../assets/model2.jpg')}></Image>
              <Text style={styles.text}>Fashion Ipsum Quote Version contains 200 quotesfrom 20 world-renowned fashion designers.</Text>
            </View>
            <View style={styles.box}>
            <Image
                style={styles.image}
                source={require('../../assets/modelm2.jpg')}></Image>
                <Text style={styles.text}>Fashion Ipsum Quote Version contains 200 quotesfrom 20 world-renowned fashion designers.</Text>
            </View>
            <View style={styles.box}>
            <Image
                style={styles.image}
                source={require('../../assets/model4.jpg')}></Image>
                <Text style={styles.text}>Fashion Ipsum Quote Version contains 200 quotesfrom 20 world-renowned fashion designers.</Text>
            </View>


        </ScrollView>
    );
}

const styles = StyleSheet.create({
    image:{
       width:"100%",
       height:500,
    },
    header:{
        alignContent:"center",
        justifyContent:"center",
        height:70,
        backgroundColor:"white",
        marginTop:1,
    },
    logo:{

        height:40,
        width:45,
        left:"30%",
        borderRadius:10,
        top:20,
      
    },
    text:{
        fontSize:10,
        padding:10,

    },
    box:{
        marginTop:15,
        marginBottom:15,
        backgroundColor:"white",
    },
    stdtxt:{
        fontSize:35,
        left:"45%",
        bottom:25,
    },
});

export default StudioStack;