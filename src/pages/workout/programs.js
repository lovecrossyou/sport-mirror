import React from 'react';

import {FlatList, View,StyleSheet} from 'react-native';
import ClassItem from './components/program-item';
import { scaleSizeW, scaleSizeH, width } from '@/util/screen';

export default () => {
    return (
        <FlatList
            ItemSeparatorComponent={()=><View style={styles.separator}></View>}
            data={[{ key: 'a' }, { key: 'b' },{ key: 'a' }, { key: 'b' }]}
            renderItem={({ item }) => <ClassItem>{item.key}</ClassItem>}
        />
    )
}

const styles = StyleSheet.create({
    separator:{
        width:width,
        height:scaleSizeH(26),
        backgroundColor:'#f5f5f5'
    }
})