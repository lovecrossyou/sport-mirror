import React, { useState, useRef } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { width } from '@/util/screen';
import Classes from '../classes';
import Programs from '../programs';
import DefaultTabBar from '@/pages/components/tabbar';

const ScrollTabView = () => {
    const [index, setIndex] = useState(0);
    const scrollViewRef = useRef();

    const onScroll = e => {
        var offsetX = e.nativeEvent.contentOffset.x;
        const index = offsetX / width;
        setIndex(index);
        // scrollTo(index)
    }

    const scrollTo = index => {
        console.log('scrollTo ', index);
        scrollViewRef.current.scrollTo({ x: width * index, y: 0, animated: true })
    }
    return <>
        <DefaultTabBar tabs={['Classes', 'Programs']} defaultIndex={index} onChange={scrollTo} />
        <ScrollView
            ref={scrollViewRef}
            onScroll={onScroll}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            alwaysBounceVertical={false}
            contentContainerStyle={styles.container}>
            <Classes />
            <Programs />
        </ScrollView>
    </>
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        flex: 1,
        width: width * 2,
        flexDirection: 'row'
    }
})

export default ScrollTabView;