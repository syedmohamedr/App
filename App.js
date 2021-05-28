import React from 'react';
import { View, Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigation from './src/navigation/bottomTabNavigation';

const App = () => {
    return (
      <NavigationContainer>
           <BottomTabNavigation />
       </NavigationContainer>

    );
}

export default App;