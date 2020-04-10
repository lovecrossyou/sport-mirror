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
import icon_back from '@/assets/icon_back.png';
import icon_me_music_apple from '@/assets/me/icon_me_music_apple.png';
import icon_me_music_facebook from '@/assets/me/icon_me_music_facebook.png';
import icon_me_music_spotify_logo from '@/assets/me/icon_me_music_spotify_logo.png';
import icon_me_music_spotify_rember_me_selected from '@/assets/me/icon_me_music_spotify_rember_me_selected.png';
import icon_me_music_spotify_rember_me_unselected from '@/assets/me/icon_me_music_spotify_rember_me_unselected.png';

const Line = () => {
  return <View style={styles.line} />;
};
export default class MusicSpotityModal extends Component {
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
          <View style={styles.music_spotity_container}>
            <TouchableWithoutFeedback onPress={() => this.closeModal()}>
              <Image source={icon_back} style={styles.arrow_left} />
            </TouchableWithoutFeedback>
            <View style={styles.logo_img_container}>
              <Image
                source={icon_me_music_spotify_logo}
                style={styles.logo_img}
              />
            </View>
            <Line />
            <Text style={styles.top_text}>To continue,log in to Spotify</Text>
            <View
              style={[
                styles.button_container,
                {marginTop: scaleSizeH(55), backgroundColor: '#425893'},
              ]}>
              <Image
                source={icon_me_music_facebook}
                style={styles.button_icon}
              />
              <Text style={styles.button_text_title}>
                {' '}
                CONTINUE WITH FACEBOOK{' '}
              </Text>
            </View>
            <View
              style={[
                styles.button_container,
                {marginTop: scaleSizeH(26), backgroundColor: '#010101'},
              ]}>
              <Image
                source={icon_me_music_facebook}
                style={styles.button_icon}
              />
              <Text style={styles.button_text_title}>
                {' '}
                CONTINUE WITH APPLE{' '}
              </Text>
            </View>
            <View style={styles.space_or_container}>
              <View style={styles.space_or_line} />
              <Text style={styles.space_or_text}>OR</Text>
            </View>
            <View style={styles.remember_container}>
              <Image
                source={icon_me_music_spotify_rember_me_unselected}
                style={{width: scaleSizeW(40), height: scaleSizeW(40)}}
              />
              <Text style={styles.remeber_text}>Rember me</Text>
            </View>
            <View
              style={[
                styles.button_container,
                {marginBottom: scaleSizeH(80), backgroundColor: '#57B660'},
              ]}>
              <Text style={styles.button_text_title}>LOGIN</Text>
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
  music_spotity_container: {
    borderTopLeftRadius: scaleSizeW(33),
    borderTopRightRadius: scaleSizeW(33),
    backgroundColor: '#ffffff',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  arrow_left: {
    width: scaleSizeW(20),
    height: scaleSizeH(36),
    marginLeft: scaleSizeW(40.6),
    marginTop: scaleSizeH(61),
    marginBottom: scaleSizeH(82),
    alignSelf: 'flex-start',
  },
  logo_img_container: {
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    marginTop: scaleSizeH(86),
  },
  logo_img: {
    width: scaleSizeW(223),
    height: scaleSizeH(67),
  },
  line: {
    width: '100%',
    height: scaleSizeH(1),
    backgroundColor: '#EEEEEE',
  },
  top_text: {
    width: '100%',
    textAlign: 'center',
    color: '#242328',
    fontSize: setSpText(32),
    fontWeight: '500',
    marginTop: scaleSizeH(54),
  },
  button_container: {
    width: scaleSizeW(670),
    height: scaleSizeH(106),
    borderRadius: scaleSizeH(53),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button_topspace: {
    marginTop: scaleSizeH(55),
  },
  button_icon: {
    width: scaleSizeW(33),
    height: scaleSizeW(33),
  },
  button_text_title: {
    marginLeft: scaleSizeW(12.67),
    fontWeight: '500',
    fontSize: setSpText(27),
    color: '#FFFFFF',
  },
  space_or_container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: scaleSizeH(52),
  },
  space_or_line: {
    width: '100%',
    height: scaleSizeH(1),
    backgroundColor: '#EEEEEE',
    position: 'absolute',
  },
  space_or_text: {
    color: '#333333',
    fontSize: setSpText(27),
    fontWeight: '500',
    backgroundColor: '#ffffff',
    paddingHorizontal: scaleSizeW(20),
  },
  remember_container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: scaleSizeW(40),
    marginBottom: scaleSizeH(33),
  },
  remeber_text: {
    fontWeight: '400',
    color: '#999999',
    fontSize: setSpText(27),
    marginLeft: scaleSizeW(12),
  },
});
