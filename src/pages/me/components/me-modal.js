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
      <Modal isVisible={this.state.isModalVisible} deviceWidth={deviceWidth}>
        <View style={styles.modal_container}>
          <View style={styles.bluetooth_unavailable_container} />
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
    backgroundColor: '#ffffff',
    width: '100%',
    height: 300,
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
});
