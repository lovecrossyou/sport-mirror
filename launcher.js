/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState, Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image
} from 'react-native';
import { AppRegistry } from 'react-native';

import {
    Colors,
    CustomBadgeView
} from 'react-native/Libraries/NewAppScreen';

import { Dimensions } from 'react-native'

const deviceW = Dimensions.get('window').width

const basePx = 375

function px2dp(px) {
    return px * deviceW / basePx
}
import TabNavigator from 'react-native-tab-navigator';
import workout_s from '@/assets/tab/workout_s.png';
import workout_n from '@/assets/tab/workout_n.png';

import schedule_s from '@/assets/tab/schedule_s.png';
import schedule_n from '@/assets/tab/schedule_n.png';

import history_s from '@/assets/tab/history_s.png';
import history_n from '@/assets/tab/history_n.png';

import me_s from '@/assets/tab/me_s.png';
import me_n from '@/assets/tab/me_n.png';

class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Home
        </Text>
            </View>
        )
    }
}

class Profile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Profile
        </Text>
            </View>
        )
    }
}

export default class App extends Component {
    state = {
        selectedTab: 'home'
    };

    render() {
        const { selectedTab } = this.state;
        const tabBarHeight = 50;
        return (
            <>
                <StatusBar barStyle="dark-content" />
                <TabNavigator
                    style={styles.container}
                    tabBarStyle={{ height: tabBarHeight, overflow: 'hidden',marginBottom:20 }}
                    sceneStyle={{ paddingBottom: tabBarHeight }} >
                    <TabNavigator.Item
                        selected={selectedTab === 'home'}
                        title="Workouts"
                        selectedTitleStyle={{ color: "#000000" }}
                        renderIcon={() => <Image style={styles.icon} source={workout_s} />}
                        renderSelectedIcon={() => <Image style={styles.icon} source={workout_n} />}
                        //   badgeText="1"
                        onPress={() => this.setState({ selectedTab: 'home' })}>
                        <Home />
                    </TabNavigator.Item>

                    <TabNavigator.Item
                        selected={selectedTab === 'sechdule'}
                        title="Schedule"
                        selectedTitleStyle={{ color: "#000000" }}
                        renderIcon={() => <Image style={styles.icon} source={schedule_n} />}
                        renderSelectedIcon={() => <Image style={styles.icon} source={schedule_s} />}
                        //   badgeText="1"
                        onPress={() => this.setState({ selectedTab: 'sechdule' })}>
                        <Home />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={selectedTab === 'history'}
                        title="History"
                        selectedTitleStyle={{ color: "#000000" }}
                        renderIcon={() => <Image style={styles.icon} source={history_n} />}
                        renderSelectedIcon={() => <Image style={styles.icon} source={history_s} />}
                        //   badgeText="1"
                        onPress={() => this.setState({ selectedTab: 'history' })}>
                        <Home />
                    </TabNavigator.Item>

                    <TabNavigator.Item
                        selected={selectedTab === 'me'}
                        title="Me"
                        selectedTitleStyle={{ color: "#000000" }}
                        renderIcon={() => <Image style={styles.icon} source={me_n} />}
                        renderSelectedIcon={() => <Image style={styles.icon} source={me_s} />}
                        //   badgeText="1"
                        onPress={() => this.setState({ selectedTab: 'me' })}>
                        <Home />
                    </TabNavigator.Item>
                </TabNavigator>
            </>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    icon: {
        width: px2dp(26),
        height: px2dp(26),
    }
});

AppRegistry.registerComponent('AwesomeProject', () => App);


