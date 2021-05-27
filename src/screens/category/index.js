import React, { useState } from "react";
import { View, Text, Picker, Image} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";


const Category = ({navigation}) => {
    const [selectedValue, setSelectedValue] = useState("java");

    return(
        <ScrollView>
        <View >
            <View>
                <Image style={{height:120,width:"100%",marginBottom:-58}}
                source={require('../../assets/women.jpg')}></Image>
        <Picker
        selectedValue={selectedValue}
        style={{ height: 60, width: "100%" ,top:-60,color:"red",fontSize:20}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="WOMEN" value="java" />
        <Picker.Item label="Westernwear" value="js" />
        <Picker.Item label="Ethnic & Fusionwear" value="js" />
        <Picker.Item label="Footwear" value="js" />
        <Picker.Item label="Lingerie" value="js" />
        <Picker.Item label="Bags, Wallets & Clutches" value="js" />
        <Picker.Item label="Jewellery" value="js" />
        <Picker.Item label="Other Accessories" value="js" />
        <Picker.Item label="Beauty & Personal Care" value="js" />
        <Picker.Item label="Sports& Activewear" value="js" />
        <Picker.Item label="Luggage&Trolleys" value="js" />
        <Picker.Item label="Sleepwear&Loungewear" value="js" />
        <Picker.Item label="Watches" value="js" />
        <Picker.Item label="Myntra Stylecast" value="js" />
        <Picker.Item label="Winterwear Store" value="js" />
        <Picker.Item label="Gift Card" value="js" />


      </Picker>
      </View>
      <View>
          <Image style={{width:"100%",height:100,marginBottom:-48}}
          source={require('../../assets/men.jpg')}></Image>
       <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: "100%" ,top:-60,color:"red",fontSize:20}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="MEN" value="java" />
        <Picker.Item label="Topwear" value="js" />
        <Picker.Item label="Footwear" value="js" />
        <Picker.Item label="Watches" value="js" />
        <Picker.Item label="Bottomwear" value="js" />
        <Picker.Item label="Other Accessories" value="js" />
        <Picker.Item label="Sports & Activewear" value="js" />
        <Picker.Item label="Innerwear" value="js" />
        <Picker.Item label="Ethnicwear" value="js" />
        <Picker.Item label="Sleepwear" value="js" />
        <Picker.Item label="Personal Care" value="js" />
        <Picker.Item label="Bags, Backpacks&Wallets" value="js" />
        <Picker.Item label="Luggage&Trolleys" value="js" />
        <Picker.Item label="Gift Card" value="js" />

      </Picker>
      </View>  
      <View>
          <Image
          style={{width:"100%",height:100,marginBottom:-48}}
          source={require('../../assets/kids.jpg')}></Image>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: "100%",top:-60,color:"red",fontSize:20 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="KIDS" value="java" />
        <Picker.Item label="Explore Kids Store" value="js" />
        <Picker.Item label="Kids Footwear Store" value="js" />
        <Picker.Item label="Festive Kids Store" value="js" />
        <Picker.Item label="Girls Clothing" value="js" />
        <Picker.Item label="Boys Clothing" value="js"  />
        <Picker.Item label="Girls Footwear" value="js" />
        <Picker.Item label="Boys Footwear" value="js" />
        <Picker.Item label="Infants" value="js" />
        <Picker.Item label="Toys" value="js" />
        <Picker.Item label="Bags& Accessories" value="js" />
        <Picker.Item label="Furnishing &Decor" value="js" />
        <Picker.Item label="Masks" value="js" />
      </Picker>
      </View>  
      <View>
          <Image style={{height:100,width:"100%",marginBottom:-48}}
          source={require('../../assets/cosmetics.jpg')}></Image>
       <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: "100%",top:-60,color:"red",fontSize:20 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="BEAUTY&PERSONAL CARE" value="java" />
        <Picker.Item label="Explore Beauty Store" value="js" />
        <Picker.Item label="Women" value="js" />
        <Picker.Item label="Men" value="js" />
        <Picker.Item label="Explore Premium Beauty Store" value="js" />
      </Picker>
      </View>  
      <View>
          <Image style={{height:100,width:"100%",marginBottom:-48}}
          source={require('../../assets/living.jpg')}></Image>
       <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: "100%",top:-60,color:"red",fontSize:20 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="HOME&LIVING" value="java" />
        <Picker.Item label="Explore Home Store" value="js" />
        <Picker.Item label="Decor" value="js" />
        <Picker.Item label="Kitchen & Dining" value="js" />
        <Picker.Item label="Bed" value="js" />
        <Picker.Item label="Furnishing" value="js" />
        <Picker.Item label="Storage & Organizers" value="js" />
        <Picker.Item label="Bath" value="js" />
        <Picker.Item label="Kids" value="js" />
        <Picker.Item label="Home Gift Sets" value="js" />
      </Picker>
      </View>  
      <View>
          <Image
          style={{width:"100%",height:100,marginBottom:-48}}
          source={require('../../assets/gadgets.jpg')}></Image>
       <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: "100%",top:-60,color:"red",fontSize:20 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="GADGETS" value="java" />
        <Picker.Item label="Smart Wearables" value="js" />
        <Picker.Item label="Audio & Hearables" value="js" />
        <Picker.Item label="Mobile & Accessories" value="js" />
      </Picker>
      </View>  
      <View>
          <Image
          style={{width:"100%",height:100,marginBottom:-48}}
          source={require('../../assets/couple1.jpg')}></Image>
       <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: "100%",top:-60,color:"red",fontSize:20 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="PLUS SIZE" value="size" />
        <Picker.Item label="Women" value="js" />
        <Picker.Item label="Men" value="js" />
      </Picker>
      </View>  
      <View>
          <Image
          style={{width:"100%",height:100,marginBottom:-48}}
          source={require('../../assets/couple2.jpg')}></Image>
       <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: "100%",top:-60,color:"red",fontSize:20 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="THEME STORES" value="size" />
        <Picker.Item label="Myntra Stylecast" value="js" />
        <Picker.Item label="Wedding Store Men" value="js" />
        <Picker.Item label="Wedding Store Women" value="js" />
        <Picker.Item label="Party Store Men" value="js" />
        <Picker.Item label="Party Store Women" value="js" />
        <Picker.Item label="Pet Store" value="js" />
        <Picker.Item label="Myntra Sneaker Club" value="js" />
        <Picker.Item label="Indian Bazzar Store" value="js" />
        <Picker.Item label="Myntra Gifting Store" value="js" />
        <Picker.Item label="Myntra For Earth" value="js" />
        <Picker.Item label="Monsoon Store" value="js" />
        <Picker.Item label="Made In India Store" value="js" />
        <Picker.Item label="Premium Store" value="js" />
        <Picker.Item label="NBA Store" value="js" />
        <Picker.Item label="Handloom Store" value="js" />
        <Picker.Item label="Sports Store Men" value="js" />
        <Picker.Item label="Sports Store Women" value="js" />
        <Picker.Item label="Boardroom Edit Men" value="js" />
        <Picker.Item label="Boardroom Edit Women" value="js" />
        <Picker.Item label="Korean Beauty Store" value="js" />
        <Picker.Item label="Streetwear Men" value="js" />
        <Picker.Item label="Streetwear Women" value="js" />
      </Picker>
      </View>  
      <View>
          
          <Image
          style={{width:"100%",height:100,marginBottom:-49}}
          source={require('../../assets/mall.jpg')}>
          </Image>
     <View>
     <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: "100%",top:-60,color:"red",fontSize:20 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="MYNTRA MALL" value="size" />
      </Picker>
     </View>
      </View>  
      </View>  
</ScrollView>
    );
}

export default Category;