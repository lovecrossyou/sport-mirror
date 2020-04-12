import React from 'react';

import {
  Text,
  View,
  StyleSheet,
  Button,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  ListView,
} from 'react-native';
import {FlatGrid, SectionGrid} from 'react-native-super-grid';
import {setSpText, scaleSizeH, scaleSizeW} from '@/util/screen';
import CommunityItem from './components/community-item';
const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.header_title}>COMMUNITY</Text>
    </View>
  );
};
export default ({navigation}) => {
  const items = [
    {
      name: 'Jeremia  H',
      img:
        'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3325841760,4040433201&fm=26&gp=0.jpg',
      content: '1,2 or 3 my loves....? Which is your favourrite?...',
      favour: '24',
    },
    {
      name: 'Jeremia  H',
      img:
        'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2130092430,1168771805&fm=26&gp=0.jpg',
      content: '1,2 or 3 my loves....? Which is your favourrite?...',
      favour: '24',
    },
    {
      name: 'Jeremia  H',
      img:
        'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4007209800,4183924377&fm=26&gp=0.jpg',
      content: '1,2 or 3 my loves....? Which is your favourrite?...',
      favour: '24',
    },
    {
      name: 'Jeremia  H',
      img:
        'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=181982106,3716713222&fm=26&gp=0.jpg',
      content: '1,2 or 3 my loves....? Which is your favourrite?...',
      favour: '24',
    },
    {
      name: 'Jeremia  H',
      img:
        'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3958441844,1531175389&fm=26&gp=0.jpg',
      content: '1,2 or 3 my loves....? Which is your favourrite?...',
      favour: '24',
    },
    {
      name: 'Jeremia  H',
      img:
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2100259434,4068706036&fm=26&gp=0.jpg',
      content: '1,2 or 3 my loves....? Which is your favourrite?...',
      favour: '24',
    },
    {
      name: 'Jeremia  H',
      img:
        'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2185145979,3001668660&fm=26&gp=0.jpg',
      content: '1,2 or 3 my loves....? Which is your favourrite?...',
      favour: '24',
    },
    {
      name: 'Jeremia  H',
      img:
        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3561132400,2643688033&fm=26&gp=0.jpg',
      content: '1,2 or 3 my loves....? Which is your favourrite?...',
      favour: '24',
    },
  ];
  return (
    <SafeAreaView style={styles.container_safe}>
      <View style={styles.container}>
        <Header />
        <FlatGrid
          itemDimension={130}
          items={items}
          style={styles.gridView}
          // staticDimension={300}
          // fixed
          // spacing={20}
          renderItem={({item, index}) => <CommunityItem item={item} />}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container_safe: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
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
  gridView: {
    marginTop: 0,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: scaleSizeW(17),
    height: scaleSizeH(520),
    backgroundColor: '#ffffff',
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});
