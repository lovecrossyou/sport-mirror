const React = require('react');
const ReactNative = require('react-native');
const {
  View,
  StyleSheet,
  Text
} = ReactNative;
import { scaleSizeW, scaleSizeH, setSpText } from '@/util/screen';

const Title = (props) => {
  return <View style={styles.container}>
      <Text style={styles.name}>{props.name}</Text>
  </View>;
};

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: scaleSizeH(86),
        backgroundColor:'#F5F5F5',
        paddingHorizontal:scaleSizeW(40),
        justifyContent:'flex-end',
        paddingBottom: scaleSizeH(20)
    },
    name:{
        fontSize:setSpText(28),
        color:'#282828',
        fontWeight:'bold'
    }
})

module.exports = Title;