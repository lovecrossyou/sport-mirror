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
import ScrollTabView from './components/scroll-tab';


export default ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollTabView/>
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
