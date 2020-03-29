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

const summarys = [
    {count: '1', title: 'WORKOUTS'},
    {count: '30:00', title: 'TIME'},
    {count: '1,210', title: 'CAL(KCAL)'}
];
const SummaryItem = ()=>{
    return (
        <>
            {
                summarys.map((item, index) => {
                    return (
                        <View key={index}>
                            <Text style={styles.count}>{item.count}</Text>
                            <Text style={styles.title}>{item.title}</Text>
                        </View>
                    )
                })
            }
        </>
    )
};

const Summary = () => {
    return (
        <View style={styles.container}>
            <SummaryItem />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: scaleSizeH(200),
        backgroundColor: '#fff',
        // paddingHorizontal: scaleSizeW(28),
        // paddingBottom: scaleSizeH(20),
        paddingTop: scaleSizeH(60),
        paddingRight: scaleSizeW(86),
        paddingBottom: scaleSizeH(60),
        paddingLeft: scaleSizeW(77),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',overflow: 'hidden'
    },
    count: {
        marginBottom: scaleSizeH(20),
        fontSize: setSpText(40),
        color: '#000000',
        textAlign: 'center'
    },
    title: {
        fontSize: setSpText(24),
        color: '#777777',
        textAlign: 'center'
    },
});

module.exports = Summary;
