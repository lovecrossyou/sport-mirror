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
  Image,
} from 'react-native';
import { AppRegistry } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Tab from '@/pages/tab';
import Login from '@/pages/login';
import ScheduleDetail from '@/pages/schedule/detail';
import Profile from '@/pages/me/profile';
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
    scheduleDetail:{
      screen:ScheduleDetail,
      navigationOptions: ({ navigation }) => ({
        headerTitle:'STRENGTH',
      }),
    },
    Profile:{
      screen:Profile,
      navigationOptions: ({ navigation }) => ({
        headerTitle:'Profile',
      }),
    }
  },
  {
    initialRouteName: 'Tab',
    defaultNavigationOptions: {
      gestureEnabled: true,
      headerBackTitleVisible: false,
      headerStyle:{
        // backgroundColor: Theme.navColor,
        shadowColor: 'transparent',
        shadowOpacity: 0,
        borderBottomWidth: 0,
        borderBottomColor: 'transparent',
        elevation: 0,
      }
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
