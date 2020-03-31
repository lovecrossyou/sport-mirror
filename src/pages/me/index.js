import React, {Component} from 'react';
import {Text, View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {setSpText} from '@/util/screen';
import MeItemHeader from './components/me-item-header';
const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.header_title}>ME</Text>
    </View>
  );
};
export default class Me extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <ScrollView
          style={styles.container_scroll}
          contentContainerStyle={styles.container_scroll}>
            <MeItemHeader />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
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
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  container_scroll: {
    flex: 1,
    width: '100%',
    backgroundColor:'#f5f5f5'
  },
  tabBarUnderlineStyle: {
    width: 50,
    alignItems: 'center',
    color: '#000',
  },
  textStyle: {
    fontSize: 40,
  },
});
