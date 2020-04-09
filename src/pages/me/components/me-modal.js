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
export class BluetoothUnavailableModal extends Component {
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
                HEART RATE MONITOR
              </Text>

              <TouchableWithoutFeedback onPress={() => this.closeModal()}>
                <Image source={icon_me_close} style={styles.close_btn} />
              </TouchableWithoutFeedback>
            </View>
            <Text style={styles.bluetooth_unavailable_content_text}>
              Bluetooth Unavailable
            </Text>
            <Text style={styles.bluetooth_unavailable_sub_text}>
              Please make sure Bluetooth is enabled in your phone’s settings.
            </Text>
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
});
