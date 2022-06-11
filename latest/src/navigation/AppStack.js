import React, { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from '../navigation/DrawerNavigator';

import LoginUserScreen from '../screens/LoginUserScreen';
import SignUpUserScreen from '../screens/SignUpUserScreen';
import RoomDetailsScreen from '../screens/RoomDetailsScreen';
import UpdateProfileScreen from '../screens/UpdateProfileScreen';
import CreateBookingScreen from '../screens/UpdateProfileScreen';

import {auth, database} from "../database/firebase";
import "firebase/firestore";
import * as firebase from 'firebase';

const Stack = createStackNavigator();


const AppStack = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  auth.onAuthStateChanged((user) => {
    if (user != null) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false);
    }
  });

  return (
    <NavigationContainer>
    
      {isLoggedIn ? 
          <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} options={{ headerShown: false}}/>
          
        :
        
        <React.Fragment> 
          <Stack.Screen
            name="Login" 
            component={LoginUserScreen} 
          />

          <Stack.Screen
            name="Sign Up" 
            component={SignUpUserScreen}
          />

          <Stack.Screen
            name="Room Details" 
            component={RoomDetailsScreen} 
          />

          <Stack.Screen
            name="Update Profile" 
            component={UpdateProfileScreen} 
          />

          <Stack.Screen
            name="Create Booking" 
            component={CreateBookingScreen} 
          />
         </React.Fragment> 
      }
     
    </NavigationContainer>
  
  );
}

export default AppStack;
