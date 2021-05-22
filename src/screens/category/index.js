import React from 'react';
import { View, Text, Button } from 'react-native';
const Category = ({navigation}) => {
       
return(
    <View> 
        <Button
        title="Women" 
        onPress={ ()=> navigation.navigate('WomenStack')}/>
        </View>
    );
}

export default Category;