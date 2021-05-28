import React from 'react';
import { View, Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigation from './src/navigation/bottomTabNavigation';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';  
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

const HomeStack = createDrawerNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({navigation})=>(
    <HomeStack.Navigator>
        <HomeStack.Screen name="Profile" component={ProfileStack}  options={{
            title:"Home", headerLeft:()=>(
                <Icon.Button name="menu" size={25} backgroundColor="black" onPress={() =>navigation.openDrawer()}></Icon.Button>
            )}
        } />
    </HomeStack.Navigator>
);



const App = () => {
    return (
      <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={ProfileStack} options={{
            title:"Home", headerLeft:()=>(
                <Icon.Button name="gear" size={25} backgroundColor="#fff" onPress={() =>navigation.openDrawer()}></Icon.Button>
            )}}/>
                    <Drawer.Screen name="Categories" component={CategoryStack} options={{ title:"Shop By Categories", headerLeft:()=>(
                <Icon.Button name="gear" size={25} backgroundColor="#fff" onPress={() =>navigation.openDrawer()}></Icon.Button>)}}/>
        <Drawer.Screen name="Orders" component={ExploreStack} options={{ title:"Orders"}}/>
        <Drawer.Screen name="FAQs" component={QuestionStack} />
        <Drawer.Screen name="CONTACT US" component={ModalStack} />
        <Drawer.Screen name="LEGAL" component={ModalStack} />

      </Drawer.Navigator>
       </NavigationContainer>

    );
}


export default App;
