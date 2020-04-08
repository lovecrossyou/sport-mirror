import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableHighlight,
  NativeEventEmitter,
  NativeModules,
  Platform,
  PermissionsAndroid,
  AppState,
  FlatList,
  Dimensions,
  Button,
} from 'react-native';
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
import icon_me_bluetooth from '@/assets/me/icon_me_bluetooth.png';
import icon_me_heart_rate from '@/assets/me/icon_me_heart_rate.png';
import icon_me_household_members from '@/assets/me/icon_me_household-members.png';
import icon_me_mirror from '@/assets/me/icon_me_mirror.png';
import icon_me_reset from '@/assets/me/icon_me_reset.png';
import icon_me_support from '@/assets/me/icon_me_support.png';
import BleManager from 'react-native-ble-manager';
const BleManagerModule = NativeModules.BleManager;
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);
const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.header_title}>ME</Text>
    </View>
  );
};
export default class Me extends Component {
  constructor() {
    super();

    this.state = {
      scanning: false,
      peripherals: new Map(),
      appState: '',
    };

    this.handleDiscoverPeripheral = this.handleDiscoverPeripheral.bind(this);
    this.handleStopScan = this.handleStopScan.bind(this);
    this.handleUpdateValueForCharacteristic = this.handleUpdateValueForCharacteristic.bind(
      this,
    );
    this.handleDisconnectedPeripheral = this.handleDisconnectedPeripheral.bind(
      this,
    );
    this.handleAppStateChange = this.handleAppStateChange.bind(this);
  }
  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);

    BleManager.start({showAlert: true});

    this.handlerDiscover = bleManagerEmitter.addListener(
      'BleManagerDiscoverPeripheral',
      this.handleDiscoverPeripheral,
    );
    this.handlerStop = bleManagerEmitter.addListener(
      'BleManagerStopScan',
      this.handleStopScan,
    );
    this.handlerDisconnect = bleManagerEmitter.addListener(
      'BleManagerDisconnectPeripheral',
      this.handleDisconnectedPeripheral,
    );
    this.handlerUpdate = bleManagerEmitter.addListener(
      'BleManagerDidUpdateValueForCharacteristic',
      this.handleUpdateValueForCharacteristic,
    );

    if (Platform.OS === 'android' && Platform.Version >= 23) {
      PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      ).then(result => {
        if (result) {
          console.log('Permission is OK');
        } else {
          PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
          ).then(result => {
            if (result) {
              console.log('User accept');
            } else {
              console.log('User refuse');
            }
          });
        }
      });
    }
  }

  handleAppStateChange(nextAppState) {
    if (
      this.state.appState.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      console.log('App has come to the foreground!');
      BleManager.getConnectedPeripherals([]).then(peripheralsArray => {
        console.log('Connected peripherals: ' + peripheralsArray.length);
      });
    }
    this.setState({appState: nextAppState});
  }

  componentWillUnmount() {
    this.handlerDiscover.remove();
    this.handlerStop.remove();
    this.handlerDisconnect.remove();
    this.handlerUpdate.remove();
  }

  handleDisconnectedPeripheral(data) {
    let peripherals = this.state.peripherals;
    let peripheral = peripherals.get(data.peripheral);
    if (peripheral) {
      peripheral.connected = false;
      peripherals.set(peripheral.id, peripheral);
      this.setState({peripherals});
    }
    console.log('Disconnected from ' + data.peripheral);
  }

  handleUpdateValueForCharacteristic(data) {
    console.log(
      'Received data from ' +
        data.peripheral +
        ' characteristic ' +
        data.characteristic,
      data.value,
    );
  }

  handleStopScan() {
    console.log('Scan is stopped');
    this.setState({scanning: false});
  }

  startScan() {
    if (!this.state.scanning) {
      //this.setState({peripherals: new Map()});
      BleManager.scan([], 3, true).then(results => {
        console.log('Scanning...');
        this.setState({scanning: true});
      });
    }
  }

  retrieveConnected() {
    BleManager.getConnectedPeripherals([]).then(results => {
      if (results.length == 0) {
        console.log('No connected peripherals');
      }
      console.log(results);
      var peripherals = this.state.peripherals;
      for (var i = 0; i < results.length; i++) {
        var peripheral = results[i];
        peripheral.connected = true;
        peripherals.set(peripheral.id, peripheral);
        this.setState({peripherals});
      }
    });
  }

  handleDiscoverPeripheral(peripheral) {
    var peripherals = this.state.peripherals;
    console.log('Got ble peripheral', peripheral);
    if (!peripheral.name) {
      peripheral.name = 'NO NAME';
    }
    peripherals.set(peripheral.id, peripheral);
    this.setState({peripherals});
  }

  test(peripheral) {
    if (peripheral) {
      if (peripheral.connected) {
        BleManager.disconnect(peripheral.id);
      } else {
        BleManager.connect(peripheral.id)
          .then(() => {
            let peripherals = this.state.peripherals;
            let p = peripherals.get(peripheral.id);
            if (p) {
              p.connected = true;
              peripherals.set(peripheral.id, p);
              this.setState({peripherals});
            }
            console.log('Connected to ' + peripheral.id);

            setTimeout(() => {
              /* Test read current RSSI value
            BleManager.retrieveServices(peripheral.id).then((peripheralData) => {
              console.log('Retrieved peripheral services', peripheralData);

              BleManager.readRSSI(peripheral.id).then((rssi) => {
                console.log('Retrieved actual RSSI value', rssi);
              });
            });*/

              // Test using bleno's pizza example
              // https://github.com/sandeepmistry/bleno/tree/master/examples/pizza
              BleManager.retrieveServices(peripheral.id).then(
                peripheralInfo => {
                  console.log(peripheralInfo);
                  var service = '13333333-3333-3333-3333-333333333337';
                  var bakeCharacteristic =
                    '13333333-3333-3333-3333-333333330003';
                  var crustCharacteristic =
                    '13333333-3333-3333-3333-333333330001';

                  setTimeout(() => {
                    BleManager.startNotification(
                      peripheral.id,
                      service,
                      bakeCharacteristic,
                    )
                      .then(() => {
                        console.log('Started notification on ' + peripheral.id);
                        setTimeout(() => {
                          BleManager.write(
                            peripheral.id,
                            service,
                            crustCharacteristic,
                            [0],
                          ).then(() => {
                            console.log('Writed NORMAL crust');
                            BleManager.write(
                              peripheral.id,
                              service,
                              bakeCharacteristic,
                              [1, 95],
                            ).then(() => {
                              console.log(
                                'Writed 351 temperature, the pizza should be BAKED',
                              );
                              /*
                        var PizzaBakeResult = {
                          HALF_BAKED: 0,
                          BAKED:      1,
                          CRISPY:     2,
                          BURNT:      3,
                          ON_FIRE:    4
                        };*/
                            });
                          });
                        }, 500);
                      })
                      .catch(error => {
                        console.log('Notification error', error);
                      });
                  }, 200);
                },
              );
            }, 900);
          })
          .catch(error => {
            console.log('Connection error', error);
          });
      }
    }
  }

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
              this.startScan();
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
