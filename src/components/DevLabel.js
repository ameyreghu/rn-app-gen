import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default DevLabel = ({ text }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 10,
        right: 30,
    },
    text: {
        fontSize: 10,
        color: 'rgba(0, 0, 0, 0.5)', // Subtle color
    },
});