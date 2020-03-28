import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Button,
    FlatList,
    SafeAreaView,
    TouchableOpacity,
    Image
} from 'react-native';
import { scaleSizeW, scaleSizeH, setSpText } from '@/util/screen';

export default () => {
    return <View style={styles.item}>
        <Image style={styles.icon} resizeMode="contain" source={{ uri: 'http://i4.article.fd.zol-img.com.cn/t_w1/g5/M00/04/0A/ChMkJ1fiT5mIMZIQAAH13yoi9PcAAWPwwLDSzwAAfX3174.jpg' }}></Image>
        <View style={styles.infos}>
            <Text style={styles.title}>BEGINNER</Text>
            <Text style={styles.level}>LEVEL</Text>
            <Text style={styles.cost}> 4 WEEKS</Text>
        </View>
    </View>
}

const styles = StyleSheet.create({
    item: {
        height: scaleSizeH(420),
        backgroundColor: '#ffffff',
        marginTop: scaleSizeH(30),
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: scaleSizeW(64),
    },
    icon: {
        width: scaleSizeW(280),
        height: scaleSizeH(420)
    },
    infos: {
        paddingTop: scaleSizeH(65),
        paddingBottom: scaleSizeH(70),
    },
    title: {
        fontSize: setSpText(40),
        color: '#000000',
        marginBottom: scaleSizeH(15),
        textAlign: 'right',
        fontWeight: 'bold'
    },
    level:{
        fontSize: setSpText(40),
        color: '#000000',
        marginBottom: scaleSizeH(35),
        textAlign: 'right',
        fontWeight: 'bold'
    },
    cost: {
        fontSize: setSpText(24),
        color: '#333333',
        textAlign: 'right',
        marginBottom: scaleSizeH(35),

    },
    items: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: scaleSizeH(35),
        // backgroundColor:'#e1e1e1'
    },
})