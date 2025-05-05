import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * A basic list tile component that displays a title, description, and optional leading/trailing elements.
 * @param {Object} props - The properties for the component.
 * @param {string} props.title - The title text.
 * @param {string} [props.description] - The description text (optional).
 * @param {React.ReactNode} [props.leading] - The leading element (e.g., an icon or image) (optional).
 * @param {React.ReactNode} [props.trailing] - The trailing element (e.g., an icon or button) (optional).
 */
export function BasicListTile({ title, description, leading, trailing }) {
    return (
        <View style={styles.container}>
            {leading && <View style={styles.leading}><Text>{leading}</Text></View>}
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                {description && <Text style={styles.description}>{description}</Text>}
            </View>
            {trailing && <View style={styles.trailing}>{trailing}</View>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    leading: {
        marginRight: 16,
    },
    content: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    description: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
    trailing: {
        marginLeft: 16,
    },
});