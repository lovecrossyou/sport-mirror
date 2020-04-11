import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  Button,
  Dimensions,
} from 'react-native';
import Modal from 'react-native-modal';
import {scaleSizeW, scaleSizeH, setSpText} from '@/util/screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import icon_me_close from '@/assets/me/icon_me_close.png';
import icon_me_heart_rate_applewatch from '@/assets/me/icon_me_heart_rate_applewatch.png';
import icon_me_heart_rate_connected from '@/assets/me/icon_me_heart_rate_connected.png';
import icon_me_heart_rate_mirrorhrm from '@/assets/me/icon_me_heart_rate_mirrorhrm.png';
import icon_me_loading from '@/assets/me/icon_me_loading.png';
import icon_me_heart_rate_unconnect from '@/assets/me/icon_me_heart_rate_unconnect.png';
import icon_me_music_macvon from '@/assets/me/icon_me_music_macvon.png';
import icon_me_music_sotify from '@/assets/me/icon_me_music_sotify.png';
export class BluetoothUnavailableModal extends Component {
  state = {
    isModalVisible: false,
    isVisible: false,
  };

  toggleModal(isshow) {
    this.setState({isModalVisible: isshow});
  }
  openModal(isVisible) {
    if (isVisible == true) {
      this.setState({isVisible: true});
    }
    this.toggleModal(true);
  }
  closeModal() {
    this.toggleModal(false);
  }

  render() {
    const deviceWidth = Dimensions.get('window').width;

    return (
      <Modal
        style={{margin: 0}}
        isVisible={this.state.isModalVisible}
        deviceWidth={deviceWidth}
        swipeDirection="left">
        <View style={styles.modal_container}>
          <View style={styles.bluetooth_unavailable_container}>
            <View style={styles.bluetooth_unavailable_title}>
              <View />
              <Text style={styles.bluetooth_unavailable_title_text}>
                HEART RATE MONITOR
              </Text>

              <TouchableWithoutFeedback onPress={() => this.closeModal()}>
                <Image source={icon_me_close} style={styles.close_btn} />
              </TouchableWithoutFeedback>
            </View>
            {this.state.isVisible == true ? (
              <View style={{width: '100%'}}>
                <View style={styles.bluetooth_available_item}>
                  <Image
                    source={icon_me_heart_rate_applewatch}
                    style={styles.bluetooth_available_item_img}
                  />
                  <View style={styles.bluetooth_available_item_middle}>
                    <Text style={styles.bluetooth_available_item_title}>
                      Bluetooth Unavailable
                    </Text>
                    <Text style={styles.bluetooth_available_item_sub}>
                      Tap to use your Apple watch as a heart rate monitor
                    </Text>
                  </View>
                  <Image
                    source={icon_me_heart_rate_connected}
                    style={styles.bluetooth_available_item_right_Img}
                  />
                </View>
                {/*  */}
                <View style={styles.bluetooth_available_item}>
                  <Image
                    source={icon_me_heart_rate_mirrorhrm}
                    style={styles.bluetooth_available_item_img}
                  />
                  <View style={styles.bluetooth_available_item_middle}>
                    <Text style={styles.bluetooth_available_item_title}>
                      Bluetooth Unavailable
                    </Text>
                  </View>
                  <Image
                    source={icon_me_heart_rate_unconnect}
                    style={styles.bluetooth_available_item_right_Img}
                  />
                </View>
                {/*  */}
                <View style={styles.bluetooth_available_item}>
                  <Image
                    source={icon_me_loading}
                    style={styles.bluetooth_available_scan_img}
                  />
                  <View style={styles.bluetooth_available_item_middle}>
                    <Text style={styles.bluetooth_available_item_title}>
                      Scanning...
                    </Text>
                  </View>
                  <View />
                </View>
              </View>
            ) : (
              <View style={{width: '100%'}}>
                <Text style={styles.bluetooth_unavailable_content_text}>
                  Bluetooth Unavailable
                </Text>
                <Text style={styles.bluetooth_unavailable_sub_text}>
                  Please make sure Bluetooth is enabled in your phone’s
                  settings.
                </Text>
              </View>
            )}
          </View>
        </View>
      </Modal>
    );
  }
}

