import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Button,
    FlatList,
    SafeAreaView,
    TouchableWithoutFeedback,
    Image
} from 'react-native';
import { scaleSizeW, scaleSizeH, setSpText } from '@/util/screen';
import { withNavigation } from 'react-navigation';

import heart from '@/images/workout/heart.png';
import heart_n from '@/images/workout/heart_n.png';

export default withNavigation(props => {
    return <TouchableWithoutFeedback onPress={() => props.navigation.navigate('scheduleDetail')}><View style={styles.item}>
        <Image style={styles.icon} resizeMode="contain" source={{ uri: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2754018954,2350021655&fm=26&gp=0.jpg' }}></Image>
        <View style={styles.infos}>
            <Text style={styles.title}>CARDIO: BOOTCAMP</Text>
            <Text style={styles.name}>SELINA</Text>
            <View style={styles.items}>
                <Image resizeMode='contain' source={heart_n} style={styles.items_icon} />
                <Image resizeMode='contain' source={heart} style={styles.items_icon} />
            </View>
            <Text style={styles.cost}>BEGINNER | 30M</Text>
            <Text style={styles.create}>Aired 2020/3/21 @20:00</Text>
            <View style={styles.items}>
                <Image resizeMode='contain' source={heart_n} style={styles.items_icon} />
            </View>
        </View>
    </View>
    </TouchableWithoutFeedback>
})

const styles = StyleSheet.create({
    item: {
        height: scaleSizeH(420),
        backgroundColor: '#ffffff',
        marginTop: scaleSizeH(30),
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: scaleSizeW(64),
        paddingVertical: scaleSizeH(60),
        alignItems: 'center'
    },
    icon: {
        width: scaleSizeW(280),
        height: scaleSizeH(420)
    },
    infos: {
        // paddingTop: scaleSizeH(65),
        // paddingBottom: scaleSizeH(70),
    },
    title: {
        fontSize: setSpText(32),
        color: '#000000',
        marginBottom: scaleSizeH(35),
        textAlign: 'right',
        fontWeight: 'bold'

    },
    name: {
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
    items_icon: {
        width: scaleSizeW(44),
        height: scaleSizeH(44),
        marginLeft: scaleSizeW(10)
    },
    cost: {
        fontSize: setSpText(24),
        color: '#777777',
        textAlign: 'right',
        fontWeight: '500'
    },
    create: {
        fontSize: setSpText(24),
        color: '#999999',
        textAlign: 'right',
        marginBottom: scaleSizeH(35),
    }
})