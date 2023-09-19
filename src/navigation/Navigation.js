import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from '../screens/SplashScreen';
import NavigationString from '../constants/NavigationString';
import ItemByCategoryScreen from '../screens/itemsByCategoryScreen/ItemByCategoryScreen';
import Home from '../tabs/Home';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={NavigationString.SPLASH}
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={NavigationString.HOME}
          component={HomeScreen}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name={NavigationString.HOMETAB}
          component={Home}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name={NavigationString.ITEMBYCATEGORY}
          component={ItemByCategoryScreen}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
