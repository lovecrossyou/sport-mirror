import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {scaleSizeW, scaleSizeH, setSpText} from '@/util/screen';
import icon_me_arrow from '@/assets/me/icon_me_arrow.png';

const styles = StyleSheet.create({
  header: {
    height: scaleSizeH(160),
    width: '100%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: scaleSizeW(38),
    paddingRight: scaleSizeW(38),
    marginTop: scaleSizeH(30),
    marginBottom: scaleSizeH(30),
  },
  header_s: {
    height: scaleSizeH(120),
    width: '100%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: scaleSizeW(38),
    paddingRight: scaleSizeW(38),
    borderBottomColor: '#EEEEEE',
    borderBottomWidth: scaleSizeH(1),
  },
  avatar: {
    fontSize: setSpText(32),
    color: '#131313',
  },
  header_right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrow: {
    width: scaleSizeW(15),
    height: scaleSizeH(27),
    marginLeft: scaleSizeW(25),
  },
  avatar_icon: {
    width: scaleSizeW(120),
    height: scaleSizeH(120),
    borderRadius: scaleSizeH(60),
  },
  desc: {
    fontSize: setSpText(32),
    color: '#777777',
  },
});

export const ProfileHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.avatar}>Avatar</Text>
      <View style={styles.header_right}>
        <Image style={styles.avatar_icon} />
        <Image source={icon_me_arrow} style={styles.arrow} />
      </View>
    </View>
  );
};

export const ProfileItem = ({title, desc}) => {
  return (
    <View style={styles.header_s}>
      <Text style={styles.avatar}>{title}</Text>
      <View style={styles.header_right}>
        <Text style={styles.desc}>{desc}</Text>
        <Image source={icon_me_arrow} style={styles.arrow} />
      </View>
    </View>
  );
};
