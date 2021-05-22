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
            <View>
                
                <Image
                style={styles.logo1}
                source={require('../../assets/model3.jpg')}></Image>
                   <Text style={{left:"15%", bottom:40,fontSize:15,marginBottom:-20}}>Male Fashion</Text>

                </View>
            <Image
                 style={{height:700, width:"100%",}}
                source={require('../../assets/modelm1.jpg')}></Image>
                 <Image
                style={{width:28,height:28,margin:8,left:3,borderRadius:100}}
                source={require('../../assets/heart1.png')}></Image>
                <Image
               style={{width:30,height:28,margin:8,left:"15%",top:-44,marginBottom:-30}}
                source={require('../../assets/share.png')}></Image>
            
                 <Image
               style={{width:30,height:28,margin:8,left:"90%",top:-55,marginBottom:-40}}
                source={require('../../assets/save.png')}></Image>
            
                <Text style={styles.text}>Fashion Ipsum Quote Version contains 200 quotesfrom 20 world-renowned fashion designers.</Text>
            </View>


            <View style={styles.box}>
                
                <View>
                <Image
                style={styles.logo1}
                source={require('../../assets/model2.jpg')}></Image>
                   <Text style={{left:"15%", bottom:40,fontSize:15,marginBottom:-20}}>Female Fashion</Text>

                </View>
                <Image
                style={styles.image}
                source={require('../../assets/model2.jpg')}></Image>
                   <Image
                style={{width:28,height:28,margin:8,left:3,borderRadius:100}}
                source={require('../../assets/heart1.png')}></Image>
                <Image
               style={{width:30,height:28,margin:8,left:"15%",top:-44,marginBottom:-30}}
                source={require('../../assets/share.png')}></Image>
            
                 <Image
               style={{width:30,height:28,margin:8,left:"90%",top:-55,marginBottom:-40}}
                source={require('../../assets/save.png')}></Image>
            
              <Text style={styles.text}>It is Spring, moonless night in the small town, starless and bible-black, the cobblestreets silent and the hunched, courters'-and- rabbits' wood limping invisible down to the sloeblack, slow, black, crowblack, fishingboat-bobbing sea. The houses are blind as moles (though moles see fine to-night in the snouting, velvet dingles) or blind as Captain Cat there in the muffled middle by the pump and the town clock, the shops in mourning, 
              the Welfare Hall in widows' weeds. And all the people of the lulled and dumbfound town are sleeping now. </Text>
            </View>
            <View style={styles.box}>
            <View>
                <Image
                style={styles.logo1}
                source={require('../../assets/modelm2.jpg')}></Image>
                 <Text style={{left:"15%", bottom:40,fontSize:15,marginBottom:-20}}>Style Accessories</Text>
                 

                </View>
            <Image
                style={styles.image}
                source={require('../../assets/modelm2.jpg')}></Image>
                <Image
                style={{width:28,height:28,margin:8,left:3,borderRadius:100}}
                source={require('../../assets/heart1.png')}></Image>
                <Image
               style={{width:30,height:28,margin:8,left:"15%",top:-44,marginBottom:-30}}
                source={require('../../assets/share.png')}></Image>
            
                 <Image
               style={{width:30,height:28,margin:8,left:"90%",top:-55,marginBottom:-40}}
                source={require('../../assets/save.png')}></Image>
            
                <Text style={styles.text}>In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from this that the freedom of elections, which is reckoned most important and very essential to the English Church, we, of our pure and unconstrained will, did grant, and did by our charter confirm and did obtain the ratification of the same from our lord, Pope Innocent III, before the quarrel arose between us and our barons: and this we
                 will observe, and our will is that it be observed in good faith by our heirs forever..</Text>
                </View>
            <View style={styles.box}>
            <View>
                <Image
                style={styles.logo1}
                source={require('../../assets/model3.jpg')}></Image>
                 <Text style={{left:"15%", bottom:40,fontSize:15,marginBottom:-20}}>Rubans Accessories</Text>
                </View>
            <Image
                style={styles.image}
                source={require('../../assets/model4.jpg')}></Image>
                   <Image
                style={{width:28,height:28,margin:8,left:3,borderRadius:100}}
                source={require('../../assets/heart1.png')}></Image>
                <Image
               style={{width:30,height:28,margin:8,left:"15%",top:-44,marginBottom:-30}}
                source={require('../../assets/share.png')}></Image>
            
                 <Image
               style={{width:30,height:28,margin:8,left:"90%",top:-55,marginBottom:-40}}
                source={require('../../assets/save.png')}></Image>
            
                <Text style={styles.text}>Fashion Ipsum Quote Version contains 200 quotesfrom 20 world-renowned fashion designers 
                Fashion Ipsum Classic Version contains 100 ipsum sentences
across 10 fashionable style categories.</Text>
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
        fontSize:11,
        padding:10,
        top:-5,
        backgroundColor:"white",
        left:5,

    },
    box:{
        marginTop:5,
        marginBottom:5,
        backgroundColor:"white",
    },
    stdtxt:{
        fontSize:35,
        left:"45%",
        bottom:25,
    },
    logo1:{
        height:40,
        width:40,
        margin:10,
        borderRadius:400,
        padding:5,
        
    }
});

export default StudioStack;