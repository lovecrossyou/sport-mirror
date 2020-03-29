import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
    ScrollView
} from 'react-native';
import Tiltle from '@/pages/components/title';
import WeekPanel from './components/week';
import Summary from './components/summary';
import Daily from './components/daily';
export default () => {
  return (
    <SafeAreaView style={styles.container}>
        <Tiltle name="WEEKLY GOAL"></Tiltle>
        <WeekPanel />

       <ScrollView alwaysBounceHorizontal={false}>
           <Tiltle name="WEEKLY SUMMARY"></Tiltle>
           <Summary />

           <Tiltle name="DAILY SUMMARY"></Tiltle>
           <Daily />
       </ScrollView>
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
