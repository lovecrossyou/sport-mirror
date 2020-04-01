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
import icon_me_arrow from '@/assets/me/icon_me_arrow.png';
export default withNavigation(props => {
  return (
    <TouchableWithoutFeedback
      onPress={() => props.navigation.navigate('Profile')}>
      <View style={styles.item}>
        <View style={styles.item_left}>
          <Image
            style={styles.avator}
            resizeMode="center"
            source={{
              uri:
                'http://b-ssl.duitang.com/uploads/item/201509/30/20150930140213_ZCFSr.jpeg',
            }}
          />
          <View style={styles.center}>
            <Text style={styles.text_name}>Kevin</Text>
            <Text style={styles.text_info}>Kevin.zhang@wizsolu.com</Text>
          </View>
        </View>
        <Image source={icon_me_arrow} style={styles.arrow} />
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
  arrow: {
    width: scaleSizeW(15),
    height: scaleSizeH(27),
  },
});
