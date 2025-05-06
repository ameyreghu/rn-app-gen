import React from 'react';
import { BottomNavigation } from 'react-native-paper';

export function BottomNavigationBar({ pages, onPageChange, icons }) {
    const [index, setIndex] = React.useState(0);

    const routes = pages.map((page, idx) => ({
        key: page,
        title: page,
        icon: icons[idx],
    }));

    const handleIndexChange = (newIndex) => {
        setIndex(newIndex);
        if (onPageChange) {
            onPageChange(newIndex);
        }
    };

    const renderScene = BottomNavigation.SceneMap(
        pages.reduce((scenes, page) => {
            scenes[page] = () => null; // Replace with actual components for each page
            return scenes;
        }, {})
    );

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={handleIndexChange}
            renderScene={renderScene}
        />
    );
}