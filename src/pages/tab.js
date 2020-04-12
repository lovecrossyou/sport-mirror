import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import wallet_icon from '@/images/tab/tab_icon_wallet_s.png';
import wallet_icon_d from '@/images/tab/tab_icon_wallet_d.png';

import transaction_icon from '@/images/tab/tab_icon_transactions_s.png';
import transaction_icon_d from '@/images/tab/tab_icon_transactions_d.png';

import budget_icon from '@/images/tab/tab_icon_budgets_s.png';
import budget_icon_d from '@/images/tab/tab_icon_budgets_d.png';

import more_icon from '@/images/tab/tab_icon_more_s.png';
import more_icon_d from '@/images/tab/tab_icon_more_d.png';

import {scaleSizeW, scaleSizeH} from '@/util/screen';

import Workout from '@/pages/workout';
import Schedule from '@/pages/schedule';
import History from '@/pages/history';
import Me from '@/pages/me';
import Community from '@/pages/community';

export default createMaterialBottomTabNavigator(
  {
    Workout: {
      screen: Workout,
      navigationOptions: {
        tabBarLabel: 'Workout',
        tabBarIcon: ({focused, tintColor}) =>
          focused ? (
            <Image
              resizeMode="contain"
              style={styles.icon_wallet}
              source={wallet_icon}
            />
          ) : (
            <Image
              resizeMode="contain"
              style={styles.icon_wallet}
              source={wallet_icon_d}
            />
          ),
      },
      tabBarOptions: {
        activeTintColor: '#e91e63',
        labelStyle: {
          fontSize: 12,
        },
        style: {
          backgroundColor: 'blue',
        },
      },
    },
    Schedule: {
      screen: Schedule,
      navigationOptions: {
        tabBarLabel: 'Schedule',
        tabBarIcon: ({focused, tintColor}) =>
          focused ? (
            <Image style={styles.icon_wallet} source={transaction_icon} />
          ) : (
            <Image style={styles.icon_wallet} source={transaction_icon_d} />
          ),
      },
    },
    History: {
      screen: History,
      navigationOptions: {
        tabBarLabel: 'History',
        tabBarIcon: ({focused, tintColor}) =>
          focused ? (
            <Image
              resizeMode="contain"
              style={styles.icon_wallet}
              source={budget_icon}
            />
          ) : (
            <Image
              resizeMode="contain"
              style={styles.icon_wallet}
              source={budget_icon_d}
            />
          ),
      },
    },
    Community: {
      screen: Community,
      navigationOptions: {
        tabBarLabel: 'Community',
        tabBarIcon: ({focused, tintColor}) =>
          focused ? (
            <Image
              resizeMode="contain"
              style={styles.icon_wallet}
              source={budget_icon}
            />
          ) : (
            <Image
              resizeMode="contain"
              style={styles.icon_wallet}
              source={budget_icon_d}
            />
          ),
      },
    },
    Me: {
      screen: Me,
      navigationOptions: {
        tabBarLabel: 'Me',
        tabBarIcon: ({focused, tintColor}) =>
          focused ? (
            <Image
              resizeMode="contain"
              style={styles.icon_wallet}
              source={more_icon}
            />
          ) : (
            <Image
              resizeMode="contain"
              style={styles.icon_wallet}
              source={more_icon_d}
            />
          ),
      },
    },
  },
  {
    tabBarComponent: () => null,
    activeColor: '#376BD1',
    inactiveColor: '#BABABA',
    initialRouteName:'Community',
    shifting: false,
    barStyle: {
      backgroundColor: '#fff',
    },
  },
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  icon_wallet: {
    width: scaleSizeW(36),
    height: scaleSizeH(36),
  },
});
