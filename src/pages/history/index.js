import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Tiltle from '@/pages/components/title';
import WeekPanel from './components/week';
import Summary from './components/summary';

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <Tiltle name="WEEKLY GOAL"></Tiltle>
      <WeekPanel />

      <Tiltle name="WEEKLY SUMMARY"></Tiltle>
      <Summary />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});