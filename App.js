import React from 'react';
import { View, Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigation from './src/navigation/bottomTabNavigation';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';  
import Home from './src/screens/home';
import Category from './src/screens/category';
import StudioStack from './src/screens/studioScreen';
import Explore from './src/screens/explore';
import Profile from './src/navigation/profileStack';
import ProfileStack from './src/navigation/bottomTabNavigation';
import ExploreStack from './src/navigation/exploreStack';
import CategoryStack from './src/navigation/categoryStack';
import QuestionStack from './src/screens/Profile/FAQStack';
import ModalStack from './src/screens/Profile/modalStack';
import PolicyStack from './src/screens/Profile/policyStack';

const HomeStack = createDrawerNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({navigation})=>(
    <HomeStack.Navigator>
        <HomeStack.Screen name="Profile" component={ProfileStack}  options={{
            title:"Home"
        }} />
    </HomeStack.Navigator>
);



const App = () => {
    return (
      <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={ProfileStack} options={{
            title:"Home"
            }} />
                    <Drawer.Screen name="Categories" component={CategoryStack} options={{ title:"Shop By Categories"}}/>
        <Drawer.Screen name="Orders" component={ModalStack} options={{ title:"Orders"}}/>
        <Drawer.Screen name="CONTACT US" component={ModalStack} />
        <Drawer.Screen name="FAQs" component={QuestionStack} />
        <Drawer.Screen name="LEGAL" component={PolicyStack} />

      </Drawer.Navigator>
       </NavigationContainer>

    );
}


export default App;
