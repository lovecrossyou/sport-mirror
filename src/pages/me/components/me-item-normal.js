import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import {scaleSizeW, scaleSizeH, setSpText} from '@/util/screen';
import icon_me_arrow from '@/assets/me/icon_me_arrow.png';

const getArrow = isShowArrow => {
  if (isShowArrow === true) {
    return <Image source={icon_me_arrow} style={styles.arrow} />;
  } else {
    return <Text />;
  }
};
export const MeItemSpace = () => {
  return <View style={styles.item_space} />;
};
export const MeItemLine = () => {
  return <View style={styles.item_Line} />;
};

export const MeItemNormal = ({icon, title, isShowArrow, itemCallBack}) => {
  return (
    <TouchableWithoutFeedback onPress={() => itemCallBack}>
      <View style={styles.item}>
        <View style={styles.item_left}>
          <Image style={styles.icon} source={icon} />
          <Text style={styles.text_title}>{title}</Text>
        </View>
        {getArrow(isShowArrow)}
      </View>
    </TouchableWithoutFeedback>
  );
};
export const MeItemNormalRight = ({
  leftIcon,
  rightIcon,
  title,
  itemCallBack,
}) => {
  return (
    <TouchableWithoutFeedback onPress={() => itemCallBack}>
      <View style={styles.item}>
        <View style={styles.item_left}>
          <Image style={styles.icon} source={leftIcon} />
          <Text style={styles.text_title}>{title}</Text>
        </View>
        <View style={styles.item_right}>
          <Image style={styles.icon_right} source={rightIcon} />
          <Image source={icon_me_arrow} style={styles.arrow} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  item: {
    width: '100%',
    height: scaleSizeH(120),
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: scaleSizeW(40),
  },
  item_left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  item_right: {
    flexDirection: 'row',
    alignItems: 'center',
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
  text_title: {
    fontSize: setSpText(24),
    color: '#333333',
    marginLeft: scaleSizeW(19),
    fontWeight: 'bold',
  },
  icon: {
    width: scaleSizeW(60),
    height: scaleSizeH(60),
  },
  icon_right: {
    width: scaleSizeW(48),
    height: scaleSizeW(48),
    marginRight: scaleSizeW(10),
  },
  arrow: {
    width: scaleSizeW(15),
    height: scaleSizeH(27),
  },
  item_space: {
    width: '100%',
    height: scaleSizeW(26),
    backgroundColor: '#0F000000',
  },
  item_Line: {
    width: '100%',
    height: scaleSizeW(1),
    backgroundColor: '#EEEEEE',
  },
});
