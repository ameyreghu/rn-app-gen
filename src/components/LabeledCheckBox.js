import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Checkbox } from 'react-native-paper';

export function LabeledCheckBox({ label, value, onChange }) {
    return (
        <View style={styles.container}>
            <Checkbox
                status={value ? 'checked' : 'unchecked'}
                onPress={onChange}
                style={styles.checkbox}
            />
            <Text style={styles.label}>{label}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        marginRight: 8,
    },
    label: {
        fontSize: 16,
    },
});