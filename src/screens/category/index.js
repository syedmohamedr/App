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
                <Image style={{height:120,width:"100%",marginBottom:-58,}}
                source={require('../../assets/one.jpg')}></Image>
                 <Image style={{height:100,width:"30%",marginBottom:-70,right:-285,bottom:50}}
                source={require('../../assets/women.jpg')}></Image>
      <List.Section>
       <List.Accordion
      style={{left:-50,width:"75%"}}
        title="WOMEN"
        left={props => <List.Icon {...props} />}
        onPress={handlePress}>
      
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
          <Image
          style={{width:"100%",height:100,marginBottom:-48}}
          source={require('../../assets/two.jpg')}></Image>
          <Image
          style={{width:"35%",height:100,marginBottom:-78,left:270,bottom:50}}
          source={require('../../assets/men.jpg')}></Image>
      <List.Section >
      <List.Accordion
      style={{left:-50,width:"75%"}}
        title="MEN"
        left={props => <List.Icon {...props} />}  
        onPress={handlePress}>
        <List.Item title="Topwear"         onPress={() => Alert.alert('Topwear')}/>
        <List.Accordion
title="Sports&Activewear" 
        left={props => <List.Icon {...props} />}
        onPress={handlePress}>
      <List.Item title="Sports Apparel"/>
      <List.Item title="Sports Shoes"/>
      <List.Item title="Sports Sandals"/>
      <List.Item title="Sports Accessories"/>
</List.Accordion>
        <List.Item title="Footwear"        onPress={() => Alert.alert('You are in the category of Men')} />
        <List.Accordion
title="Sports&Activewear" 
        left={props => <List.Icon {...props} />}
        onPress={handlePress}>
      <List.Item title="Sports Apparel"/>
      <List.Item title="Sports Shoes"/>
      <List.Item title="Sports Sandals"/>
      <List.Item title="Sports Accessories"/>
</List.Accordion>
        <List.Item title="Bottomwear" onPress={() => Alert.alert('You are in the category of Men')}/>
        <List.Accordion
title="Sports&Activewear" 
        left={props => <List.Icon {...props} />}
        onPress={handlePress}>
      <List.Item title="Sports Apparel"/>
      <List.Item title="Sports Shoes"/>
      <List.Item title="Sports Sandals"/>
      <List.Item title="Sports Accessories"/>
</List.Accordion>
        <List.Item title="Watches" onPress={() =>Alert.alert('You are in the category of Men')}/>
        <List.Accordion
title="Sports&Activewear" 
        left={props => <List.Icon {...props} />}
        onPress={handlePress}>
      <List.Item title="Sports Apparel"/>
      <List.Item title="Sports Shoes"/>
      <List.Item title="Sports Sandals"/>
      <List.Item title="Sports Accessories"/>
</List.Accordion>
        <List.Item title="Other Accessories" onPress={() => Alert.alert('You are in the category of Men')}/>
        <List.Accordion
title="Sports&Activewear" 
        left={props => <List.Icon {...props} />}
        onPress={handlePress}>
      <List.Item title="Sports Apparel"/>
      <List.Item title="Sports Shoes"/>
      <List.Item title="Sports Sandals"/>
      <List.Item title="Sports Accessories"/>
</List.Accordion>
        <List.Item title="Innerwear" onPress={() => Alert.alert('You are in the category of Men')}/>
        <List.Item title="Ethnicewear" onPress={() => Alert.alert('You are in the category of Men')}/>
        <List.Item title="Sports&Activewear" onPress={() => Alert.alert('You are in the category of Men')}/>
        <List.Item title="Ethnicwear" onPress={() => Alert.alert('You are in the category of Men')}/>
        <List.Item title="Personal Care" onPress={() => Alert.alert('You are in the category of Men')}/>
        <List.Item title="Gift Card"onPress={() => Alert.alert('You are in the category of Men')} />
      </List.Accordion>
