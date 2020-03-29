import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { width, setSpText } from '@/util/screen';
import { scaleSizeW, scaleSizeH } from '../../util/screen';



const DefaultTabBar = ({ tabs = [], defaultIndex = 0,onChange }) => {
  return (
    <View style={styles.tabs}>
      {tabs.map((name, index) => {
        return (
          <TouchableWithoutFeedback key={index} onPress={() => onChange(index)}>
            <View style={styles.tab}>
              <Text style={[defaultIndex === index ? styles.active_text : styles.text]}>{name}</Text>
              <View style={[defaultIndex === index ? styles.active_indicator : styles.indicator]}></View>
            </View>
          </TouchableWithoutFeedback>
        )
      })}
    </View>
  )
}
const styles = StyleSheet.create({
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
    width: width,
    height: scaleSizeH(120),
    position: 'relative'
  },
  tabs: {
    height: scaleSizeH(120),
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    width: width
  },
  active_text: {
    fontSize: setSpText(40),
    fontWeight: 'bold',
    color: '#000'
  },
  text: {
    fontSize: setSpText(40),
    fontWeight: 'bold',
    color: '#999'
  },

  active_indicator: {
    width: scaleSizeW(54),
    height: scaleSizeH(5),
    backgroundColor: '#000',
    marginTop: scaleSizeH(32),
    position: 'absolute',
    bottom: 0
  },
  indicator: {
    width: scaleSizeW(54),
    height: scaleSizeH(5),
    backgroundColor: '#999',
    marginTop: scaleSizeH(32),
    opacity: 0,
    position: 'absolute',
    bottom: 0
  }
});

module.exports = DefaultTabBar;