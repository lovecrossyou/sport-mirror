import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  FlatList,
  SafeAreaView,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import {scaleSizeW, scaleSizeH, setSpText} from '@/util/screen';
import {withNavigation} from 'react-navigation';

export default withNavigation(props => {
  return (
    <TouchableWithoutFeedback
      onPress={() => props.navigation.navigate('scheduleDetail')}>
      <View style={styles.item}>
        <View style={styles.item_left} >
          <Image
            style={styles.avator}
            resizeMode="center"
            source={{
              uri:
                'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2754018954,2350021655&fm=26&gp=0.jpg',
            }}
          />
          <View style={styles.center}>
            <Text style={styles.text_name}>Kevin</Text>
            <Text style={styles.text_info}>Kevin.zhang@wizsolu.com</Text>
          </View>
          <Image />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
});

const styles = StyleSheet.create({
  item: {
    width: '100%',
    height: scaleSizeH(200),
    backgroundColor: '#ffffff',
    marginTop: scaleSizeH(33),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: scaleSizeW(40),
  },
  item_left: {
    flexDirection: 'row',
  },
  avator: {
    width: scaleSizeW(120),
    height: scaleSizeW(120),
    borderRadius: scaleSizeW(60),
  },
  center: {
    justifyContent: 'center',
    marginLeft: scaleSizeW(20),
  },
  text_info: {
    fontSize: setSpText(24),
    color: '#777777',
  },
  text_name: {
    fontSize: setSpText(32),
    color: '#000000',
  },
  items: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: scaleSizeH(35),
    // backgroundColor:'#e1e1e1'
  },
  items_icon: {
    width: scaleSizeW(44),
    height: scaleSizeH(44),
    marginLeft: scaleSizeW(10),
  },
  cost: {
    fontSize: setSpText(24),
    color: '#777777',
    textAlign: 'right',
    fontWeight: '500',
  },
  create: {
    fontSize: setSpText(24),
    color: '#999999',
    textAlign: 'right',
    marginBottom: scaleSizeH(35),
  },
});