</List.Section>
      <View>
      <List.Section >
      <Image
          style={{width:"100%",height:100,marginBottom:-48}}
          source={require('../../assets/three.jpg')}></Image>
          <Image
          style={{width:"35%",height:100,marginBottom:-65,left:270,bottom:50}}
          source={require('../../assets/kids.jpg')}></Image>
      <List.Accordion
      style={{left:-50,width:"75%"}}
        title="KIDS"
        left={props => <List.Icon {...props} />}  
        onPress={handlePress}>
        <List.Item title="Topwear" style={{color:"#ECEC22"}} onPress={() => navigation.openDrawer()}/>
        <List.Item title="Footwear" style={{color:"red"}} onPress={() => navigation.openDrawer()}/>
        <List.Item title="Footwear" style={{color:"red"}}onPress={() => navigation.openDrawer()}/>
        <List.Item title="Lingerie" style={{color:"red"}} onPress={() => navigation.closeDrawer()}/>
        <List.Item title="Bags, Wallets&Clutches"style={{color:"red"}} onPress={() => navigation.openDrawer()}/>
        <List.Item title="Jewellery" style={{color:"red"}}onPress={() => navigation.openDrawer()} />
        <List.Item title="Other Accessories" style={{color:"red"}}onPress={() => navigation.openDrawer()}/>
        <List.Item title="Sports&Activewear" style={{color:"red"}}onPress={() => navigation.openDrawer()} />
        <List.Item title="Watches" style={{color:"red"}}onPress={() => navigation.openDrawer()}/>
        <List.Item title="Myntra Stylecast" style={{color:"red"}}onPress={() => navigation.openDrawer()}/>
        <List.Item title="Gift Card" style={{color:"red"}}onPress={() => navigation.openDrawer()}/>
      </List.Accordion>
</List.Section>
       
      </View>  
      <View>
      <Image
          style={{width:"100%",height:100,marginBottom:-48}}
          source={require('../../assets/four.jpg')}></Image>
          <Image
          style={{width:"35%",height:100,marginBottom:-65,left:270,bottom:50}}
          source={require('../../assets/cosmetics.jpg')}></Image>
      <List.Section >
      <List.Accordion
            style={{left:-50,width:"75%"}}
        title="BEAUTY&PERSONAL CARE "
        left={props => <List.Icon {...props} />} 
        onPress={handlePress}>
        <List.Item title="Topwear" onPress={() => Alert.alert('You are in the category of Men')}/>
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
      <Image
          style={{width:"100%",height:100,marginBottom:-48}}
          source={require('../../assets/five.jpg')}></Image>
          <Image
          style={{width:"35%",height:100,marginBottom:-65,left:270,bottom:50}}
          source={require('../../assets/living.jpg')}></Image>
      <List.Section >
      <List.Accordion
                  style={{left:-50,width:"75%"}}
        title="HOME&LIVING"
        left={props => <List.Icon {...props} />} 
        onPress={handlePress}>
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
      <Image
          style={{width:"100%",height:100,marginBottom:-48}}
          source={require('../../assets/six.jpg')}></Image>
          <Image
          style={{width:"35%",height:100,marginBottom:-65,left:270,bottom:50}}
          source={require('../../assets/gadgets.jpg')}></Image>
      <List.Section >
      <List.Accordion
                        style={{left:-50,width:"75%"}}
        title="GADGETS"
        left={props => <List.Icon {...props} />} 
        onPress={handlePress}>
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
      <Image
          style={{width:"100%",height:100,marginBottom:-48}}
          source={require('../../assets/seven.jpg')}></Image>
          <Image
          style={{width:"35%",height:100,marginBottom:-65,left:270,bottom:50}}
          source={require('../../assets/couple1.jpg')}></Image>
      <List.Section >
      <List.Accordion
                              style={{left:-50,width:"75%"}}
        title="PLUS SIZE"
        left={props => <List.Icon {...props} />} 
        onPress={handlePress}>
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
      <Image
          style={{width:"100%",height:100,marginBottom:-48}}
          source={require('../../assets/eight.jpg')}></Image>
          <Image
          style={{width:"35%",height:100,marginBottom:-65,left:270,bottom:50}}
          source={require('../../assets/couple2.jpg')}></Image>
      <List.Section >
      <List.Accordion
                              style={{left:-50,width:"75%"}}
        title="THEME STORE"
        left={props => <List.Icon {...props}  />} 
        onPress={handlePress}>
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
     <Image
          style={{width:"100%",height:100,marginBottom:-48}}
          source={require('../../assets/nine.jpg')}></Image>
          <Image
          style={{width:"35%",height:100,marginBottom:-65,left:270,bottom:50}}
          source={require('../../assets/mall.jpg')}></Image>
     <List.Section >
      <List.Accordion
                                 transparent={true}
                         style={{left:-50,width:"75%"}}
        title="MYNTRA MALL"
        left={props => <List.Icon {...props}  />} 
        onPress={handlePress}>
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