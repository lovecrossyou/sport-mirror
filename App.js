/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState, Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';
import { AppRegistry } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Tab from '@/pages/tab';
import Login from '@/pages/login';

let AppNavigator = createStackNavigator(
  {
    Tab: {
      screen: Tab,
      navigationOptions: ({ navigation }) => ({
        headerShown: false,
      }),
    },
    Login: {
      screen: Login,
      navigationOptions: ({ navigation }) => ({
        headerShown: false,
      }),
    },
  },
  {
    initialRouteName: 'Tab',
    defaultNavigationOptions: {
      gestureEnabled: true,
      headerBackTitleVisible: false
    },
  },
);

AppNavigator = createAppContainer(AppNavigator);

class App extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}
AppRegistry.registerComponent('AwesomeProject', () => App);
