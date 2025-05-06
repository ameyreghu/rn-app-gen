import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Checkbox } from 'react-native-paper';

export function LabeledCheckBox({ label, value, onPress }) {
    return (
        <View style={styles.container}>

            <Text style={styles.label}>{label}</Text>
            <Checkbox
                status={value ? 'checked' : 'unchecked'}
                onPress={onPress}
                style={styles.checkbox}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        marginHorizontal:10,
        marginVertical: 5,
    },
    checkbox: {
        marginRight: 8,
    },
    label: {
        fontSize: 16,
    },
});