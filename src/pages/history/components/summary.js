const React = require('react');
const ReactNative = require('react-native');
const {
    View,
    StyleSheet,
    Text,
    TouchableWithoutFeedback
} = ReactNative;
import { scaleSizeW, scaleSizeH, setSpText, width } from '@/util/screen';
const {useState}  =  React;


const SummaryItem = ()=>{
    return <View></View>
}


const Summary = () => {
    return <View style={styles.container}>

    </View>
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: scaleSizeH(200),
        backgroundColor: '#fff',
        paddingHorizontal: scaleSizeW(28),
        paddingBottom: scaleSizeH(20),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    
})

module.exports = Summary;