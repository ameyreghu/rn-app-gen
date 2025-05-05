import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppBar({ title }) {
    return (
        <View style={styles.appBar}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    appBar: {
        height: 100,
        paddingTop: 40,
        backgroundColor: '#6200ee',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
    },
});