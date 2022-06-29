import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ArticlesScreen from '../screens/ArticlesScreen';
import MapScreen from '../screens/MapScreen';

const AtHomeTabNav = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator initialRouteName="Articles">
      <Tab.Screen
        name="Articles"
        component={ArticlesScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default AtHomeTabNav;
