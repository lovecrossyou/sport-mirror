import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Button,
    FlatList,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import DefaultTabBar from '@/pages/components/tabbar';

import Classes from './classes';
import Programs from './programs';

export default ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollableTabView
                tabBarUnderlineStyle={styles.tabBarUnderlineStyle}
                initialPage={0}
                tabBarActiveTextColor={'#000000'}
                tabBarInactiveTextColor={'#999999'}
                textStyle={styles.textStyle}
                renderTabBar={() => <DefaultTabBar backgroundColor={'#fff'} />}
            >
                <Classes tabLabel='Classes' />
                <Programs tabLabel='Programs' />
            </ScrollableTabView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    tabBarUnderlineStyle: {
        width: 50,
        alignItems: 'center',
        color:'#000'
    },
    textStyle: {
        fontSize: 40
    }
});
