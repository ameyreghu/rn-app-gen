import React from 'react';
import { View, Image, FlatList, StyleSheet, Dimensions, Text } from 'react-native';

const { width } = Dimensions.get('window');

export function Carousel({ data }) {
    if (!data || !Array.isArray(data)) {
        return null;
    }

    const renderItem = ({ item }) => (
        <View style={styles.imageContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.text}>{item.text}</Text>
            </View>
        </View>
    );

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
        />
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        width: width*0.8,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    textContainer: {
        position: 'absolute',
        // top: 10,
        // left: 10,
        // right: 10,
        // bottom: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        padding: 5,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
    },
});