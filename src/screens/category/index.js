import * as React from "react";
import  { useState } from 'react';
import { View, Text, Image,Alert} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import {List} from 'react-native-paper';

const Category = ({navigation}) => {
const [expanded, setExpanded] =React.useState(false);
  const handlePress = () => setExpanded(!expanded);
    return(
        <ScrollView>
        <View >
          <View style={{flex:1,width:"100%"}}>
              
      <List.Section>
       <List.Accordion
      style={{left:-50,width:"110%",backgroundColor:"#F2C0BF"}}
        title="WOMEN"
        left={props => <List.Icon {...props} />}
        onLongPress={handlePress}>
        <Image style={{height:120,width:"100%",marginBottom:-58}}
                source={require('../../assets/one.jpg')}></Image>
                 <Image style={{height:110,width:"35%",marginBottom:-70,right:-270,bottom:55}}
                source={require('../../assets/women.jpg')}></Image>
        <List.Accordion
        title="Western Wear"
        left={props => <List.Icon {...props} />}
        onPress={handlePress}>
      <List.Item title="Dresses & Jumpsuits"/>
      <List.Item title="Trousers"/>
      <List.Item title="Skirts"/>
      <List.Item title="Shorts"/>
      <List.Item title="Shrugs"/>
      <List.Item title="Jackets&Coats"/>
</List.Accordion>
        <List.Accordion
        title="Ethnic &Fusionwear"
        left={props => <List.Icon {...props} />}
        onPress={handlePress}>
      <List.Item title="Kurtas& Kurta Sets"/>
      <List.Item title="Sarees & Blouses"/>
      <List.Item title="Ethnic Dresses"/>
      <List.Item title="Dress Materials"/>
      <List.Item title="Ethnic Skirts"/>
      <List.Item title="Lehanga Cholis"/>
</List.Accordion>
        <List.Accordion
        title="Footwear"
        left={props => <List.Icon {...props} />}
        onPress={handlePress}>
      <List.Item title="Footwear Store"/>
      <List.Item title="Heels"/>
      <List.Item title="Sport Shoes"/>
      <List.Item title="Flip Flops"/>
      <List.Item title="Boots"/>
      <List.Item title="Sports Sandals"/>
</List.Accordion>
        <List.Accordion
         title="Lingerie"
        left={props => <List.Icon {...props} />}
        onPress={handlePress}>
      <List.Item title="Panties"/>
      <List.Item title="Socks"/>
      <List.Item title="Swimwear"/>
      <List.Item title="Stockings"/>
      <List.Item title="Thermals"/>
      <List.Item title="Shapewear"/>
</List.Accordion>
        <List.Accordion
        title="Bags, Wallets&Clutches"
        left={props => <List.Icon {...props} />}
        onPress={handlePress}>
      <List.Item title="Handbags"/>
      <List.Item title="Backpacks"/>
      <List.Item title="Wallets"/>
      <List.Item title="Clutches"/>
      <List.Item title="Laptop Bags"/>
      <List.Item title="Explore All Bags" onPress={()=>Alert.alert('You are entering into something....')}/>
</List.Accordion>
        <List.Accordion
        title="Jewellery"
        left={props => <List.Icon {...props} />}
        onPress={handlePress}>
      <List.Item title="Fashion Jewellery"/>
      <List.Item title="Fine Jewellery"/>
</List.Accordion>
        <List.Accordion
        title="Other Accessories"
        left={props => <List.Icon {...props} />}
        onPress={handlePress}>
      <List.Item title="Hair Accessories"/>
      <List.Item title="Belts"/>
      <List.Item title="Travel Accessories"/>
      <List.Item title="Gloves"/>
      <List.Item title="Helmets"/>
      <List.Item title="Phone Accessories"/>
</List.Accordion>
        <List.Accordion
title="Sports&Activewear" 
        left={props => <List.Icon {...props} />}
        onPress={handlePress}>
      <List.Item title="Sports Apparel"/>
      <List.Item title="Sports Shoes"/>
      <List.Item title="Sports Sandals"/>
      <List.Item title="Sports Accessories"/>
</List.Accordion>
         <List.Accordion
      title="Watches" 
        left={props => <List.Icon {...props} />}
        onPress={handlePress}>
      <List.Item title="Watches"/>
      <List.Item title="Smart Wearables"/>
    
</List.Accordion>
        <List.Item title="Myntra Stylecast"  onPress={() => Alert.alert('You are in Women Category ')} />
        <List.Item title="Gift Card"   onPress={() => Alert.alert('You are in Women Category ')}/>
      </List.Accordion>
      </List.Section>
      </View>
          
      <List.Section >
      <List.Accordion
      style={{left:-50,width:"110%",backgroundColor:"#F2C0BF"}}
        title="MEN"
        left={props => <List.Icon {...props} />}  
        onPress={handlePress}>
          <Image
          style={{width:"100%",height:120,marginBottom:-48}}
          source={require('../../assets/two.jpg')}></Image>
          <Image
          style={{width:"35%",height:110,marginBottom:-78,left:270,bottom:70}}
          source={require('../../assets/men.jpg')}></Image>
        <List.Accordion
title="Sports&Activewear" 
        left={props => <List.Icon {...props} />}
        onPress={handlePress}>
      <List.Item title="Sports Apparel"/>
      <List.Item title="Sports Shoes"/>
      <List.Item title="Sports Sandals"/>
      <List.Item title="Sports Accessories"/>
</List.Accordion>
          <List.Accordion
title="Topwear" 
        left={props => <List.Icon {...props} />}
        onPress={handlePress}>
      <List.Item title="T-Shirts" />
      <List.Item title="Casual Shirts"/>
      <List.Item title="Jackets"/>
      <List.Item title="Sweaters"/>
      <List.Item title="Coats"/>
      <List.Item title="Formal Shirts"/>

</List.Accordion>
        <List.Accordion
title="Bottomwear" 
        left={props => <List.Icon {...props} />}
        onPress={handlePress}>
      <List.Item title="Jeans"/>
      <List.Item title="Formal Trousers"/>
      <List.Item title="Shorts"/>
      <List.Item title="Trackpants&Joggers"/>
</List.Accordion>
        <List.Accordion
title="Watches" 
        left={props => <List.Icon {...props} />}
        onPress={handlePress}>
      <List.Item title="Watches"/>
      <List.Item title="Smart Watches& Fitness Bands"/>
      
</List.Accordion>
        <List.Accordion
title="Other Accessories" 
        left={props => <List.Icon {...props} />}
        onPress={handlePress}>
      <List.Item title="Belts"/>
      <List.Item title="Sunglasse&Frames"/>
      <List.Item title="Jewellery"/>
      <List.Item title="Cufflinks"/>
      <List.Item title="Caps&Hats"/>
      <List.Item title="Gloves"/>
      <List.Item title="Phone Accessories"/>

</List.Accordion>
        <List.Accordion
title="Innerwear" 
        left={props => <List.Icon {...props} />}
        onPress={handlePress}>
      <List.Item title="Expolore All Innerwears"/>
      <List.Item title="Boxers"/>
      <List.Item title="Socks"/>
      <List.Item title="Vests"/>
      <List.Item title="Handkerchiefs"/>
      <List.Item title="Briefs&Trunks"/>

</List.Accordion>
        <List.Accordion
title="Ethnicewear" 
        left={props => <List.Icon {...props} />}
        onPress={handlePress}>
      <List.Item title="Kurta& Kurta Sets"/>
      <List.Item title="Nehru Jackets"/>
      <List.Item title="Sherwanis"/>
      <List.Item title="Ethnic Blazers"/>
      </List.Accordion>
        <List.Accordion
title="Personal Care" 
        left={props => <List.Icon {...props} />}
        onPress={handlePress}>
      <List.Item title="Grooming"/>
      <List.Item title="Fragrances"/>
      <List.Item title="Appliances"/>
</List.Accordion>
        <List.Item title="Gift Card"onPress={() => Alert.alert('You are in the category of Men')} />
      </List.Accordion>
</List.Section>
      <View>
     
           <List.Section >
           <List.Accordion
      style={{left:-50,width:"110%",backgroundColor:"#F2C0BF"}}
        title="KIDS"
        left={props => <List.Icon {...props} />}  
        onPress={handlePress}>
           <Image
          style={{width:"100%",height:100,marginBottom:-48}}
          source={require('../../assets/three.jpg')}></Image>
          <Image
          style={{width:"35%",height:100,marginBottom:-65,left:270,bottom:50}}
          source={require('../../assets/kids.jpg')}></Image>
        <List.Item title="Explore Kids Store" style={{color:"#ECEC22"}} onPress={() => navigation.openDrawer()}/>
        <List.Item title="Kids Footwear Store" style={{color:"red"}} onPress={() => navigation.openDrawer()}/>
        <List.Item title="Festive Kids Store" style={{color:"red"}}onPress={() => navigation.openDrawer()}/>
        <List.Accordion
title="Girls Clothing" 
        left={props => <List.Icon {...props} />}
        onPress={handlePress}>
      <List.Item title="Explore Girls Store"/>
      <List.Item title="Skirts&Shorts"/>
      <List.Item title="Ethnicwear"/>
      <List.Item title="Nightwear"/>
      <List.Item title="Innerwear"/>
      <List.Item title="Clothing Sets"/>
      </List.Accordion>
        <List.Accordion
title="Boys Clothing" 
        left={props => <List.Icon {...props} />}
        onPress={handlePress}>
      <List.Item title="Explore Boys Store"/>
      <List.Item title="T-Shirts"/>
      <List.Item title="Shirts"/>
      <List.Item title="Clothing Sets"/>
      <List.Item title="Innerwear"/>
      <List.Item title="Nightwear"/>
      </List.Accordion>
        <List.Accordion
title="Boys Footwear" 
        left={props => <List.Icon {...props} />}
        onPress={handlePress}>
      <List.Item title="Explore Boys Store"/>
      <List.Item title="Casual Shoes"/>
      <List.Item title="Sandals"/>
      <List.Item title="Sport Shoes"/>
      <List.Item title="Flip Flops"/>
      <List.Item title="Sport Sandals"/>
      </List.Accordion>
        <List.Accordion
title="Girls Footwear" 
        left={props => <List.Icon {...props} />}
        onPress={handlePress}>
      <List.Item title="Explore Girls Store"/>
      <List.Item title="Flats& Casual Shoes"/>
      <List.Item title="Heels"/>
      <List.Item title="Flip Flops"/>
      <List.Item title="Sports Shoes"/>
      <List.Item title="Sports Sandals"/>
      </List.Accordion>
        <List.Accordion
title="Infants" 
        left={props => <List.Icon {...props} />}
        onPress={handlePress}>
      <List.Item title="Explore Infants Store"/>
      <List.Item title="Rompers& Onsesies"/> 
      <List.Item title="Bottomwear"/>
      <List.Item title="Nightwear"/>
      <List.Item title="Innerwear"/>
      <List.Item title="Clothing Sets"/>
      </List.Accordion>
        <List.Accordion
title="Bags&Accessories" 
        left={props => <List.Icon {...props} />}
        onPress={handlePress}>
      <List.Item title="Bags& Backpacks"/>
      <List.Item title="Trolley Bags"/>
      <List.Item title="Watches"/>
      <List.Item title="Sunglasses&Frames"/>
      <List.Item title="Sports Accessories& Equipments"/>
      </List.Accordion>
        <List.Item title="Masks" style={{color:"red"}}onPress={() => navigation.openDrawer()}/>
      </List.Accordion>
</List.Section>
       
      </View>  
      <View>
      
      <List.Section >
      <List.Accordion
            style={{left:-50,width:"110%",backgroundColor:"#F2C0BF"}}
        title="BEAUTY&PERSONAL CARE "
        left={props => <List.Icon {...props} />} 
        onPress={handlePress}>
          <Image
          style={{width:"100%",height:100,marginBottom:-48}}
          source={require('../../assets/four.jpg')}></Image>
          <Image
          style={{width:"40%",height:100,marginBottom:-65,left:250,bottom:50}}
          source={require('../../assets/cosmetics.jpg')}></Image>
        <List.Item title="Explore Beauty Store" onPress={() => Alert.alert('You are in the category of Men')}/>
        <List.Item title="Footwear" onPress={() => Alert.alert('You are in the category of Men')}/>
        <List.Item title="Footwear" onPress={() => Alert.alert('You are in the category of Men')}/>
        <List.Item title="Lingerie"onPress={() => Alert.alert('You are in the category of Men')} />
        <List.Item title="Bags, Wallets&Clutches" onPress={() => Alert.alert('You are in the category of Men')}/>
        <List.Item title="Jewellery" onPress={() => Alert.alert('You are in the category of Men')}/>
        <List.Item title="Other Accessories" onPress={() => Alert.alert('You are in the category of Men')}/>
        <List.Item title="Sports&Activewear"onPress={() => Alert.alert('You are in the category of Men')} />
        <List.Item title="Watches" onPress={() => Alert.alert('You are in the category of Men')}/>
        <List.Item title="Myntra Stylecast" onPress={() => Alert.alert('You are in the category of Men')}/>
        <List.Item title="Gift Card" onPress={() => Alert.alert('You are in the category of Men')}/>
      </List.Accordion>
</List.Section>
      </View>  
      <View>
    
      <List.Section >
      <List.Accordion
                  style={{left:-50,width:"110%",backgroundColor:"#F2C0BF"}}
        title="HOME&LIVING"
        left={props => <List.Icon {...props} />} 
        onPress={handlePress}>
            <Image
          style={{width:"100%",height:100,marginBottom:-48}}
          source={require('../../assets/five.jpg')}></Image>
          <Image
          style={{width:"35%",height:100,marginBottom:-65,left:270,bottom:50}}
          source={require('../../assets/living.jpg')}></Image>
        <List.Item title="Topwear" onPress={() => Alert.alert('You are in the category of Men')}/>
        <List.Item title="Footwear" onPress={() => Alert.alert('You are in the category of Men')}/>
        <List.Item title="Footwear" onPress={() => Alert.alert('You are in the category of Men')}/>
        <List.Item title="Lingerie" onPress={() => Alert.alert('You are in the category of Men')}/>
        <List.Item title="Bags, Wallets&Clutches"onPress={() => Alert.alert('You are in the category of Men')} />
        <List.Item title="Jewellery" onPress={() => Alert.alert('You are in the category of Men')}/>
        <List.Item title="Other Accessories" onPress={() => Alert.alert('You are in the category of Men')}/>
        <List.Item title="Sports&Activewear"onPress={() => Alert.alert('You are in the category of Men')} />
        <List.Item title="Watches" onPress={() => Alert.alert('You are in the category of Men')}/>
        <List.Item title="Myntra Stylecast" onPress={() => Alert.alert('You are in the category of Men')}/>
        <List.Item title="Gift Card" onPress={() => Alert.alert('You are in the category of Men')}/>
      </List.Accordion>
</List.Section>
      </View>  
      <View>
     
      <List.Section >
      <List.Accordion
                        style={{left:-50,width:"110%",backgroundColor:"#F2C0BF"}}
        title="GADGETS"
        left={props => <List.Icon {...props} />} 
        onPress={handlePress}>
           <Image
          style={{width:"100%",height:100,marginBottom:-48}}
          source={require('../../assets/six.jpg')}></Image>
          <Image
          style={{width:"35%",height:100,marginBottom:-65,left:270,bottom:50}}
          source={require('../../assets/gadgets.jpg')}></Image>
        <List.Item title="Topwear" onPress={() => Alert.alert('You are in the category of Men')}/>
        <List.Item title="Footwear" onPress={() => Alert.alert('You are in the category of Men')}/>
        <List.Item title="Footwear" onPress={() => Alert.alert('You are in the category of Men')}/>
        <List.Item title="Lingerie" onPress={() => Alert.alert('You are in the category of Men')}/>
        <List.Item title="Bags, Wallets&Clutches" onPress={() => Alert.alert('You are in the category of Men')}/>
        <List.Item title="Jewellery" onPress={() => Alert.alert('You are in the category of Men')}/>
        <List.Item title="Other Accessories"onPress={() => Alert.alert('You are in the category of Men')} />
        <List.Item title="Sports&Activewear" onPress={() => Alert.alert('You are in the category of Men')}/>
        <List.Item title="Watches" onPress={() => Alert.alert('You are in the category of Men')}/>
        <List.Item title="Myntra Stylecast" onPress={() => Alert.alert('You are in the category of Men')}/>
        <List.Item title="Gift Card" onPress={() => Alert.alert('You are in the category of Men')}/>
      </List.Accordion>
</List.Section>
      </View>  
      <View>
     
      <List.Section >
      <List.Accordion
                              style={{left:-50,width:"110%",backgroundColor:"#F2C0BF"}}
        title="PLUS SIZE"
        left={props => <List.Icon {...props} />} 
        onPress={handlePress}>
           <Image
          style={{width:"100%",height:100,marginBottom:-48}}
          source={require('../../assets/seven.jpg')}></Image>
          <Image
          style={{width:"35%",height:100,marginBottom:-65,left:270,bottom:50}}
          source={require('../../assets/couple1.jpg')}></Image>
        <List.Item title="Topwear" onPress={() => Alert.alert('You are in the category of Plus Size')}/>
        <List.Item title="Footwear" onPress={() => Alert.alert('You are in the category of Plus Size')}/>
        <List.Item title="Footwear" onPress={() => Alert.alert('You are in the category of Plus Size')}/>
        <List.Item title="Lingerie" onPress={() => Alert.alert('You are in the category of Plus Size')}/>
        <List.Item title="Bags, Wallets&Clutches"onPress={() => Alert.alert('You are in the category of Plus Size')} />
        <List.Item title="Jewellery" onPress={() => Alert.alert('You are in the category of Plus Size')}/>
        <List.Item title="Other Accessories" onPress={() => Alert.alert('You are in the category of Plus Size')}/>
        <List.Item title="Sports&Activewear" onPress={() => Alert.alert('You are in the category of Plus Size')}/>
        <List.Item title="Watches"onPress={() => Alert.alert('You are in the category of Plus Size')} />
        <List.Item title="Myntra Stylecast" onPress={() => Alert.alert('You are in the category of Plus Size')}/>
        <List.Item title="Gift Card" onPress={() => Alert.alert('You are in the category of Plus Size')}/>
      </List.Accordion>
</List.Section>
      
      </View>  
      <View>
      
      <List.Section >
      <List.Accordion
                              style={{left:-50,width:"110%",backgroundColor: "#F2C0BF",}}
        title="THEME STORE"
        left={props => <List.Icon {...props}  />} 
        onPress={handlePress}>
          <Image
          style={{width:"100%",height:100,marginBottom:-48}}
          source={require('../../assets/eight.jpg')}></Image>
          <Image
          style={{width:"35%",height:100,marginBottom:-65,left:270,bottom:50}}
          source={require('../../assets/couple2.jpg')}></Image>
        <List.Item title="Topwear" onPress={() => Alert.alert('You are in the category of Theme Store')}/>
        <List.Item title="Footwear"onPress={() => Alert.alert('You are in the category of Theme Store')} />
        <List.Item title="Footwear"onPress={() => Alert.alert('You are in the category of Theme Store')} />
        <List.Item title="Lingerie" onPress={() => Alert.alert('You are in the category of Theme Store')}/>
        <List.Item title="Bags, Wallets&Clutches"onPress={() => Alert.alert('You are in the category of Theme Store')} />
        <List.Item title="Jewellery" onPress={() => Alert.alert('You are in the category of Theme Store')}/>
        <List.Item title="Other Accessories" onPress={() => Alert.alert('You are in the category of Theme Store')}/>
        <List.Item title="Sports&Activewear"onPress={() => Alert.alert('You are in the category of Theme Store')} />
        <List.Item title="Watches" onPress={() => Alert.alert('You are in the category of Theme Store')}/>
        <List.Item title="Myntra Stylecast" onPress={() => Alert.alert('You are in the category of Theme Store')}/>
        <List.Item title="Gift Card" onPress={() => Alert.alert('You are in the category of Theme Store')}/>
      </List.Accordion>
</List.Section>
     <View >
     
     <List.Section >
      <List.Accordion
                                 transparent={true}
                         style={{left:-50,width:"110%",backgroundColor:"#F2C0BF"}}
        title="MYNTRA MALL"
        left={props => <List.Icon {...props}  />} 
        onPress={handlePress}>
          <Image
          style={{width:"100%",height:100,marginBottom:-48}}
          source={require('../../assets/nine.jpg')}></Image>
          <Image
          style={{width:"35%",height:100,marginBottom:-65,left:270,bottom:50}}
          source={require('../../assets/mall.jpg')}></Image>
        <List.Item title="Myntra Mall"onPress={() => Alert.alert('You are in Myntra Mall')} />
      </List.Accordion>
</List.Section>
     </View>
      </View>  
      </View>
      </ScrollView>
    );
}

export default Category;