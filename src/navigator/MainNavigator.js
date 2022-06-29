import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AtMuseumTabNav from './AtMuseumTabNav';
import AtHomeTabNav from './AtHomeTabNav';

const MainNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AtMuseum"
          component={AtMuseumTabNav}
        />
        <Stack.Screen
          name="AtHome"
          component={AtHomeTabNav}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
