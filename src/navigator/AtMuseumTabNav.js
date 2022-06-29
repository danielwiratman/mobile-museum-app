import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ScanQRScreen from '../screens/ScanQRScreen';
import TourScreen from '../screens/TourScreen';
import SearchScreen from '../screens/SearchScreen';

const AtMuseumTabNav = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator initialRouteName="ScanQR">
      <Tab.Screen
        name="ScanQR"
        component={ScanQRScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Tour"
        component={TourScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default AtMuseumTabNav;
