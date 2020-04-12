import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import {scaleSizeW, scaleSizeH, setSpText} from '@/util/screen';
import {withNavigation} from 'react-navigation';

import icon_classes_collction_filled from '@/assets/schedule/icon_classes_collction_filled.png';
import icon_classes_collction_unfilled from '@/assets/schedule/icon_classes_collction_unfilled.png';


export default withNavigation(props => {
  let {item} = props;
  return (
    <TouchableWithoutFeedback
      onPress={() => props.navigation.navigate('scheduleDetail')}>
      <View style={styles.item_container}>
        <Image
          style={styles.img_big}
          resizeMode="cover"
          source={{
            uri: item.img,
          }}
        />
        <Text numberOfLines={2} style={styles.content_text}>
          1,2 or 3 my loves....? Which is your favourrite?...
        </Text>
        <View style={styles.item_bottom}>
          <View style={styles.item_bottom_left}>
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={{
                uri:
                  'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1669203444,3590376251&fm=26&gp=0.jpg',
              }}
            />
            <Text style={styles.name_text}>tian hj</Text>
          </View>
          <View style={styles.item_bottom_right}>
            <Image
              style={styles.img_favour}
              resizeMode="cover"
              source={icon_classes_collction_filled}
            />
            <Text style={styles.favour_text}>24</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
});

const styles = StyleSheet.create({
  item_container: {
    flex: 1,
    borderRadius: scaleSizeW(10),
    overflow: 'hidden',
    paddingBottom: scaleSizeH(30),
    backgroundColor: '#fff',
  },
  item: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scaleSizeW(55),
    paddingVertical: scaleSizeH(17),
    alignItems: 'center',
  },
  item_space: {
    width: '100%',
    height: scaleSizeH(33),
  },
  img_big: {
    width: '100%',
    height: scaleSizeH(337),
  },
  content_text: {
    marginTop: scaleSizeH(38),
    color: '#333',
    fontSize: setSpText(27),
    fontWeight: '400',
    paddingHorizontal: scaleSizeW(13),
    marginBottom: scaleSizeH(19),
  },
  icon: {
    width: scaleSizeW(40),
    height: scaleSizeW(40),
    borderRadius: scaleSizeW(20),
  },
  img_favour: {
    width: scaleSizeW(27),
    height: scaleSizeW(25),
    borderRadius: scaleSizeW(20),
  },
  name_text: {
    color: '#666666',
    fontSize: setSpText(21),
    fontWeight: '400',
    marginLeft: scaleSizeW(11),
  },

  favour_text: {
    color: '#666666',
    fontSize: setSpText(24),
    fontWeight: '400',
    marginLeft: scaleSizeW(11),
  },
  item_bottom: {
    flexDirection: "row",
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  item_bottom_left:{
    flexDirection: "row",
    width: '50%',
    alignItems: 'center',
    paddingHorizontal: scaleSizeW(13),
  },
  item_bottom_right:{
    flexDirection: "row",
    width: '50%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: scaleSizeW(13),
  }
});
