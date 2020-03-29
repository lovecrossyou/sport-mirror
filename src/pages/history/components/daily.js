/**
 * @Title: daily.js
 * @Description: daily
 * @author: Fanchao
 * @date: 2020-03-29 00:07
 * @version V1.0
 */

import React, {} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';


import { scaleSizeW, scaleSizeH, setSpText } from '@/util/screen';

const dailys = [
    {
        id: 1,
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR8qvivaeT-6gCSrqc6tlx8y4BLJ4LbsEOhK2bIVaTRgXBOmfEe',
        month: 'Mar.01',
        level: 'STRENGTH BEGINNER',
        name: 'JULIE',
        time: '30MIN'
    },
    {
        id: 2,
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSsNnNNIilrc2PLQ7iBVl8efyTMJMGr_zn1__KvmKEZfUDmXs_L',
        month: 'Mar.02',
        level: 'STRENGTH BEGINNER',
        name: 'JULIE',
        time: '40MIN'
    },
    {
        id: 3,
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHtWfNeLUAljglLaZJP41wEyit6Ect5YZK9MCpw0Tuc6WBB-BD',
        month: 'Mar.03',
        level: 'STRENGTH BEGINNER',
        name: 'JULIE',
        time: '50MIN'
    },
    {
        id: 4,
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhRHcFy9OTj9zIYB4Et0XxTH-awSxM31PiZoczOZcIK_4PN2d1',
        month: 'Mar.04',
        level: 'STRENGTH BEGINNER',
        name: 'JULIE',
        time: '60MIN'
    }
];

const DailyItem = () => {
    return (
        <>
            {
                dailys.map(item => {
                    return (
                        <View key={item.id} style={styles.dailyItem}>
                            <Image style={styles.imgSize} resizeMode="contain" source={{ uri: item.uri }}></Image>
                            <View style={styles.desc}>
                                <View style={styles.monthContent}>
                                    <View style={styles.triangleLeft}></View>
                                    <Text style={styles.month}>{item.month}</Text>
                                </View>
                                <Text style={styles.level}>{item.level}</Text>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.time}>{item.time}</Text>
                            </View>
                        </View>
                    )
                })
            }
        </>
    )
};

const Daily = () => {
    return (
        <View style={styles.container}>
            <DailyItem />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f5f5f5'
    },
    dailyItem: {
        width: '100%',
        height: scaleSizeH(320),
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
        // paddingHorizontal: scaleSizeH(54),
        // paddingVertical: scaleSizeW(60),
        paddingLeft: scaleSizeW(54),
        paddingRight: scaleSizeW(54),
        paddingTop: scaleSizeH(60),
        paddingBottom: scaleSizeH(60),
        marginBottom: scaleSizeH(33),
        backgroundColor: '#ffffff'
    },
    imgSize: {
        width: scaleSizeW(200),
        height: scaleSizeH(200),
        marginRight: scaleSizeW(110)
    },
    desc: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    monthContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopRightRadius: 2,
        borderTopLeftRadius: 2,
        borderBottomLeftRadius: 2,
        borderBottomRightRadius: 2,
        overflow: 'hidden'
    },
    triangleLeft: {
        width: 0,
        height: 0,
        borderColor: 'transparent',
        borderTopWidth: scaleSizeW(19),
        borderBottomWidth: scaleSizeW(19),
        borderRightWidth: scaleSizeW(19),
        borderRightColor: '#2B2B2B',
    },
    month: {
        width: scaleSizeW(120),
        height: scaleSizeH(40),
        lineHeight: scaleSizeH(40),
        textAlign: 'center',
        backgroundColor: '#2B2B2B',
        color: '#FFFFFF',
        fontSize:setSpText(24),
        fontWeight: '500',
    },
    level: {
        color: '#000000',
        fontSize: setSpText(32),
        // marginTop: scaleSizeH(22),
        marginTop: scaleSizeH(12),
        marginBottom: scaleSizeH(35),
        // marginBottom: scaleSizeH(25),
        fontWeight: '600'
    },
    name: {
        fontSize: setSpText(24),
        color: '#777777',
        marginBottom: scaleSizeH(18),
        // marginBottom: scaleSizeH(28)
        fontWeight: '600',

    },
    time: {
        color: '#777777',
        fontSize: setSpText(32),
        fontWeight: '600',
    }
});


export default Daily;
