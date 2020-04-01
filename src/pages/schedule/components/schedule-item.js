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
import schedule_time_bg from '@/assets/schedule/schedule_time_bg.png';
import icon_workouts_equipment_chair from '@/assets/schedule/icon_workouts_equipment_chair.png';
import icon_workouts_equipment_barbell from '@/assets/schedule/icon_workouts_equipment_barbell.png';

export default withNavigation(props => {
  return (
    <TouchableWithoutFeedback
      onPress={() => props.navigation.navigate('scheduleDetail')}>
      <View style={styles.item}>
        <View style={styles.item_left}>
          <Image
            style={styles.icon}
            resizeMode="contain"
            source={{
              uri:
                'http://img4.imgtn.bdimg.com/it/u=3120741922,82497462&fm=26&gp=0.jpg',
            }}
          />
          <TouchableWithoutFeedback onPress={() => {}}>
            <Text style={styles.text_encore}>encore</Text>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.item_right}>
          <View style={styles.time_background}>
            <Image
              resizeMode="center"
              style={styles.time_background_img}
              source={schedule_time_bg}
            />
            <Text style={styles.text_time}>12:00-12:45 PM</Text>
          </View>
          <Text style={styles.text_bold_name}>STRENGTH BEGINNER</Text>
          <Text style={styles.text_light_name}>GERREN</Text>
          <View style={styles.view_category} >
            <Image resizeMode="center"
              style={styles.img_category}
              source={icon_workouts_equipment_chair}/>
              <Image resizeMode="center"
              style={styles.img_category}
              source={icon_workouts_equipment_barbell}/>
          </View>
          <TouchableWithoutFeedback onPress={() => {}}>
            <Image  resizeMode="center"
              style={styles.img_praise}
              source={icon_classes_collction_filled}/>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
});

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scaleSizeW(55),
    paddingVertical: scaleSizeH(46),
    alignItems: 'center',
  },
  icon: {
    width: scaleSizeW(200),
    height: scaleSizeH(200),
  },
  text_encore: {
    marginTop: scaleSizeW(23),
    color: '#777777',
    textAlign: 'center',
    fontSize: setSpText(24),
    fontWeight: '600',
    width: scaleSizeW(140),
    height: scaleSizeW(47),
    lineHeight: scaleSizeW(35),
    borderRadius: scaleSizeW(23),
    borderColor: '#E5E5E5',
    borderWidth: scaleSizeW(2),
  },
  time_background: {
    width: scaleSizeW(221),
    height: scaleSizeW(40),
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  time_background_img: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  text_time: {
    color: '#FFFFFF',
    fontSize: setSpText(24),
    fontWeight: '500',
  },
  title: {
    fontSize: setSpText(32),
    color: '#000000',
    marginBottom: scaleSizeH(35),
    textAlign: 'right',
    fontWeight: 'bold',
  },
  text_bold_name: {
    fontSize: setSpText(32),
    color: '#000000',
    textAlign: 'right',
    marginTop: scaleSizeH(33),
    fontWeight: '600',
  },
  text_light_name: {
    fontSize: setSpText(24),
    color: '#777777',
    textAlign: 'right',
    marginTop: scaleSizeH(29),
    fontWeight: '600',
  },
  item_left: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  item_right: {
    flex: 1,
    height: '100%',
    marginLeft: 10,
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  items_icon: {
    width: scaleSizeW(44),
    height: scaleSizeH(44),
    marginLeft: scaleSizeW(10),
    marginTop: scaleSizeW(3),
  },
  img_praise: {
    width: scaleSizeW(44),
    height: scaleSizeH(40),
  },
  img_category: {
    width: scaleSizeW(60),
    height: scaleSizeH(60),
  },
  view_category: {
    flexDirection: 'row',
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
