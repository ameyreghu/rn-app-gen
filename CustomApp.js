import { Text, View } from "react-native";
import { DynamicScreen } from "./src/DynamicScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { toTitleCase } from './src/utils/stringUtils'; // Import utility function
import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

//CustomApp is where we render the the App after we have access to appConfig .
export function CustomApp({ appConfig }) {
    console.log('CustomApp', appConfig);

    const theme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            ...appConfig?.theme
        },
    };


    const Stack = createStackNavigator();

    function MainNavigator() {
        return (
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName={appConfig.initialRoute}
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: appConfig?.theme?.primary || '#6200ee', 
                            elevation: 4, 
                            shadowColor: '#000',
                            shadowOpacity: 0.2,
                            shadowOffset: { width: 0, height: 2 },
                            shadowRadius: 4, 
                        },
                        headerTintColor: appConfig?.theme?.onPrimary || '#ffffff', 
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 18,
                        },
                    }}
                >
                    {appConfig.routes.map((route, index) => {
                        const screenData = appConfig.screens.find(screen => screen.route.toLowerCase() === route.toLowerCase());
                        return (
                            <Stack.Screen
                                key={index}
                                name={route}
                                options={{ title: toTitleCase(route) }} 
                                children={(props) => <DynamicScreen {...props} screenData={screenData} />}
                            />
                        );
                    })}
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
    return (
        <PaperProvider theme={theme}>
            <MainNavigator />
        </PaperProvider>

    );
}




