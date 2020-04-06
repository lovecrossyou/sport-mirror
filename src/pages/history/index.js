/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import Tiltle from '@/pages/components/title';
import WeekPanel from './components/week';
import Summary from './components/summary';
import Daily from './components/daily';
import {setSpText} from '@/util/screen';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.header_title}>HISTORY</Text>
    </View>
  );
};
export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Tiltle name="WEEKLY GOAL" />
      <WeekPanel />

      <ScrollView alwaysBounceHorizontal={false} style={{width: '100%'}}>
        <Tiltle name="WEEKLY SUMMARY" />
        <Summary />

        <Tiltle name="DAILY SUMMARY" />
        <Daily />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    width: '100%',
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: '#EEEEEE',
    backgroundColor: '#FFFFFF',
  },
  header_title: {
    fontSize: setSpText(32),
    color: '#000000',
    fontWeight: '600',
  },
});
