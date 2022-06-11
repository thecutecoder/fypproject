import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../components/CustomDrawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import BookingHistoryScreen from '../screens/BookingHistoryScreen';
import ContactUsScreen from '../screens/ContactUsScreen';

// Import Custom Sidebar


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


//Home
const FirstScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="HomePage">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home', //Set Header Title
          headerLeft: () => (
           <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
           backgroundColor: '#ACEAE9', //Set Header color
          },
          headerTintColor: '#000000', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

//Profile
const SecondScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="ProfilePage">
       <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile', //Set Header Title
          headerLeft: () => (
           <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
           backgroundColor: '#ACEAE9', //Set Header color
          },
          headerTintColor: '#000000', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

//Booking History
const ThirdScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="BookingHistoryPage">
      <Stack.Screen
        name="Booking History"
        component={BookingHistoryScreen}
        options={{
          title: 'Booking History', //Set Header Title
          headerLeft: () => (
           <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
           backgroundColor: '#ACEAE9', //Set Header color
          },
          headerTintColor: '#000000', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

//Contact Us
const FourthScreenStack = ({ navigation }) => {
    return (
      <Stack.Navigator initialRouteName="ContactUsPage">
        <Stack.Screen
        name="Contact Us"
        component={ContactUsScreen}
        options={{
          title: 'Contact Us', //Set Header Title
          headerLeft: () => (
           <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
           backgroundColor: '#ACEAE9', //Set Header color
          },
          headerTintColor: '#000000', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      /> 
      </Stack.Navigator>
    );
  }

  //call
  const DrawerNavigator = () => {
    return (
      <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#aa18ea',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: 'Roboto-Medium',
          fontSize: 15,
        },
      }}>
        <Drawer.Screen
          name="Home"
          options={{
            drawerIcon: ({color}) => (
              <Ionicons name="home-outline" size={22} color={color} />
            ),
          }}
          component={FirstScreenStack}
        />
        <Drawer.Screen
          name="Profile"
          options={{
            drawerIcon: ({color}) => (
              <Ionicons name="person-outline" size={22} color={color} />
            ),
          }}
          component={SecondScreenStack}
        />
        <Drawer.Screen
          name="Booking History"
          options={{
            drawerIcon: ({color}) => (
              <Ionicons name="timer-outline" size={22} color={color} />
            ),
          }}
          component={ThirdScreenStack}
        />
        <Drawer.Screen
          name="Contact Us"
          options={{ drawerIcon: () => (<Ionicons name="call-outline" size={30}></Ionicons>) }}
          component={FourthScreenStack}
        />
      </Drawer.Navigator>
    );
  };


export default DrawerNavigator;