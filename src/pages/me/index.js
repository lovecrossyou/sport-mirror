import React, {Component} from 'react';
import {Text, View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {setSpText} from '@/util/screen';
import MeItemHeader from './components/me-item-header';
import {
  MeItemNormal,
  MeItemSpace,
  MeItemLine,
  MeItemNormalRight,
} from './components/me-item-normal';
import icon_me_bluetooth from '@/assets/me/icon_me_bluetooth.png';
import icon_me_heart_rate from '@/assets/me/icon_me_heart_rate.png';
import icon_me_household_members from '@/assets/me/icon_me_household-members.png';
import icon_me_mirror from '@/assets/me/icon_me_mirror.png';
import icon_me_reset from '@/assets/me/icon_me_reset.png';
import icon_me_support from '@/assets/me/icon_me_support.png';
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
          <MeItemSpace />
          <MeItemNormal title="MIRROR CONNECTED" icon={icon_me_mirror} />
          <MeItemLine />
          <MeItemNormalRight
            leftIcon={icon_me_heart_rate}
            rightIcon={icon_me_bluetooth}
            title="CONNECT TO HEART RATE"
            itemCallBack={() => {
              console.log('CONNECT TO HEART RATE');
            }}
          />
          <MeItemSpace />
          <MeItemNormal
            title="HOUSEHOLD MEMBERS"
            icon={icon_me_household_members}
            isShowArrow={true}
            itemCallBack={() => {
              console.log('HOUSEHOLD MEMBERS');
            }}
          />
          <MeItemSpace />
          <MeItemNormal
            title="RESET MIRROR"
            icon={icon_me_reset}
            isShowArrow={true}
            itemCallBack={() => {
              console.log('RESET MIRROR');
            }}
          />
          <MeItemLine />
          <MeItemNormal
            title="SUPPORT & FAQS"
            icon={icon_me_support}
            isShowArrow={true}
            itemCallBack={() => {
              console.log('SUPPORT & FAQS');
            }}
          />
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
    backgroundColor: '#f5f5f5',
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
