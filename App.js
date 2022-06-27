import {StyleSheet, Text, View, LogBox} from 'react-native';
import StackNavigator from './scr/navigation/StackNavigator';
import SplashScreen from './scr/components/SplashScreen';
import BottomTabNavigator from './scr/navigation/BottomTabNavigator';

import React from 'react';
import {Provider} from 'react-redux';

import 'react-native-gesture-handler';
import store from './scr/redux/store';

import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
LogBox.ignoreAllLogs();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;


