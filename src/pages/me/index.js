import React, {Component} from 'react';
import {Text, View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {setSpText} from '@/util/screen';
import MeItemHeader from './components/me-item-header';
import {
  MeItemNormal,
  MeItemSpace,
  MeItemLine,
  MeItemNormalRight,
  MeConnectMirrorView,
  MeItemNormalOnlyValue,
} from './components/me-item-normal';
import {BluetoothUnavailableModal} from './components/me-modal';
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
        <ScrollView style={styles.container_scroll}>
          <MeItemHeader />
          <MeItemSpace />
          {/* MIRROR */}
          <MeItemNormal title="MIRROR" icon={icon_me_mirror} />
          <MeItemLine />
          <MeConnectMirrorView
            title="CONNECT TO MIRROR"
            des="You’ll need to be the same WiFi network as the mirror  you want to connect to."
            itemCallBack={() => {
              console.log('CONNECT TO MIRROR');
              this.refs.bluetoothUnavailableModal.openModal();
            }}
          />
          <MeItemSpace />
          {/* HEART RATE */}
          <MeItemNormal title="HEART RATE" icon={icon_me_heart_rate} />
          <MeItemLine />
          <MeConnectMirrorView
            title="CONNECT MONITOR"
            des="Connect an apple watch or other Bluetooth Heart Rate Monitor to track your performance."
          />
          {/* MUSIC */}
          <MeItemSpace />
          <MeItemNormalRight
            leftIcon={icon_me_heart_rate}
            rightText="Mirror Music"
            title="MUSIC"
            itemCallBack={() => {
              console.log('CONNECT TO HEART RATE');
            }}
          />
          {/* AUDIO */}
          <MeItemLine />
          <MeItemNormalRight
            leftIcon={icon_me_heart_rate}
            rightText="Mirror Speakers"
            title="AUDIO"
            itemCallBack={() => {
              console.log('CONNECT TO HEART RATE');
            }}
          />
          <MeItemSpace />
          <MeItemNormalOnlyValue
            leftIcon={icon_me_household_members}
            rightText="1/5"
            title="HOUSEHOLD MEMBERS"
            itemCallBack={() => {
              console.log('HOUSEHOLD MEMBERS');
            }}
          />
          <MeItemSpace />
          <MeItemNormal
            title="ADVANCED OPTIONS"
            icon={icon_me_reset}
            isShowArrow={true}
            itemCallBack={() => {
              console.log('RESET MIRROR');
            }}
          />
          <View style={styles.scroll_bottom_space} />
          <BluetoothUnavailableModal ref={"bluetoothUnavailableModal"} />
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
  scroll_bottom_space: {
    width: '100%',
    height: 80,
  },
});
