import React, { useState } from "react";
import { View, Text, Picker, Image} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";


const Category = ({navigation}) => {
    const [selectedValue, setSelectedValue] = useState("java");

    return(
        <ScrollView>
        <View >
            <View>
                <Image
                source={require('../../assets/women.jpg')}></Image>
        <Picker
        selectedValue={selectedValue}
        style={{ height: 60, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Women" value="java" />
        <Picker.Item label="Westernwear" value="js" />
        <Picker.Item label="Ethnic & Fusionwear" value="js" />
        <Picker.Item label="Footwear" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />

      </Picker>
      </View>
      <View>
          <Image
          source={require('../../assets/men.jpg')}></Image>
       <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Men" value="java" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />

      </Picker>
      </View>  
      <View>
          <Image
          style={{width:"100%"}}
          source={require('../../assets/kids.jpg')}></Image>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Kids" value="java" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />

      </Picker>
      </View>  
      <View>
          <Image
          source={require('../../assets/cosmetics.jpg')}></Image>
       <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Beauty&Personal Care" value="java" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />

      </Picker>
      </View>  
      <View>
          <Image
          source={require('../../assets/living.jpg')}></Image>
       <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="HOME&LIVING" value="java" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />

      </Picker>
      </View>  
      <View>
          <Image
          style={{width:"100%"}}
          source={require('../../assets/gadgets.jpg')}></Image>
       <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 250,fontStyle:"italic" }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="GADGETS" value="java" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
      </View>  
      </View>  
</ScrollView>
    );
}

export default Category;