export class MusicSourceModal extends Component {
  state = {
    isModalVisible: false,
  };

  toggleModal(isshow) {
    this.setState({isModalVisible: isshow});
  }
  openModal() {
    this.toggleModal(true);
  }
  closeModal() {
    this.toggleModal(false);
  }

  render() {
    const deviceWidth = Dimensions.get('window').width;

    return (
      <Modal
        style={{margin: 0}}
        isVisible={this.state.isModalVisible}
        deviceWidth={deviceWidth}
        swipeDirection="left">
        <View style={styles.modal_container}>
          <View style={styles.bluetooth_unavailable_container}>
            <View style={styles.bluetooth_unavailable_title}>
              <View />
              <Text style={styles.bluetooth_unavailable_title_text}>
                MUSIC SOURCE
              </Text>

              <TouchableWithoutFeedback onPress={() => this.closeModal()}>
                <Image source={icon_me_close} style={styles.close_btn} />
              </TouchableWithoutFeedback>
            </View>

            <View style={{width: '100%'}}>
              {/*  */}
              <View style={styles.bluetooth_available_item}>
                <Image
                  source={icon_me_music_macvon}
                  style={styles.bluetooth_available_item_img}
                />
                <View style={styles.bluetooth_available_item_middle}>
                  <Text style={styles.bluetooth_available_item_title}>
                    MACVON MUSIC
                  </Text>
                </View>
                <Image
                  source={icon_me_heart_rate_connected}
                  style={styles.bluetooth_available_item_right_Img}
                />
              </View>
              {/*  */}
              <View style={styles.bluetooth_available_item}>
                <Image
                  source={icon_me_music_sotify}
                  style={styles.bluetooth_available_item_img}
                />
                <View style={styles.bluetooth_available_item_middle}>
                  <Text style={styles.bluetooth_available_item_title}>
                    SPOTIFY
                  </Text>
                </View>
                <View />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modal_container: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  bluetooth_unavailable_container: {
    borderTopLeftRadius: scaleSizeW(33),
    borderTopRightRadius: scaleSizeW(33),
    backgroundColor: '#ffffff',
    width: '100%',
    paddingBottom: scaleSizeH(289),
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  bluetooth_unavailable_title: {
    width: '100%',
    height: scaleSizeH(120),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scaleSizeW(45),
    borderBottomWidth: scaleSizeH(1),
    borderBottomColor: '#EEEEEE',
  },
  bluetooth_unavailable_title_text: {
    fontSize: setSpText(32),
    color: '#131313',
    fontWeight: '500',
  },
  close_btn: {
    width: scaleSizeW(33),
    height: scaleSizeW(33),
  },
  bluetooth_unavailable_content_text: {
    width: '100%',
    marginTop: scaleSizeH(170),
    fontWeight: '500',
    fontSize: setSpText(48),
    color: '#131313',
    textAlign: 'center',
  },
  bluetooth_unavailable_sub_text: {
    marginHorizontal: scaleSizeW(70),
    marginTop: scaleSizeH(40),
    fontWeight: '400',
    fontSize: setSpText(32),
    color: '#999999',
    textAlign: 'center',
  },
  bluetooth_available_item: {
    width: '100%',
    height: scaleSizeH(120),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scaleSizeW(40),
    borderBottomWidth: scaleSizeH(1),
    borderBottomColor: '#EEEEEE',
  },
  bluetooth_available_item_img: {
    width: scaleSizeW(53),
    height: scaleSizeW(53),
  },
  bluetooth_available_item_right_Img: {
    width: scaleSizeW(15),
    height: scaleSizeW(15),
  },
  bluetooth_available_item_middle: {
    width: '80%',
    marginHorizontal: scaleSizeW(28),
    justifyContent: 'flex-start',
  },
  bluetooth_available_item_title: {
    fontSize: setSpText(32),
    fontWeight: '500',
    color: '#131313',
  },
  bluetooth_available_item_sub: {
    fontSize: setSpText(24),
    fontWeight: '400',
    color: '#999999',
  },
  bluetooth_available_scan_img: {
    width: scaleSizeW(31),
    height: scaleSizeW(31),
    marginLeft: scaleSizeW(11),
  },
});
