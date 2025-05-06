import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export function CustomBottomNavigationBar({ bottomNavigation, onPageChange }) {
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handlePress = (index) => {
        setSelectedIndex(index);
        if (onPageChange) {
            onPageChange(index);
        }
    };

    return (
        <View style={styles.container}>
            {bottomNavigation.map((item, index) => (
                <TouchableOpacity
                    key={item.label}
                    style={[
                        styles.tab,
                        selectedIndex === index && styles.selectedTab
                    ]}
                    onPress={() => handlePress(index)}
                >
                    <Icon name={item.icon} size={24} color={selectedIndex === index ? '#007BFF' : '#333'} />
                    <Text style={styles.tabText}>{item.label}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    },
    tab: {
        alignItems: 'center',
        padding: 10,
    },
    selectedTab: {
        borderBottomWidth: 2,
        borderBottomColor: '#007BFF',
    },
    tabText: {
        fontSize: 12,
        color: '#333',
    },
});