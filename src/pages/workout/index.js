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

export default ({navigation}) => {
    return <View style={styles.container}>
        <Text>workout</Text>
        <Button
            title="Go to Login"
            onPress={() => navigation.navigate('Login')}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
