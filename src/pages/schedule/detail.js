/* eslint-disable react-native/no-inline-styles */
import React, {useRef} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {scaleSizeH, scaleSizeW, setSpText} from '@/util/screen';
import VideoPlayer from './video';
import Tiltle from '@/pages/components/title';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text>JULIE</Text>
      <Text>Beginner @ Mar.1.10:00 am</Text>
    </View>
  );
};

const VideoView = () => {
  return (
    <View style={styles.video}>
      <VideoPlayer />
    </View>
  );
};

const HeartRate = () => {
  return (
    <View style={styles.heart_rate}>
      <View style={styles.heart_rate_left}>
        <Text
          style={{
            fontSize: setSpText(27),
            color: '#2B2B2B',
            fontWeight: 'bold',
          }}>
          HEART RATE
        </Text>
        <Text
          style={{
            fontSize: setSpText(24),
            color: '#EA4B26',
            marginLeft: scaleSizeW(12),
          }}>
          (Disconnected)
        </Text>
      </View>
    </View>
  );
};

const CoachInfo = () => {};

const Equipment = () => {};

const Instruction = () => {};

export default () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header />
      <VideoView />
      <HeartRate />
      <Tiltle name="COACH" />
      <CoachInfo />
      <Tiltle name="EQUIPMENT" />
      <Equipment />
      <Tiltle name="INTRODUTION" />
      <Instruction />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  header: {
    width: '100%',
    height: scaleSizeH(134),
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  heart_rate: {
    width: '100%',
    height: scaleSizeH(134),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scaleSizeW(40),
    backgroundColor: '#fff',
  },
  heart_rate_left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: scaleSizeH(420),
  },
});
