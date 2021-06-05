import React from 'react';
import { View, Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigation from './src/navigation/bottomTabNavigation';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AntDesign from 'react-native-vector-icons/AntDesign';  
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
            title:"Home",headerLeft: () => (
                <AntDesign name="search1" size={40} width={60} height={60} color="black" backgroundColor="red" onPress={() => navigation.openDrawer()}></AntDesign>
            )
            }} />
                    <Drawer.Screen name="Categories" component={CategoryStack} options={{ title:"Shop By Categories",headerLeft: () => (
                <Icon.Button name="lens" size={40} width={60} height={60} color="black" backgroundColor="#fff" onPress={() => navigation.openDrawer()}></Icon.Button>
            )}}/>
        <Drawer.Screen name="Orders" component={ModalStack} options={{ title:"Orders",headerLeft: () => (
                <Icon.Button name="menu-unfold" size={40} width={60} height={60} color="black" backgroundColor="#fff" onPress={() => navigation.openDrawer()}></Icon.Button>
            )}}/>
        <Drawer.Screen name="CONTACT US" component={ModalStack} options={{headerLeft: () => (
                <Icon.Button name="menu-fold" size={40} width={60} height={60} color="black" backgroundColor="#fff" onPress={() => navigation.openDrawer()}></Icon.Button>
            )}} />
        <Drawer.Screen name="FAQs" component={QuestionStack} options={{headerLeft: () => (
                <Icon.Button name="search2" size={40} width={60} height={60} color="black" backgroundColor="#fff" onPress={() => navigation.openDrawer()}></Icon.Button>
            )}} />
        <Drawer.Screen name="LEGAL" component={PolicyStack} options={{headerLeft: () => (
                <Icon.Button name="youtube" size={40} width={60} height={60} color="black" backgroundColor="#fff" onPress={() => navigation.openDrawer()}></Icon.Button>
            )}}/>

      </Drawer.Navigator>
       </NavigationContainer>

    );
}


export default App;
