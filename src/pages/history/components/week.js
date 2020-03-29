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

const WeekItem = (props) => {
    const itemW = (width - 28 * 2) / 7;
    const itemStyle = {
        width: itemW,
    }
    return <TouchableWithoutFeedback onPress={props.onPress}>
        <View style={[styles.item, itemStyle]}>
            <Text style={styles.name}>{props.name}</Text>
            <View style={[props.active? styles.circle_active : styles.circle]} />
        </View>
    </TouchableWithoutFeedback>;
};

const days = ['Sun', 'Mon', 'Thu', 'Wed', 'Thu', 'Fri', 'Sat'];

const WeekPanel = () => {
    const [currentIndex, setIndex] = useState(-1);
    return <View style={styles.container}>
        {days.map((d, index) => <WeekItem onPress={()=>setIndex(index)} active={currentIndex===index} name={d} key={index} />)}
    </View>
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: scaleSizeH(280),
        backgroundColor: '#fff',
        paddingHorizontal: scaleSizeW(28),
        paddingBottom: scaleSizeH(20),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    item: {
        width: '100%',
        height: scaleSizeH(280),
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        paddingVertical: scaleSizeH(72),
        alignItems: 'center'
    },
    name: {
        fontSize: setSpText(28),
        color: '#282828',
        textAlign: 'center'
    },
    circle: {
        width: scaleSizeW(74),
        height: scaleSizeH(74),
        borderWidth: 2,
        borderColor: '#000000',
        borderRadius: scaleSizeW(37),
        backgroundColor: '#fff'
    },
    circle_active:{
        width: scaleSizeW(74),
        height: scaleSizeH(74),
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: scaleSizeW(37),
        backgroundColor: '#000'
    }
})

module.exports = WeekPanel;
