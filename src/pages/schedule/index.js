import React, {Component} from 'react';
import {Text, View, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import {width, setSpText, scaleSizeH} from '@/util/screen';
import ScheduleItem from './components/schedule-item';
const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.header_title}>SCHEDULE</Text>
    </View>
  );
};
export default class Schedule extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <FlatList
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          data={[{key: 'a'}, {key: 'b'}, {key: 'a'}, {key: 'b'}]}
          renderItem={({item}) => <ScheduleItem>{item.key}</ScheduleItem>}
        />
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
  separator: {
    width: width,
    height: scaleSizeH(26),
    backgroundColor: '#f5f5f5',
  },
});
